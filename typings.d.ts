type Movie = {
  [x: string]: any;
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

type Collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};
type Genres = {
  id: number;
  name: string;
};
type productCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type languages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type movieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection[];
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: productCompany[];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: languages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
type episode_to_air = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
};

type tvDetail = {
  adult: boolean;
  backdrop_path: string;
  episode_run_time: number;
  first_air_date: string;
  genres: Genres[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: episode_to_air[];
  name: string;
  next_episode_to_air: episode_to_air[];
  networks: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: productCompany[];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  seasons: seasons[];
  spoken_languages: languages[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};
type seasons = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

type Characters = {
  job?: string;
  department?: string;
  credit_id: string;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  order?: number;
};

type Episode = {
  air_date: string;
  episode_number: number;
  episode_type?: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id?: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: Characters[];
  guest_stars: Characters[];
};

type seasonsDetail = {
  _id: string;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  vote_average: number;
};
