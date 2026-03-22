export default function Loading() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#FFF9F4" }}>
      <div style={{ width:48, height:48, border:"3px solid rgba(155,114,207,0.2)", borderTopColor:"#9b72cf", borderRadius:"50%", animation:"spin 0.8s linear infinite" }}/>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
