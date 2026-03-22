"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { slideInLeft, slideInRight } from "@/lib/motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once:true, margin:"-80px" });
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]           = useState({ name:"", phone:"", email:"", service:"", message:"" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async () => {
    if (!form.name || !form.phone) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="contact" className="section-pad"
      style={{ background:"linear-gradient(135deg,#FFF9F4,rgba(232,216,255,0.3))" }}>
      <div className="container-pad">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <motion.div variants={slideInLeft} initial="hidden" animate={isInView?"visible":"hidden"}>
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5"
              style={{ background:"rgba(155,114,207,0.1)", border:"1px solid rgba(155,114,207,0.2)", color:"#9b72cf" }}>Contact Us</span>
            <h2 className="font-display font-bold mb-4" style={{ fontSize:"clamp(2rem,3.5vw,3.2rem)", color:"#1A1025", lineHeight:1.15 }}>
              Let&apos;s Talk About<br/><em style={{ color:"#9b72cf" }}>Your Learning Goals</em>
            </h2>
            <p className="text-[15px] leading-[1.75] mb-8" style={{ color:"#7A6E85" }}>
              Have questions or want to enroll your child? Reach out — our team will get back to you within a few hours.
            </p>
            <div className="rounded-3xl p-9 text-white" style={{ background:"#1A1025" }}>
              <h3 className="font-display font-bold text-[1.7rem] text-white mb-2">Get in Touch</h3>
              <p className="text-[14px] mb-8" style={{ color:"rgba(255,255,255,0.5)" }}>We&apos;re here to help you find the right tutor.</p>
              {[
                { icon:"📞", label:"Phone / WhatsApp", value:"+91 70459 92904",              href:"tel:+917045992904" },
                { icon:"✉️", label:"Email",             value:"yuvahometutors@gmail.com",      href:"mailto:yuvahometutors@gmail.com" },
                { icon:"📍", label:"Address",           value:"G-09M, Haware Centurion Commercial Complex, Nerul East, Sector 19A, Navi Mumbai – 400706", href:"#" },
              ].map(({ icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-4 mb-5 group" style={{ textDecoration:"none" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background:"rgba(255,255,255,0.1)" }}>{icon}</div>
                  <div>
                    <strong className="block text-[11px] uppercase tracking-[0.1em] mb-0.5" style={{ color:"rgba(255,255,255,0.4)" }}>{label}</strong>
                    <span className="text-[14px] transition-colors" style={{ color:"rgba(255,255,255,0.8)" }}>{value}</span>
                  </div>
                </a>
              ))}
              <div className="flex flex-wrap gap-4 pt-5" style={{ borderTop:"1px solid rgba(255,255,255,0.1)" }}>
                {["🔒 100% Safe","💳 Pay Per Session","🔄 Tutor Replacement"].map(t => (
                  <span key={t} className="text-[12px]" style={{ color:"rgba(255,255,255,0.45)" }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
          {/* Form */}
          <motion.div variants={slideInRight} initial="hidden" animate={isInView?"visible":"hidden"}>
            <div className="rounded-3xl p-9 border" style={{ background:"#fff", borderColor:"rgba(26,16,37,0.08)", boxShadow:"0 12px 48px rgba(26,16,37,0.06)" }}>
              {submitted ? (
                <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background:"#D4F5E2" }}>
                    <CheckCircle2 size={32} style={{ color:"#15803d" }}/>
                  </div>
                  <h3 className="font-bold text-[20px] mb-2" style={{ color:"#1A1025" }}>Message Sent!</h3>
                  <p className="text-[14px]" style={{ color:"#7A6E85" }}>Our team will reach out within 24 hours.</p>
                </motion.div>
              ) : (
                <div>
                  <h3 className="font-semibold text-[22px] mb-7" style={{ color:"#1A1025" }}>Send Us a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {[{n:"name",p:"Your full name",l:"Full Name *",t:"text"},{n:"phone",p:"+91 XXXXX XXXXX",l:"Phone Number *",t:"tel"}].map(f=>(
                      <div key={f.n}>
                        <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color:"#7A6E85" }}>{f.l}</label>
                        <input name={f.n} type={f.t} placeholder={f.p} value={(form as Record<string,string>)[f.n]} onChange={onChange}
                          className="w-full text-[14px] px-4 py-3 rounded-2xl outline-none transition-all duration-200"
                          style={{ background:"#FFF9F4", border:"1.5px solid rgba(26,16,37,0.08)", color:"#1A1025", fontFamily:"var(--font-body)" }}
                          onFocus={e=>{ e.currentTarget.style.borderColor="rgba(155,114,207,0.5)"; e.currentTarget.style.boxShadow="0 0 0 4px rgba(155,114,207,0.1)"; }}
                          onBlur={e=>{ e.currentTarget.style.borderColor="rgba(26,16,37,0.08)"; e.currentTarget.style.boxShadow="none"; }}/>
                      </div>
                    ))}
                  </div>
                  {[{n:"email",p:"your@email.com",l:"Email Address",t:"email"}].map(f=>(
                    <div key={f.n} className="mb-4">
                      <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color:"#7A6E85" }}>{f.l}</label>
                      <input name={f.n} type={f.t} placeholder={f.p} value={(form as Record<string,string>)[f.n]} onChange={onChange}
                        className="w-full text-[14px] px-4 py-3 rounded-2xl outline-none transition-all duration-200"
                        style={{ background:"#FFF9F4", border:"1.5px solid rgba(26,16,37,0.08)", color:"#1A1025", fontFamily:"var(--font-body)" }}
                        onFocus={e=>{ e.currentTarget.style.borderColor="rgba(155,114,207,0.5)"; e.currentTarget.style.boxShadow="0 0 0 4px rgba(155,114,207,0.1)"; }}
                        onBlur={e=>{ e.currentTarget.style.borderColor="rgba(26,16,37,0.08)"; e.currentTarget.style.boxShadow="none"; }}/>
                    </div>
                  ))}
                  <div className="mb-4">
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color:"#7A6E85" }}>Select Service</label>
                    <select name="service" value={form.service} onChange={onChange}
                      className="w-full text-[14px] px-4 py-3 rounded-2xl outline-none"
                      style={{ background:"#FFF9F4", border:"1.5px solid rgba(26,16,37,0.08)", color:"#1A1025", fontFamily:"var(--font-body)", appearance:"none" }}>
                      <option value="">Choose a service...</option>
                      <option>Home Tutoring (1-on-1)</option>
                      <option>Group Tuitions</option>
                      <option>Online Tutoring</option>
                      <option>Professional Counselling</option>
                      <option>Coaching Classes</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] mb-2" style={{ color:"#7A6E85" }}>Your Message</label>
                    <textarea name="message" rows={4} value={form.message} onChange={onChange}
                      placeholder="Tell us about your child's grade, subjects, and requirements..."
                      className="w-full text-[14px] px-4 py-3 rounded-2xl outline-none resize-none transition-all duration-200"
                      style={{ background:"#FFF9F4", border:"1.5px solid rgba(26,16,37,0.08)", color:"#1A1025", fontFamily:"var(--font-body)" }}
                      onFocus={e=>{ e.currentTarget.style.borderColor="rgba(155,114,207,0.5)"; e.currentTarget.style.boxShadow="0 0 0 4px rgba(155,114,207,0.1)"; }}
                      onBlur={e=>{ e.currentTarget.style.borderColor="rgba(26,16,37,0.08)"; e.currentTarget.style.boxShadow="none"; }}/>
                  </div>
                  <button onClick={onSubmit} disabled={loading}
                    className="w-full flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ background:"#1A1025", fontSize:15 }}>
                    {loading
                      ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                      : <><Send size={16}/> Send Message</>}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
