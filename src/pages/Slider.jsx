import React from "react";
// importation logo
import { LiaPaypal } from "react-icons/lia";
import { SiShopify } from "react-icons/si";
import { BsMeta } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import { SiNetflix } from "react-icons/si";

import { motion } from "framer-motion";

export default function Slider() {
  return (
    <div className="max-w-7xl m-auto">
      <motion.h1
        initial={{ opacity: 0, y: -45 }}
        whileInView={{ opacity: 1, y: 3 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        className="text-center text-lg lg:pt-8 pt-3 font-bold"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, illo.
      </motion.h1>
      <div className="flex lg:flex-row flex-wrap lg:gap-10 gap-4 py-8 lg:px-48 px-3">
        <div className="text-2xl flex items-center gap-1">
          {" "}
          <LiaPaypal className="text-3xl" /> PayPal
        </div>
        <div className="text-2xl flex items-center gap-1">
          <BsMeta className="text-3xl" /> Meta
        </div>
        <div className="text-2xl flex items-center gap-1">
          {" "}
          <BsGoogle className="text-3xl" /> Google
        </div>
        <div className="text-2xl flex items-center gap-1">
          <IoLogoTiktok className="text-3xl" /> Tiktok
        </div>
        <div className="text-2xl flex items-center gap-1">
          <SiNetflix className="text-3xl" /> NETFLIX
        </div>
        <div className="text-2xl flex items-center gap-1">Amazone</div>
      </div>
    </div>
  );
}
