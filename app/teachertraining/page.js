"use client";

import Header from "../components/Header";

export default function TeacherTrainingTable() {
  const schools = [
    {
      id: 1,
      school: "SATARA, MAHATMA PHULE ADHYAPAK VIDYALAYA",
      principal: "-",
      atPost: "SATARA",
      taluka: "SATARA",
      district: "SATARA",
      stdCode: "2162",
      phone: "239283",
    },
    {
      id: 2,
      school: "SATARA, JIJAMATA ADHYAPIKA VIDYALAYA",
      principal: "PATIL MANGAL SHRIDHAR",
      atPost: "SATARA",
      taluka: "SATARA",
      district: "SATARA",
      stdCode: "2162",
      phone: "238133",
    },
    {
      id: 3,
      school: "KUSUR, PANDURANG DESAI ADHYAPAK VIDYALAYA",
      principal: "KAMBALE BALU MUKUND",
      atPost: "KUSUR",
      taluka: "KARAD",
      district: "SATARA",
      stdCode: "2164",
      phone: "250261",
    },
    {
      id: 4,
      school: "ASHTA, LATTHE ADHYAPAK VIDYALAYA",
      principal: "VANJARI BABURAO SHANKAR",
      atPost: "ASHTA",
      taluka: "WALWA",
      district: "SANGLI",
      stdCode: "2342",
      phone: "243341",
    },
    {
      id: 5,
      school: "MAHULI, VITTHALRAO DHESHMUKH ADHYAPAK VIDYALAYA",
      principal: "GODE GORAKSHNATH KONDAJI",
      atPost: "MAHULI",
      taluka: "KHANAPUR",
      district: "SANGLI",
      stdCode: "2347",
      phone: "264034",
    },
    {
      id: 6,
      school: "RUKADI, SHRI CHH. SHAHU ADHYAPAK VIDYALAYA",
      principal: "DONGARE UTTAM BANDU",
      atPost: "RUKADI",
      taluka: "HATKANANGALE",
      district: "KOLHAPUR",
      stdCode: "230",
      phone: "2585532",
    },
    {
      id: 7,
      school: "JAMGAON, MAHARAJA MADHAVRAO SHINDE JUNIOR COLLEGE OF EDU.",
      principal: "JAGDALE SOPAN SAKHARAM",
      atPost: "JAMGAON",
      taluka: "PARNER",
      district: "A.NAGAR",
      stdCode: "2488",
      phone: "273225",
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
      Teacher Training Schools
    </span>
  </div>
</div>

        {/* TABLE */}
        <div className="bg-white shadow-lg rounded-xl overflow-auto border border-gray-300">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border border-black">Sr. No</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border border-black">School</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border border-black">Principal's Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border border-black">At/Post</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border border-black">Taluka</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 border border-black">District</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border border-black">Std Code</th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 border border-black">Phone No.</th>
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
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.school}</td>
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.principal}</td>
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.atPost}</td>
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.taluka}</td>
                  <td className="px-4 py-3 text-gray-800 border border-black">{school.district}</td>
                  <td className="px-4 py-3 text-center text-gray-800 border border-black">{school.stdCode}</td>
                  <td className="px-4 py-3 text-center text-gray-800 border border-black">{school.phone}</td>
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