"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const TAGS = ["All", "Engineering", "Pharmacy", "Management", "Arts & Science", "Education"];

const PROGRAMS = [
  {
    id: "eng-cse",
    tag: "Engineering",
    title: "B.Tech — Computer Science",
    short: "AI, Data Science & Software Engineering.",
    img: "/images/program-eng-1.jpg",
    details:
      "4-year B.Tech in Computer Science focused on practical labs, industry internships and research projects. Strong placement support and collaboration with tech firms.",
    badge: "Top Recruiters"
  },
  {
    id: "eng-mech",
    tag: "Engineering",
    title: "B.Tech — Mechanical Engineering",
    short: "Manufacturing, CAD/CAM & Robotics.",
    img: "/images/program-eng-2.jpg",
    details:
      "Hands-on workshops, design labs and industrial visits. Emphasis on mechanical systems, manufacturing and automation.",
    badge: "Well-equipped Labs"
  },
  {
    id: "pharm-bpharm",
    tag: "Pharmacy",
    title: "B.Pharm",
    short: "Pharmacology, Quality Control & Research.",
    img: "/images/program-pharm-1.jpg",
    details:
      "Comprehensive pharmacy program with modern labs, internships in pharmaceutical companies and strong focus on research and regulatory affairs.",
    badge: "Accredited Labs"
  },
  {
    id: "mgmt-bba",
    tag: "Management",
    title: "BBA — Business Analytics",
    short: "Data-driven decision making & industry projects.",
    img: "/images/program-mgmt-1.jpg",
    details:
      "Covers statistics, business strategy, analytics tools and internship placements with corporate partners.",
    badge: "Industry Ties"
  },
  {
    id: "arts-bsc",
    tag: "Arts & Science",
    title: "B.Sc — Biotechnology",
    short: "Molecular biology & research-focused labs.",
    img: "/images/program-bio-1.jpg",
    details:
      "Project-led courses, lab rotations and opportunities for publications and internships in biotech organizations.",
    badge: "Research Focus"
  },
  {
    id: "edu-bed",
    tag: "Education",
    title: "B.Ed — Teacher Education",
    short: "Pedagogy, practicum & community engagement.",
    img: "/images/program-edu-1.jpg",
    details:
      "Teacher training with classroom practicum, modern pedagogy and emphasis on community-oriented education programs.",
    badge: "Community Impact"
  },
];

export default function RayatPrograms() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(null); // program id for modal
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(m.matches);
    const handler = () => setReducedMotion(m.matches);
    m.addEventListener?.("change", handler);
    return () => m.removeEventListener?.("change", handler);
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROGRAMS.filter((p) => {
      const matchesFilter = filter === "All" ? true : p.tag === filter;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        p.details.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  // ESC to close modal
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Programs & Schools</h2>
          <p className="mt-2 text-gray-600 max-w-xl">
            Explore our undergraduate and postgraduate offerings — industry-aligned, research-driven and community-focused.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <div className="flex gap-2 flex-wrap items-center">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${filter === t ? "bg-gradient-to-r from-rose-600 to-amber-400 text-white shadow-lg" : "bg-white border border-gray-200 text-gray-700 hover:shadow-sm"}`}
                aria-pressed={filter === t}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center bg-white rounded-full border border-gray-200 px-3 py-2 ml-0 sm:ml-4 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" /></svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programs..."
              className="bg-transparent outline-none text-sm w-48 md:w-72"
              aria-label="Search programs"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p, i) => (
          <article
            key={p.id}
            className={`group relative rounded-2xl overflow-hidden shadow-lg bg-white transform transition
              ${reducedMotion ? "" : "hover:-translate-y-3 hover:shadow-2xl"}`}
          >
            <div className="relative h-48 w-full">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-semibold shadow">
                {p.tag}
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 text-white text-xs">
                {p.badge}
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.short}</p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActive(p.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600 text-white text-sm hover:scale-[1.02] transition"
                >
                  Quick View
                </button>

                <a href={`/programs/${p.id}`} className="text-sm text-rose-600 hover:underline">
                  View Details →
                </a>
              </div>
            </div>
          </article>
        ))}

        {visible.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            No programs match your search.
          </div>
        )}
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setActive(null)}
            aria-hidden
          />

          <div className="relative z-50 max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="relative md:w-1/2 h-56 md:h-auto">
                <Image
                  src={PROGRAMS.find((x) => x.id === active).img}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6 md:w-1/2">
                <h3 className="text-2xl font-bold">
                  {PROGRAMS.find((x) => x.id === active).title}
                </h3>
                <p className="mt-3 text-gray-700">
                  {PROGRAMS.find((x) => x.id === active).details}
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`/apply?program=${active}`}
                    className="px-4 py-2 rounded-full bg-rose-600 text-white"
                  >
                    Apply Now
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    className="px-4 py-2 rounded-full border"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-10 text-center">
        <a href="/programs" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 text-white shadow-lg hover:scale-105 transition">
          Explore All Programs
        </a>
      </div>
    </section>
  );
}
