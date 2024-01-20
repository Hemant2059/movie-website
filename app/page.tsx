import { CarouselPlugin } from "@/components/CarouselPlugin";
import ShowMoTV from "@/components/ShowMoTV";
import {
  getPopularMovie,
  getPopularTv,
  getTopMovie,
  getTopTV,
  getTrendingMovie,
  getUpcomingMovie,
  getUpcomingTV,
} from "@/components/getMovies";

type Props = {
  Trending: Movie;
  Moviedata: Movie;
  Tvdata: Movie;
  TopMovie: Movie;
  TopTV: Movie;
  UpcomingMovie: Movie;
  UpcomingTV: Movie;
};

export default async function Home() {
  const Trending = await getTrendingMovie();
  const Moviedata = await getPopularMovie();
  const Tvdata = await getPopularTv();
  const TopMovie = await getTopMovie();
  const TopTV = await getTopTV();
  const UpcomingMovie = await getUpcomingMovie();
  const UpcomingTV = await getUpcomingTV();
  return (
    <main className="">
      <CarouselPlugin data={Trending} />
      <ShowMoTV movie={Moviedata} tv={Tvdata} title={"Trending"} />
      <ShowMoTV movie={TopMovie} tv={TopTV} title={"Top Rated"} />
      <ShowMoTV movie={UpcomingMovie} tv={UpcomingTV} title={"Upcoming"} />
    </main>
  );
}
