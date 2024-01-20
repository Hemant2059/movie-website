import ShowCard from "@/components/ShowCard";
import { getDiscoverTV } from "@/components/getMovies";
import React from "react";

const page = async () => {
  const TV = await getDiscoverTV();
  return (
    <div className="">
      <h1 className="font-semibold text-4xl mx-5 my-10">TV Shows</h1>
      <ShowCard movies={TV} mediaType={"TV"} />
    </div>
  );
};

export default page;
