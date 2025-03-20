import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 w-full ">
      <a href="#">
        <h1 className="font-bold text-3xl">Code&Coffee</h1>
      </a>
      <nav>
        <ul className="flex justify-between items-center w-80">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Join
      </button>
    </div>
  );
};

export default Navbar;
