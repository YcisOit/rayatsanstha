"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#670D22] text-white pt-16 pb-10 overflow-hidden">

      {/* Glassy Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-xl pointer-events-none"></div>

      {/* Golden Top Border */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent shadow-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 grid gap-12 md:grid-cols-4 text-sm">

        {/* Logo + Description */}
        <div>
  <img 
    src="/images/logo1.png" 
    className="h-25 mb-3 drop-shadow-[0_10px_25px_rgba(255,195,0,0.5)]"
  />
  
  <p className="text-white/85 leading-relaxed mb-2">
    <span className="text-yellow-300 font-semibold">Rayat Shikshan Sanstha</span> – One of the largest and most respected educational institutions in India,
    dedicated to providing value-based quality education since 1919.
  </p>
  <p className="text-white/70 leading-relaxed mb-3">
    Satara, Maharashtra – 415001 <br />
    India
  </p>

  {/* Social Icons */}
  <div className="flex gap-2 mt-2">
    {[FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp].map((Icon, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.1 }}
        className="p-1 rounded-full bg-white text-[#8A0B36] cursor-pointer transition-all"
      >
        <Icon size={16} />
      </motion.div>
    ))}
  </div>
</div>


        {/* Quick Links */}
        <div>
          <h4 className="text-yellow-300 font-semibold mb-3 border-b border-yellow-400/50 pb-1">Quick Links</h4>
          <ul className="space-y-1">
            {["Academic Calendar","Notice & Circular","Campus Life","Scholarships","Achievements","Student Grievance Cell"].map((link, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-yellow-300 transition-colors">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Sections */}
        <div>
          <h4 className="text-yellow-300 font-semibold mb-3 border-b border-yellow-400/50 pb-1">Main Sections</h4>
          <ul className="space-y-1">
            {["Home","Our Legacy","Institutes","Research","Admissions","Faculty","Campus & Facilities"].map((link, i) => (
              <li key={i}>
                <Link href="#" className="hover:text-yellow-300 transition-colors">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-yellow-300 font-semibold mb-3 border-b border-yellow-400/50 pb-1">Contact Us</h4>
          <p className="mt-2">📞  02162 233 857</p>
          <p>🌐 <Link className="underline hover:text-yellow-300 transition-all" href="#">www.rayatshikshan.edu</Link></p>
          <p>✉ secretary@rayatshikshan.edu</p>
        </div>

      </div>

      {/* Bottom COPYRIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-10 relative z-10 text-center text-xs text-white"
      >
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent my-3" />
        © {new Date().getFullYear()} Rayat Shikshan Sanstha, Satara |
        <span className="text-yellow-300 font-medium">  Powered by Rayat Shikshan Sanstha,YCIS OIT, Satara</span>
      </motion.div>

    </footer>
  );
}
