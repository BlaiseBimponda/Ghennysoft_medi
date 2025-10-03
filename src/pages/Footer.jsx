import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import img from '../assets/logo2.jpg'

export default function Footer() {
  return (
    <div className="lg:h-[560px] h-[230px] bg-black">
      {/* première partie */}
      <div className="lg:block hidden lg:h-[250px] h-[220px] bg-zinc-900">
        <div className="">
          <h1 className="lg:text-3xl text-2xl lg:text-center text-orange-400 lg:pt-7 pt-3 py-2 lg:px-0 px-6 lg:letter2 letter">
            Elec Coach+
          </h1>
          <p className="lg:text-center lg:px-0 px-6 text-white lg:text-xl text-lg ">
            Vous satifaire est notre priorité dans tout vos services priorité{" "}
            <br /> dans tout vos services priorité dans tout vos services
            priorité dans tout vos service
          </p>
        </div>

        {/* boutton */}

        <div className="">
          <div className="flex justify-center gap-3 cursor-pointer pt-6">
            <div className="">
              <div
                className="py-1.5 px-2.5 bg-orange-400 lg:w-[130px] 
                w-[140px] rounded-lg text-white text-lg hover:bg-orange-500 hover:duration-700 font-semibold "
              >
                <Link> se connecter </Link>
              </div>
            </div>

            <div className="">
              <div
                className="py-1.5 px-2.5 hover:bg-orange-500 border border-1 border-orange-400 text-center lg:w-[130px] 
              w-[140px] rounded-lg text-white hover:text-white hover:duration-700 font-semibold"
              >
                <Link> se connecter </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* deuxière partie */}

      <div className="lg:h-[300px] h-[741px] bg-black">
        <div className="flex lg:flex-row flex-col text-white py-10">
          {/* sous première partie */}

          <div>
            <div className="flex flex-col lg:px-10 px-5">
              <h1 className="lg:text-xl lg:py-3 py-4 text-lg letter font-serif text-orange-400 flex items-center gap-2">
                
                <img src={img} alt="logo" className="w-[30px] h-[20px]  " />
                Ghennysoft
              </h1>
              <p className="py-3">
                Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
                Aut, non.
              </p>

              {/* ligne */}
              <div className="lg:border-none border-b py-1 px-4"></div>

              <div className="py-5 flex flex-row lg:gap-2 gap-4 px-2 font-mono">
                <Link
                  to="/"
                  className="flex gap-2 items-center cursor-pointer border border-slate-400 py-1 px-1 rounded hover:bg-orange-500"
                >
                  {" "}
                  <FaFacebookF className="text-xl text-white " />
                </Link>

                <Link
                  to="/"
                  className="flex gap-2 items-center cursor-pointer border border-slate-400 py-1 px-1 rounded hover:bg-orange-500"
                >
                  {" "}
                  <ImWhatsapp className="text-xl text-white " />
                </Link>

                <Link
                  to="/"
                  className="flex gap-2 items-center cursor-pointer border border-slate-400 py-1 px-1 rounded hover:bg-orange-500"
                >
                  {" "}
                  <IoLogoInstagram className="text-xl text-white " />
                </Link>

                <Link
                  to="/"
                  className="flex gap-2 items-center cursor-pointer border border-slate-400 py-1 px-1 rounded hover:bg-orange-500"
                >
                  {" "}
                  <IoLogoInstagram className="text-xl text-white " />
                </Link>
              </div>
            </div>
          </div>

          {/* sous deuxième partie */}

          <div>
            <div className="lg:flex lg:flex-row grid grid-cols-2 lg:gap-6 gap-4 lg:px-24 px-5">
              {/* nos services */}

              <div className="flex flex-col">
                <h1 className="lg:text-xl lg:py-3 py-4 text-lg letter font-serif">
                  Nos Services
                </h1>
                <div className="px-1 flex flex-col gap-2 font-mono">
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Réalisation
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Supervisionn
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Conseil
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="lg:text-xl lg:py-3 py-4 text-lg letter font-serif">
                  Nos Services
                </h1>
                <div className="px-1 flex flex-col gap-2 font-mono">
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Réalisation
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Supervisionn
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Conseil
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="lg:text-xl lg:py-3 py-4 text-lg letter font-serif">
                  Nos Services
                </h1>
                <div className="px-1 flex flex-col gap-2 font-mono">
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Réalisation
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Supervisionn
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Conseil
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="lg:text-xl lg:py-3 py-4 text-lg letter font-serif">
                  Nos Services
                </h1>
                <div className="px-1 flex flex-col gap-2 font-mono">
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Réalisation
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Supervisionn
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Conseil
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <h1 className="lg:text-xl lg:py-3 py-4 text-lg letter font-serif">
                  Nos Services
                </h1>
                <div className="px-1 flex flex-col gap-2 font-mono">
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Réalisation
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Supervisionn
                  </p>
                  <p className="flex gap-1 items-center cursor-pointer text-sm">
                    Conseil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row lg:gap-44 gap-5 text-white ">
          {/* <div className="flex lg:py-10 py-5">
              <div className="flex flex-col">
                <h1 className="lg:text-xl text-lg letter font-serif">
                  Nos bureaux
                </h1>
                <div className="py-3 flex flex-col gap-2 font-mono">
                  <p><span className="text-orange-400">14</span> avenue de la paix /Gombe </p>
                  <p><span className="text-orange-400">14</span> avenue de la paix /Gombe </p>
                  <p><span className="text-orange-400">14</span> avenue de la paix /Gombe </p>
                </div>
              </div>
          </div> */}
        </div>

        {/* <h1 className="text-white text-center text-xl py-3">
          eleccoach<span className="text-orange-300">+@</span>gmail.com
        </h1> */}
      </div>
    </div>
  );
}
