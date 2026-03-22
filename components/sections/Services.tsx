"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const services = [
  { emoji:"🏠", title:"Home Tutoring (1-on-1)",  desc:"A dedicated tutor for your child at home with complete personal attention and customized lesson plans tailored to their pace.",   bg:"#E8D8FF" },
  { emoji:"🧠", title:"Professional Counselling", desc:"Academic career guidance, stress management, skill development, and parental counselling by experienced professionals.",            bg:"#D4F5E2" },
  { emoji:"👥", title:"Group Tuitions",           desc:"Small group sessions that foster peer learning and collaborative growth in a friendly, structured environment.",                   bg:"#D0EEFF" },
  { emoji:"💻", title:"Online Tutoring",          desc:"Live interactive online sessions from the comfort of home, with the same quality and attention as in-person classes.",           bg:"#FFD6D6" },
  { emoji:"📚", title:"Workshops",               desc:"Intensive short-term workshops for exam preparation, subject mastery, and holistic skill development.",                          bg:"#FFE4CC" },
  { emoji:"🏆", title:"Coaching Classes",         desc:"Structured coaching for JEE, NEET, and board exams with proven strategies and expert faculty guidance.",                        bg:"#FFF3CC" },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} id="services" className="section-pad" style={{ background:"linear-gradient(180deg,#fff 0%,#FFF9F4 100%)" }}>
      <style>{`
        .service-card { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s; border: 2px solid transparent; background: #fff; border-radius: 24px; padding: 32px; cursor: default; }
        .service-card:hover { transform: translateY(-8px); box-shadow: 0 24px 64px rgba(26,16,37,0.1); }
        .service-card .svc-icon { transition: transform 0.3s cubic-bezier(0.16,1,0.3,1); }
        .service-card:hover .svc-icon { transform: scale(1.12); }
      `}</style>
      <div className="container-pad">
        <motion.div variants={fadeUp} initial="hidden" animate={isInView?"visible":"hidden"} className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5"
            style={{ background:"rgba(155,114,207,0.1)", border:"1px solid rgba(155,114,207,0.2)", color:"#9b72cf" }}>
            Our Services
          </span>
          <h2 className="font-display font-bold mb-4" style={{ fontSize:"clamp(2rem,3.5vw,3.2rem)", color:"#1A1025", lineHeight:1.15 }}>
            Everything Your Child<br/><em style={{ color:"#9b72cf" }}>Needs to Excel</em>
          </h2>
          <p className="text-[16px] leading-[1.7] mx-auto max-w-[560px]" style={{ color:"#7A6E85" }}>
            Flexible learning options crafted for every student&apos;s unique needs and schedule.
          </p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView?"visible":"hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <motion.div key={s.title} variants={staggerItem} className="service-card">
              <div className="svc-icon w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-2xl mb-6"
                style={{ background: s.bg }}>{s.emoji}</div>
              <h3 className="font-semibold text-[17px] mb-3" style={{ color:"#1A1025" }}>{s.title}</h3>
              <p className="text-[14px] leading-[1.75]" style={{ color:"#7A6E85" }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
