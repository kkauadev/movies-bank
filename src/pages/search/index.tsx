import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container } from "../../components/sections/container";
import { MovieCard } from "../../components/small/movie-card";
import { useApi } from "../../core/hooks/api-get";
import { MovieList } from "../../core/types";
import { apiKey, baseURL, languageURL } from "../../core/urls";

export const SearchPage = () => {
  const { value } = useParams();
  const { isError, isSuccess, data, refetch } = useApi<MovieList>(
    ["searched-movie", 456],
    `${baseURL}search/movie?api_key=${apiKey}${languageURL}&page=1&query=${value}`
  );

  useEffect(() => {
    refetch();
  }, [value]);

  return (
    <Container className="pb-10">
      {isSuccess && (
        <>
          <h2 className="text-2xl mb-10">Você pesquisou por: {value}</h2>
          <section className="flex flex-wrap gap-x-2 sm:gap-x-4 gap-y-3 sm:gap-y-10 justify-center">
            {data.results.map((movie) => {
              return (
                <MovieCard
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                  key={movie.id}
                />
              );
            })}
          </section>
        </>
      )}
      {isError ||
        (data?.results.length == 0 && (
          <h2 className="text-2xl">Não existe nenhum filme com esse título</h2>
        ))}
    </Container>
  );
};
