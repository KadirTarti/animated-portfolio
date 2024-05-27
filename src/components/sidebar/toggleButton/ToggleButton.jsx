import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((e) => !e)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variant={{ 
            closed: { d: "M 2 2.5 L 20 2.5" }, 
            open: {d: "M 3 16.5 L 17 2.5"},
           }}
        />
        <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variant={{ closed: { d: "M 2 2.5 L 20 2.5" },  open: {d: "M 3 16.5 L 17 2.5"}, }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
