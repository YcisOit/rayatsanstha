"use client";

import { FaBullhorn } from "react-icons/fa";
import Image from "next/image";

export default function AnnouncementAwardsPage() {
  const awards = [
    { year: "43", title: ["SENIOR", "COLLEGES"] },
    { year: "453", title: ["SECONDARY", "SCHOOLS"] },
    { year: "7", title: ["ADMINISTRATIVE", "OFFICES"] },
    { year: "83", title: ["HOSTELS"] },
    { year: "434,252+", title: ["STUDENTS"] },
    { year: "12,442+", title: ["STAFF"] },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0] py-0 space-y-10">

      {/* --------------------------------------------------------------- */}
      {/* ANNOUNCEMENT BAR */}
      {/* --------------------------------------------------------------- */}

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#590010] via-[#8A0B36] to-[#590010] animate-gradient-x shadow-xl"></div>
        <div className="absolute inset-0 bg-white/10 blur-lg rounded-xl pointer-events-none"></div>

        <div className="relative max-w-full mx-auto flex items-center gap-6 px-4 py-4">
          <div className="flex items-center gap-3 bg-white/20 px-6 py-2 rounded-full shadow-2xl backdrop-blur-md animate-pulse hover:scale-110 transition-transform duration-300">
            <FaBullhorn className="text-2xl text-white drop-shadow-lg" />
            <span className="font-bold text-lg text-white uppercase tracking-wider drop-shadow-md">
              Announcement
            </span>
          </div>

          <span className="text-white font-bold text-lg tracking-wide drop-shadow-md">
            2026 - 27
          </span>

          <div className="border-2 h-7 border-white/60"></div>

          <div className="overflow-hidden whitespace-nowrap flex-1">
            <div className="animate-scroll text-white text-base font-semibold uppercase tracking-wider drop-shadow-lg">
               संस्था प्रशासनातील मुख्य लेखापरीक्षक (Chief Auditor) या पदाची जाहिरात- मुदतवाढ, 
                डी.एड.स्केलवर नियुक्ती दिलेल्या परंतु नियुक्ती नंतर बी.एड.स्केल शैक्षणिक अर्हता प्राप्त केलेल्या सेवकांची यादी प्रसिद्ध केलेबाबत.
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* AWARDS SECTION — GAP REDUCED MORE + TEXT UP */}
      {/* --------------------------------------------------------------- */}

      <section className="w-full flex justify-center py-4">
        <div className="flex gap-[-35px] overflow-x-auto no-scrollbar px-4">

          {awards.map((item, i) => (
            <div
              key={i}
              className="relative w-[250px] h-[250px] flex justify-center items-center shrink-0"
            >
              <Image
                src="/images/cc.png"
                alt="award wreath"
                fill
                className="object-contain"
              />

              {/* TEXT PART — moved slightly upward */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-black font-semibold">
                <div className="text-[25px] font-extrabold">{item.year}</div>

                <div className="text-[14px] leading-[16px] mt-2">
                  {item.title.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>

        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* --------------------------------------------------------------- */}
      {/* ANIMATIONS */}
      {/* --------------------------------------------------------------- */}

      <style>{`
        .animate-scroll {
          display: inline-block;
          padding-left: 100%;
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradientShift 10s linear infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

    </div>
  );
}
