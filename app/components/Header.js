"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Top strip links
const topLinks = [
  { label: "Recruitment", href: "#" },
  { label: "Quick Links", href: "#" },
  { label: "eBooks", href: "#" },
  { label: "Online Info", href: "#" },
  { label: "Social Media", href: "#" },
  { label: "Online Education", href: "#" },
  { label: "Distance Education", href: "#" },
  { label: "Tender", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Login", href: "#" },
];

// Main navbar with separate dropdowns
const mainNav = [
 
  {
    label: "About",
    href: "#",
    dropdown: [
      { label: "History", href: "/about" },
      // { label: "Aims & Objectives ", href: "/about/key-highlights" },
      // { label: "Awards & Honours", href: "/about/important-links" },
    ],
  },
  {
    label: "Branches",
    href: "#",
    dropdown: [
      { label: "College List", href: "/colleges" },
      { label: "Ashramshala", href: "/ashramshala" },
      { label: "Teacher Training Schools", href: "/teachertraining" },
    ],
  },
  {
    label: "Achievements",
    href: "#",
    dropdown: [
      { label: "Awards", href: "#" },
      { label: "Rankings", href: "#" },
      { label: "Notable Alumni", href: "#" },
    ],
  },
  {
    label: "Management",
    href: "#",
    dropdown: [
      // { label: "Board Members", href: "#" },
      // { label: "Policies", href: "#" },
      // { label: "Vision & Mission", href: "#" },
    ],
  },
  {
    label: "Feedback",
    href: "#",
    dropdown: null,
  },
];


export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-xl border-b"
          : "bg-transparent"
      }`}
    >
      {/* Top Strip */}
      <div className="hidden md:block bg-gradient-to-r from-[#590010] via-[#8A0B36] to-[#590010] text-center border-b border-amber-600/80">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <nav className="flex flex-wrap gap-4 text-[14px] uppercase text-white font-semibold tracking-wide">
            {topLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-amber-400 hover:scale-105 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-amber-400 to-[#8A0B36] blur-sm opacity-70"></div>
              <div className="relative h-30 w-30 rounded-full bg-white shadow-lg overflow-hidden flex items-center justify-center border border-amber-300">
                <Image
                  src="/images/logo1.png"
                  alt="logo"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>

            <div className="leading-tight">
              <h1 className="text-[32px] font-bold text-slate-900 uppercase tracking-tight">
                Rayat Shikshan Sanstha
              </h1>
              <span className="text-[26px] uppercase font-semibold bg-gradient-to-r from-[#8A0B36] to-amber-600 bg-clip-text text-transparent">
                Satara
              </span>
              <p className="text-[16px] text-slate-900">
                Transforming Rural Education
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-5 font-semibold text-black">
            {mainNav.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 rounded-xl transition-all ${
                    isActive(item.href)
                      ? "text-[#8A0B36]"
                      : "hover:text-[#8A0B36]"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <span className="ml-1 text-[12px]">▾</span>}
                </Link>

                {/* Hover Underline glow */}
                <div
                  className={`mx-auto h-[3px] w-0 bg-gradient-to-r from-amber-400 to-[#8A0B36] rounded-full transition-all group-hover:w-full ${
                    isActive(item.href) ? "w-full" : ""
                  }`}
                />

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    <div className="w-72 rounded-xl border border-amber-200 bg-white/90 shadow-xl backdrop-blur p-4">
                      <ul className="space-y-2">
                        {item.dropdown.map((dropItem) => (
  <li key={dropItem.label}>
    <Link
      href={dropItem.href}
      className="block px-3 py-2 rounded-lg hover:bg-amber-50 hover:text-[#8A0B36] transition"
    >
      {dropItem.label}
    </Link>
  </li>
))}

                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center border rounded-lg"
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-black" />
              <span className="block h-0.5 w-5 bg-black" />
              <span className="block h-0.5 w-5 bg-black" />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white/95 border-t px-4 pb-4 pt-3 text-[16px] font-semibold shadow-lg">
            {topLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 border-b"
              >
                {item.label}
              </Link>
            ))}

            {mainNav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 border-b"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
  <ul className="pl-4 mb-2">
    {item.dropdown.map((dropItem) => (
      <li key={dropItem.label} className="py-1">
        <Link
          href={dropItem.href}
          className="block py-2 hover:text-[#8A0B36] hover:bg-amber-50 rounded"
        >
          {dropItem.label}
        </Link>
      </li>
    ))}
  </ul>
)}

              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
