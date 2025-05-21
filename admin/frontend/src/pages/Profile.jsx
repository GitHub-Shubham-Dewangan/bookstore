import React, { useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader/Loader";

const Profile = () => {
  const [profile, setProfile] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/get-user-information",
        { headers },
      );
      setProfile(response.data);
    };
    fetch();
  }, []);

  if (!profile) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-zinc-900 text-white">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 px-2 md:px-12 flex flex-row h-screen gap-4 text-white">
      <div className="w-full md:w-1/6 h-full">
        <Sidebar data={profile} />
      </div>
      <div className="w-full md:w-5/6 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
