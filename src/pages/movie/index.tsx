import { useParams } from "react-router-dom";
import { useApi } from "../../core/helpers/getResponse";
import { Container } from "../../components/sections/container";
import { AsideBox } from "../../components/small/aside-box";
import { Movie } from "../../core/types";
import { apiKey, baseURL, baseURLImg, languageURL } from "../../core/urls";

export const OneMoviePage = () => {
  const { id } = useParams();

  const { isSuccess, data } = useApi<Movie>(
    `${baseURL}movie/${id}?api_key=${apiKey}${languageURL}`
  );

  const releaseDate = () => {
    const dates = data?.release_date?.split("-");
    if (dates) {
      return `${dates[2]}/${dates[1]}/${dates[0]}`;
    }
  };

  const view = (value: string) => {
    if (!data?.poster_path || !data?.backdrop_path) {
      return value;
    }
  };

  return (
    <Container className="py-10">
      {isSuccess && (
        <>
          <section
            className={`flex flex-col items-center relative lg:pb-[100px] text-white ${view(
              "lg:pb-0"
            )} `}
          >
            {data.backdrop_path && (
              <img
                className="brightness-[25%] rounded-lg w-[100%] hidden lg:block"
                src={`${baseURLImg}${data.backdrop_path}`}
                alt=""
              />
            )}
            <div
              className={`w-4/5 flex flex-col lg:flex-row lg:absolute lg:top-[300px] 2xl:top-[400px] lg:gap-24 ${view(
                "lg:relative lg:top-0 2xl:top-0"
              )} }`}
            >
              {data.poster_path && (
                <img
                  className={`rounded  lg:w-[50%] xl:w-[40%] 2xl:w-[350px]`}
                  src={`${baseURLImg}${data.poster_path}`}
                  alt=""
                />
              )}
              <div
                className={`py-10 flex flex-col text-black lg:text-white ${view(
                  "lg:text-black"
                )}`}
              >
                <div className="flex text-4xl gap-2">
                  <h2 className="mb-3">
                    {data.title}{" "}
                    <span className="whitespace-nowrap">
                      - {data.release_date?.split("-")[0]}
                    </span>
                  </h2>
                </div>
                {data.status != "Released" && (
                  <span className="mb-4">{data.status}</span>
                )}
                <div className="mb-10 flex gap-3">
                  {data.adult && (
                    <span className="p-2 border-solid border-black lg:border-white border rounded-md">
                      +18
                    </span>
                  )}
                  <span className="my-auto text-md">{releaseDate()}</span>
                </div>
                <ul className="flex flex-wrap gap-5 mb-5">
                  {data.genres?.map((genre) => {
                    return (
                      <li
                        className="border border-solid border-black lg:border-white py-2 px-4 rounded-md cursor-default"
                        key={genre.id}
                      >
                        {genre.name}
                      </li>
                    );
                  })}
                </ul>
                <span className="mb-5">{data.tagline}</span>
                {data.homepage && (
                  <span className="mb-5">
                    <a
                      className="underline underline-offset-2"
                      href={data.homepage}
                      target="_blank"
                    >
                      Clique aqui
                    </a>{" "}
                    para ir para a página do filme
                  </span>
                )}
                {data.vote_average && data.vote_average != 0 && (
                  <span>
                    Avaliação dos fans no TMDB: {data.vote_average.toFixed(1)}
                  </span>
                )}
              </div>
            </div>
          </section>
          <section className="flex flex-col sm:flex-row sm:gap-20 sm:py-10 px-5 lg:px-24">
            <main className="sm:w-2/3">
              {data.overview && (
                <div className="mb-5 sm:mb-10">
                  <h5 className="text-3xl mb-1">Sinopse</h5>
                  <p>{data.overview}</p>
                </div>
              )}
              {data.vote_average && (
                <div className="mb-5 sm:mb-10">
                  <h5 className="text-3xl mb-1">Avaliações TMDB</h5>
                  <div>
                    <p>Notas: {data.vote_average}</p>
                    <p>Números de votos: {data.vote_count}</p>
                  </div>
                </div>
              )}
            </main>
            <aside className="flex flex-col gap-5">
              <ul className="flex flex-col gap-2">
                <AsideBox title="Título original" data={data.original_title} />
                {data.budget && (
                  <AsideBox
                    title="Orçamento"
                    data={data.budget.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  />
                )}
                {data.revenue && (
                  <AsideBox
                    title="Receita"
                    data={data.revenue.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  />
                )}
                <AsideBox
                  title="Tempo de filme"
                  data={`${data.runtime} minutos`}
                />
              </ul>
              {data.production_companies &&
                data.production_companies.length != 0 && (
                  <div>
                    <h6 className="text-lg font-bold">
                      Empresas que produziram
                    </h6>
                    <ul>
                      {data.production_companies.map((company) => (
                        <li key={company.name}>{company.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
            </aside>
          </section>
        </>
      )}
    </Container>
  );
};
