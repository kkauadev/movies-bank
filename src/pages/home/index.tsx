import { ListMovieCard } from "../../components/small/list-movie-card";
import { Container } from "../../components/sections/container";
import { MovieList } from "../../core/types";
import { apiKey, baseURL, languageURL } from "../../core/urls";
import { useManyApi } from "../../core/hooks/api-get";

export const Home = () => {
  const [popularData, topRatedData, upcomingData, nowPlayingData] =
    useManyApi<MovieList>([
      {
        key: "popular",
        url: `${baseURL}movie/popular?api_key=${apiKey}${languageURL}&page=1`,
      },
      {
        key: "top-rated",
        url: `${baseURL}movie/top_rated?api_key=${apiKey}${languageURL}`,
      },
      {
        key: "upcoming",
        url: `${baseURL}movie/upcoming?api_key=${apiKey}${languageURL}`,
      },
      {
        key: "now-playing",
        url: `${baseURL}movie/now_playing?api_key=${apiKey}${languageURL}`,
      },
    ]);

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
