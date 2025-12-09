"use client";
import { useMemo, useState } from "react";
import { FaBell, FaRegNewspaper } from "react-icons/fa";
import ViewAllAwardsBox from "./ViewAllAwardsBox";

const TABS = ["Circulars", "News"];

const CIRCULARS_LIST = [
  { title: "परिपत्रक क्र.-३९- सेवकांच्या व्यक्तिगत नावातील बदलाबाबत", pdf: "/pdf/c1.pdf" },
  { title: "परिपत्रक क्र.४० - परितोषिकाच्या कायम ठेव सुधारित रक्कमेबाबत", pdf: "/pdf/c2.pdf" },
  { title: "परिपत्रक क्र.३५ - वित्त व लेखा विभाग - रयत शिक्षण संस्थेच्या रयत कुटुंब कल्याण सुधारित योजनेच्या कार्यवाहीबाबत", pdf: "/pdf/c3.pdf" },
  { title: "परिपत्रक क्र.३६ - लेखा व वित्त विभाग - सेवक वेल्फेअर फंड वर्गणी पाठविणेबाबत (२०२५-२६)", pdf: "/pdfs/sports.pdf" },
  {  title: "परिपत्रक क्र.-३९- सेवकांच्या व्यक्तिगत नावातील बदलाबाबत", pdf: "/pdf/c1.pdf" },
];

const NEWS_LIST = [
  { title: "परिपत्रक क्र.४० - परितोषिकाच्या कायम ठेव सुधारित रक्कमेबाबत", pdf: "/pdf/c2.pdf" },
  { title: "Convocation 2025 Completed Successfully", pdf: "/pdfs/convocation.pdf" },
];

export default function AwardsPremiumUltra() {
  const [tab, setTab] = useState(TABS[0]);
  const items = useMemo(() => (tab === "Circulars" ? CIRCULARS_LIST : NEWS_LIST), [tab]);

  return (
    <section className="relative py-10 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-6">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            
            {/* Premium Heading */}
            <h2 className="text-4xl font-extrabold tracking-tight text-[#1f1f1f]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D3632C] to-[#8A0B36]">
                Circulars & Activities
              </span>
            </h2>

            {/* Animated Premium Tabs */}
            <div className="flex gap-6 mt-4">
              {TABS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative text-lg px-4 py-2 font-bold transition ${
                    tab === t ? "text-[#8A0B36]" : "text-gray-600 hover:text-[#8A0B36]"
                  }`}
                >
                  {t}
                  {tab === t && (
                    <span className="absolute -bottom-1 left-0 right-0 w-full h-[3px] bg-gradient-to-r from-[#D3632C] to-[#8A0B36] rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* AUTO SCROLL LIST */}
            <div className="mt-6 rounded-2xl p-[3px] bg-gradient-to-r from-[#D3632C] via-[#BF294C] to-[#8A0B36] shadow-xl">
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6">
                <div className="h-100 overflow-hidden scroll-wrapper">
                  <div className="scroll-content space-y-4">
                    {[...items, ...items].map((text, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 px-5 py-3 bg-white/50 border border-white/30 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
                      >
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white">
                          {tab === "Circulars" ? <FaBell /> : <FaRegNewspaper />}
                        </div>

                        {/* PDF LINK */}
                        <a
                          href={text.pdf}
                          target="_blank"
                          className="text-gray-800 font-semibold hover:text-[#8A0B36] transition"
                        >
                          {text.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Animation for Auto Scroll */}
            <style jsx>{`
              .scroll-wrapper:hover .scroll-content {
                animation-play-state: paused;
              }
              .scroll-content {
                animation: verticalScroll 20s linear infinite;
              }
              @keyframes verticalScroll {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
              }
            `}</style>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative">
            <ViewAllAwardsBox />
          </div>

        </div>
      </div>
    </section>
  );
}
