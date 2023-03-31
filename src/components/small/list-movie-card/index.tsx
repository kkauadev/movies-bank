import ScrollContainer from "react-indiana-drag-scroll";
import { MovieItem } from "../../../core/types";
import { MovieCard } from "../movie-card";
import { useState } from "react";

export interface ListMovieCardProps {
  pageTitle: string;
  movieList?: MovieItem[];
}

export const ListMovieCard = ({ pageTitle, movieList }: ListMovieCardProps) => {
  const [showMovies, setShowMovies] = useState(false);

  return (
    <section className="mb-5">
      <h2 className="mx-2 mb-1 text-3xl">{pageTitle}</h2>
      <button
        className="width-[400px] bg-neutral-600 text-white
        px-4 py-2 rounded mb-2"
        onClick={() => setShowMovies((prev) => !prev)}
      >
        {showMovies ? "Ocultar" : "Mostrar os filmes"}
      </button>
      {showMovies && (
        <ScrollContainer className="scroll-container pb-4 gap-2 flex overflow-x-auto scrollbar-thumb-gray-600 scrollbar-track-white scrollbar-thin scrollbar-custom">
          {movieList &&
            movieList.map((movie) => {
              return (
                <MovieCard
                  id={movie.id}
                  poster_path={movie.poster_path}
                  title={movie.title}
                  key={movie.id}
                />
              );
            })}
        </ScrollContainer>
      )}
    </section>
  );
};
