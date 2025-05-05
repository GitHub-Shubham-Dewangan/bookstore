import React from "react";
import {Link} from "react-router-dom";

const BookCard = ({ data }) => {
    console.log(data);
  return (
  <>
  <Link>
  <div className="bg-zinc-800 rounded p-4">
    <div className="bg-zinc-900 rounded flex items-center justify-center">
      <img src={data.url} alt="/" className="h-[20vh]"/>
    </div>
  </div>
  </Link>
  </>
  );
};

export default BookCard;
