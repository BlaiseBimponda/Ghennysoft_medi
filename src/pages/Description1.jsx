import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa6";

import Img from "../assets/projet2.jpg";
import Img1 from "../assets/image8.jpg";

export default function Description1() {
  return (
    <div className="lg:py-10 py-[20px] lg:pb-0 pb-[630px] ">
      {/* section 1 */}

      <div className="max-w-7xl m-auto lg:h-[500px] h-[1010px] bg-slate-100">
        <motion.h1
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 3 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="lg:pt-10 pt-5 lg:text-4xl text-xl text-center font-semibold"
        >
          La Seule Carte Dont Vous Avez Besoin Pour Tous Vos Paiements
        </motion.h1>

        <div className="flex lg:flex-row flex-col gap-6 text-center lg:py-14 py-10 px-20">
          <div>
            <FaArrowUpShortWide className="text-5xl text-blue-500 mx-auto" />
            <h3 className="text-xl font-bold mt-4">Rechargeable avec Crypto</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae voluptates reiciendis eligendi assumenda officiis
              voluptas obcaecati nihil velit beatae natus.
            </p>
          </div>

          <div>
            <FaDownload className="text-5xl text-green-500 mx-auto" />
            <h3 className="text-xl font-bold mt-4">Contrôlez vos dépenses</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
              tempore! Nam culpa, necessitatibus eligendi in sit vitae iusto
              consequatur incidunt.
            </p>
          </div>

          <div>
            <FaRegCommentDots className="text-5xl text-purple-500 mx-auto" />
            <h3 className="text-xl font-bold mt-4">Payez vos publicités</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium magnam perferendis nostrum dolores in odit labore
              dolore deserunt. Tempore, quasi.
            </p>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-center lg:px-0 px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          adipisicing elit. Cumque, possimus!
        </h1>
      </div>

      {/* section 2 */}

      <div className="bg-black h-[250px] text-white">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -45 }}
            whileInView={{ opacity: 1, y: 3 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className=" text-center lg:text-3xl text-2xl pt-8"
          >
            Pas de Conneries, Pas de perte <br />
            <span className="text-orange-500">
              De temps! juste vous Et{" "}
            </span>{" "}
            <br />
            votre Argent
          </motion.h1>
          <p className="text-center lg:py-5 py-3 text-sm px-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing <br /> elit. Cum
            sit provident, eveniet molestiae amet impedit quam molestiae amet
            impedit quam.
          </p>
        </div>
      </div>

      {/* section 3 */}

      <div className="pt-5">
        <div className="lg:pl-[560px] pl-[139px] ">
          <div
            className=" hover:bg-orange-500 border border-1 border-orange-500 text-center lg:w-[130px] 
            w-[130px] rounded-xl text-orange-500 hover:text-white hover:duration-700 "
          >
            <Link to="/savoirPlus">se connecter</Link>
          </div>
        </div>

        <h1 className=" text-center lg:text-3xl text-xl lg:pt-3 pt-5 font-bold">
          Pas de Conneries, juste vous Et votre Argent
        </h1>

        <p className="text-center py-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eius
          facilis exercitationem odit atque! Quas harum voluptas ullam quibusdam
          harum voluptas ullam quibusdam cum!
        </p>
      </div>

      {/* section 4 */}

      {/* <div className="grid grid-cols-2 flex-wrap h-[500px] gap-4 ">
        <div className=" h-[350px] w-[500px] bg-slate-800 ">
          dfdf
        </div>
        <div className=" h-[350px] w-[500px] bg-slate-200 ">
          dfdf
        </div>
        <div className=" h-[350px] w-[500px] bg-slate-100 ">
          fdfdf
        </div>
        <div className=" h-[350px] w-[500px] bg-slate-500 ">
          dfgdf
        </div>
      </div> */}

      {/* section 5 */}

      <div className="lg:pt-10 pt-5">
        <div className="lg:h-[420px] h-[790px] bg-slate-50 ">
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 lg:px-20 px-6 h-[420px]">
              <motion.h1
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 3 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                className="text-3xl py-3"
              >
                Payer Avec la carte <br /> Fyatu, Rapidement Et <br />{" "}
                Facilement
              </motion.h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                ea id minus quam quae aspernatur? Facilis repudiandae
                accusantium explicabo itaque consequatur voluptatem, natus
                nesciunt!
              </p>

              <motion.div
                initial={{ opacity: 0, y: -45 }}
                whileInView={{ opacity: 1, y: 3 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                className="flex flex-col pt-8"
              >
                <div className="flex gap-2">
                  <FaDownload className="text-lg text-slate-900" />
                  Avec votre carte de fidelité
                </div>
                <div className="flex gap-2">
                  <FaDownload className="text-lg text-slate-900" />
                  Avec votre carte de fidelité
                </div>
                <div className="flex gap-2">
                  <FaDownload className="text-lg text-slate-900" />
                  Avec votre carte de fidelité
                </div>
              </motion.div>

              <div className="pt-4">
                <div
                  className="py-1.5 px-2.5 bg-orange-400 lg:w-[210px] 
                  w-[210px] rounded-lg text-white text-lg hover:bg-orange-500 hover:duration-700 font-bold "
                >
                  <Link> se connecter fidelité </Link>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center h-[420px]">
                <img src={Img} alt="projet2" className="w-[410px] h-[350px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}

      <div className="h-[450px]">
        <motion.h1
          initial={{ opacity: 0, y: -45 }}
          whileInView={{ opacity: 1, y: 3 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="lg:text-3xl text-2xl lg:pl-20 pl-6 pt-4 font-semibold"
        >
          Voyez Ce Qu'il Disent de Nous
        </motion.h1>

        <div className="flex justify-between lg:px-20 px-6 pt-4">
          <h2 className="">Lorem ipsum dolor sit.</h2>

          <div className="flex gap-2">
            <FaDownload className="text-lg text-slate-900" />
            <FaDownload className="text-lg text-slate-900" />
          </div>
        </div>

        {/* la gride du liste */}

        <div className="flex lg:flex-row flex-col gap-4 pt-8 lg:px-20 px-6 font-semibold">
          <div className="flex flex-col lg:w-[380px] w-[364px] lg:h-[310px] h-[300px] py-3 bg-slate-50 rounded">
            <div className="flex justify-between px-5">
              <FaDownload className="text-lg text-green-400" />
              <div>
                <FaDownload className="text-lg text-slate-900" />
              </div>
            </div>

            <h2 className="py-5 text-xl px-5">Services rapide d'aide</h2>

            <p className="px-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              at, dolorem mollitia culpa tenetur cumque accusamus qui quaerat
              totam asperiores itaque, corporis
            </p>

            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 3 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="flex items-center gap-3 px-5 py-4"
            >
              <img src={Img1} alt="" className="w-[30px] h-[35px] rounded" />
              <div className="">
                <p className="text-orange-500 ">Bimponda blaise</p>
                <p>developpeur</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col lg:w-[380px] w-[364px] lg:h-[310px] h-[300px] py-3 bg-slate-50 rounded">
            <div className="flex justify-between px-5">
              <FaDownload className="text-lg text-green-400" />
              <div>
                <FaDownload className="text-lg text-slate-900" />
              </div>
            </div>

            <h2 className="py-5 text-xl px-5">Services rapide d'aide</h2>

            <p className="px-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              at, dolorem mollitia culpa tenetur cumque accusamus qui quaerat
              totam asperiores itaque, corporis
            </p>

            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 3 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="flex items-center gap-3 px-5 py-4"
            >
              <img src={Img1} alt="" className="w-[30px] h-[35px] rounded" />
              <div className="">
                <p className="text-orange-500 ">Bimponda blaise</p>
                <p>developpeur</p>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col lg:w-[380px] w-[364px] lg:h-[310px] h-[300px] py-3 bg-slate-50 rounded">
            <div className="flex justify-between px-5">
              <FaDownload className="text-lg text-green-400" />
              <div>
                <FaDownload className="text-lg text-slate-900" />
              </div>
            </div>

            <h2 className="py-5 text-xl px-5">Services rapide d'aide</h2>

            <p className="px-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              at, dolorem mollitia culpa tenetur cumque accusamus qui quaerat
              totam asperiores itaque, corporis
            </p>

            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 3 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="flex items-center gap-3 px-5 py-4"
            >
              <img src={Img1} alt="" className="w-[30px] h-[35px] rounded" />
              <div className="">
                <p className="text-orange-500 ">Bimponda blaise</p>
                <p>developpeur</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
