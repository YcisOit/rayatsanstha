"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaCrown } from "react-icons/fa";

const DATA = [
  { title: "कर्मवीर जयंती", img1: "/images/ac1.jpg", img2: "/images/act/1.jpg" },
  { title: "स्व.मा. आमदार दत्तूशेठ नारायण पाटील स्मारकाचे अनावरण", img1: "/images/act/2.jpg", img2: "/images/act/3.jpg" },
  { title: "सेंटर ऑफ एक्सलन्स आणि कृत्रिम बुद्धिमत्ता अभ्यासक्रमाचे उदघाटन ", img1: "/images/act/5.jpg", img2: "/images/act/4.jpg" },
  { title: "रयत शिक्षण संस्थेच्या मॅनेजिंग कौन्सिलची बैठक", img1: "/images/act/6.jpg", img2: "/images/act/8.jpg" },
  { title: "केडगावमध्ये श्री अंबिका विद्यालयाच्या नूतन इमारतीचे उद्घाटन", img1: "/images/act/10.jpg", img2: "/images/act/11.jpg" },
  { title: "आवटे महाविद्यालयातील वर्गखोल्या, प्रयोगशाळा व विस्तारित इमारतीचे उद्घाटन ", img1: "/images/act/12.jpg", img2: "/images/act/13.jpg" },
  { title: "कर्मवीर भाऊराव पाटील कॉलेज ऑफ इंजिनिअरिंग, सातारा येथे भेट", img1: "/images/act/14.jpg", img2: "/images/act/15.jpg" },
  { title: "निढळ ता. खटाव जि. सातारा येथील हनुमान विद्यालयाच्या नूतनीकृत इमारतीचे  उदघाट्न ", img1: "/images/act/16.jpg", img2: "/images/act/17.jpg" },
];

export default function ActivitiesGrid() {
  const sparkleRef = useRef(null);

  useEffect(() => {
    const container = sparkleRef.current;
    const createSparkle = () => {
      const sparkle = document.createElement("div");
      sparkle.className = "absolute w-2 h-2 rounded-full bg-white/70 animate-ping-slow";
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.left = `${Math.random() * 100}%`;
      container.appendChild(sparkle);
      setTimeout(() => container.removeChild(sparkle), 3000);
    };
    const interval = setInterval(createSparkle, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full py-16 flex flex-col items-center bg-gradient-to-b from-[#f6eee0] via-white to-[#f6eee0] relative"
      ref={sparkleRef}
    >
      {/* UPDATED H2 */}
      <h2 className="text-center text-5xl font-serif font-bold tracking-wide mb-6 text-[#7A0026]">
        Activities
      </h2>

      {/* NEW CROWN DIVIDER BELOW H2 */}
      <div className="flex justify-center items-center mt-3 gap-3">
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
        <FaCrown className="text-[#D8B267] text-xl drop-shadow-md" />
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D8B267] to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1600px] mx-auto place-items-center mt-10">
        {DATA.map((item, index) => (
          <div
            key={index}
            className="relative w-[370px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(255,75,43,0.6)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-[#FF6B6B]/20 via-[#FFD93D]/20 to-[#6BCB77]/20 p-1 group perspective-1000"
          >
            <div className="rounded-2xl overflow-hidden bg-white relative">
              {/* First Image */}
              <div className="relative h-[170px] w-full overflow-hidden group perspective-1000">
                <Image
                  src={item.img1}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-y-3 brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 mix-blend-screen"></div>
              </div>

              {/* Second Image + Text */}
              <div className="relative h-[170px] w-full overflow-hidden group perspective-1000">
                <Image
                  src={item.img2}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute bottom-0 left-0 w-full px-4 py-3 backdrop-blur-md bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl">
                  <h3 className="text-sm font-semibold leading-tight text-white drop-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#D3632C] to-[#8A0B36] text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 animate-pulse">
          View All
        </button>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .group-hover\\:rotate-y-3 {
          transform: rotateY(3deg);
        }
        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0,0,0.2,1) infinite;
        }
      `}</style>
    </section>
  );
}
