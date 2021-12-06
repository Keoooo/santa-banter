import React, { Children } from "react";
import { BsSnow3 } from "react-icons/bs";
import { motion } from "framer-motion";

const snowFlakes = [
  { x: "10%", delay: 0 },
  { x: "20%", delay: 0.3 },
  { x: "30%", delay: 0.2 },
  { x: "40%", delay: 0.4 },
  { x: "50%", delay: 0.2 },
  { x: "60%", delay: 0.1 },
  { x: "70%", delay: 0.2 },
  { x: "80%", delay: 0.2 },
  { x: "90%", delay: 0.8 },
  { x: "15%", delay: 2 },
  { x: "25%", delay: 2.3 },
  { x: "35%", delay: 2.2 },
  { x: "45%", delay: 2.4 },
  { x: "55%", delay: 2.2 },
  { x: "65%", delay: 2.1 },
  { x: "75%", delay: 2.2 },
  { x: "85%", delay: 2.2 },
  { x: "95%", delay: 2.8 },
];
const Snow = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden pointer-events-none ">
      {snowFlakes.map((item) => (
        <motion.div
          className="text-white flex space-x-2"
          initial={{ y: -300, x: item.x }}
          animate={{ y: 500 }}
          transition={{
            repeat: Infinity,
            delay: item.delay,
            repeatDelay: 0,
            duration: 3,
          }}
        >
          <BsSnow3 />
        </motion.div>
      ))}
    </div>
  );
};

export default Snow;
