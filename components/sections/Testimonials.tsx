"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const testimonials = [
  { name:"Sachin Dhage",       role:"Parent",                     rating:5, avatar:"SD", avatarBg:"linear-gradient(135deg,#9b72cf,#818cf8)", text:"Two years of very good experience and great improvement in maths concepts. The tutors are patient and explain every concept with clarity." },
  { name:"Shaan Wanage",       role:"Student — 12th CBSE",        rating:4, avatar:"SW", avatarBg:"linear-gradient(135deg,#52b788,#38bdf8)", text:"I took tuitions for accounts and maths. The overall experience was really good — the teachers helped me understand complex topics with ease." },
  { name:"Aatish Piyada",      role:"Student — 12th ISCE",        rating:5, avatar:"AP", avatarBg:"linear-gradient(135deg,#f59e0b,#f97316)", text:"I used to struggle a lot, but the teachers explain everything so clearly. Their guidance really improved my confidence. A very helpful experience!" },
  { name:"Madhuri Khandagale", role:"Parent — 10th CBSE, Kamothe",rating:5, avatar:"MK", avatarBg:"linear-gradient(135deg,#e879f9,#c084fc)", text:"My child improved a lot in Maths, Science, and SST. They provided all study material needed for exams. Highly recommended!" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} id="testimonials" className="section-pad" style={{ background:"#fff" }}>
      <style>{`
        .testi-card { background:#FFF9F4; border:1.5px solid rgba(26,16,37,0.08); border-radius:24px; padding:32px; transition:transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s; cursor:default; display:flex; flex-direction:column; }
        .testi-card:hover { transform:translateY(-6px); box-shadow:0 20px 60px rgba(26,16,37,0.08); }
      `}</style>
      <div className="container-pad">
        <motion.div variants={fadeUp} initial="hidden" animate={isInView?"visible":"hidden"} className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5"
            style={{ background:"rgba(155,114,207,0.1)", border:"1px solid rgba(155,114,207,0.2)", color:"#9b72cf" }}>Testimonials</span>
          <h2 className="font-display font-bold mb-4" style={{ fontSize:"clamp(2rem,3.5vw,3.2rem)", color:"#1A1025", lineHeight:1.15 }}>
            Families Love<br/><em style={{ color:"#9b72cf" }}>Yuva Home Tutors</em>
          </h2>
          <p className="text-[16px] leading-[1.7] mx-auto max-w-[480px]" style={{ color:"#7A6E85" }}>
            Real words from real parents and students across Navi Mumbai.
          </p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView?"visible":"hidden"}
          className="grid sm:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={staggerItem} className="testi-card">
              <div className="flex gap-1 mb-4">
                {Array.from({length:5}).map((_,i)=>(
                  <Star key={i} size={15} style={{ fill:i<t.rating?"#f59e0b":"#e2e8f0", color:i<t.rating?"#f59e0b":"#e2e8f0" }}/>
                ))}
              </div>
              <div style={{ fontSize:32, lineHeight:1, color:"#E8D8FF", fontFamily:"Georgia", marginBottom:12 }}>&ldquo;</div>
              <p className="text-[15px] leading-[1.75] mb-6 flex-1" style={{ color:"#7A6E85", fontStyle:"italic" }}>{t.text}</p>
              <div className="flex items-center gap-4 pt-5" style={{ borderTop:"1px solid rgba(26,16,37,0.07)" }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0"
                  style={{ background:t.avatarBg }}>{t.avatar}</div>
                <div>
                  <div className="font-semibold text-[14px]" style={{ color:"#1A1025" }}>{t.name}</div>
                  <div className="text-[12px]" style={{ color:"#7A6E85" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate={isInView?"visible":"hidden"} className="text-center mt-10">
          <div className="inline-flex items-center gap-4 px-7 py-4 rounded-2xl border"
            style={{ background:"#fff", borderColor:"rgba(26,16,37,0.1)", boxShadow:"0 4px 24px rgba(26,16,37,0.06)" }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
              style={{ background:"linear-gradient(135deg,#4285f4,#34a853,#fbbc05,#ea4335)" }}>G</div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {Array.from({length:4}).map((_,i)=><Star key={i} size={13} style={{ fill:"#f59e0b", color:"#f59e0b" }}/>)}
                <Star size={13} style={{ fill:"#e2e8f0", color:"#e2e8f0" }}/>
                <strong className="text-[13px] ml-1" style={{ color:"#1A1025" }}>4.5</strong>
              </div>
              <div className="text-[12px]" style={{ color:"#7A6E85" }}>91 Google Reviews · Nerul, Navi Mumbai</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
