import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import ModeToggle from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="sticky flex items-center justify-between p-2 md:p-5 shadow-md">
      <div className="flex items-center">
        <div className="font-bold text-lg md:text-4xl mr-2 md:mr-5">MOVIE</div>
        <ul className="flex items-center gap-2 md:gap-5 text-sm md:text-md">
          <li>
            <Link href={"/movie"}>Movie</Link>
          </li>
          <li>
            <Link href={"/tv"}>TV Shows</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 md:flex items-center justify-end ">
        <div className="flex">
          <Input
            type="search"
            placeholder="Search..."
            className=" w-full ml-5"
          />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
