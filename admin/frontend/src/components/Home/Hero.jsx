import React from "react";

const Home = () => {
  return (
    <div className="h-[75vh] flex">
      <div className="w-3/6 flex-col">
        <h1 className="text-6xl font-semibold text-yellow-100">
          Where Every Page Begins a New Adventure
        </h1>
        <p className="mt-4 text-xl text-zinc-300">
          Discover a world of books at KitaabGhar. From fresh releases to
          timeless reads, we bring books that spark curiosity, fuel passion, and
          stay with you long after the last page.
        </p>
        <div mt-8>
          <button className="text-yellow-100 text-2xl font-semibold border border-yellow-100 px-10 py-2 hover:bg-zinc-800 rounded-full">
            Discover Books
          </button>
        </div>
      </div>
      <div className="w-3/6"></div>
    </div>
  );
};

export default Home;
