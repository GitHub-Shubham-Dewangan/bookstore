import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation(); // Get current path

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "All Books",
      link: "/all-books",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
      title: "Admin Profile",
      link: "/profile",
    },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  // Adjust links based on login status and role
  const filteredLinks = [...links];
  if (!isLoggedIn) filteredLinks.splice(3, 3);
  else if (role === "user") filteredLinks.splice(5, 1);
  else if (role === "admin") filteredLinks.splice(4, 1);

  const [MobileNav, setMobileNav] = useState("hidden");

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img className="h-10 me-4" src="/images/logo2.png" alt="logo" />
          <h1 className="text-2xl font-semibold">Kitaab Ghar</h1>
        </Link>

        <div className="nav-links-bookheaven block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {filteredLinks.map((item, i) => (
              <div className="flex items-center" key={i}>
                <Link
                  to={item.link}
                  className={`transition-all duration-300 border-b-2 ${
                    isActive(item.link)
                      ? "text-blue-400 border-blue-400"
                      : "border-transparent hover:text-blue-500 hover:border-blue-500"
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>

          {!isLoggedIn && (
            <div className="hidden md:flex gap-4">
              <Link
                to="/LogIn"
                className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                LogIn
              </Link>
              <Link
                to="/SignUp"
                className="px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              >
                SignUp
              </Link>
            </div>
          )}

          <button
            className="block md:hidden text-white text-2xl hover:text-zinc-400"
            onClick={() =>
              setMobileNav(MobileNav === "hidden" ? "block" : "hidden")
            }
          >
            <FaGripLines />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {filteredLinks.map((item, i) => (
          <Link
            to={item.link}
            className={`text-4xl mb-8 font-semibold transition-all duration-300 ${
              isActive(item.link)
                ? "text-blue-400 underline underline-offset-8"
                : "text-white hover:text-blue-500"
            }`}
            key={i}
            onClick={() => setMobileNav("hidden")}
          >
            {item.title}
          </Link>
        ))}

        {!isLoggedIn && (
          <>
            <Link
              to="/LogIn"
              className="px-8 mb-8 text-3xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300"
              onClick={() => setMobileNav("hidden")}
            >
              LogIn
            </Link>
            <Link
              to="/SignUp"
              className="px-8 mb-8 text-3xl font-semibold py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
              onClick={() => setMobileNav("hidden")}
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaGripLines } from "react-icons/fa";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const links = [
//     {
//       title: "Home",
//       link: "/",
//     },
//     {
//       title: "About Us",
//       link: "/about-us",
//     },
//     {
//       title: "All Books",
//       link: "/all-books",
//     },
//     {
//       title: "Cart",
//       link: "/cart",
//     },
//     {
//       title: "Profile",
//       link: "/profile",
//     },
//     {
//       title: "Admin Profile",
//       link: "/profile",
//     },
//   ];

//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
//   const role = useSelector((state) => state.auth.role);
//   if (isLoggedIn === false) {
//     links.splice(3, 3);
//   }

//   if (isLoggedIn == true && role === "user") {
//     links.splice(5, 1);
//   }

//   if (isLoggedIn == true && role === "admin") {
//     links.splice(4, 1);
//   }

//   const [MobileNav, setMobileNav] = useState("hidden");
//   return (
//     <>
//       <nav className="z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
//         <Link to="/" className="flex items-center">
//           <img className="h-10 me-4" src="/images/logo2.png" alt="logo" />
//           <h1 className="text-2xl font-semibold">Kitaab Ghar</h1>
//         </Link>
//         <div className="nav-links-bookheaven block md:flex items-center gap-4">
//           <div className="hidden md:flex gap-4">
//             {links.map((items, i) => (
//               <div className="flex items-center">
//                 {items.title === "Profile" ||
//                 items.title === "Admin Profile" ? (
//                   <Link
//                     to={items.link}
//                     className="hover:text-blue-500 border border-blue-500 transition-all duration-300"
//                     key={i}
//                   >
//                     {items.title}
//                   </Link>
//                 ) : (
//                   <Link
//                     to={items.link}
//                     className="hover:text-blue-500 transition-all duration-300"
//                     key={i}
//                   >
//                     {items.title}{" "}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//           {isLoggedIn === false && (
//             <div className="hidden md:flex gap-4">
//               <Link
//                 to="/LogIn"
//                 className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
//               >
//                 LogIn
//               </Link>
//               <Link
//                 to="/SignUp"
//                 className="px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
//               >
//                 SignUp
//               </Link>
//             </div>
//           )}
//           <button
//             className="block md:hidden text-white text-2xl hover:text-zinc-400"
//             onClick={() =>
//               MobileNav === "hidden"
//                 ? setMobileNav("block")
//                 : setMobileNav("hidden")
//             }
//           >
//             <FaGripLines />
//           </button>
//         </div>
//       </nav>
//       <div
//         className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
//       >
//         {links.map((items, i) => (
//           <Link
//             to={items.link}
//             className={`${MobileNav} text-white text-4xl mb-8 font-semibold hover:text-blue-500 transition-all duration-300`}
//             key={i}
//             onClick={() =>
//               MobileNav === "hidden"
//                 ? setMobileNav("block")
//                 : setMobileNav("hidden")
//             }
//           >
//             {items.title}
//           </Link>
//         ))}

//         {isLoggedIn === false && (
//           <>
//             <Link
//               to="/LogIn"
//               className={`${MobileNav} px-8 mb-8 text-3xl font-semibold py-2 border border-blue-500 rounded text-white hover:bg-white hover:text-zinc-800 transition-all duration-300`}
//             >
//               LogIn
//             </Link>
//             <Link
//               to="/SignUp"
//               className={`${MobileNav} px-8 mb-8 text-3xl font-semibold py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300`}
//             >
//               SignUp
//             </Link>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;
