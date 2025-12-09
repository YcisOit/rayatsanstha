"use client";
import { motion } from "framer-motion";

export default function EqualOpportunityCell() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-16 bg-gray-50">

      {/* ======= Animated Heading ======= */}
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#903c53] text-white text-3xl font-semibold px-10 py-4 
                   rounded-l-3xl rounded-b-3xl shadow-lg"
      >
        Award and Honors
      </motion.div>

      {/* ======= Table Container ======= */}
      <div className="mt-12 w-[90%] md:w-[85%] lg:w-[89%] bg-white 
                      shadow-xl border border-gray-300 rounded-lg overflow-hidden">

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="p-3 font-bold text-gray-800 border-r border-gray-300">Sr.No</th>
              <th className="p-3 font-bold text-gray-800 border-r border-gray-300">Awards and Honors</th>
              <th className="p-3 font-bold text-gray-800">year</th>
            </tr>
          </thead>

          <tbody>
            {[
              { sr: 1, name: "Dr. Babasaheb Ambedkar award by Govt. of India", des: "1994" },
              { sr: 2, name: "Dalit Mitra Puraskar by the state Govt", des: "1994" },
              { sr: 3, name: "Mr. B. B. PujariRajarshi Shahu Puraskar by the Rajarshi Chh. Shahu Memorial Trust, Kolhapur", des: "1998" },
              { sr: 4, name: "Adarsha Shikshan Sanstha Puraskar by the Govt of Maharashtra", des: "2001" },
              { sr: 5, name: "Shri Sant Gadge Maharaj Seva Puraskar by the Shri Sant Gadage Maharaj Mission, Mumbai", des: "2002" },
            { sr: 6, name: "Shikshan Maharshi Dr. Panjabrao Upakhya Bhausaheb Deshmukh Smriti Puraskar by Yashwantrao Chavan Maharashtra Open University, Nasik", des: "2003" },
            { sr: 7, name: "Excellence in Education Award-2011 by Dr. D.Y. Patil Pratishthan, Navi Mumbai", des: "2011" },
              { sr: 8, name: "Shahu, Phule, Ambedkar Puraskar by Government of Maharashtra", des: "2013" },
             { sr: 9, name: "Jivangourav Puraskar by Maharashtra Foundation (America & Sadhana Trust)", des: "2014" },
            { sr: 10, name: "Vatvruksha Shiv-Puraskar by Krutisamiti, Shivaji University, Kolhapur", des: "2015" },
          { sr: 11, name: "Satara Bhushan Puraskar by R.N. Godbole Trust, Satara", des: "2016" },
          { sr: 12, name: "Bharatratna Moulana Abul Kalam Azad Puraskar by Pune Municipal Corporation, Pune", des: "2016" },
          { sr: 13, name: "Pracharya R.K. Kanbarkar Puraskar by Shivaji University, Kolhapur", des: "2017" },
          { sr: 14, name: "Karmayogi Puraskar by Pri. Dr. P.B. Patil, Social Foram Trust, Sangli", des: "2018" },
         { sr: 15, name: "Karmaveer Bhurao Patil Krantidut Puraskar by Rashtriya Bandhuta Sahitya Parishad, Pune", des: "2019" },
            ].map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="p-3 border-r border-gray-300 text-gray-700">{row.sr}</td>
                <td className="p-3 border-r border-gray-300 text-gray-700">{row.name}</td>
                <td className="p-3 text-gray-700">{row.des}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
