"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "Saksham Agarwal",
    course: "B.Tech (CSE), 2023 Batch",
    image: "/images/12.jpeg",
  },
  {
    id: 2,
    name: "Surajana Malla",
    course: "BCA, 2023 Batch",
    image: "/images/chairman1.jpg",
  },
  {
    id: 3,
    name: "Aakruti Singh",
    course: "B.Tech (CSE), 2023 Batch",
    image: "/images/SECRETY.jpeg",
  },
];

export default function PremiumTestimonial() {
  return (
    <div
      className="relative px-6 md:px-16 py-20 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/images/ofc.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <h2 className="relative text-center pb-6 text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-12 drop-shadow-lg">
        OUR DESK
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
        {data.map((item, index) => (
          <motion.div
  key={item.id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  viewport={{ once: true }}
  className="relative bg-white rounded-3xl pt-24 pb-8 px-6 min-h-[300px] flex flex-col justify-end 
             shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center"
>
  {/* Bigger Profile Image */}
  <div className="absolute left-1/2 -top-20 transform -translate-x-1/2">
    <div className="w-44 h-44 rounded-full p-1.5 bg-gradient-to-r from-[#D3632C] via-[#BF294C] to-[#8A0B36] shadow-xl">
      <Image
        src={item.image}
        alt={item.name}
        width={220}
        height={220}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  </div>

  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    {item.name}
  </h3>

  <p className="text-[#D3632C] font-medium mt-1">
    {item.course}
  </p>

  <div className="w-16 h-1 bg-gradient-to-r from-[#D3632C] via-[#BF294C] to-[#8A0B36] rounded-full mx-auto mt-3"></div>
</motion.div>

        ))}
      </div>
    </div>
  );
}
