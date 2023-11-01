import { motion } from "framer-motion";
import "./style.css";

function Button(props) {
  const { text } = props;

  return (
    <motion.button
      className="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
}

export default Button;
