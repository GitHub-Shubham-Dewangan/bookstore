import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewBookDetails = () => {
  const { id } = useParams();
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/get-book-by-id/${id}`,
      );
      setData(response.data.data);
    };
    fetch();
  }, []);

  return (
    <div className="px-12 py-8 bg-zinc-900 flex gap-8">
      <div className="bg-zinc-800 rounded p-4 h-[88vh] w-3/6 flex-items-center justify-center">
        <img src={Data.url} alt="/" className="h-[70vh]" />
      </div>
      <div className="p-4 w-3/6"></div>
    </div>
  );
};

export default ViewBookDetails;
