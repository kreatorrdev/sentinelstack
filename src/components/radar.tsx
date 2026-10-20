"use client";

import { Check, Fingerprint, Globe2, LockKeyhole, ShieldCheck } from "lucide-react";

export function Radar() {
  return (
    <div className="radar-scene" role="img" aria-label="Animated illustration of a security shield connecting cloud, identity, and endpoint signals. Decorative simulation.">
      <div className="radar-halo" />
      <div className="radar-coordinate coordinate-top">N 40° 43′ / SYSTEM VIEW</div>
      <div className="radar-coordinate coordinate-bottom">SS_CORE // VISIBILITY ENGINE</div>
      <svg className="radar-grid" viewBox="0 0 620 620" aria-hidden="true">
        <defs>
          <radialGradient id="radar-fill"><stop stopColor="#adffd4" stopOpacity=".06"/><stop offset="1" stopColor="#adffd4" stopOpacity="0"/></radialGradient>
          <linearGradient id="shield-stroke" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d5ffe9"/><stop offset=".5" stopColor="#8ce8b8"/><stop offset="1" stopColor="#3cb9bb"/></linearGradient>
          <linearGradient id="shield-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#adffd4" stopOpacity=".15"/><stop offset="1" stopColor="#adffd4" stopOpacity=".01"/></linearGradient>
          <filter id="radar-glow"><feGaussianBlur stdDeviation="4"/></filter>
        </defs>
        <circle cx="310" cy="310" r="260" fill="url(#radar-fill)"/>
        <g fill="none" stroke="#8bd8b2">
          <circle cx="310" cy="310" r="257" opacity=".09"/>
          <circle cx="310" cy="310" r="237" opacity=".22" strokeDasharray="1 9"/>
          <circle cx="310" cy="310" r="202" opacity=".13"/>
          <circle cx="310" cy="310" r="165" opacity=".12"/>
          <circle cx="310" cy="310" r="115" opacity=".14"/>
          <path d="M310 32v556M32 310h556M113 113l394 394M113 507l394-394" opacity=".07"/>
          <g className="radar-outer-spin" style={{ transformOrigin: "310px 310px" }}>
            <circle cx="310" cy="310" r="257" strokeDasharray="120 405 48 1042" opacity=".65" strokeWidth="2"/>
            <path d="M310 40v16M310 564v16M40 310h16M564 310h16" opacity=".6"/>
          </g>
          <g className="radar-inner-spin" style={{ transformOrigin: "310px 310px" }}>
            <circle cx="310" cy="310" r="165" strokeDasharray="120 155 30 380 60 290" opacity=".55" strokeWidth="1.5"/>
            <circle cx="475" cy="310" r="4" fill="#adffd4" stroke="none"/>
          </g>
          <ellipse cx="310" cy="310" rx="282" ry="103" transform="rotate(-36 310 310)" opacity=".25"/>
          <ellipse cx="310" cy="310" rx="265" ry="108" transform="rotate(40 310 310)" opacity=".1"/>
        </g>
        <g className="radar-sweep" style={{ transformOrigin: "310px 310px" }}>
          <path d="M310 310 310 73A237 237 0 0 1 515 191Z" fill="#adffd4" opacity=".035"/>
          <path d="M310 310 515 191" stroke="#adffd4" strokeOpacity=".45"/>
        </g>
        <g fill="#aaffd4">
          {[{x:164,y:160},{x:470,y:184},{x:124,y:391},{x:419,y:461},{x:535,y:318},{x:273,y:81},{x:244,y:480}].map((p,i)=><g key={i} className="signal-node" style={{animationDelay:`${i * -.7}s`}}><circle cx={p.x} cy={p.y} r="11" opacity=".05"/><circle cx={p.x} cy={p.y} r="3" opacity=".85"/></g>)}
        </g>
        <g className="shield-float">
          <path d="m310 210 75 33v65c0 55-40 91-75 108-35-17-75-53-75-108v-65Z" fill="url(#shield-fill)" stroke="#8effba" strokeWidth="9" opacity=".22" filter="url(#radar-glow)"/>
          <path d="m310 210 75 33v65c0 55-40 91-75 108-35-17-75-53-75-108v-65Z" fill="url(#shield-fill)" stroke="url(#shield-stroke)" strokeWidth="1.7"/>
          <path d="m310 225 62 27v55c0 45-30 77-62 93-32-16-62-48-62-93v-55Z" fill="none" stroke="#adffd4" strokeOpacity=".15"/>
          <rect x="289" y="294" width="42" height="36" rx="7" fill="#b1ffda"/>
          <path d="M297 294v-12a13 13 0 0 1 26 0v12" fill="none" stroke="#b1ffda" strokeWidth="4"/>
          <circle cx="310" cy="310" r="3" fill="#10261e"/><path d="M310 312v6" stroke="#10261e" strokeWidth="3"/>
          <text x="310" y="357" textAnchor="middle" fill="#aaffd4" fontFamily="monospace" fontSize="8" letterSpacing="3">SENTINEL CORE</text>
        </g>
      </svg>
      <div className="radar-tag tag-cloud"><span className="radar-tag-icon"><Globe2 size={15}/></span><div><span>CLOUD</span><small>Visibility established</small></div><Check size={12}/></div>
      <div className="radar-tag tag-identity"><span className="radar-tag-icon"><Fingerprint size={16}/></span><div><span>IDENTITY</span><small>Context connected</small></div><Check size={12}/></div>
      <div className="radar-tag tag-endpoint"><span className="radar-tag-icon"><LockKeyhole size={14}/></span><div><span>ENDPOINT</span><small>Signals in focus</small></div><Check size={12}/></div>
      <div className="radar-caption"><ShieldCheck size={13}/><span>One connected perspective.</span><i/></div>
    </div>
  );
}
