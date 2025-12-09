"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  { src: "/images/sliderf.jpg" },
  { src: "/images/gallery.jpg" },
  { src: "/images/recentact2.jpg" },
];

export default function PremiumCurtainSlider() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(autoSlide);
  }, [index]);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
      
      {/* Glow Light */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>

      {/* CURRENT IMAGE with SCALE */}
      <motion.div
        key={index}
        initial={{ clipPath: "inset(0 40% 0 40%)", filter: "blur(15px)", scale: 1.2 }}
        animate={{ clipPath: "inset(0 0% 0 0%)", filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={slides[index].src}
          alt="slide"
          fill
          priority
          className="object-cover brightness-90"
        />
      </motion.div>

      {/* CURTAIN BLUR GLASS EFFECT */}
      <motion.div
        key={"curtain-" + prevIndex}
        initial={{ width: "100%", opacity: 1 }}
        animate={{ width: "0%", opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 z-20 overflow-hidden"
      >
        <div className="absolute inset-0 backdrop-blur-3xl saturate-150">
          <Image
            src={slides[prevIndex].src}
            alt="prev"
            fill
            className="object-cover opacity-90"
          />
        </div>

        {/* Glass Shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-20 mix-blend-overlay"></div>
      </motion.div>

      {/* Fade Mask Gradient Top & Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none"></div>

      {/* Premium Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-30">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => { setPrevIndex(index); setIndex(i); }}
            whileHover={{ scale: 1.3 }}
            className={`h-2 w-6 rounded-full cursor-pointer transition-all backdrop-blur-md ${
              index === i ? "bg-white shadow-[0_0_10px_white]" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
