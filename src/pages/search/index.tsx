import { useParams } from "react-router-dom";
import { Container } from "../../components/sections/container";
import { MovieList } from "../../core/types";
import { MovieCard } from "../../components/small/movie-card";
import { apiKey, baseURL, languageURL } from "../../core/urls";
import { useEffect } from "react";
import { useApi } from "../../core/hooks/api-get";

export const SearchPage = () => {
  const { value } = useParams();
  const { isError, isSuccess, data, refetch } = useApi<MovieList>(
    String(value),
    `${baseURL}search/movie?api_key=${apiKey}${languageURL}&page=1&include_adult=false&query=${value}`
  );
  useEffect(() => {
    refetch();
  }, [value]);

  const errorMessage = () => {
    if (data === undefined) {
      return;
    } else {
      if (isError || data.results?.length == 0) {
        return (
          <h4 className="text-3xl">Não existe nenhum filme com esse título</h4>
        );
      }
    }
  };

  return (
    <Container className="pb-10">
      {isSuccess && (
        <>
          <h4 className="text-2xl mb-10">Você pesquisou por: {value}</h4>
          <div className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-3 sm:gap-y-10 justify-center">
            {data.results &&
              data.results.map((movie) => {
                return (
                  <MovieCard
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    key={movie.id}
                  />
                );
              })}
          </div>
        </>
      )}
      {errorMessage()}
    </Container>
  );
};
