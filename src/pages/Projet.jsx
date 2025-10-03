import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/projet1.jpg";

export default function Projet() {
  return (
    <div className="max-w-7xl m-auto lg:h-[750px] h-[430px] ">
      <motion.h1
        initial={{ opacity: 0, x: -45 }}
        whileInView={{ opacity: 1, x: 3 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        className="text-center lg:text-4xl text-2xl pt-5"
      >
        Habiliter Ton Confidentialité <br /> Avec
        <span className="text-orange-500 italic"> Virtuel Carte</span>
      </motion.h1>
      <p className="text-center py-5 px-3 font-semibold">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
        expedita laborum consequatur quos, optio hic soluta
      </p>
      <div className="flex justify-center">
        <div className="border-8 px-1 py-1 rounded-3xl">
          <img
            src={Img1}
            alt=""
            className="lg:w-[950px] w-[350px] lg:h-[500px] h-[200px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
