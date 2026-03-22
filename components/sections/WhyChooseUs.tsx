"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const reasons = [
  { emoji:"🛡️", bg:"rgba(232,216,255,0.15)", title:"Verified & Expert Tutors",  desc:"Rigorous background checks and proven teaching expertise for every tutor on our platform." },
  { emoji:"📈", bg:"rgba(212,245,226,0.15)", title:"Proven Results",             desc:"95% of students show significant grade improvement within just 3 months of joining." },
  { emoji:"🗓️", bg:"rgba(208,238,255,0.15)", title:"Flexible Scheduling",        desc:"We work around your schedule. Choose any time slot that works best for your child." },
  { emoji:"🏠", bg:"rgba(255,214,214,0.15)", title:"Home & Online Comfort",      desc:"Learn from the comfort of your home or choose online — quality stays the same." },
  { emoji:"📋", bg:"rgba(255,243,204,0.15)", title:"Personalized Curriculum",    desc:"Customized study plans designed around your child's unique learning style and pace." },
  { emoji:"📊", bg:"rgba(232,216,255,0.15)", title:"Regular Progress Reports",   desc:"Monthly reports and parent-teacher meetings to track every step of improvement." },
];

const bigStats = [
  { val:"95+", lbl:"Success Rate" }, { val:"2000+", lbl:"Students Taught" },
  { val:"500+", lbl:"Expert Tutors" }, { val:"98+", lbl:"Parent Satisfaction" },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} id="why" className="section-pad relative overflow-hidden"
      style={{ background:"linear-gradient(135deg,#1A1025 0%,#2D1F3D 100%)" }}>
      <style>{`
        .why-card { background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:28px; transition:background 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1); backdrop-filter:blur(10px); cursor:default; }
        .why-card:hover { background:rgba(255,255,255,0.1); transform:translateY(-4px); }
      `}</style>
      <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse 60% 50% at 80% 20%,rgba(155,114,207,0.25) 0%,transparent 60%),radial-gradient(ellipse 50% 40% at 20% 80%,rgba(82,183,136,0.1) 0%,transparent 60%)" }}/>
      <div className="container-pad relative z-10">
        <div className="flex justify-between items-end gap-10 mb-16 flex-wrap">
          <motion.div variants={fadeUp} initial="hidden" animate={isInView?"visible":"hidden"}>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5"
              style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.15)", color:"rgba(255,255,255,0.7)" }}>
              Why Choose Us
            </span>
            <h2 className="font-display font-bold" style={{ fontSize:"clamp(2rem,3.5vw,3.2rem)", color:"#fff", lineHeight:1.15 }}>
              The Smart Choice for<br/><em style={{ color:"#c084fc" }}>Your Child&apos;s Future</em>
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} initial="hidden" animate={isInView?"visible":"hidden"}
            className="text-[16px] leading-[1.7] max-w-[380px] text-right hidden lg:block" style={{ color:"rgba(255,255,255,0.5)" }}>
            Thousands of families across Navi Mumbai trust Yuva for consistent, proven results.
          </motion.p>
        </div>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView?"visible":"hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {reasons.map((r) => (
            <motion.div key={r.title} variants={staggerItem} className="why-card">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5" style={{ background:r.bg }}>{r.emoji}</div>
              <h3 className="font-semibold text-[16px] text-white mb-2">{r.title}</h3>
              <p className="text-[13px] leading-[1.7]" style={{ color:"rgba(255,255,255,0.5)" }}>{r.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate={isInView?"visible":"hidden"}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-8 rounded-3xl"
          style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)" }}>
          {bigStats.map((s) => (
            <div key={s.lbl} className="text-center">
              <div className="font-display font-bold" style={{ fontSize:"clamp(2rem,3vw,3rem)", background:"linear-gradient(120deg,#c084fc,#818cf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                {s.val}
              </div>
              <div className="text-[12px] mt-1" style={{ color:"rgba(255,255,255,0.45)" }}>{s.lbl}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
