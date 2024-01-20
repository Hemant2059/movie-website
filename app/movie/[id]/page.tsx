import { getImagePath, getMovieDetails } from "@/components/getMovies";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const data: movieDetail = await getMovieDetails("movie", params.id);
  const imgUrl = getImagePath();
  console.log(imgUrl);
  return (
    <div className="py-10 bg-blue-200">
      <div className="container mx-auto flex gap-10 ">
        <Image
          src={`${imgUrl}${data.poster_path}`}
          width={300}
          height={200}
          alt="Picture of the author"
        />
        <div className="flex-1">
          <h1 className="font-bold text-4xl my-3">{data.original_title}</h1>
          <div className="font-semibold">
            <span>{data.release_date}</span>
            <span className="mx-2 font-extrabold">.</span>
            <span>
              {data.genres.map((item) => {
                return <span>{item.name},</span>;
              })}
            </span>
          </div>
          <div>
            <span>
              <span className="font-bold">Rating : </span>
              <span>{data.vote_average}</span>
            </span>

            <span className="mx-5">
              <span className="font-bold">Language : </span>
              <span>{data.original_language}</span>
            </span>
          </div>
          <div className="font-light text-gray-700 mt-4">{data.tagline}</div>
          <div>
            <h3 className="font-bold text-lg mt-4">Overview</h3>
            <p>{data.overview}</p>
          </div>
          <div className="mt-7">
            <div>
              <span className="font-bold"> Budget : </span>
              <span>${data.budget}</span>
            </div>
            <div>
              <span className="font-bold"> Revenue : </span>
              <span>${data.revenue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
