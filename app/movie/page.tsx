import ShowCard from "@/components/ShowCard";
import { getDiscoverMovie } from "@/components/getMovies";
import React from "react";

const page = async () => {
  const movies = await getDiscoverMovie();
  return (
    <div className="">
      <h1 className="font-semibold text-4xl mx-5 my-10">Movies</h1>
      <ShowCard movies={movies} mediaType={"movie"} />
    </div>
  );
};

export default page;
