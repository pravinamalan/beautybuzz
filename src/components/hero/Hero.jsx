import React from "react";
import heroImg from "../../assets/hero.png";
import "./hero.css";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className="container hero-container">
      <div className="left-side h-sides">
        <span className="text-1">skin protectin cream</span>
        <div className="text-2">
          <span>Trendy Collection</span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Recusandae, inventore.
          </span>
        </div>
      </div>
      {/* blue circle */}
      <div className="center wrapper">
        <motion.div
          initial={{ bottom: "3rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className="blue-circle"
        ></motion.div>
        {/* img animation */}
        <motion.img
          initial={{ bottom: "-2.5rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          src={heroImg}
          alt="heroImg"
          width={600}
        />
        {/* cart div animation */}
        <motion.div
          initial={{ right: "-32%" }}
          whileInView={{ right: "-14%" }}
          transition={transition}
          className="cart2"
        >
          <RiShoppingBagFill className="bag-fill" />
          <div className="signup">
            <span>Best Signup offeres</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="right-side h-sides">
        <div className="traffic">
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className="customers">
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
