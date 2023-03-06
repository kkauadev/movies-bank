import { Link } from "react-router-dom";

interface MovieCardProps {
  id: string;
  poster_path: string;
  title: string;
}

export const MovieCard = ({ id, poster_path, title }: MovieCardProps) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="cursor-pointer flex flex-col w-[120px] sm:w-[180px] p-1 rounded flex-shrink-0 bg-gray-400"
      key={id}
    >
      {poster_path === null ? (
        <div className="rounded bg-gray-400 brightness-50 h-[80%] flex justify-center items-center">
          Sem imagem
        </div>
      ) : (
        <img
          className="rounded"
          alt={`poster do filme ${title}`}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        />
      )}
      <h6 className="text-sm sm:text-lg round">{title}</h6>
    </Link>
  );
};
