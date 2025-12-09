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
        Memorandum of Understanding (MoU)
      </motion.div>

      {/* ======= Table Container ======= */}
      <div className="mt-12 w-[90%] md:w-[85%] lg:w-[89%] bg-white 
                      shadow-xl border border-gray-300 rounded-lg overflow-hidden">

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 border-b border-gray-300">
              <th className="p-3 font-bold text-gray-800 border-r border-gray-300">Sr.No</th>
              <th className="p-3 font-bold text-gray-800 border-r border-gray-300">Title</th>
              <th className="p-3 font-bold text-gray-800 border-r border-gray-300">Purpose</th>
              <th className="p-3 font-bold text-gray-800">Date</th>
            </tr>
          </thead>

          <tbody>
            {[
              { sr: 1, name: "TATA CONSULTANCY SERVICES LIMITED (TCS) & RAYAT SHIKSHAN SANSTHA", year: "Provide training services to improve the employability of students graduating from RAYAT SHIKSHAN SANSTHA", desc: "18-2-2015" },
              { sr: 2, name: "LUPIN LIMITED & RAYAT SHIKSHAN SANSTHA", year: "To provide industry-focused quality education & job opportunities to 12th (Science) passed students from RAYAT SHIKSHAN SANSTHA", desc: "15-5-2015" },
              { sr: 3, name: "RAYAT SHIKSHAN SANSTHA & TATA BUSINESS SUPPORT SERVICES LTD", year: "Creating temporary job opportunities and supporting education efforts through 'Earn While You Learn'", desc: "4-12-2015" },
              { sr: 4, name: "CHONNAM NATIONAL UNIVERSITY, SOUTH KOREA & RAYAT SHIKSHAN SANSTHA", year: "Collaboration on academic programs", desc: "10-3-2015" },
              { sr: 5, name: "SNS FOUNDATION & RAYAT SHIKSHAN SANSTHA", year: "For improvement in quality of school education", desc: "9-2-2016" },
              { sr: 6, name: "TATA INSTITUTE OF SOCIAL SCIENCES, MUMBAI & KARMAVEER BHAURAO PATIL COLLEGE, VASHI", year: "National university students skill development programme (NUSSD)", desc: "2015" },
              { sr: 7, name: "RGSTC, HBCSE & RAYAT SHIKSHAN SANSTHA", year: "Assistance for Science and Innovation Activity Centres (SIAC) in Maharashtra schools", desc: "24-2-2016" },
              { sr: 8, name: "BVG INDIA LIMITED PUNE & RAYAT SHIKSHAN SANSTHA", year: "Provide industry-focused quality education and job opportunities", desc: "22-5-2017" },
              { sr: 9, name: "RAYAT SHIKSHAN SANSTHA & YCMOU & BVG INDIA LIMITED", year: "Plan and prescribe courses for degrees, diplomas, and certificates", desc: "4-8-2017" },
              { sr: 10, name: "MSSDS & RAYAT SHIKSHAN SANSTHA", year: "Skill training for Maharashtra youth to enhance employability", desc: "17-2-2018" },
              
            ].map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="p-3 border-r border-gray-300 text-gray-700">{row.sr}</td>
                <td className="p-3 border-r border-gray-300 text-gray-700">{row.name}</td>
                <td className="p-3 border-r border-gray-300 text-gray-700">{row.year}</td>
                <td className="p-3 text-gray-700">{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}    

