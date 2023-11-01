import { motion } from "framer-motion";
import Button from "@/components/button";
import "./style.css";

function Hero(props) {
  const { heroImage } = props;

  // Define motion variants for the text animations
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section className="hero">
      <div className="hero_left">
        <motion.span
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="hero_left_launching"
        >
          Launching soon
        </motion.span>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="hero_left-heading"
        >
          An NFT like no other
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={textVariants}>
          Don’t miss out on the release of our new NFT. Sign up below to receive
          updates when we go live.
        </motion.p>
        <Button className="hero_left_button" text="Sign Up" />
      </div>
      <div className="hero_right">
        <div className="hero_right-image-wrap">
          <img className="hero_right_image" src={heroImage} alt="hero image" />
          <div className="hero_right-image-shadow"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
