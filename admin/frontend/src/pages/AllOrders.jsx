import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import { FaCheck, FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import SeeUserData from "./SeeUserData";

const AllOrders = () => {
  const [AllOrders, setAllOrders] = useState([]);
  const [Options, setOptions] = useState(-1);
  const [statuses, setStatuses] = useState({});
  const [userDiv, setuserDiv] = useState("hidden");
  const [userDivData, setuserDivData] = useState();

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/get-all-orders", {
        headers,
      });
      setAllOrders(response.data.data || []);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const change = (e, index) => {
    const { value } = e.target;
    setStatuses((prev) => ({ ...prev, [index]: value }));
  };

  const submitChanges = async (index) => {
    const id = AllOrders[index]._id;
    const status = statuses[index];

    if (!status) return alert("Please select a status.");

    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/update-status/${id}`,
        { status },
        { headers }
      );
      alert(response.data.message);

      // Optionally: update status locally instead of refetching
      setAllOrders((prev) =>
        prev.map((order, i) =>
          i === index ? { ...order, status: status } : order
        )
      );

      // Close dropdown
      setOptions(-1);
    } catch (error) {
      console.error("Failed to update status", error);
      alert("Failed to update status.");
    }
  };

  const ordersToDisplay = AllOrders.slice(0, -1);

  return (
    <>
      {AllOrders.length === 0 ? (
        <div className="h-[100%] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            All Orders
          </h1>

          {/* Header Row */}
          <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
            <div className="w-[3%] text-center">Sr.</div>
            <div className="w-[40%] md:w-[22%]">Books</div>
            <div className="w-0 md:w-[45%] hidden md:block">Description</div>
            <div className="w-[17%] md:w-[9%]">Price</div>
            <div className="w-[30%] md:w-[16%]">Status</div>
            <div className="w-[10%] md:w-[5%]">
              <FaUserLarge />
            </div>
          </div>

          {/* Order Rows */}
          {ordersToDisplay.map((items, i) => (
            <div
              key={items._id}
              className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer transition-all duration-300"
            >
              <div className="w-[3%] text-center">{i + 1}</div>

              <div className="w-[40%] md:w-[22%]">
                <Link
                  to={`/view-book-details/${items.book._id}`}
                  className="hover:text-blue-300"
                >
                  {items.book.title}
                </Link>
              </div>

              <div className="w-0 md:w-[45%] hidden md:block">
                {items.book.desc.slice(0, 50)} ...
              </div>

              <div className="w-[17%] md:w-[9%]">₹ {items.book.price}</div>

              <div className="w-[30%] md:w-[16%] font-semibold">
                <button
                  className="hover:scale-105 transition-all duration-300"
                  onClick={() => setOptions(i)}
                >
                  {items.status === "Order placed" ? (
                    <div className="text-yellow-500">{items.status}</div>
                  ) : items.status === "Canceled" ? (
                    <div className="text-red-500">{items.status}</div>
                  ) : (
                    <div className="text-green-500">{items.status}</div>
                  )}
                </button>

                <div className={`${Options === i ? "flex mt-2" : "hidden"}`}>
                  <select
                    className="bg-gray-800 text-white px-2 py-1"
                    onChange={(e) => change(e, i)}
                    value={statuses[i] || items.status}
                  >
                    {[
                      "Order placed",
                      "Out for delivery",
                      "Delivered",
                      "Canceled",
                    ].map((status, idx) => (
                      <option value={status} key={idx}>
                        {status}
                      </option>
                    ))}
                  </select>

                  <button
                    className="text-green-500 hover:text-pink-600 mx-2 text-xl"
                    onClick={() => submitChanges(i)}
                  >
                    <FaCheck />
                  </button>
                </div>
              </div>

              <div className="w-[10%] md:w-[5%]">
                <button
                  className="text-xl hover:text-orange-500"
                  onClick={() => {
                    setuserDiv("fixed");
                    setuserDivData(items.user);
                  }}
                >
                  <IoOpenOutline />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal to show user info */}
      {userDivData && (
        <SeeUserData
          userDivData={userDivData}
          userDiv={userDiv}
          setuserDiv={setuserDiv}
        />
      )}
    </>
  );
};

export default AllOrders;
