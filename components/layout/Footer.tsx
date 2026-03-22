"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background:"#1A1025", color:"rgba(255,255,255,0.6)", padding:"72px 5vw 32px" }}>
      <style>{`
        .footer-link { font-size:13px; color:rgba(255,255,255,0.5); text-decoration:none; transition:color 0.2s; }
        .footer-link:hover { color:#fff; }
        .social-btn { width:36px; height:36px; border-radius:10px; background:rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; font-size:15px; transition:background 0.2s, transform 0.2s; text-decoration:none; }
        .social-btn:hover { background:rgba(155,114,207,0.3); transform:translateY(-2px); }
      `}</style>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div style={{ width:40,height:40,borderRadius:12,background:"linear-gradient(135deg,rgba(232,216,255,0.3),rgba(208,238,255,0.3))",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:20,color:"#fff" }}>Y</div>
              <div style={{ lineHeight:1.1 }}>
                <strong style={{ fontFamily:"var(--font-display)",fontSize:18,fontWeight:700,color:"#fff",display:"block" }}>Yuva</strong>
                <span style={{ fontSize:10,fontWeight:500,color:"rgba(255,255,255,0.4)",textTransform:"uppercase",letterSpacing:"0.12em" }}>Home Tutors</span>
              </div>
            </div>
            <p style={{ fontSize:13,lineHeight:1.75,color:"rgba(255,255,255,0.45)",maxWidth:280,marginBottom:24 }}>
              Committed to delivering personalized, result-oriented learning solutions through experienced tutors across Navi Mumbai.
            </p>
            <div className="flex gap-2">
              {[["📘","#"],["📸","#"],["💬","https://wa.me/917045992904"],["💼","#"]].map(([icon,href],i)=>(
                <a key={i} href={href} className="social-btn" target={i===2?"_blank":undefined} rel={i===2?"noopener noreferrer":undefined}>{icon}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",color:"rgba(255,255,255,0.3)",marginBottom:20 }}>Quick Links</h4>
            <ul style={{ listStyle:"none" }}>
              {[["Home","/#home"],["Courses","/#courses"],["About Us","/#about"],["Testimonials","/#testimonials"],["Contact","/#contact"],["Privacy Policy","#"]].map(([label,href])=>(
                <li key={label} style={{ marginBottom:10 }}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",color:"rgba(255,255,255,0.3)",marginBottom:20 }}>Services</h4>
            <ul style={{ listStyle:"none" }}>
              {["Home Tutoring","Group Tuitions","Online Tutoring","Workshops","Coaching Classes"].map(s=>(
                <li key={s} style={{ marginBottom:10 }}>
                  <a href="#" className="footer-link">{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.15em",color:"rgba(255,255,255,0.3)",marginBottom:20 }}>Contact</h4>
            <ul style={{ listStyle:"none" }}>
              {[["📞 +91 70459 92904","tel:+917045992904"],["✉️ yuvahometutors@gmail.com","mailto:yuvahometutors@gmail.com"],["📍 G-09M, Haware Centurion Complex, Nerul East, Navi Mumbai 400706","#"]].map(([label,href])=>(
                <li key={label} style={{ marginBottom:12 }}>
                  <a href={href} className="footer-link" style={{ lineHeight:1.6 }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:28 }}>
          <p style={{ fontSize:12,color:"rgba(255,255,255,0.3)" }}>© {new Date().getFullYear()} Yuva Home Tutors. All Rights Reserved.</p>
          <p style={{ fontSize:12,color:"rgba(255,255,255,0.3)" }}>Made with ❤️ for Navi Mumbai&apos;s students</p>
        </div>
      </div>
    </footer>
  );
}
