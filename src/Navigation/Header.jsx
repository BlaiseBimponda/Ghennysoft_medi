import React, { useState } from "react";
// importation Link pour la navigation
import { Link } from "react-router-dom";
import Img1 from "../assets/logo2.jpg";
// importation icons
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaAccusoft } from "react-icons/fa";

import { ImWhatsapp } from "react-icons/im";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="max-w-6xl m-auto">
      <nav className="flex justify-between items-center lg:py-3 py-3 lg:px- px-2 ">
        <div>
          <Link to="/">
            <h1 className="lg:text-2xl tex-lg font-bold font-serif text-red-600 letter1 flex items-center">
              <img
                src={Img1}
                alt="image du logo"
                className="lg:w-[60px] w-[50px] lg:h-[40px] h-[40px]"
              />
              GhennySoft
            </h1>
          </Link>
        </div>

        <ul className="md:flex hidden gap-5 text-lg font-normal">
          <Link
            to="/"
            className="text-lg text-slate-600 font-semibold font-serif0
                hover:text-orange-400 hover:duration-500 rounded-lg py-1 px-2 cursor-pointer "
          >
           <li> Accueil </li>
          </Link>

          <Link
            to="/apropos"
            className="text-lg text-slate-600 font-semibold font-serif
                hover:text-orange-400 hover:duration-500 rounded-lg py-1 px-2 cursor-pointer "
          >
            <li> A propos </li>
          </Link>

          <Link
            to="/services"
            className="text-lg text-slate-600 font-semibold font-serif
                hover:text-orange-400 hover:duration-500 rounded-lg py-1 px-2 cursor-pointer "
          >
             <li> Services </li>
          </Link>

          <Link
            to="/contact"
            className="text-lg text-slate-600 font-semibold font-serif
                hover:text-orange-400 hover:duration-500 rounded-lg py-1 px-2 cursor-pointer "
          >
            <li> Contact </li>
          </Link>
        </ul>

        {/* buton se connecter */}

        <div
          className="bg-orange-500 hover:bg-white hover:text-orange-700 hover:font-semibold 
             hover:border duration-1000 px-3 py-1 rounded-xl text-white text-center lg:w-[130px] w-[70px] cursor-pointer"
        >
          <Link> SignUp </Link>
        </div>

        {/* nos icons pour activer ou désactiver */}

        <span
          className={`${
            isActive ? "hidden" : "block"
          } lg:hidden cursor-pointer`}
          onClick={() => setIsActive(true)}
        >
          <IoMdMenu className="text-3xl text-slate-400" />
        </span>

        <span
          className={`${
            isActive ? "block" : "hidden"
          } lg:hidden cursor-pointer`}
          onClick={() => setIsActive(false)}
        >
          <MdClose className="text-3xl text-slate-400" />
        </span>
      </nav>

      {isActive && (
        <ul className="md:flex lg:gap-3 gap-2 h-[165px] rounded-b-lg lg:px-0 px-8 font-normal">
          <Link
            to="/"
            className="text-lg text-slate-900 font-semibold font-serif  hover:text-slate-800
                hover:transition hover:duration-500 rounded-lg py-1 px-2 cursor-pointer flex items-center gap-1"
          >
            <ImWhatsapp className="text-xl text-slate-900 " /> <li> Home </li>
          </Link>

          <Link
            to="/"
            className="text-lg text-slate-900 font-semibold font-serif hover:text-slate-800
                hover:transition hover:duration-500 rounded-lg py-1 px-2 cursor-pointer flex items-center gap-1"
          >
            <ImWhatsapp className="text-xl text-slate-900 " /> <li> Home </li>
          </Link>

          <Link
            to="/"
            className="text-lg text-slate-900 font-semibold font-serif hover:text-slate-800
                hover:transition hover:duration-500 rounded-lg py-1 px-2 cursor-pointer flex items-center gap-1"
          >
            <ImWhatsapp className="text-xl text-slate-900 " /> <li> Home </li>
          </Link>

          <Link
            to="/"
            className="text-lg text-slate-900 font-semibold font-serif hover:text-slate-800
                hover:transition hover:duration-500 rounded-lg py-1 px-2 cursor-pointer flex items-center gap-1"
          >
            <ImWhatsapp className="text-xl texslate-900 " /> <li> Home </li>
          </Link>
          
        </ul>
      )}
    </div>
  );
}
