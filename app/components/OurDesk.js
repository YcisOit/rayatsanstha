"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ChairmanMessage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-16 text-center lg:text-left tracking-tight"
        >
          Chairman’s Message
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-[280px] lg:w-[300px] mx-auto lg:mx-0"
          >
            <div className="absolute top-5 right-5 w-full h-full bg-gray-300 rounded-2xl -z-10 transform rotate-2"></div>
            <div className="border-8 border-white shadow-2xl rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
              <Image
                src="/images/chairman1.jpg"
                alt="Chairman"
                width={300}
                height={380}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Hon’ble Chandrakant Narayan Dalvi, IAS(Retd)
            </h3>
            <p className="text-gray-600 mt-1 font-medium tracking-wide">CHAIRMAN</p>

            <p className="mt-6 leading-relaxed text-gray-700 text-lg">
          Padma Bhushan Dr. Karmaveer Bhaurao Patil, a great educationist, started Rayat Shikshan Sanstha in 1919 
            </p>

            <p className="mt-4 leading-relaxed text-gray-700 text-lg">
             Provide education to poor and underprivileged children living in rural areas. Since then, the institution has always focused not just on
              increasing the number of students but also on improving the quality of education. To achieve this, Rayat Sanstha has provided good facilities and skilled teachers. At the school level, various programs like Gurukul projects,
               computer labs, science labs, competitive exam coaching, and English speaking classes help students become talented and confident. In colleges, along with regular courses, skill-based programs are also offered to make students
                independent and job-ready. Rayat Sanstha is one of the leading institutions implementing the National Education Policy 2020 effectively.
            </p>

            {/* Read More Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="mt-8 px-10 py-3 bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Read More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none">
        <div
          className="h-full w-full bg-[url('/images/ofc.jpeg')] bg-no-repeat bg-right bg-cover opacity-30"
          style={{
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white to-transparent"></div>
      </div>

      {/* ====== Premium Modal with strong blur ====== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-lg"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden"
            >
              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-[#D3632C] to-[#8A0B36] p-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  Chairman’s Message
                </h3>
              </div>

              {/* Scrollable Content */}
              <div className="p-8 max-h-[70vh] overflow-y-auto space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                 This year, the institution has made special efforts in education by understanding the needs of students and society. As a result, students have achieved success in competitive exams and sports, which is truly impressive.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                 Under the leadership of Hon. MP Sharad Pawar, the institution is progressing well in all areas. The Vice Presidents Mrs. Jayashree Chougule, Mr. Arun Kadu-Patil, Mr. P.J. Patil, Mr. Mahendra Lad, and Adv. Ram Kandage, Vice Chairman Adv. Bhagirath Shinde, Organizer Dr. Anil Patil, department heads, managing council members, and other members have all given valuable support for the institution’s development.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our Secretary Mr. Vikas Deshmukh, Joint Secretaries Principal Dr. Shivling Menkudale, Mr. B.N. Pawar, and Principal Dr. Rajendra More are working hard for the progress of the Sanstha. Their contribution is very important.
                </p>
                 <p className="text-gray-700 text-lg leading-relaxed">
                 I also thank all officers, teachers, professors, well-wishers, parents, and students for their constant support.
With this, I end my message. <br />
Thank you!
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-gray-200 transition"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
