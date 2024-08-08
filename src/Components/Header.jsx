import React, { useState } from "react";
import { Hamburger } from "../index";
import { HashLink } from "react-router-hash-link";
export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleClick = () => {
    setOpenNav(!openNav);
    console.log(openNav);
  };
  return (
    <header className={`h-20  bg-bg1`}>
      <div className="container max-w-7xl mx-auto h-full p-4 font-primary  text-primary  md:flex justify-center items-center">
        <nav className={`navigation md:block md:w-auto`}>
          <Hamburger openNav={openNav} handleClick={handleClick} />
          <ul
            className={`navitems z-10 text-lg absolute  left-0 w-full flex flex-col overflow-hidden md:p-0 p-8 pb-4 ${
              openNav
                ? "h-72 top-0 bg-primary text-bg1"
                : "h-0 top-0  -translate-y-96"
            } md:transform-none md:overflow-visible md:top-10 md:flex md:flex-row items-center justify-center transition-all duration-[1s] ease-out`}
          >
            <li
              onClick={() => {
                setOpenNav(false);
              }}
              className={`nav-item p-2 md:p-3  font-semibold cursor-pointer`}
            >
              <HashLink to="/" className="block">
                Home
              </HashLink>
            </li>
            <li
              onClick={() => {
                setOpenNav(false);
              }}
              className={`nav-item p-2 md:p-3  font-semibold cursor-pointer`}
            >
              <HashLink to="/#about" className="block">
                About me
              </HashLink>
            </li>
            <li
              onClick={() => {
                setOpenNav(false);
              }}
              className={`nav-item p-2 md:p-3  font-semibold cursor-pointer`}
            >
              <HashLink to="/#services" className="block">
                Services
              </HashLink>
            </li>
            <li
              onClick={() => {
                setOpenNav(false);
              }}
              className={`nav-item p-2 md:p-3  font-semibold cursor-pointer`}
            >
              <HashLink to="/#portfolio" className="block">
                Portfolio
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
