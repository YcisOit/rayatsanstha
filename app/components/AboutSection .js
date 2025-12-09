"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function RayatAbout() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function mv(e) {
      const r = el.getBoundingClientRect();
      const dx = ((e.clientX || (e.touches && e.touches[0].clientX)) - (r.left + r.width/2)) / r.width;
      el.style.setProperty("--px", `${dx * 14}px`);
    }
    function lv() { el.style.setProperty("--px", "0px"); }
    window.addEventListener("pointermove", mv);
    window.addEventListener("pointerleave", lv);
    return () => {
      window.removeEventListener("pointermove", mv);
      window.removeEventListener("pointerleave", lv);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 md:h-[600px]" ref={ref} style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute left-0 top-6 md:top-0 w-[72%] h-[78%] rounded-xl overflow-hidden shadow-2xl border border-white/10"
               style={{ transform: "translateX(6%) translate3d(var(--px,0),0,0)" }}>
            <Image src="/images/ofc.jpeg" alt="Campus" fill className="object-cover floating-kenburns" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />
          </div>

          <div className="absolute left-[54%] md:left-[60%] bottom-6 w-44 h-44 md:w-56 md:h-56 rounded-xl overflow-hidden border-8 border-white shadow-2xl transform-gpu"
               style={{ transform: "translate3d(calc(var(--px,0) / 1.4), 0, 0)" }}>
            <Image src="/images/karmveer.jpg" alt="Representative" fill className="object-cover" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600">
            About Rayat Shikshan Sanstha, Satara
          </h2>
          <p className="text-gray-700 mb-4">
            Rayat Shikshan Sanstha, Satara is committed to providing accessible, high-quality education that blends tradition with innovation.
            We nurture talent through strong faculty, modern labs, and community engagament.
          </p>

          <p className="text-gray-600 mb-6">Our mission: Empower students with knowledge, ethics and practical skills to serve society and industry.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-gray-700">
            <div className="flex gap-3 items-start">
              <span className="mt-1 inline-block w-3 h-3 rounded-full bg-amber-500" />
              <div>
                <div className="font-semibold">Research & Innovation</div>
                <div className="text-sm text-gray-600">Funding & projects</div>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="mt-1 inline-block w-3 h-3 rounded-full bg-rose-500" />
              <div>
                <div className="font-semibold">Industry Collaboration</div>
                <div className="text-sm text-gray-600">Internships & placements</div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg flex items-center justify-center border border-yellow-300 relative overflow-hidden">
                <span className="text-2xl font-extrabold text-amber-600">4</span>
                <div className="absolute inset-0 opacity-20 badge-shine" />
              </div>
              <div className="text-xs text-gray-600 mt-2">National Rank</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-lg flex items-center justify-center border border-indigo-300 relative overflow-hidden">
                <span className="text-2xl font-extrabold text-indigo-600">12</span>
                <div className="absolute inset-0 opacity-20 badge-shine" />
              </div>
              <div className="text-xs text-gray-600 mt-2">Academic Excellence</div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="/about" className="px-5 py-3 rounded-full bg-gradient-to-r from-[#0B3C5D] to-[#145DA0] text-white shadow hover:scale-[1.02]">Read More</a>
            <a href="/contact" className="px-5 py-3 rounded-full border border-gray-200 text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
