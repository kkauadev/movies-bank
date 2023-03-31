import { useParams } from "react-router-dom";

import { Container } from "../../components/sections/container";
import { AsideBox } from "../../components/small/aside-box";
import { useApi } from "../../core/hooks/api-get";
import { Movie } from "../../core/types";
import { apiKey, baseURL, baseURLImg, languageURL } from "../../core/urls";
import { Loading } from "../loading";

export const OneMoviePage = () => {
  const { id } = useParams();

  const { isLoading, isSuccess, data } = useApi<Movie>(
    ["movie", 123],
    `${baseURL}movie/${id}?api_key=${apiKey}${languageURL}`
  );

  const releaseDate = () => {
    const dates = data?.release_date?.split("-");
    if (dates) {
      return `${dates[2]}/${dates[1]}/${dates[0]}`;
    }
  };

  const view = (value: string) =>
    !data?.poster_path || (!data?.backdrop_path && value);

  const asideContent = [
    {
      data: data?.original_title,
      title: "Título original",
    },
    {
      data:
        data?.revenue &&
        data.revenue.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      title: "Orçamento",
    },
    {
      data: `${data?.runtime} minutos`,
      title: "Tempo de filme",
    },
    {
      data:
        data?.revenue &&
        data.revenue.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }),
      title: "Receita",
    },
  ];

  return (
    <Container className="py-10">
      {isLoading && <Loading size={20} />}
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
                alt={`Pano de fundo do filme ${data.title}`}
                loading="lazy"
              />
            )}
            <div
              className={`w-4/5 flex flex-col lg:flex-row relative lg:gap-24 text-black ${
                data.backdrop_path &&
                "lg:absolute lg:top-[300px] 2xl:top-[400px] text-white"
              }   }`}
            >
              {data.poster_path && (
                <img
                  className={`rounded  lg:w-[50%] xl:w-[40%] 2xl:w-[350px]`}
                  src={`${baseURLImg}${data.poster_path}`}
                  alt={`Poster do filme ${data.title}`}
                  loading="lazy"
                />
              )}
              <div
                className={`py-10 flex flex-col text-black ${
                  data.backdrop_path && "lg:text-white"
                }`}
              >
                <main>
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
                      <span
                        className={`p-2 border-solid border-black border rounded-md ${
                          data.backdrop_path && "lg:border-white"
                        }`}
                      >
                        +18
                      </span>
                    )}
                    <span className="my-auto text-md">{releaseDate()}</span>
                  </div>
                  <ul className="flex flex-wrap gap-5 mb-5">
                    {data.genres?.map((genre) => {
                      return (
                        <li
                          className={`border border-solid border-black py-2 px-4 rounded-md cursor-default ${
                            data.backdrop_path && "lg:border-white"
                          }`}
                          key={genre.id}
                        >
                          {genre.name}
                        </li>
                      );
                    })}
                  </ul>
                </main>
                <aside>
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
                </aside>
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
                {asideContent.map(({ data, title }) => {
                  return <AsideBox key={title} data={data} title={title} />;
                })}
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
