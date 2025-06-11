import React, { useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

const AddBook = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const submit = async () => {
    try {
      const { url, title, author, price, desc, language } = Data;
      if (!url || !title || !author || !price || !desc || !language) {
        alert("All fields are required");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/v1/add-book",
        Data,
        { headers }
      );

      alert(response.data.message);

      setData({
        url: "",
        title: "",
        author: "",
        price: "",
        desc: "",
        language: "",
      });
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to add book.");
    }
  };

  return (
    <div className="min-h-[100vh] bg-zinc-900 text-white p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-zinc-200 mb-10 text-center">
        Add a New Book
      </h1>

      <div className="max-w-3xl mx-auto bg-zinc-800 shadow-xl rounded-xl p-6 md:p-10 space-y-6">
        {/* Image URL */}
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Image URL</label>
          <input
            type="text"
            name="url"
            placeholder="https://example.com/book.jpg"
            value={Data.url}
            onChange={change}
            className="w-full px-4 py-2 bg-zinc-900 rounded border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Book Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={Data.title}
            onChange={change}
            className="w-full px-4 py-2 bg-zinc-900 rounded border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Author name"
            value={Data.author}
            onChange={change}
            className="w-full px-4 py-2 bg-zinc-900 rounded border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Language & Price */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm text-zinc-400 mb-1">Language</label>
            <input
              type="text"
              name="language"
              placeholder="e.g., English"
              value={Data.language}
              onChange={change}
              className="w-full px-4 py-2 bg-zinc-900 rounded border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm text-zinc-400 mb-1">Price (₹)</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={Data.price}
              onChange={change}
              className="w-full px-4 py-2 bg-zinc-900 rounded border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Description</label>
          <textarea
            name="desc"
            rows="4"
            placeholder="Brief description of the book"
            value={Data.desc}
            onChange={change}
            className="w-full px-4 py-2 bg-zinc-900 rounded border border-zinc-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          onClick={submit}
          className="w-full flex items-center justify-center gap-2 py-3 mt-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300"
        >
          <FaPlus /> Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
