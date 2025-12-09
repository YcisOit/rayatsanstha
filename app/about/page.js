"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";

// Components
import Header from "../components/Header";

// IMPORT YOUR OTHER PAGES
import ApprovalsPage from "../project/page";
import AimsPage from "../aim/page";
import TablePage from "../table/page";
import MouPage from "../mou/page";

export default function AboutSansthaLibrary() {
  const [open, setOpen] = useState(null);
  const [activeTab, setActiveTab] = useState("History");

  const toggle = (i) => setOpen(open === i ? null : i);

  const sideMenu = [
    "History",
    "Aims & objectivies",
    "Award and Honors",
    "MoU",
    "projects",
  ];

  const accordionData = [
    {
      title: "Library Rules",
      content: [
        "Readers should observe strict silence and switch off their mobile phones inside the library.",
        "No personal belongings allowed inside the library.",
        "Library Membership cards are not transferable.",
        "Refreshment of any kind shall not be taken inside the library premises.",
        "Enter your name and sign the register kept at the entrance.",
      ],
    },
    { title: "Plagiarism Checking Software Rules", content: ["Coming soon..."] },
    { title: "Admission to Library", content: ["Coming soon..."] },
    { title: "Circulation System", content: ["Coming soon..."] },
    { title: "Overdue Charge", content: ["Coming soon..."] },
    { title: "Book Lost", content: ["Coming soon..."] },
    { title: "No Due Certificate", content: ["Coming soon..."] },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f5f6f8]">
      
      {/* HEADER */}
      <Header title="ABOUT THE SANSTHA" subtitle="ABOUT SANSTHA" />

      {/* MAIN GRID */}
      <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* SIDEBAR */}
        <div className="space-y-4">
          {sideMenu.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setActiveTab(item);
                setOpen(null);
              }}
              className={`${
  activeTab === item ? "bg-gradient-to-b from-[#fbe6c1] via-white to-[#feebc9]" : ""
} text-black font-medium text-lg px-6 py-4 shadow-md cursor-pointer 
hover:bg-[#efd0d7] transition rounded-tl-[50px] rounded-bl-[50px] rounded-tr-[120px]`}

            >
              {item}
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3 space-y-4">

          {/* ================= HISTORY TAB ================= */}
          {activeTab === "History" && (
            <div className="min-h-[70vh] bg-white p-6 rounded-lg shadow">

              <style>{`
                @keyframes bounceImage {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-12px); }
                }
                .bounce-slow { animation: bounceImage 2.5s ease-in-out infinite; }
              `}</style>

              <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Image */}
                <div className="flex justify-center">
                  <div className="relative w-70 h-70 md:w-[300px] md:h-[300px] 
                    rounded-full border-[2px] border-[#f1c2cd] overflow-hidden 
                    flex items-center justify-center bounce-slow"
                  >
                    <Image 
                      src="/images/kbp.png" 
                      alt="Sanjay Ghodawat Group"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 200px, 300px"
                    />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <div className="bg-[#903c53] text-white font-semibold 
                    text-xl md:text-2xl px-5 py-2.5 rounded-md inline-block">
                    History
                  </div>

                  <p className="mt-4 text-gray-700 leading-relaxed 
                    text-sm md:text-base text-justify"
                  >
                    Rayat Shikshan Sanstha is a globally respected premier educational institution 
                    founded by Karmaveer Bhaurao Patil and his wife Sou. Laxmibai Patil. The Sanstha 
                    is known for its mission to educate the poor, downtrodden. Karmaveer Bhaurao Patil 
                    believed that education was the only way to remove social problems like caste system, 
                    inequality, illiteracy, superstitions, and untouchability. With this mission, he started 
                    a small boarding house at Kale in 1919, which later grew into the Rayat Shikshan Sanstha. 
                    In 1924, he shifted the headquarters to Satara. Today, Rayat Shikshan Sanstha is one of 
                    Asia’s largest and most respected educational institutions, known for its great contribution 
                    to society.
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* ================= OTHER TABS ================= */}
          {activeTab === "projects" && <ApprovalsPage />}
          {activeTab === "Aims & objectivies" && <AimsPage />}
          {activeTab === "Award and Honors" && <TablePage />}
          {activeTab === "MoU" && <MouPage />}

          {/* ================= OTHER ACCORDION ================= */}
          {activeTab !== "History" &&
           activeTab !== "projects" &&
           activeTab !== "Aims & objectivies" && 
           activeTab !== "Award and Honors" &&
           activeTab !== "MoU" && (
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className="border border-orange-300 rounded-lg bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center px-4 py-3 
                    text-left text-gray-800 font-semibold"
                  >
                    {item.title}
                    {open === index ? (
                      <FiChevronUp className="text-orange-600" />
                    ) : (
                      <FiChevronDown className="text-orange-600" />
                    )}
                  </button>

                  {open === index && (
                    <div className="px-6 pb-4 text-gray-700 space-y-2">
                      {item.content.map((line, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-orange-600 text-xl">•</span>
                          <p>{line}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
