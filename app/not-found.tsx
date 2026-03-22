import Link from "next/link";
export default function NotFound() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#FFF9F4", textAlign:"center", padding:"40px 20px", fontFamily:"var(--font-body)" }}>
      <div style={{ fontSize:80, marginBottom:24 }}>📚</div>
      <h1 style={{ fontFamily:"var(--font-display)", fontSize:"4rem", fontWeight:700, color:"#1A1025", marginBottom:12 }}>404</h1>
      <p style={{ fontSize:18, color:"#7A6E85", marginBottom:32 }}>Oops! This page doesn&apos;t exist.</p>
      <Link href="/" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#1A1025", color:"#fff", padding:"14px 28px", borderRadius:99, fontWeight:600, textDecoration:"none", fontSize:15 }}>
        ← Go Home
      </Link>
    </div>
  );
}
