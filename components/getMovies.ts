async function fetchFromTmdb(url: URL, cacheTime?: number) {
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };
  const res = await fetch(url.toString(), options);
  const data = await res.json();

  return data;
}

export async function getPopularMovie() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTmdb(url);
  return data.results;
}
export async function getPopularTv() {
  const url = new URL("https://api.themoviedb.org/3/tv/popular");
  const data = await fetchFromTmdb(url);
  return data.results;
}
export async function getTrendingMovie() {
  const url = new URL("https://api.themoviedb.org/3/trending/movie/day");
  const data = await fetchFromTmdb(url);
  return data.results;
}
export async function getDiscoverMovie() {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  const data = await fetchFromTmdb(url);
  return data.results;
}
export async function getDiscoverTV() {
  const url = new URL("https://api.themoviedb.org/3/discover/tv");
  const data = await fetchFromTmdb(url);
  return data.results;
}
export async function getTopMovie() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTmdb(url);
  return data.results;
}
export async function getTopTV() {
  const url = new URL("https://api.themoviedb.org/3/tv/top_rated");
  const data = await fetchFromTmdb(url);
  return data.results;
}
export async function getUpcomingMovie() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTmdb(url);
  return data.results;
}
export async function getUpcomingTV() {
  const url = new URL("https://api.themoviedb.org/3/tv/on_the_air");
  const data = await fetchFromTmdb(url);
  return data.results;
}

export async function getMovieDetails(type: string, movie_id: number) {
  const url = new URL(`https://api.themoviedb.org/3/${type}/${movie_id}`);
  const data = await fetchFromTmdb(url);
  return data;
}

export const getImagePath = (fullSize?: boolean) => {
  return `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/`;
};
