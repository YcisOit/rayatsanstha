"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ACTIVITIES = [
  { id: 1, title: "कर्मवीर जयंती", img: "/images/ac1.jpg" },
  { id: 2, title: "कर्मवीर जयंती", img: "/images/ac1.jpg" },
  { id: 3, title: "कर्मवीर जयंती", img: "/images/ac1.jpg" },
  { id: 4, title: "कर्मवीर जयंती", img: "/images/ac1.jpg" },
  { id: 5, title: "कर्मवीर जयंती", img: "/images/ac1.jpg" },
  { id: 6, title: "कर्मवीर जयंती", img: "/images/ac1.jpg" },
];

export default function RecentActivitiesBox() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate activities for infinite scroll
  const duplicatedActivities = [...ACTIVITIES, ...ACTIVITIES];

  return (
    <>
      <aside className="hidden lg:flex flex-col w-[360px] gap-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-extrabold mb-2 text-[#1e1e1e] tracking-tight">
            Achievements
          </h2>
          <div className="w-20 h-[4px] rounded-full bg-gradient-to-r from-[#A30041] to-[#FF6F61]"></div>
        </motion.div>

        {/* Continuous scroll list with hover pause */}
        <div
          className="relative max-h-[430px] overflow-hidden pr-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="animate-scroll-vertical"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedActivities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(item.img)}
                className="flex flex-col gap-2 p-3 mb-4 bg-white/80 backdrop-blur-xl 
                  rounded-2xl border border-gray-200 shadow-md hover:shadow-xl
                  cursor-pointer transition-all duration-300"
              >
                <div className="relative w-full h-44 rounded-xl overflow-hidden border border-gray-300 shadow-lg">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <h3 className="text-gray-800 font-bold text-sm">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Button */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.06 }}
          className="inline-flex items-center justify-center rounded-full 
           bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white px-6 py-2.5 
            text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          View All Activities
        </motion.a>
      </aside>

      {/* Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[80%] h-[80%] max-w-3xl rounded-xl overflow-hidden shadow-2xl"
            >
              <Image src={selectedImage} alt="Zoom" fill className="object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Continuous vertical scroll animation */
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          display: flex;
          flex-direction: column;
          animation: scroll-vertical 40s linear infinite;
        }

        /* Hide scrollbar for all browsers */
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { scrollbar-width: none; }
      `}</style>
    </>
  );
}