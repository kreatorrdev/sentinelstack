"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Activity, ArrowDownRight, ArrowRight, Bell, Box, Check, ChevronDown, ChevronRight, CircleHelp, Clock3, Cloud, Command, Download, Fingerprint, LayoutDashboard, ListFilter, Shield, ShieldCheck, X } from "lucide-react";
import { alerts, getTrend, scenarios, type Alert, type Scenario, type Severity } from "@/data/security";

export function Dashboard() {
  const [scenario, setScenario] = useState<Scenario>("overview");
  const [period, setPeriod] = useState<"7d" | "30d">("7d");
  const [filter, setFilter] = useState<"All" | Severity>("All");
  const [selected, setSelected] = useState<Alert | null>(null);
  const [notice, setNotice] = useState("");
  const reducedMotion = useReducedMotion();
  const gradient = useId().replace(/:/g, "");
  const data = scenarios[scenario];
  const trend = getTrend(scenario, period);
  const visibleAlerts = alerts[scenario].filter(a => filter === "All" || a.severity === filter);
  const total = trend.reduce((sum, point) => sum + point.events, 0);

  function exportReport() {
    const report = ["SentinelStack — simulated security report", "Portfolio concept. All values are synthetic; no monitoring or scanning occurred.", `Scenario: ${data.label}`, `Security posture: ${data.score}/100`, `Example assets: ${data.assets}`, `Sample critical findings: ${data.critical}`, "", ...alerts[scenario].map(a => `${a.id} | ${a.severity} | ${a.title} | ${a.source}`)].join("\n");
    const url = URL.createObjectURL(new Blob([report], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `sentinelstack-${scenario}-simulated-report.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setNotice("Sample report downloaded. All findings are simulated.");
  }

  return (
    <div className="dashboard-shell">
      <div className="dashboard-chrome"><div className="window-dots"><i/><i/><i/></div><span><ShieldCheck size={12}/> app.sentinelstack.demo / overview</span><div className="simulation-pill"><i/> SIMULATED DATA</div></div>
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar" aria-label="Dashboard scenarios">
          <div className="dashboard-brand"><Shield size={23}/><span>sentinel<span>stack</span></span></div>
          <div className="workspace-switch"><span className="workspace-avatar">S</span><div>Studio workspace<small>Demo environment</small></div><ChevronDown size={13}/></div>
          <p className="sidebar-caption">WORKSPACE</p>
          {([{ id: "overview", icon: LayoutDashboard, label: "Overview" },{ id: "cloud", icon: Cloud, label: "Cloud security" },{ id: "identity", icon: Fingerprint, label: "Identity & access" }] as const).map(item=><button type="button" key={item.id} onClick={()=>{setScenario(item.id);setFilter("All");setSelected(null);setNotice("");}} className={`sidebar-link ${scenario===item.id?"active":""}`} aria-pressed={scenario===item.id}><item.icon size={16}/>{item.label}{scenario===item.id&&<span className="sidebar-active-dot"/>}</button>)}
          <div className="sidebar-coverage"><div className="coverage-icon"><ShieldCheck size={21}/></div><strong>Explore with confidence.</strong><p>This is a sandbox. Every signal is a sample.</p><a href="#faq">About this demo <ArrowRight size={12}/></a></div>
          <div className="sidebar-user"><span>JD</span><div>Jamie Doe<small>Example analyst</small></div><CircleHelp size={15}/></div>
        </aside>
        <div className="dashboard-main">
          <div className="dashboard-toolbar"><span>Workspace <ChevronRight size={12}/> <strong>{data.label}</strong></span><div><span className="toolbar-demo">Demo mode</span><Bell size={15}/><span className="toolbar-avatar">JD</span></div></div>
          <div className="dashboard-content">
            <div className="dashboard-title"><div><p className="mono">YOUR SECURITY, AT A GLANCE</p><h3>{scenario==="overview"?"Security overview":data.label}<span>.</span></h3><p>A connected view of what matters most.</p></div><button type="button" className="dashboard-export" onClick={exportReport}><Download size={13}/><span>Export report</span></button></div>
            <div className="dashboard-metrics" aria-live="polite">
              <Metric label="Security posture" value={data.score} suffix="/100" icon={ShieldCheck} accent="mint" note="Example health score"/>
              <Metric label="Assets in view" value={data.assets} icon={Box} accent="blue" note="Across sample sources"/>
              <Metric label="Critical findings" value={data.critical.toString().padStart(2,"0")} icon={Activity} accent="orange" note="Needs a closer look"/>
              <Metric label="Signals reviewed" value={data.reviewed} suffix="%" icon={Check} accent="purple" note="Illustrative review rate"/>
            </div>
            <div className="dashboard-charts">
              <div className="trend-card"><div className="chart-heading"><div><h4>Signal activity</h4><p>Simulated events over time</p></div><div className="period-switch" aria-label="Chart period">{(["7d","30d"] as const).map(p=><button key={p} type="button" onClick={()=>setPeriod(p)} aria-pressed={period===p} className={period===p?"active":""}>{p==="7d"?"7 days":"30 days"}</button>)}</div></div>
                <div className="chart-legend"><span><i/>Events observed</span><span><i/>Events reviewed</span></div>
                <div className="trend-chart" role="img" aria-label={`${period === "7d" ? "Seven" : "Thirty"}-day simulated event chart. ${total} example events. ${trend.map(p=>`${p.day}: ${p.events} observed, ${p.resolved} reviewed`).join("; ")}`}>
                  <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <AreaChart data={trend} margin={{top:10,right:4,left:-30,bottom:0}} accessibilityLayer>
                      <defs><linearGradient id={`${gradient}-mint`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#aaffd4" stopOpacity={0.24}/><stop offset="1" stopColor="#aaffd4" stopOpacity={0}/></linearGradient></defs>
                      <CartesianGrid vertical={false} stroke="#ffffff0a" strokeDasharray="3 4"/>
                      <XAxis dataKey="day" tick={{fill:"#8a9aaa",fontSize:9}} tickLine={false} axisLine={false} minTickGap={24}/><YAxis tick={{fill:"#8a9aaa",fontSize:9}} tickLine={false} axisLine={false} tickCount={4}/>
                      <Tooltip contentStyle={{background:"#132119",border:"1px solid #2b493d",borderRadius:8,fontSize:11,color:"#effff5"}} itemStyle={{color:"#effff5"}} labelStyle={{color:"#aaffd4"}}/>
                      <Area type="monotone" dataKey="events" name="Observed" stroke="#aaffd4" strokeWidth={2} fill={`url(#${gradient}-mint)`} isAnimationActive={!reducedMotion}/>
                      <Area type="monotone" dataKey="resolved" name="Reviewed" stroke="#5e8bba" strokeWidth={1.4} strokeDasharray="4 4" fill="none" isAnimationActive={!reducedMotion}/>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="chart-summary"><ArrowDownRight size={12}/> {total} sample events <span>· {period === "7d" ? "7" : "30"}-day dataset</span></p>
              </div>
              <div className="posture-card"><div className="chart-heading"><div><h4>Security posture</h4><p>Illustrative risk overview</p></div><Shield size={14}/></div><div className="posture-gauge"><svg viewBox="0 0 160 105" aria-hidden="true"><path d="M20 85a60 60 0 1 1 120 0" fill="none" stroke="#ffffff0a" strokeWidth="9" strokeLinecap="round"/><path d="M20 85a60 60 0 1 1 120 0" fill="none" stroke="#aaffd4" strokeWidth="9" strokeLinecap="round" pathLength="100" strokeDasharray={`${data.score} 100`}/></svg><div><strong>{data.score}<span>/100</span></strong><small>Sample score</small></div></div><div className="posture-status"><i/> {data.score >= 80 ? "Looking healthy" : "Room to improve"}<span>Example status</span></div></div>
            </div>
            <div className="alerts-panel"><div className="alerts-heading"><h4>Priority findings <span>{visibleAlerts.length.toString().padStart(2,"0")}</span></h4><label className="filter-select"><ListFilter size={12}/><select aria-label="Filter findings by severity" value={filter} onChange={e=>setFilter(e.target.value as "All" | Severity)}>{["All","Critical","High","Medium","Low"].map(s=><option key={s} value={s}>{s==="All"?"All severities":s}</option>)}</select><ChevronDown size={11}/></label></div>
              <div className="alert-table-head"><span>FINDING / SOURCE</span><span>SEVERITY</span><span>DETECTED</span><span/></div>
              <div className="alert-rows">{visibleAlerts.map(alert=><button type="button" className={`alert-row ${selected?.id===alert.id?"selected":""}`} key={alert.id} onClick={()=>setSelected(selected?.id===alert.id?null:alert)} aria-expanded={selected?.id===alert.id}><span className="alert-name"><span className={`severity-symbol ${alert.severity.toLowerCase()}`}><Activity size={13}/></span><span><strong>{alert.title}</strong><small>{alert.source}</small></span></span><span className={`severity-badge ${alert.severity.toLowerCase()}`}><i/>{alert.severity}</span><span className="alert-time">{alert.time}</span><ChevronRight size={13}/></button>)}</div>
              <AnimatePresence initial={false}>{selected&&<motion.div className="alert-detail" key={selected.id} initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} transition={{duration:reducedMotion?0:.2}}><div><span className="mono">{selected.id} / SIMULATED FINDING</span><button type="button" aria-label="Close finding details" onClick={()=>setSelected(null)}><X size={15}/></button></div><h5>{selected.title}</h5><p>{selected.detail}</p><div className="suggested-action"><ShieldCheck size={14}/><p><strong>Illustrative next step</strong>{selected.action}</p></div></motion.div>}</AnimatePresence>
            </div>
            <div className="dashboard-footnote"><span><Clock3 size={11}/> Curated sample dataset</span><span>No live connections <i/></span></div>
            <div className="dashboard-notice" role="status">{notice}</div>
          </div>
        </div>
      </div>
      <div className="dashboard-bottom"><span><Command size={11}/> A LITTLE CLARITY GOES A LONG WAY.</span><span>All data is simulated. Explore freely. <ArrowRight size={11}/></span></div>
    </div>
  );
}

function Metric({label,value,suffix,icon:Icon,accent,note}:{label:string;value:number|string;suffix?:string;icon:typeof ShieldCheck;accent:string;note:string}) {
  return <div className={`metric metric-${accent}`}><div><span>{label}</span><Icon size={15}/></div><strong>{value}<small>{suffix}</small></strong><p>{note}</p></div>;
}
