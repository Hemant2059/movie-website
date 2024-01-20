import React, { useState } from "react";
import { Button } from "./ui/button";
import ShowCard from "./ShowCard";
type Props = {
  movie: Movie;
  tv: Movie;
  title: string;
};

const ShowMoTV = ({ movie, tv, title }: Props) => {
  return (
    <div>
      <div className="flex m-5 md:m-10 justify-between my-10">
        <h1 className="font-semibold text-2xl md:text-4xl md:mx-5">{title}</h1>
        <div>
          <Button className="mx-5" variant="outline">
            Movies
          </Button>
          <Button className="">TV Shows</Button>
        </div>
      </div>

      <ShowCard movies={movie} mediaType="movie" />

      <ShowCard movies={tv} mediaType="TV" />
    </div>
  );
};

export default ShowMoTV;
