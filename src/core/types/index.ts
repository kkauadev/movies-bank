export interface MovieItem {
  poster_path: string;
  title: string;
  id: string;
}

export interface Movie {
  adult: boolean;
  id: number;
  title: string;
  release_date: string;
  backdrop_path: string | null;
  poster_path: string | null;
  genres: {
    id: number;
    name: string;
  }[];
  runtime: number;
  tagline: string;
  overview: string;
  vote_count: number;
  homepage: string | null;
  revenue: number | null;
  status: string;
  popularity: number;
  vote_average: number | null;
  original_title: string;
  budget: number | null;
  production_companies: { name: string }[] | undefined;
}

export interface MovieList {
  id: number;
  results: MovieItem[];
}
