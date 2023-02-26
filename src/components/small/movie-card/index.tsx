import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  id: string;
  poster_path: string;
  title: string;
}

export const MovieCard = ({ id, poster_path, title }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className="w-[120px] sm:w-[180px] p-1 rounded flex-shrink-0 bg-gray-400"
      key={id}
    >
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
      <h6 className="text-sm sm:text-lg round">{title}</h6>
    </div>
  );
};
