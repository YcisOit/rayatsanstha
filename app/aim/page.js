"use client";

import { motion } from "framer-motion";

export default function AimsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 py-12">

      {/* Animated Title */}
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#903c53] text-white text-lg font-semibold px-8 py-3 rounded-l-3xl rounded-b-3xl shadow-lg mx-auto mb-8 w-fit"
      >
       Aims & Objects
      </motion.div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-base">   {/* ⬅️ TEXT SIZE INCREASED */}

        <p className="text-center text-black-600 mb-6">
          The aims & objects of the Rayat Shikshan Sanstha shall be:
        </p>

        {/* Card Container with inverted border thickness */}
        <div
          className="
            bg-[#fcfafa]
            rounded-xl
            p-6
            shadow-2xl
            border-t border-l 
            border-r-4 border-b-4
            border-[#e2476c]
          "
        >

          <ol className="list-decimal ml-4 space-y-3 text-gray-700 text-[15px]">
            {/* ⬆️ TEXT SIZE INCREASED */}
            <li>to impart generally to the rising generation of India & in particular to the residents of Maharashtra, a liberal & vocational education from Pre-primary to University level, embodying a social, cultural, scientific, technical, medical, legal, agricultural, commercial, industrial and physical training.</li>

            <li>to train suitable teachers for the above purposes;</li>

            <li>to train village workers for the upliftment of villages and rural industries;</li>

            <li>
              to open free libraries and reading rooms, hostels, residential and ordinary schools, colleges, Autonomous colleges, University, Research Institution, Distance Education and Educational Projects and such other institutions as may be conducive to the attainment of the aims and objects of the Sanstha, as circumstances permit;
            </li>

            <li>
              to do all lawful things and acts as are incidental or conducive to the attainment of any of the aforesaid aims and objects;
            </li>
          </ol>

          {/* Bottom Info Box */}
          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100 shadow">
            <p className="text-gray-600 text-sm leading-relaxed">
              The Rayat Shikshan Sanstha shall provide facilities for the education of the poor by providing means to 'Earn while They Learn' on the principle of Self-Help. The institutions of the Sanstha shall be so conducted to make no distinction of sex, region, religion, caste, creed or class and to be free from tuition fees as far as possible. The Sanstha shall be non-political. The members of the Managing Council of the Sanstha, the Life Members, the teachers and the employees of the Sanstha shall not engage themselves in any political activities within the precincts of the institutions of the Sanstha. The students in its institutions shall not take any active part in politics and shall devote their entire attention to the furtherance of education.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
