"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideInLeft, slideInRight } from "@/lib/motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section ref={ref} id="about" className="section-pad" style={{ background:"#fff" }}>
      <div className="container-pad">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={slideInLeft} initial="hidden" animate={isInView?"visible":"hidden"} className="relative">
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl rotate-12" style={{ border:"3px solid #E8D8FF" }}/>
            <div className="relative rounded-[28px] overflow-hidden flex items-center justify-center"
              style={{ aspectRatio:"4/3", background:"linear-gradient(135deg,#E8D8FF,#D0EEFF)" }}>
              <span style={{ fontSize:90, filter:"drop-shadow(0 8px 24px rgba(0,0,0,0.1))", position:"relative", zIndex:1 }}>🏫</span>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-7 px-7 py-4 rounded-2xl whitespace-nowrap"
              style={{ background:"#fff", boxShadow:"0 12px 48px rgba(26,16,37,0.12)" }}>
              {[["500+","Tutors"],["2,000+","Students"],["95%","Success"]].map(([v,l])=>(
                <div key={l} className="text-center">
                  <strong className="font-display font-bold block" style={{ fontSize:"1.6rem", color:"#1A1025" }}>{v}</strong>
                  <span className="text-[11px]" style={{ color:"#7A6E85" }}>{l}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={slideInRight} initial="hidden" animate={isInView?"visible":"hidden"}>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5"
              style={{ background:"rgba(155,114,207,0.1)", border:"1px solid rgba(155,114,207,0.2)", color:"#9b72cf" }}>
              About Us
            </span>
            <h2 className="font-display font-bold mb-6" style={{ fontSize:"clamp(2rem,3.5vw,3.2rem)", color:"#1A1025", lineHeight:1.15 }}>
              Personalized Learning<br/><em style={{ color:"#9b72cf" }}>That Builds Confidence</em>
            </h2>
            <p className="text-[16px] leading-[1.8] mb-4" style={{ color:"#7A6E85" }}>
              Yuva Home Tutors is a trusted education platform dedicated to providing high-quality, personalized tutoring solutions for students of all academic levels across Navi Mumbai.
            </p>
            <p className="text-[16px] leading-[1.8] mb-9" style={{ color:"#7A6E85" }}>
              We bridge the gap between students and expert tutors through home, group, and online learning — making education effective, flexible, and result-oriented.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-9">
              <div className="rounded-2xl p-5" style={{ background:"#E8D8FF" }}>
                <strong className="font-display font-bold block" style={{ fontSize:"2rem", color:"#1A1025" }}>100%</strong>
                <span className="text-[13px]" style={{ color:"#7A6E85" }}>Safe &amp; Secure</span>
              </div>
              <div className="rounded-2xl p-5" style={{ background:"#D4F5E2" }}>
                <strong className="font-display font-bold block" style={{ fontSize:"2rem", color:"#1A1025" }}>98%</strong>
                <span className="text-[13px]" style={{ color:"#7A6E85" }}>Parent Satisfaction</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="/#contact" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                style={{ background:"#1A1025", textDecoration:"none", fontSize:15 }}>Get Started</a>
              <a href="/#why" className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-full border transition-all duration-200 hover:bg-white"
                style={{ color:"#1A1025", borderColor:"rgba(26,16,37,0.15)", textDecoration:"none", fontSize:15, background:"rgba(255,249,244,0.8)" }}>Learn More</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
