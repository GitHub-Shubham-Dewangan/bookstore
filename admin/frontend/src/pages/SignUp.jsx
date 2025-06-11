import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserPlus } from "react-icons/fa";

const SignUp = () => {
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async () => {
    try {
      const { username, email, password, address } = Values;
      if (!username || !email || !password || !address) {
        alert("All fields are required");
        return;
      }

      const response = await axios.post(
        "http://localhost:3000/api/v1/sign-up",
        Values
      );

      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      alert(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-4">
      <div className="w-full max-w-lg bg-zinc-800 text-white rounded-2xl shadow-xl p-8">
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center text-3xl font-bold text-blue-400">
            <FaUserPlus className="mr-2" />
            Sign Up
          </div>
          <p className="text-sm text-zinc-400 mt-2">
            Create your account to start exploring
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-zinc-400 mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={Values.username}
              onChange={change}
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={Values.email}
              onChange={change}
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={Values.password}
              onChange={change}
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label className="block text-zinc-400 mb-1">Address</label>
            <textarea
              name="address"
              rows="4"
              value={Values.address}
              onChange={change}
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your address"
            ></textarea>
          </div>
        </div>

        <button
          onClick={submit}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-white py-2 rounded-lg font-semibold shadow-md"
        >
          Sign Up
        </button>

        <p className="mt-6 text-center text-zinc-400 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const SignUp = () => {
//   const [Values, setValues] = useState({
//     username: "",
//     email: "",
//     password: "",
//     address: "",
//   });

//   const navigate = useNavigate();

//   const change = (e) => {
//     const { name, value } = e.target;
//     setValues({ ...Values, [name]: value });
//   };

//   const submit = async () => {
//     try {
//       if (
//         Values.username === "" ||
//         Values.email === "" ||
//         Values.password === "" ||
//         Values.address === ""
//       ) {
//         alert("All fields are required");
//       } else {
//         const response = await axios.post(
//           "http://localhost:3000/api/v1/sign-up",
//           Values,
//         );
//         alert(response.data.message);
//         navigate("/LogIn");
//       }
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };

//   return (
//     <div className="h-auto bg-zinc-900 px-12 py-8 flex items-center justify-center">
//       <div className="bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:2-2/6">
//         <p className="text-zinc-200 text-xl">Sign Up</p>
//         <div className="mt-4">
//           <div>
//             <label htmlFor="" className="text-zinc-400">
//               Username
//             </label>
//             <input
//               type="text"
//               className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//               placeholder="Enter Username"
//               name="username"
//               required
//               value={Values.username}
//               onChange={change}
//             />
//           </div>
//           <div className="mt-4">
//             <label htmlFor="" className="text-zinc-400">
//               Email
//             </label>
//             <input
//               type="text"
//               className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//               placeholder="Enter E-Mail"
//               name="email"
//               required
//               value={Values.email}
//               onChange={change}
//             />
//           </div>
//           <div className="mt-4">
//             <label htmlFor="" className="text-zinc-400">
//               Password
//             </label>
//             <input
//               type="password"
//               className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//               placeholder="Enter password"
//               name="password"
//               required
//               value={Values.password}
//               onChange={change}
//             />
//           </div>
//           <div className="mt-4">
//             <label htmlFor="" className="text-zinc-400">
//               Address
//             </label>
//             <textarea
//               className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
//               rows="5"
//               placeholder=" Enter Address"
//               name="address"
//               required
//               value={Values.address}
//               onChange={change}
//             />
//           </div>
//           <div className="mt-4">
//             <button
//               className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
//               onClick={submit}
//             >
//               SignUp
//             </button>
//           </div>
//           <p className="flex mt-4 items-center justify-center text-zinc-200 font-semibold">
//             Or
//           </p>
//           <p className="flex mt-4 items-center justify-center text-zinc-500 font-semibold">
//             Already have an account ? &nbsp;
//             <Link to="/login" className="hover:text-blue-500">
//               <u>LogIn</u>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
