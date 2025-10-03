import React from "react";
import Img from "../assets/img6.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { ImWhatsapp } from "react-icons/im";
import Slider from "./Slider";
import Projet from "./Projet";
import Description1 from "./Description1";
import Footer from "./Footer";

export default function Home() {
  return (
    <section className=" ">

      {/* premième partie Description */}

      <div className='bg-gradient-to-tl from-white to-slate-200 lg:h-[450px] h-[410px] "'>
        <div className="max-w-7xl m-auto flex lg:flex-row flex-col">
          <div className="flex-1 lg:px-20 px-5 lg:py-10 py-4 font-bold">
            <motion.h1
              initial={{ opacity: 0, y: -45 }}
              whileInView={{ opacity: 1, y: 3 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="lg:text-4xl text-2xl py-3"
            >
              Créez votre première <br />{" "}
              <span className="text-orange-500"> carte virtuelle </span> plus{" "}
              <br /> Rapide🚀
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 3 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }} className="lg:pb-2 pb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              odio adipisci! Accusantium, fuga. Dicta in sequi cum amet.
              Veritatis, qui.
            </motion.p>

            <div className="flex items-center gap-2">
              <ImWhatsapp className="text-lg text-slate-900 " /> Mission de
              Développement de Processus
            </div>
            <div className="flex items-center gap-2">
              <ImWhatsapp className="text-lg text-slate-900 " /> Mission de
              Développement de Processus
            </div>
            <div className="flex items-center gap-2">
              <ImWhatsapp className="text-lg text-slate-900 " /> Mission de
              Développement de Processus
            </div>
            <div className="flex items-center gap-2">
              <ImWhatsapp className="text-lg text-slate-900 " /> Mission de
              Développement de Processus
            </div>

            <div className="flex gap-3 lg:py-4 py-3 cursor-pointer font-semibold">
              <motion.div
                      initial={{ opacity: 0, x: -45 }}
                      whileInView={{ opacity: 1, x: 3 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: false }} className="bg-orange-400 hover:bg-orange-500 lg:px-3 px-2 py-1 lg:w-[220px] w-[210px] rounded-xl text-white">
                <Link to="/savoirPlus">Savoir plus sur Ghennysoft</Link>
              </motion.div>

              <motion.div
                      initial={{ opacity: 0, x: 45 }}
                      whileInView={{ opacity: 1, x: 3 }}
                      transition={{ duration: 0.9 }}
                className="hover:bg-orange-500 border border-1 border-orange-500 px-3 py-1 lg:w-[130px] w-[130px] rounded-xl 
                text-orange-500 hover:text-white hover:duration-1000 "
              >
                <Link to="/savoirPlus">se connecter</Link>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 lg:block hidden">
            <div className="py-5"v >
              <img src={Img} alt="" className=" w-[450px] lg:h-[400px] " />
            </div>
          </div>
        </div>
      </div>

      {/* deuxième partie slider */}

      <Slider />

      {/* troisième partie projet */}

      <Projet />

      {/* troisième partie projet */}

      <Description1 />

      {/* troisième partie projet */}

      <Footer />
    </section>
  );
}
