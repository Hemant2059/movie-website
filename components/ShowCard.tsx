import React from "react";
import CardDetail from "./CardDetail";
type Props = {
  movies: Movie;
  mediaType: string;
};

const ShowCard = ({ movies, mediaType }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-10 gap-4 px-5">
      {movies.map((movie: Movie) => (
        <CardDetail key={movie.id} movie={movie} mediaType={mediaType} />
      ))}
    </div>
  );
};

export default ShowCard;
