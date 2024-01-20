"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

export function CarouselPlugin({ data }: { data: Movie }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((movie: Movie) => (
          <CarouselItem key={movie.id}>
            <div className="relative ">
              <Card>
                <CardContent className="flex h-[80vh] items-center justify-center p-0 m-0">
                  <div
                    style={{
                      backgroundImage:
                        "url(" +
                        `https://image.tmdb.org/t/p/original${movie.backdrop_path}` +
                        ")",
                      width: "100%",
                      height: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className=""
                  >
                    <div className="absolute text-white z-10 top-auto bottom-24 left-4 max-w-2xl px-5 md:px-10">
                      <h3 className="mb-2.5 font-medium text-4xl">
                        <Link
                          href={`/movie/${movie.id}`}
                          title={movie.original_title || movie.title}
                        >
                          {movie.original_title || movie.title}
                        </Link>
                      </h3>
                      <div className="text-[1em]">
                        <div className="mb-1 inline-block mr-4">
                          <span className="py-1 px-3 relative text-xs font-normal bg-green-600 rounded-3xl text-black">
                            HD
                          </span>
                        </div>
                        <div className="mb-1 inline-block mr-4">
                          Duration:
                          <strong>105min</strong>
                        </div>
                        <div className="mb-1 inline-block mr-4">
                          IMDB: <strong>{movie.vote_average}</strong>
                        </div>
                        <div className="mb-1 inline-block mr-4">
                          Genre:
                          <strong>
                            <a
                              href="/genre/adventure"
                              title="Adventure"
                              className="slide-genre-item"
                            >
                              Adventure
                            </a>
                            ,
                            <a
                              href="/genre/mystery"
                              title="Mystery"
                              className="slide-genre-item"
                            >
                              Mystery
                            </a>
                            ,
                            <a
                              href="/genre/science-fiction"
                              title="Science Fiction"
                              className="slide-genre-item"
                            >
                              Science Fiction
                            </a>
                            ,
                            <a
                              href="/genre/fantasy"
                              title="Fantasy"
                              className="slide-genre-item"
                            >
                              Fantasy
                            </a>
                            ,
                            <a
                              href="/genre/action"
                              title="Action"
                              className="text-white"
                            >
                              Action
                            </a>
                          </strong>
                        </div>
                        <div className="clearfix"></div>
                      </div>
                      <p className="text-sm text-gray-400 font-normal mb-6 overflow-hidden">
                        {movie.overview}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
