import { getImagePath, getMovieDetails } from "@/components/getMovies";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const data: tvDetail = await getMovieDetails("tv", params.id);
  const imgUrl = getImagePath();
  const imgPath = data.poster_path || data.backdrop_path;
  return (
    <div className="py-10 bg-blue-200">
      <div className="container mx-auto md:flex gap-10 ">
        <div>
          <Image
            src={`${imgUrl}${imgPath}`}
            alt="Picture of the author"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100%, auto"
            // layout="responsive"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-3xl md:text-4xl my-3">
            {data.original_name}
          </h1>
          <div className="font-semibold">
            <span>{data.first_air_date}</span>
            <span className="mx-2 font-extrabold">.</span>
            <span>
              {data.genres?.map((item) => {
                return <span key={item.id}>{item.name},</span>;
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
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="font-bold text-lg mt-4">Seasons</h1>
        <div className="flex gap-2 flex-wrap">
          {data.seasons.map((item) => {
            return (
              <div
                className="rounded-lg overflow-hidden shadow-lg h-auto md:w-[200px]  "
                key={item.id}
              >
                <Image
                  src={`${imgUrl}${item.poster_path}`}
                  width={200}
                  height={100}
                  alt={item.name}
                  sizes="(max-width: 768px) 100%, auto"
                  layout="responsive"
                />
                <div className="p-4">
                  <h3 className="text-sm md:text-md font-semibold py-1">
                    {item.name}
                  </h3>
                  <h3 className="text-xs md:text-sm font-semibold py-1">
                    Episodes : {item.episode_count}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
