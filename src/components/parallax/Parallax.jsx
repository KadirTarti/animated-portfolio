import {motion, useScroll, useTransform} from "framer-motion";
import "./parallax.scss";
import { useRef } from "react";

const Parallax = ({type}) => {
  

    const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const yText = useTransform(scrollYProgress, [0,1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0,1], ['0%', '100%']);



    return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #030820, #292E49)"
            : "linear-gradient(180deg, #292E49, #030820)",
      }}
    >
      <motion.h1 style={{y: yText}}>{type === "services" ? "What i do?" : "What i did?"} </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y: yBg}} className="planets"></motion.div>
      <motion.div style={{x: yBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
