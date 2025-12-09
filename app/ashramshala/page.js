"use client";

import { useState } from "react";
import Header from "../components/Header";

export default function AshramshalaTable() {
  const schools = [
    {
      id: 1,
      name: "Rajarshi Ch.Shahu Maharaj Prathmik And Madhyamik Ashram Shala, Adoshi",
      head: "Shri.Arane Ramesh Ramchandra",
      district: "Thane",
      address: "Adashi, Tal-Mokhada, Dist.-Thane",
      courses: "1st to 10th Standard",
    },
    {
      id: 2,
      name: "Mahatma Jotiba Phule Prathmik And Madhyamik Ashram Shala, Ase",
      head: "Shri.Lahare H.M. (Incharge)",
      district: "Thane",
      address: "Ase, Tal-Mokhada, Dist.-Thane",
      courses: "1st to 10th Standard",
    },
    {
      id: 3,
      name: "Maharshi Vitthal Ramji Shinde Prathmik And Madhyamik Ashram Shala, Mokhada",
      head: "Shri.NikumBh Sunil Pandurang (Incharge)",
      district: "Thane",
      address: "Mokhada, Tal-Mokhada, Dist.-Thane",
      courses: "1st to 10th Standard",
    },
    {
      id: 4,
      name: "Kranti Jyoti Savitribai Phule Prathmik And Madhyamik Ashram Shala, Chambharshet",
      head: "Shri.Choudhari Vitthal Baban (Incharge)",
      district: "Thane",
      address: "Chambharshet, Tal-Javhar, Dist.-Thane",
      courses: "1st to 10th Standard",
    },
    {
      id: 5,
      name: "Prathmik & Madhyamik Ashram Shala, Wavar",
      head: "Shri.Randhir Manohar Fakira",
      district: "Thane",
      address: "Wavar, Tal-Javhar, Dist.-Thane",
      courses: "1st to 10th Standard",
    },
    {
      id: 6,
      name: "Prathmik And Madhyamik Ashram Shala, Narmadanagar",
      head: "Shri.Shelake Arjun Laxman",
      district: "Nandurbar",
      address: "Narmadanagar, Tal-Taloda, Dist.-Nandurbar",
      courses: "1st to 10th Standard",
    },
    {
      id: 7,
      name: "Karmaveer Bhaurao Patil Prathmik & Madhyamik Ashram Shala",
      head: "Shri.Malav Dhananjay",
      district: "Ahmednagar",
      address: "Pimpaldari, Tal-Akole, Dist.-Ahmednagar",
      courses: "1st to 10th Standard",
    },
    {
      id: 8,
      name: "Dr.Babasaheb Ambedkar Prathmik And Madhyamik Ashram Shala, Kharshet",
      head: "Shri.Gaurdkar Arun Dagdu",
      district: "Nashik",
      address: "Kharshet, Tal-Trayambakeshwar, Dist.-Nashik",
      courses: "1st to 10th Standard",
    },
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-white p-6 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* HEADER */}
<div className="w-full flex justify-center py-10">
  <div className="text-center bg-gradient-to-r from-[#D3632C] via-[#BF294C] to-[#8A0B36] text-white px-8 py-4 rounded-tl-2xl rounded-br-2xl shadow-md transition hover:scale-105 duration-300">
    <span className="font-semibold text-lg md:text-xl tracking-wide">
      Rayat Shikshan Sanstha, Satara - Adivasi Ashramshala Department
    </span>
  </div>
</div>

        {/* TABLE */}
        <div className="bg-white shadow-lg rounded-xl overflow-auto border border-gray-300">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border border-black">Sr. No</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border border-black">Ashramshala Name</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border border-black">Head Master Name</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border border-black">District</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border border-black">Address</th>
                <th className="px-4 py-3 text-centerfont-semibold text-gray-700 border border-black">Courses</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school, index) => (
                <tr
                  key={school.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="px-4 py-3 text-center text-gray-800 border border-black">{school.id}</td>
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.name}</td>
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.head}</td>
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.district}</td>
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.address}</td>
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.courses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}