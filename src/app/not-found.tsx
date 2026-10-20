import Link from "next/link";

export default function NotFound() {
  return <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,textAlign:"center"}}><div><p style={{color:"#adffd4",fontFamily:"monospace",letterSpacing:3,fontSize:12,marginBottom:24}}>404 / SIGNAL NOT FOUND</p><h1 style={{fontSize:56,letterSpacing:-3,margin:0}}>A little off the radar.</h1><p style={{color:"#95a7bc",marginTop:20}}>Let’s bring things back into focus.</p><Link className="button button-primary" style={{marginTop:30}} href="/">Back to SentinelStack ↗</Link></div></main>;
}
