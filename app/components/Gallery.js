"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

export default function GalleryEvents() {
  return (
    <section className="w-full px-4 md:px-16 py-12 bg-white">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-4xl font-serif font-bold mb-5 tracking-wide"
        style={{ color: "#7A0026" }}
      >
        Event Video Showcase
      </motion.h2>

      {/* Crown Divider */}
      <div className="flex justify-center items-center mt-5 gap-3">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
        <FaCrown className="text-[#D8B267] text-xl drop-shadow-md" />
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
      </div>

      {/* Layout */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        
        {/* LEFT SIDE VIDEO CARDS */}
        <div className="space-y-5">
          <GalleryCard 
            video="https://www.youtube.com/embed/bf47EIBV_0I" 
            title="" 
          />
          <GalleryCard 
            video="https://www.youtube.com/embed/sVx2CqKkffc" 
            title="" 
          />
        </div>

        {/* CENTER BIG VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl shadow-md group h-[500px] pt-10"
        >
          <iframe
            src="https://www.youtube.com/embed/1W-k7Leo0jI"
            className="w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Flash Effect */}
          <div
            className="absolute inset-0 bg-white opacity-0 
            group-hover:opacity-20 
            transition-all duration-300 pointer-events-none"
          ></div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl">
            <p className="text-white text-lg font-semibold"></p>
          </div>
        </motion.div>

        {/* RIGHT SIDE VIDEO CARDS */}
        <div className="space-y-5">
          <GalleryCard 
            video="https://www.youtube.com/embed/OuyOzQDcqwo" 
            title="" 
          />
          <GalleryCard 
            video="https://www.youtube.com/embed/7xhcAsJkLCY" 
            title="" 
          />
        </div>
      </div>

      {/* Button */}
      <div className="max-w-[1100px] mx-auto mt-10 flex justify-center">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white px-6 py-2.5 text-sm font-semibold shadow-lg shadow-blue-900/40 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            View All Gallery
          </motion.button>
        </Link>
      </div>

    </section>
  );
}

/* UPDATED GalleryCard WITH BIGGER SIZE */
function GalleryCard({ video, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl shadow-md group h-[280px]"
    >
      <iframe
        src={video}
        className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Diagonal Flash */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full 
          bg-white opacity-0 
          rotate-45 translate-x-[-150%] 
          group-hover:translate-x-[150%]
          transition-all duration-1200"
          style={{ filter: "blur(20px)", opacity: 0.15 }}
        ></div>
      </div>

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-2xl">
        <p className="text-white text-sm font-medium">{title}</p>
      </div>
    </motion.div>
  );
}
