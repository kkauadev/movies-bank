import { ListMovieCard } from "../../components/small/list-movie-card";
import { Container } from "../../components/sections/container";
import { useApi } from "../../core/helpers/getResponse";
import { MovieList } from "../../core/types";
import { apiKey, baseURL, languageURL } from "../../core/urls";

export const Home = () => {
  const popularData = useApi<MovieList>(
    `${baseURL}movie/popular?api_key=${apiKey}${languageURL}&page=1`
  );
  const topRatedData = useApi<MovieList>(
    `${baseURL}movie/top_rated?api_key=${apiKey}${languageURL}`
  );
  const upcomingData = useApi<MovieList>(
    `${baseURL}movie/upcoming?api_key=${apiKey}${languageURL}`
  );
  const nowPlayingData = useApi<MovieList>(
    `${baseURL}movie/now_playing?api_key=${apiKey}${languageURL}`
  );
  return (
    <Container>
      {popularData.isSuccess && (
        <ListMovieCard
          pageTitle="Popular"
          movieList={popularData.data.results}
        />
      )}
      {topRatedData.isSuccess && (
        <ListMovieCard
          pageTitle="Maiores notas"
          movieList={topRatedData.data.results}
        />
      )}
      {upcomingData.isSuccess && (
        <ListMovieCard
          pageTitle="Em breve"
          movieList={upcomingData.data.results}
        />
      )}
      {nowPlayingData.isSuccess && (
        <ListMovieCard
          pageTitle="Agora"
          movieList={nowPlayingData.data.results}
        />
      )}
    </Container>
  );
};
