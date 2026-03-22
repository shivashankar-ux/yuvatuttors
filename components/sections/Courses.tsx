"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const courses = [
  { badge:"Popular",    badgeBg:"#1A1025",   badgeColor:"#fff",     icon:"🎓", bg:"#E8D8FF", title:"9th–10th Grade",     boards:["ICSE","CBSE","IGCSE","STATE"],  subjects:["Mathematics","Science-PCB","Social Studies","Languages"],  featured:true  },
  { badge:null,         badgeBg:"",          badgeColor:"",         icon:"📖", bg:"#D4F5E2", title:"6th–8th Grade",      boards:["ICSE","CBSE","STATE"],          subjects:["Mathematics","Science-PCB","Social Studies","Languages"],  featured:false },
  { badge:"Foundation", badgeBg:"#D4F5E2",   badgeColor:"#15803d",  icon:"🌱", bg:"#FFE4CC", title:"Primary (1st–5th)",  boards:["All Boards"],                   subjects:["Mathematics","EVS","English","General Science"],           featured:false },
  { badge:"Featured",   badgeBg:"#9b72cf",   badgeColor:"#fff",     icon:"🚀", bg:"#D0EEFF", title:"11th–12th Science",  boards:["JEE/NEET","ISC","CBSE","IB"],   subjects:["Mathematics","Physics","Chemistry","Biology"],             featured:true  },
  { badge:null,         badgeBg:"",          badgeColor:"",         icon:"💼", bg:"#FFF3CC", title:"11th–12th Commerce", boards:["ICSE","CBSE","IB","STATE"],      subjects:["Accounts","Economics","Business Studies","Maths/IP/SP"],  featured:false },
];

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} id="courses" className="section-pad" style={{ background:"#fff" }}>
      <style>{`
        .course-card { background:#fff; border:2px solid rgba(26,16,37,0.08); border-radius:24px; padding:28px; transition:transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s; cursor:default; position:relative; overflow:hidden; }
        .course-card:hover { transform:translateY(-6px); box-shadow:0 20px 60px rgba(26,16,37,0.09); }
        .course-card.featured { border-color:rgba(155,114,207,0.4); background:linear-gradient(145deg,rgba(232,216,255,0.3),rgba(208,238,255,0.2)); }
        .course-cta-btn { display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:#9b72cf; background:none; border:none; cursor:pointer; padding:0; transition:gap 0.2s; }
        .course-cta-btn:hover { gap:12px; }
      `}</style>
      <div className="container-pad">
        <motion.div variants={fadeUp} initial="hidden" animate={isInView?"visible":"hidden"} className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5"
            style={{ background:"rgba(155,114,207,0.1)", border:"1px solid rgba(155,114,207,0.2)", color:"#9b72cf" }}>Our Courses</span>
          <h2 className="font-display font-bold mb-4" style={{ fontSize:"clamp(2rem,3.5vw,3.2rem)", color:"#1A1025", lineHeight:1.15 }}>
            Comprehensive Programs<br/><em style={{ color:"#9b72cf" }}>For All Grades &amp; Boards</em>
          </h2>
          <p className="text-[16px] leading-[1.7] mx-auto max-w-[560px]" style={{ color:"#7A6E85" }}>
            Covering CBSE, ICSE, IGCSE, IB, State &amp; JEE/NEET — from primary to competitive exams.
          </p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" animate={isInView?"visible":"hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c) => (
            <motion.div key={c.title} variants={staggerItem} className={`course-card${c.featured?" featured":""}`}>
              {c.badge && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-[0.1em] px-3 py-1 rounded-full"
                  style={{ background:c.badgeBg, color:c.badgeColor }}>{c.badge}</span>
              )}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-5" style={{ background:c.bg }}>{c.icon}</div>
              <h3 className="font-display font-bold text-[1.3rem] mb-4" style={{ color:"#1A1025" }}>{c.title}</h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {c.boards.map(b => (
                  <span key={b} className="text-[10px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full"
                    style={{ background:"rgba(155,114,207,0.1)", color:"#9b72cf", border:"1px solid rgba(155,114,207,0.2)" }}>{b}</span>
                ))}
              </div>
              <ul className="mb-6 space-y-1.5">
                {c.subjects.map(s => (
                  <li key={s} className="flex items-center gap-2 text-[13px]"
                    style={{ color:"#7A6E85", borderBottom:"1px solid rgba(26,16,37,0.06)", paddingBottom:5 }}>
                    <span style={{ width:5,height:5,borderRadius:"50%",background:"#9b72cf",flexShrink:0,display:"block" }}/>
                    {s}
                  </li>
                ))}
              </ul>
              <button className="course-cta-btn">Enroll Now <ArrowRight size={14}/></button>
            </motion.div>
          ))}
          {/* CTA card */}
          <motion.div variants={staggerItem}
            className="rounded-3xl p-7 flex flex-col justify-center"
            style={{ background:"#1A1025", border:"2px solid #1A1025" }}>
            <div className="text-4xl mb-5">✨</div>
            <h3 className="font-display font-bold text-[1.4rem] text-white mb-3">Can&apos;t find your grade?</h3>
            <p className="text-[14px] leading-[1.7] mb-6" style={{ color:"rgba(255,255,255,0.5)" }}>We cover all grades and boards. Contact us for a custom learning plan.</p>
            <a href="/#contact" className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color:"#c084fc", textDecoration:"none" }}>
              Talk to Us <ArrowRight size={14}/>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
