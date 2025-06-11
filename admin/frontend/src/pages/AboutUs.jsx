import React from "react";
import { FaUsers, FaCode, FaUniversity } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="max-w-3xl w-full bg-zinc-800 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400 flex items-center justify-center gap-2">
            <FaUsers />
            About Us
          </h1>
          <p className="mt-2 text-zinc-400 text-sm md:text-base">
            A team of three aspiring developers working together on a college project.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-xl p-5 hover:ring-2 hover:ring-blue-500 transition-all duration-300">
            <h2 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2">
              <FaUniversity />
              Our Mission
            </h2>
            <p className="text-zinc-400">
              This website is developed as part of our academic project with the goal of building
              a fully functional and user-friendly book platform. We aimed to implement real-world
              features using modern web technologies.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 hover:ring-2 hover:ring-purple-500 transition-all duration-300">
            <h2 className="text-xl font-semibold text-purple-300 mb-2 flex items-center gap-2">
              <FaCode />
              Technologies Used
            </h2>
            <ul className="list-disc list-inside text-zinc-400 space-y-1">
              <li>Frontend: React.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: MongoDB</li>
              <li>Auth: JWT (JSON Web Tokens)</li>
              <li>State Management: Redux</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-xl p-5 hover:ring-2 hover:ring-indigo-500 transition-all duration-300">
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">
              Our Team
            </h2>
            <p className="text-zinc-400">
              We are three Computer Science students collaborating on this project:
            </p>
            <ul className="mt-2 space-y-1 text-zinc-300 list-disc list-inside">
              <li>Shubham Dewangan – Full Stack Developer</li>
              <li>Ankita Diwan – Backend & API Integration</li>
              <li>Palak Sooryavanshi – Frontend & UI/UX Design</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-zinc-500 text-sm">
          Thank you for visiting our website!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
