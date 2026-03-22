"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About",        href: "/#about" },
  { label: "Services",     href: "/#services" },
  { label: "Courses",      href: "/#courses" },
  { label: "Why Us",       href: "/#why" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact",      href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname                  = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[5vw]",
          scrolled
            ? "bg-[rgba(255,249,244,0.92)] backdrop-blur-xl shadow-sm shadow-[rgba(26,16,37,0.06)]"
            : "bg-transparent"
        )}
        style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline group">
          <div
            style={{
              width: 40, height: 40, borderRadius: 12,
              background: "linear-gradient(135deg,#E8D8FF,#D0EEFF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20,
              color: "#1A1025",
              boxShadow: "0 4px 16px rgba(155,114,207,0.25)",
              transition: "transform 0.2s",
            }}
            className="group-hover:scale-105"
          >
            Y
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <strong style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#1A1025", display: "block" }}>Yuva</strong>
            <span style={{ fontSize: 10, fontWeight: 500, color: "#7A6E85", textTransform: "uppercase", letterSpacing: "0.12em" }}>Home Tutors</span>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                "text-[#7A6E85] hover:text-[#1A1025] hover:bg-[rgba(26,16,37,0.05)]"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/917045992904"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#25D366,#1aab50)", boxShadow: "0 4px 20px rgba(37,211,102,0.3)" }}
          >
            <svg viewBox="0 0 24 24" style={{ width:16,height:16,fill:"#fff" }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#1A1025] hover:bg-[rgba(26,16,37,0.05)] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }}
            className="fixed top-[72px] left-0 right-0 z-40 border-b px-[5vw] py-4 flex flex-col gap-1"
            style={{ background: "rgba(255,249,244,0.97)", backdropFilter: "blur(20px)", borderColor: "rgba(26,16,37,0.08)" }}
          >
            {links.map((l, i) => (
              <motion.div key={l.href} initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ delay: i*0.04 }}>
                <Link href={l.href} onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-[15px] font-medium text-[#1A1025] hover:bg-[#E8D8FF] transition-colors">
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <a href="https://wa.me/917045992904" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg,#25D366,#1aab50)" }}>
              WhatsApp Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
