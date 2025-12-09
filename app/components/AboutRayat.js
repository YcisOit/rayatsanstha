"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-16 bg-[#8d203a] text-white overflow-hidden">

      {/* Background overlay image */}
      <div className="absolute inset-0 bg-[url('/images/ofc.jpeg')] bg-cover bg-center opacity-15 z-0"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left place-items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h2 className="text-[#ffde83] text-3xl md:text-4xl font-bold tracking-wide mb-2">
            D Y Patil
          </h2>

          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            International University
          </h3>

          <p className="text-[17px] leading-relaxed mb-5 opacity-90 max-w-xl">
            D Y Patil International University (DYPIU), Akurdi, Pune, has swiftly
            emerged as one of India’s leading centers for academic excellence and
            innovation. Established in 2018 and recognized by the UGC and
            Government of Maharashtra...
          </p>

          <p className="text-[17px] leading-relaxed opacity-90 max-w-xl">
            At DYPIU, learners benefit from state-of-the-art infrastructure,
            inspiring mentorship, and real-world opportunities that nurture
            creativity, ambition, and world-class skills...
          </p>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="relative flex justify-center items-center">

          {/* Large Main Circle */}
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-[6px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center">
            <Image
              src="/images/ofc.jpeg"
              alt="Campus"
              fill
              className="object-cover scale-105"
            />
          </div>

          {/* Small Overlapping Circle */}
          <div className="absolute -top-10 left-0 w-40 h-40 rounded-full border-[5px] border-white shadow-xl ring-4 ring-[#ffd86b]/70 overflow-hidden">
            <Image
              src="/ganpati.jpg"
              alt="Ganpati Idol"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Badge */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#1e86ff] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-xl">
            50+ Years of Legacy
          </div>

        </div>
      </div>
    </section>
  );
}
