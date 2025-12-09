"use client";

import Image from "next/image";
import { FaCrown } from "react-icons/fa";

const members = [
  { id: 1, name: "Hon’ble. Sharadrao Govindrao Pawar", role: "President", img: "/images/12.jpeg" },
  { id: 2, name: "Hon’ble Chandrakant Narayan Dalvi, IAS(Retd)", role: "Chairman", img: "/images/chairman1.jpg" },
  { id: 3, name: "Hon’ble Dr.  Anil Appasaheb Patil", role: "Organizer", img: "/images/Organizer.jpg" },
  { id: 4, name: "Hon’ble Adv. Bhagirath Nivrutti Shinde", role: "Vice Chairman", img: "/images/VICE.jpeg" },
  { id: 5, name: "Hon’ble Shri. Vikas Deshmukh, IAS(Retd)", role: "Secretary", img: "/images/SECRETY.jpeg" },
];

export default function Management() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold text-[#7A0026] tracking-wide">
            Management of
          </h2>
          <h3 className="text-3xl font-serif font-medium text-gray-700 mt-2">
            Rayat Shikshan Sanstha
          </h3>

          {/* Gold Line + Crown */}
          <div className="flex justify-center items-center mt-5 gap-3">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
            <FaCrown className="text-[#D8B267] text-xl drop-shadow-md" />
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {members.map((m) => (
            <article
              key={m.id}
              className="relative overflow-hidden bg-white/40 backdrop-blur-xl 
              border border-[#e1d6b2] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)]
              transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_10px_35px_rgba(0,0,0,0.25)]
              hover:border-[#D8B267] group"
            >
              {/* Top Crown */}
              <div className="absolute right-2 top-2 bg-white/40 p-1 rounded-full shadow-md">
                <FaCrown className="text-[#c29a42] text-sm" />
              </div>

              {/* Image (Fixed Same Size for All) */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-xl bg-[#faf8f3]">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="bg-gradient-to-b from-[#7A0026] to-[#57001b] text-white text-center py-4">
                <p className="font-semibold text-sm md:text-base tracking-wide">
                  {m.name}
                </p>
                <p className="text-xs md:text-sm text-[#D8B267] mt-1 uppercase font-medium">
                  {m.role}
                </p>
              </div>

              {/* Bottom Gold Reflection Light */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#D8B26740] to-transparent blur-xl" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
