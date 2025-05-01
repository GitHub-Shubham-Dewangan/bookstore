import React from "react";

const Navbar = () => {
    const links = [
        {
            title:"Home",
            link:"/",
        },
        {
            title:"About Us",
            link:"/about-us",
        },
        {
            title:"All Books",
            link:"/all-books",
        },
        {
            title:"Cart",
            link:"/cart",
        },
        {
            title:"Profile",
            link:"/profile",
        },
    ];

    return (
    <div className="flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
    <div className="flex items-center">
        <img
            className="h-10 me-4"
            src="/images/logo2.png"
            alt="logo"
        />
        <h1 className="text-2xl font-semibold">Kitaab Ghar</h1>
    </div>
    <div className="nav-links-bookheaven">
        <div className="flex gap-4">
        {links.map((items, i) => (
            <div className="hover:text-blue-500 transition-all duration-300" key={i}>{items.title}</div>
        ))}
        </div>
        <div></div>
    </div>
    </div>
    );
};

export default Navbar;