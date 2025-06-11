// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaArrowRightFromBracket } from "react-icons/fa6";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../../store/auth";

// const Sidebar = ({ data }) => {
//   const dispatch = useDispatch();
//   const history = useNavigate();
//   const role = useSelector((state) => state.auth.role);

//   return (
//     <div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-auto lg:h-full">
//       <div className="flex items-center flex-col justify-center">
//         <img
//           src={data.avatar}
//           alt="User Avatar"
//           className="h-[12vh] rounded-full"
//         />
//         <p className="mt-3 text-xl text-zinc-100 font-semibold">
//           {data.username}
//         </p>
//         <p className="mt-1 text-sm text-zinc-300">{data.email}</p>
//         <div className="w-full mt-4 h-[1px] bg-zinc-500 hidden lg:block"></div>
//       </div>

//       {role === "user" && (
//         <div className="w-full flex-col items-center justify-center hidden lg:flex">
//           <Link
//             to="/profile"
//             className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
//           >
//             Favourites
//           </Link>
//           <Link
//             to="/profile/orderHistory"
//             className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300"
//           >
//             Order History
//           </Link>
//           <Link
//             to="/profile/settings"
//             className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300"
//           >
//             Settings
//           </Link>
//         </div>
//       )}

//       {role === "admin" && (
//         <div className="w-full flex-col items-center justify-center hidden lg:flex">
//           <Link
//             to="/profile"
//             className="text-zinc-100 font-semibold w-full py-2 text-center hover:bg-zinc-900 rounded transition-all duration-300"
//           >
//             All Orders
//           </Link>
//           <Link
//             to="/profile/add-book"
//             className="text-zinc-100 font-semibold w-full py-2 mt-4 text-center hover:bg-zinc-900 rounded transition-all duration-300"
//           >
//             Add Book
//           </Link>
//         </div>
//       )}

//       <button
//         className="bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center py-2 rounded hover:bg-white hover:text-zinc-900 transition-all duration-300"
//         onClick={() => {
//           dispatch(authActions.logout());
//           dispatch(authActions.changeRole("user"));
//           localStorage.clear("id");
//           localStorage.clear("token");
//           localStorage.clear("role");
//           history("/");
//         }}
//       >
//         Log Out <FaArrowRightFromBracket className="ms-4" />
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const Sidebar = ({ data }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const role = useSelector((state) => state.auth.role);

  const navLinks = {
    user: [
      { to: "/profile", label: "Favourites" },
      { to: "/profile/orderHistory", label: "Order History" },
      { to: "/profile/settings", label: "Settings" },
    ],
    admin: [
      { to: "/profile", label: "All Orders" },
      { to: "/profile/add-book", label: "Add Book" },
    ],
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    dispatch(authActions.changeRole("user"));
    localStorage.clear("id");
    localStorage.clear("token");
    localStorage.clear("role");
    history("/");
  };

  return (
    <div className="bg-zinc-800 p-6 rounded-xl shadow-lg flex flex-col items-center lg:items-stretch h-auto lg:h-full">
      {/* User Info */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={data.avatar}
          alt="User Avatar"
          className="h-[12vh] w-[12vh] rounded-full object-cover border-4 border-zinc-700 shadow-md"
        />
        <p className="mt-3 text-xl text-white font-bold">{data.username}</p>
        <p className="mt-1 text-sm text-zinc-400">{data.email}</p>
        <div className="w-full mt-5 border-t border-zinc-600 hidden lg:block"></div>
      </div>

      {/* Nav Links */}
      <div className="w-full flex-col items-center justify-center hidden lg:flex mb-6">
        {(role === "user" ? navLinks.user : navLinks.admin).map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            className="text-white font-medium w-full text-center py-2 rounded-lg hover:bg-zinc-700 hover:text-blue-400 transition-all duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full mt-2 bg-red-600 hover:bg-red-500 text-white font-semibold flex items-center justify-center gap-2 py-2 rounded-lg transition-all duration-300"
      >
        <FaArrowRightFromBracket className="text-lg" />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;

