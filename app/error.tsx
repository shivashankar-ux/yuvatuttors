"use client";
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#FFF9F4", textAlign:"center", padding:"40px 20px" }}>
      <div style={{ fontSize:60, marginBottom:16 }}>⚠️</div>
      <h2 style={{ fontFamily:"var(--font-display)", fontSize:"2rem", color:"#1A1025", marginBottom:12 }}>Something went wrong</h2>
      <p style={{ color:"#7A6E85", marginBottom:28 }}>An unexpected error occurred. Please try again.</p>
      <button onClick={reset} style={{ background:"#1A1025", color:"#fff", padding:"12px 24px", borderRadius:99, border:"none", cursor:"pointer", fontWeight:600, fontSize:14 }}>
        Try Again
      </button>
    </div>
  );
}
