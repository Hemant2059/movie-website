import React from "react";
import { getImagePath } from "./getMovies";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
type Props = {
  movie: Movie;
  mediaType: string;
};

const CardDetail = async ({ movie, mediaType }: Props) => {
  const imgPath = movie.poster_path || movie.backdrop_path;
  const img = getImagePath();
  const href = mediaType == "movie" ? "/movie/" : "/tv/";
  return (
    imgPath && (
      <Link
        href={`${href}${movie.id}`}
        className="relative rounded-lg overflow-hidden shadow-lg w-full h-auto"
      >
        <Image
          className="w-full h-64 object-fit"
          src={`${img}${imgPath}`}
          alt={movie.name}
          width={200}
          height={200}
        />
        <div className="p-4">
          <h3 className="text-md font-semibold py-1">
            {movie.title ||
              movie.original_title ||
              movie.name ||
              movie.original_name}
          </h3>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-500 text-sm">2023</span>
              <span className="px-1">.</span>
              <span className="text-gray-500 text-sm">100m</span>
            </div>
            <Button variant={"outline"} className="px-2">
              {mediaType}
            </Button>
          </div>
        </div>
      </Link>
    )
  );
};

export default CardDetail;
