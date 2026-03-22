"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const steps = [
  { n:1, emoji:"💬", bg:"linear-gradient(135deg,#E8D8FF,#D0EEFF)", title:"Free Consultation", desc:"Tell us your requirements, grade, subjects, and learning goals." },
  { n:2, emoji:"🎯", bg:"linear-gradient(135deg,#D4F5E2,#D0EEFF)", title:"Tutor Matching",    desc:"We find the perfect tutor based on your subject, board, and area." },
  { n:3, emoji:"▶️", bg:"linear-gradient(135deg,#FFE4CC,#FFF3CC)",  title:"Free Demo Class",  desc:"Experience our teaching methodology first-hand — zero commitment." },
  { n:4, emoji:"🚀", bg:"linear-gradient(135deg,#FFF3CC,#FFE4CC)",  title:"Start Learning",   desc:"Begin your journey towards academic excellence and confidence." },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section ref={ref} className="section-pad" style={{ background:"#FFF9F4" }}>
      <div className="container-pad">
        <motion.div variants={fadeUp} initial="hidden" animate={isInView?"visible":"hidden"} className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5"
            style={{ background:"rgba(155,114,207,0.1)", border:"1px solid rgba(155,114,207,0.2)", color:"#9b72cf" }}>
            How It Works
          </span>
          <h2 className="font-display font-bold mb-4" style={{ fontSize:"clamp(2rem,3.5vw,3.2rem)", color:"#1A1025", lineHeight:1.15 }}>
            Start Learning in<br/><em style={{ color:"#9b72cf" }}>4 Simple Steps</em>
          </h2>
          <p className="text-[16px] leading-[1.7] mx-auto max-w-[480px]" style={{ color:"#7A6E85" }}>
            From your first call to your first class — we make it effortless.
          </p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView?"visible":"hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector */}
          <div className="hidden lg:block absolute" style={{ top:36, left:"10%", right:"10%", height:2, background:"linear-gradient(90deg,#E8D8FF,#D0EEFF,#D4F5E2,#FFE4CC)", zIndex:0 }}/>
          {steps.map((s) => (
            <motion.div key={s.n} variants={staggerItem}
              className="flex flex-col items-center text-center relative z-10 group cursor-default">
              <div className="relative mb-6">
                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-[28px] border-[3px] border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                  style={{ background:s.bg, boxShadow:"0 8px 24px rgba(26,16,37,0.1)" }}>
                  {s.emoji}
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                  style={{ background:"#1A1025" }}>{s.n}</div>
              </div>
              <h3 className="font-semibold text-[15px] mb-2" style={{ color:"#1A1025" }}>{s.title}</h3>
              <p className="text-[13px] leading-[1.65] max-w-[180px]" style={{ color:"#7A6E85" }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate={isInView?"visible":"hidden"} className="text-center mt-14">
          <a href="/#contact"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
            style={{ background:"#1A1025", boxShadow:"0 8px 32px rgba(26,16,37,0.2)", fontSize:15, textDecoration:"none" }}>
            Book Your Free Demo Today <ArrowRight size={16}/>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
