import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="bg-gray-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl:">
            <Link to="/">Divyam Dembla</Link>
          </div>
          <div className="text-white font-bold text-xl:">
            <NavLink to="/about" className="m-3">
              About
            </NavLink>
            <NavLink to="/projects" className="m-3">
              Projects
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
