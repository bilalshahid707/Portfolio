import React, { useEffect, useState } from "react";
import { Hamburger } from "../index";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
export const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleClick = () => {
    setOpenNav(!openNav);
    console.log(openNav);
  };

  const navClick = (id) => {
    let section = document.querySelector(id);
    section.scrollIntoView();
  };

  return (
    <header
      className={`h-20  bg-[rgba(10, 25, 47, 0.85)] backdrop-blur-md fixed top-0 z-10 `}
    >
      <div className="container max-w-7xl mx-auto h-full p-4 font-primary  text-white  md:flex justify-center items-center ">
        <nav className={`navigation md:block md:w-auto`}>
          <Hamburger openNav={openNav} handleClick={handleClick} />
          <ul
            className={`navitems z-10 text-md absolute font-secondary font-normal left-0 w-full flex flex-col overflow-hidden md:p-0 p-8 pb-4 ${
              openNav
                ? "h-72 top-0  bg-bg1 text-slate"
                : "h-0 top-0  -translate-y-96"
            } md:transform-none md:overflow-visible md:top-10  md:flex md:flex-row items-center justify-center transition-all duration-[1s] ease-out`}
          >
            <li
              onClick={() => {
                setOpenNav(false);
              }}
              className={`nav-item hover:text-green p-2 md:p-3   cursor-pointer`}
            >
              <a
                className={`block`}
                onClick={() => {
                  navClick("#home");
                }}
              >
                <span className="text-green text-sm">01.</span>Home
              </a>
            </li>
            <li
              onClick={() => {
                setOpenNav(false);
              }}
              className={`nav-item hover:text-green p-2 md:p-3   cursor-pointer`}
            >
              <a
                className={`block `}
                onClick={() => {
                  navClick("#about");
                }}
              >
                <span className="text-green text-sm">02.</span>About me
              </a>
            </li>
            <li
              onClick={() => {
                setOpenNav(false);
              }}
              className={`nav-item hover:text-green p-2 md:p-3   cursor-pointer`}
            >
              <a
                onClick={() => {
                  navClick("#services");
                }}
                className={`block`}
              >
                <span className="text-green text-sm">03.</span>Services
              </a>
            </li>
            <li
              onClick={() => {
                setOpenNav(false);
              }}
              className={`nav-item hover:text-green p-2 md:p-3   cursor-pointer`}
            >
              <a
                onClick={() => {
                  navClick("#portfolio");
                }}
                className={`block`}
              >
                <span className="text-green text-sm">04.</span>Portfolio
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
