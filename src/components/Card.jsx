import React from "react";
import { GoArrowRight } from "react-icons/go";
import Button from './Button';
import { motion } from "framer-motion";

function Card({width, start, para,hover = "false"})  {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between`}
    >
    {/* <div className={`bg-zinc-800 p-5 rounded-xl ${width} hover:${hover} min-h-[30rem] flex flex-col justify-between`}> */}
      <div>

        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <GoArrowRight />
        </div>
        <h3 className="text-3xl font-medium mt-8">Whatever Heading</h3>
      </div>
      <div className="down w-full ">
        {
            start  && (
                <>
                    <h1 className="text-6xl font-semibold tracking-tight leading-none ">Start a project</h1>
                    <button className="rounded-full py-2 px-6 mt-6 border">Contact Us</button>
                </>
            )
        }
            
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}    
      </div>
    
    </motion.div>
  );
}; 

export default Card;
