"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const stats = [
  { value: "2000+", label: "Happy Students",  bg: "#E8D8FF" },
  { value: "500+",  label: "Expert Tutors",   bg: "#D4F5E2" },
  { value: "95%",   label: "Success Rate",    bg: "#FFE4CC" },
  { value: "15+",   label: "Areas Covered",   bg: "#D0EEFF" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: 72 }}
    >
      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 10% 20%, rgba(232,216,255,0.6) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 80%, rgba(208,238,255,0.5) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,228,204,0.4) 0%, transparent 70%), #FFF9F4"
        }}
      />

      {/* Blobs */}
      <div className="blob" style={{ width:400,height:400,background:"#E8D8FF",top:-100,right:-80,animationDelay:"0s" }}/>
      <div className="blob" style={{ width:300,height:300,background:"#D4F5E2",bottom:0,left:-60,animationDelay:"-3s" }}/>
      <div className="blob" style={{ width:200,height:200,background:"#FFE4CC",top:"40%",right:"20%",animationDelay:"-5s" }}/>

      <div className="container-pad relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={staggerItem}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] px-4 py-2 rounded-full mb-7"
                style={{ background:"rgba(155,114,207,0.1)", border:"1px solid rgba(155,114,207,0.25)", color:"#9b72cf" }}>
                ⭐ Navi Mumbai&apos;s #1 Tutoring Platform
              </span>
            </motion.div>
            <motion.h1 variants={staggerItem}
              className="font-display font-bold leading-[1.08] mb-7"
              style={{ fontSize:"clamp(3rem,5.5vw,5.2rem)", letterSpacing:"-0.02em", color:"#1A1025" }}>
              Where Every<br/>Child <em style={{ fontStyle:"italic", background:"linear-gradient(120deg,#c084fc,#818cf8,#38bdf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Learns</em><br/>&amp; Thrives
            </motion.h1>
            <motion.p variants={staggerItem} className="text-[17px] leading-[1.75] mb-10 max-w-[480px]" style={{ color:"#7A6E85" }}>
              Personalized home, group &amp; online tutoring with verified expert tutors — designed to build confidence, boost grades, and ignite a love for learning.
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-12">
              <Link href="/#contact"
                className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 group"
                style={{ background:"#1A1025", boxShadow:"0 8px 32px rgba(26,16,37,0.2)", fontSize:15 }}>
                Book Free Demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
              <Link href="/#courses"
                className="inline-flex items-center gap-2 font-medium px-8 py-4 rounded-full border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
                style={{ color:"#1A1025", borderColor:"rgba(26,16,37,0.15)", fontSize:15, background:"rgba(255,249,244,0.8)", backdropFilter:"blur(10px)" }}>
                Explore Courses
              </Link>
            </motion.div>
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-6">
              {[["#9b72cf","Verified Tutors"],["#52b788","Free Demo Class"],["#f59e0b","Pay Per Session"]].map(([c,t])=>(
                <div key={t} className="flex items-center gap-2 text-sm font-medium" style={{ color:"#7A6E85" }}>
                  <div style={{ width:6,height:6,borderRadius:"50%",background:c }}/>
                  {t}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — stats card */}
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.8, ease:[0.16,1,0.3,1] }}
            className="hidden lg:block relative">
            <div className="rounded-[28px] p-9"
              style={{ background:"rgba(255,255,255,0.7)", backdropFilter:"blur(30px)", border:"1px solid rgba(255,255,255,0.9)", boxShadow:"0 24px 80px rgba(26,16,37,0.1)" }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-5" style={{ color:"#7A6E85" }}>Our Numbers</p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-[20px] p-5 text-center transition-transform duration-300 hover:-translate-y-1 cursor-default"
                    style={{ background: s.bg }}>
                    <div className="font-display font-bold leading-none mb-1" style={{ fontSize:"2.4rem", color:"#1A1025" }}>{s.value}</div>
                    <div className="text-[12px]" style={{ color:"#7A6E85" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating mini cards */}
            <div className="absolute -top-5 -right-8 flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background:"rgba(255,255,255,0.92)", backdropFilter:"blur(20px)", border:"1px solid rgba(255,255,255,0.95)", boxShadow:"0 8px 30px rgba(26,16,37,0.1)", animation:"floatCard 6s ease-in-out infinite", whiteSpace:"nowrap" }}>
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-lg" style={{ background:"#D4F5E2" }}>✅</div>
              <div>
                <strong className="block text-[13px] font-semibold" style={{ color:"#1A1025" }}>New Enrollment</strong>
                <span className="text-[11px]" style={{ color:"#7A6E85" }}>Just 2 mins ago · Nerul</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-8 flex items-center gap-3 px-5 py-3 rounded-2xl"
              style={{ background:"rgba(255,255,255,0.92)", backdropFilter:"blur(20px)", border:"1px solid rgba(255,255,255,0.95)", boxShadow:"0 8px 30px rgba(26,16,37,0.1)", animation:"floatCard 6s 2s ease-in-out infinite", whiteSpace:"nowrap" }}>
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-lg" style={{ background:"#E8D8FF" }}>⭐</div>
              <div>
                <strong className="block text-[13px] font-semibold" style={{ color:"#1A1025" }}>4.5 Google Rating</strong>
                <span className="text-[11px]" style={{ color:"#7A6E85" }}>91 verified reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0" style={{ lineHeight:0 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" style={{ display:"block", background:"#FFF9F4" }}>
          <path fill="#ffffff" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      `}</style>
    </section>
  );
}
