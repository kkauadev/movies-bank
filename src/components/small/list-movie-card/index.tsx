import ScrollContainer from "react-indiana-drag-scroll";
import { MovieItem } from "../../../core/types";
import { MovieCard } from "../movie-card";

export interface ListMovieCardProps {
  pageTitle: string;
  movieList: MovieItem[];
}

export const ListMovieCard = ({ pageTitle, movieList }: ListMovieCardProps) => {
  return (
    <div className="mb-5">
      <h2 className="mx-2 mb-1 text-3xl">{pageTitle}</h2>
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
    </div>
  );
};
