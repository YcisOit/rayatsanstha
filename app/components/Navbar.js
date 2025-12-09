"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/institutions", label: "Institutions" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white/80 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-orange-500 to-emerald-500 text-white flex items-center justify-center text-xs font-extrabold shadow-lg shadow-orange-500/30">
            RSS
          </div>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold text-slate-900">
              Rayat Shikshan Sanstha
            </p>
            <p className="text-[11px] text-slate-500">Satara, Maharashtra</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-slate-600 hover:text-slate-900 transition"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-emerald-500 transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/admissions"
            className="ml-2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-1.5 text-[11px] font-semibold text-white shadow-md shadow-orange-500/30 hover:brightness-110"
          >
            🎓 Apply / Join
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 p-2 bg-white/80"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Toggle Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-slate-900" />
            <span className="block h-0.5 w-4 bg-slate-900" />
            <span className="block h-0.5 w-4 bg-slate-900" />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-700 py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-xs font-semibold text-white shadow"
              onClick={() => setOpen(false)}
            >
              🎓 Apply / Join
            </Link>
          </nav>
        </div>
      )}

      {/* Bottom gradient border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-orange-500 via-emerald-500 to-sky-500 opacity-80" />
    </header>
  );
}
