"use client";   // React hooks वापरायचे असल्याने client component म्हणून mark केलं

import { useState } from "react";
import Header from "../components/Header"; // <-- import Header

export default function CollegeNamePage() {
  // Colleges list
  const members = [
    { id: 1, name: "Chhatrapati Shivaji College, Satara." },
    { id: 2, name: "Sadguru Gadage Maharaj College, Karad.Dist-Satara" },
    { id: 3, name: "Azad College of Education, Satara" },
    { id: 4, name: "Yashvantrao Chavan Institute of Science, Satara" },
    { id: 5, name: "Dahiwadi College, Dahiwadi. Dist-Satara" },
    { id: 6, name: "Ismailsaheb Mulla Law College, Satara." },
    { id: 7, name: "Dhananjayrao Gadgil College of Commerce, Satara." },
    { id: 8, name: "Shripatrao Kadam Mahavidyalaya,Shirwal. Dist-Satara" },
    { id: 9, name: "D. P. Bhosale College, Koregaon. Dist-Satara" },
    { id: 10, name: "Sharadchandra Pawar College, Lonand. Dist-Satara" },
    { id: 11, name: "Savitribai Phule Mahila Mahavidyalaya, Satara." },
    { id: 12, name: "Sou.Mangaltai Ramchandra Jagtap Mahavidyalaya, Umbraj.Dist-Satara" },
    { id: 13, name: "Yashvantrao Chavan Mahavidyalaya, Panchwad. Dist-Satara" },
    { id: 14, name: "Arts & Commerce College, Pusegaon. Dist-Satara" },
    { id: 15, name: "Karmaveer Bhaurao Patil College of Engginering, Sadarbazar, Satara" },
    { id: 16, name: "Karmaveer Bhaurao Patil Polytechnic, Panmalewadi,Varye, Satara" },
    { id: 17, name: "Karmaveer Bhaurao Patil Institute of Management Studies & research, Varye, Satara" },
    { id: 18, name: "Karmaveer Bhaurao Patil Mahavidyalaya, Pandharpur" },
    { id: 19, name: "Arts & Commerce College, Medha." },
    { id: 20, name: "Laxmibai Bhaurao Patil Mahila Mahavidyalaya,Solapur." },
    { id: 21, name: "Balwant College, Vita. Dist-Sangli" },
    { id: 22, name: "Dr.Patangrao Kadam Mahavidyalaya, Ramanandnagar (Burli), Dist-Sangli" },
    { id: 23, name: "Raosaheb Ramrao Patil Mahavidhyalaya, Sawalaj. Dist-Sangli" },
    { id: 24, name: "Rajarshi Chhatrapati Shahu College, Kolhapur" },
    { id: 25, name: "Chandrabai Shantappa Shendure College, Hupari. Dist-Kolhapur" },
    { id: 26, name: "Prof.Dr.N.D.Patil Mahavidyalaya, Malkapur. Dist-Kolhapur" },
    { id: 27, name: "Abasaheb Marathe Arts & New Commerce, Science College, Rajapur. Dist-Ratnagiri" },
    { id: 28, name: "Rao Bahaddur Narayanrao Borawake College, Shrirampur. Dist-Ahmednagar" },
    { id: 29, name: "C.D. Jain College of Commerce, Shrirampur Dist- Ahmednagar" },
    { id: 30, name: "Dada Patil Mahavidyalaya, Karjat Dist-Ahmednagar" },
    { id: 31, name: "Shri Sadguru Gangageer Maharaj Science, Gautam Arts & Sanjivani Commerce College, Kopargaon. Dist-Ahmednagar" },
    { id: 32, name: "Karmaveer Bhaurao Patil College, Vashi.Navi Mumbai. Dist-Thane" },
    { id: 33, name: "Swami Sahajanand Bharati College of Education, Shrirampur, Dist- Ahmednagar" },
    { id: 34, name: "Maharaja Jivajirao Shinde Mahavidyalaya, Shrigonda. Dist-Ahmednagar" },
    { id: 35, name: "Radhabai Kale Mahila Mahavidyalaya, Ahmednagar." },
    { id: 36, name: "Annasaheb Awate Arts, Commerce, Hutatma Babu Genu Science College, Manchar. Dist-Pune" },
    { id: 37, name: "Mahatma Phule Mahavidyalaya, Pimpri, Pune-17." },
    { id: 38, name: "Dr. Babasaheb Ambedkar Mahavidyalaya,Aundhagaon,Pune-7." },
    { id: 39, name: "S.M.Joshi College, Hadapsar. Pune" },
    { id: 40, name: "Mahatma Phule Arts, Science & Commerce College, Panvel. Dist-Raigad" },
    { id: 41, name: "Veer Vajekar Arts, Science & Commerce College, Phunde. Dist-Raigad" },
    { id: 42, name: "Loknete Ramsheth Thakur Arts, Science & Commerce College, Mokhada. Dist-Palghar" },
    { id: 43, name: "Rayat Institute of Research & Development college, Satara" },
  ];

  // Pagination setup
  const itemsPerPage = 25;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(members.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = members.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
    <Header />
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">

      {/* HEADER COMPONENT */}
      

      {/* PAGE HEADER */}
      <div className="w-full flex justify-center py-10">
        <div className="text-center bg-gradient-to-r from-[#D3632C] via-[#BF294C] to-[#8A0B36] text-white px-8 py-4 rounded-tl-2xl rounded-br-2xl shadow-md transition hover:scale-105 duration-300">
          <span className="font-semibold text-lg md:text-xl tracking-wide">
            Rayat Shikshan Sanstha, Satara - College
          </span>
        </div>
      </div>

      {/* TABLE */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden border border-gray-300">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-center font-semibold text-gray-700 border border-black">
                Sr.No
              </th>
              <th className="px-6 py-4 text-center font-semibold text-gray-700 border border-black">
                College Name
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={`${item.id}-${index}`}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition`}
              >
                <td className="px-6 py-4 text-center text-gray-800 border border-black">{item.id}</td>
                <td className="px-6 py-4 text-gray-800 border border-black">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-full border ${
              currentPage === index + 1
                ? "bg-[#BF294C] text-white"
                : "bg-white text-[#BF294C] border-[#BF294C]"
            } hover:bg-[#D3632C] hover:text-white transition`}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </div>
    </>
  );
}
