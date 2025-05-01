import React from "react";

const Hero = () => {
  return (
    <div className="h-[75vh] flex">
      <div className="w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
          Where Every Page Begins a New Adventure
        </h1>
        <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
          Discover a world of books at KitaabGhar. From fresh releases to
          timeless reads, we bring books that spark curiosity, fuel passion, and
          stay with you long after the last page.
        </p>
        <div className="mt-8">
          <button className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full">
            Discover Books
          </button>
        </div>
      </div>
      <div className="w-3/6"></div>
    </div>
  );
};

export default Hero;
