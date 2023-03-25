import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import SliderComponent from "./components/slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";
import Virtual from "./components/virtual/Virtual";
import React, { useState, useEffect } from "react";
import Loader from "./components/Preloader";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    // Simulate a delay in loading the UI for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App container-fluid overflow-hidden">
      <motion.div className="progress-bar" style={{ scaleX }} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Hero />
          <SliderComponent />
          <Virtual />
          <Products />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
