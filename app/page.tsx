"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Cpu,
  Code2, Layers3, Terminal, Search, ExternalLink, Music2, GraduationCap,
  Sparkles, Download, Radio, CircuitBoard, Cloud, Menu, X
} from "lucide-react";

type Project = { id: number; title: string; area: string; stack: string; level: string };
const semiconductor: Project[] = [
  ["RV32I Single-Cycle RISC-V CPU","RTL Design","SystemVerilog · Verilog · Questa","Advanced"],
  ["5-Stage Pipelined RISC-V Core","RTL Design","SystemVerilog · Hazard Unit · Forwarding","Advanced"],
  ["AMBA APB Protocol Design & Verification","SoC Interconnect","SystemVerilog · Assertions","Intermediate"],
  ["AXI4-Lite Register Interface","SoC Interconnect","Verilog · AXI · UVM","Advanced"],
  ["UART Controller with FIFO","Digital Design","Verilog · RTL · Testbench","Intermediate"],
  ["SPI Master/Slave Controller","Digital Design","SystemVerilog · SPI","Intermediate"],
  ["I2C Multi-Master Controller","Digital Design","Verilog · I2C · Arbitration","Advanced"],
  ["CAN 2.0B Controller","Automotive","Verilog · CAN · CRC","Advanced"],
  ["PWM Motor-Control IP","Digital Design","Verilog · PWM · FPGA","Intermediate"],
  ["Parameterized Synchronous FIFO","RTL Design","SystemVerilog · Assertions","Intermediate"],
  ["Asynchronous FIFO with CDC Checks","CDC / RTL","SystemVerilog · Gray Code","Advanced"],
  ["Round-Robin Bus Arbiter","RTL Design","Verilog · Formal Properties","Intermediate"],
  ["Low-Power Clock-Gating Controller","Low Power","RTL · UPF Concepts","Advanced"],
  ["Programmable Interrupt Controller","SoC Design","SystemVerilog · RISC-V","Advanced"],
  ["Hardware Timer & Watchdog IP","SoC Design","Verilog · APB","Intermediate"],
  ["AES-128 Encryption Core","Security IP","SystemVerilog · Cryptography","Advanced"],
  ["SHA-256 Hardware Accelerator","Security IP","Verilog · Pipelining","Advanced"],
  ["CRC-32 Streaming Accelerator","Digital Design","Verilog · Streaming Data","Intermediate"],
  ["CORDIC Math Accelerator","DSP Hardware","Verilog · Fixed Point","Advanced"],
  ["FIR Filter RTL Accelerator","DSP Hardware","SystemVerilog · DSP","Advanced"],
  ["FFT Butterfly Processing Unit","DSP Hardware","Verilog · Fixed Point","Advanced"],
  ["IEEE-754 Floating-Point ALU","Processor Datapath","SystemVerilog · IEEE-754","Advanced"],
  ["Booth Multiplier Architecture","Processor Datapath","Verilog · Arithmetic","Advanced"],
  ["Carry-Lookahead Adder Comparison","Processor Datapath","Verilog · Synthesis","Intermediate"],
  ["Register File with Bypass Network","Processor Datapath","SystemVerilog · RTL","Intermediate"],
  ["Branch Predictor: 2-Bit Saturating","Computer Architecture","Verilog · Microarchitecture","Advanced"],
  ["Cache Controller & LRU Replacement","Computer Architecture","SystemVerilog · SRAM Model","Advanced"],
  ["DMA Engine with AXI-Stream","SoC Design","SystemVerilog · AXI-Stream","Advanced"],
  ["JTAG TAP Controller","DFT","Verilog · IEEE 1149.1","Advanced"],
  ["Scan Chain Insertion Study","DFT","RTL · ATPG Concepts","Advanced"],
  ["MBIST Controller for SRAM","DFT","SystemVerilog · March Tests","Advanced"],
  ["UVM Verification Environment for UART","Functional Verification","UVM · SystemVerilog","Advanced"],
  ["UVM Verification for APB Peripheral","Functional Verification","UVM · Assertions","Advanced"],
  ["Constrained-Random FIFO Verification","Functional Verification","UVM · Coverage","Advanced"],
  ["SystemVerilog Assertions Cookbook","Functional Verification","SVA · Formal","Intermediate"],
  ["RTL Lint & CDC Analysis Flow","Design Verification","Verilator · SpyGlass Concepts","Advanced"],
  ["Formal Equivalence Checking Demo","Formal Verification","Yosys · EQY","Advanced"],
  ["Open-Source RTL-to-GDSII Flow","Physical Design","OpenLane · OpenROAD","Advanced"],
  ["Floorplanning & Power Planning Study","Physical Design","OpenROAD · LEF/DEF","Advanced"],
  ["Standard-Cell Placement Optimization","Physical Design","OpenROAD · Tcl","Advanced"],
  ["Clock Tree Synthesis Exploration","Physical Design","OpenROAD · CTS","Advanced"],
  ["Static Timing Analysis Case Study","Timing Analysis","OpenSTA · SDC","Advanced"],
  ["Setup/Hold Timing Closure Lab","Timing Analysis","STA · Constraints","Advanced"],
  ["Power, Performance & Area Dashboard","EDA Automation","Python · OpenROAD Reports","Intermediate"],
  ["SPICE CMOS Inverter Characterization","Analog Design","ngspice · CMOS","Intermediate"],
  ["Two-Stage CMOS Op-Amp Design","Analog Design","LTspice · SPICE","Advanced"],
  ["Bandgap Reference Design Study","Analog Design","SPICE · Analog IC","Advanced"],
  ["SAR ADC Behavioral Model","Mixed Signal","Verilog-A · Python","Advanced"],
  ["PLL Behavioral Model & Jitter Study","Mixed Signal","Verilog-A · MATLAB","Advanced"],
  ["SRAM 6T Cell Read/Write Analysis","Memory Design","SPICE · SRAM","Advanced"]
].map((p, i) => ({ id: i + 1, title: p[0], area: p[1], stack: p[2], level: p[3] }));

const software: Project[] = [
  ["ClauseIQ — Legal Document Intelligence","AI / SaaS","Next.js · TypeScript · RAG","Existing repo"],
  ["MediLens AI — Medical Document Assistant","AI / Healthcare","Python · Next.js · OCR","Existing repo"],
  ["AURORA — RIS-Assisted 6G Optimization","Wireless / AI","Python · Sionna · TensorFlow","Existing repo"],
  ["KubeStarter — Kubernetes Deployment Portal","Cloud / DevOps","TypeScript · Kubernetes · Helm","Existing repo"],
  ["FlowPilot — Workflow Automation","Automation","Python · APIs · PostgreSQL","Existing repo"],
  ["TinyML Predictive Maintenance","Edge AI","Python · TensorFlow Lite · MQTT","Existing repo"],
  ["Industrial IoT Edge Gateway","IoT / Backend","C++ · MQTT · Linux","Existing repo"],
  ["RTOS Motor Control Firmware","Embedded","C · STM32 · FreeRTOS","Existing repo"],
  ["Secure STM32 Bootloader","Embedded Security","C · STM32 · UART/Flash","Existing repo"],
  ["Embedded Linux Device Monitor","Embedded Linux","C · Linux · Prometheus","Existing repo"],
  ["Multi-Tenant SaaS Starter","Backend / SaaS","FastAPI · PostgreSQL · Redis","Roadmap"],
  ["API Gateway with Rate Limiting","Backend","Go · Redis · OpenTelemetry","Roadmap"],
  ["Event-Driven Order Management","Backend","Java · Spring Boot · Kafka","Roadmap"],
  ["Real-Time Collaboration Workspace","Full Stack","Next.js · WebSockets · Redis","Roadmap"],
  ["AI Code Review Assistant","Developer Tools","Python · LLM APIs · GitHub App","Roadmap"],
  ["RAG Knowledge Base for Teams","Generative AI","FastAPI · pgvector · LLM","Roadmap"],
  ["Local-First Notes with Sync","Full Stack","TypeScript · SQLite · CRDT","Roadmap"],
  ["Secure File Sharing Service","Backend / Security","Go · S3 · AES-GCM","Roadmap"],
  ["Feature Flag & Experimentation Service","Platform Engineering","Go · PostgreSQL · Redis","Roadmap"],
  ["Observability Starter Stack","Cloud / DevOps","OpenTelemetry · Grafana · Docker","Roadmap"],
  ["GitOps Deployment Control Plane","DevOps","Kubernetes · Argo CD · Go","Roadmap"],
  ["Container Image Vulnerability Dashboard","DevSecOps","Python · Trivy · React","Roadmap"],
  ["Cloud Cost Anomaly Detector","FinOps","Python · SQL · Forecasting","Roadmap"],
  ["Infrastructure Drift Detector","DevOps","Python · Terraform · APIs","Roadmap"],
  ["CI Pipeline Analytics Platform","Developer Tools","TypeScript · GitHub Actions","Roadmap"],
  ["Distributed Job Queue","Backend","Go · Redis · PostgreSQL","Roadmap"],
  ["Webhook Delivery & Retry Platform","Backend","Java · Kafka · PostgreSQL","Roadmap"],
  ["Search-as-a-Service API","Backend / Search","Python · OpenSearch · FastAPI","Roadmap"],
  ["Recommendation Engine","AI / ML","Python · PyTorch · Feature Store","Roadmap"],
  ["Fraud Detection Pipeline","AI / FinTech","Python · XGBoost · Kafka","Roadmap"],
  ["Resume Parsing & Job Match Engine","AI / HRTech","Python · NLP · PostgreSQL","Roadmap"],
  ["Meeting Notes & Action Extractor","AI / Productivity","Python · Whisper · LLM","Roadmap"],
  ["Multilingual Customer Support Agent","AI / Agents","Python · RAG · Tool Calling","Roadmap"],
  ["Document OCR & Extraction API","AI / Document AI","Python · OCR · FastAPI","Roadmap"],
  ["Time-Series Forecasting Workbench","Data / ML","Python · Pandas · PyTorch","Roadmap"],
  ["Data Quality Monitoring Service","Data Engineering","Python · SQL · Great Expectations","Roadmap"],
  ["Streaming Analytics Dashboard","Data Engineering","Kafka · Flink · React","Roadmap"],
  ["Lakehouse ETL Orchestrator","Data Engineering","Python · dbt · DuckDB","Roadmap"],
  ["Personal Finance Insights App","Full Stack","Next.js · PostgreSQL · Charts","Roadmap"],
  ["Inventory & POS Management SaaS","Full Stack","React · Spring Boot · PostgreSQL","Roadmap"],
  ["Appointment Booking Engine","Backend","Node.js · PostgreSQL · Redis","Roadmap"],
  ["Subscription Billing Starter","SaaS / Payments","Next.js · Stripe · Webhooks","Roadmap"],
  ["Marketplace with Seller Payouts","E-commerce","Next.js · PostgreSQL · Payments","Roadmap"],
  ["Headless CMS with Role Permissions","Backend","Go · PostgreSQL · S3","Roadmap"],
  ["GraphQL Federation Demo","Backend","TypeScript · GraphQL · Redis","Roadmap"],
  ["Rust Log Processing CLI","Systems","Rust · Tokio · Serde","Roadmap"],
  ["C++ High-Performance Telemetry Collector","Systems","C++20 · gRPC · Protobuf","Roadmap"],
  ["Network Packet Analyzer","Networking","C++ · libpcap · Wireshark","Roadmap"],
  ["IoT Fleet Device Management","IoT Platform","MQTT · Go · PostgreSQL","Roadmap"],
  ["Edge-to-Cloud OTA Update Manager","IoT / Embedded","C++ · MQTT · FastAPI","Roadmap"]
].map((p, i) => ({ id: i + 1, title: p[0], area: p[1], stack: p[2], level: p[3] }));

const featured = [
  { name: "AURORA_RSI_6G", desc: "RIS-assisted wireless network optimization research and simulation.", href: "https://github.com/PrajwalMhetre/AURORA_RSI_6G", tags: "6G · Sionna · TensorFlow" },
  { name: "ClauseIQ", desc: "Legal document intelligence application and retrieval workflows.", href: "https://github.com/PrajwalMhetre/ClauseIQ", tags: "AI · RAG · TypeScript" },
  { name: "MediLens-AI", desc: "AI-assisted medical information interface.", href: "https://github.com/PrajwalMhetre/MediLens-AI", tags: "AI · Healthcare" },
  { name: "RTOS-Motor-Control-STM32", desc: "Real-time embedded motor-control project.", href: "https://github.com/PrajwalMhetre/RTOS-Motor-Control-STM32", tags: "STM32 · RTOS · C" },
  { name: "rv32i-single-cycle-core", desc: "RISC-V RV32I single-cycle processor RTL repository.", href: "https://github.com/PrajwalMhetre/rv32i-single-cycle-core", tags: "RISC-V · Verilog" },
  { name: "FlowPilot-Automation", desc: "Workflow automation project.", href: "https://github.com/PrajwalMhetre/FlowPilot-Automation", tags: "Automation · APIs" }
];

const skills = ["Python", "C", "C++", "Java", "TypeScript", "SystemVerilog", "Verilog", "STM32", "ESP32", "FreeRTOS", "Linux", "FastAPI", "Next.js", "React", "PostgreSQL", "Docker", "Kubernetes", "GitHub Actions", "TensorFlow", "Sionna", "MQTT", "I2C / SPI / UART / CAN"];

export default function Portfolio() {
  const [kind, setKind] = useState<"all" | "semiconductor" | "software">("all");
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const projects = useMemo(() => {
    const base = kind === "semiconductor" ? semiconductor : kind === "software" ? software : [...semiconductor, ...software];
    return base.filter(p => (p.title + p.area + p.stack + p.level).toLowerCase().includes(query.toLowerCase()) && (level === "All" || p.level === level));
  }, [kind, query, level]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-[#edf2f7]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40" style={{backgroundImage:"linear-gradient(rgba(148,163,184,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.055) 1px,transparent 1px)",backgroundSize:"54px 54px"}} />
      <div className="pointer-events-none fixed -top-48 left-1/4 z-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none fixed right-[-140px] top-[35%] z-0 h-[440px] w-[440px] rounded-full bg-violet-500/10 blur-[130px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b12]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="font-mono text-lg font-bold tracking-tight"><span className="text-cyan-300">PM</span><span className="text-white">.dev</span></a>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {["About","Focus","Work","Projects","Music","Contact"].map(n => <a key={n} href={"#"+n.toLowerCase()} className="transition hover:text-cyan-300">{n}</a>)}
          </nav>
          <a href="https://github.com/PrajwalMhetre" target="_blank" rel="noreferrer" className="hidden rounded-full border border-cyan-300/30 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-300/10 md:block">GITHUB PROFILE ↗</a>
          <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
        {mobileOpen && <nav className="grid gap-3 border-t border-white/10 px-6 py-5 md:hidden">{["About","Focus","Work","Projects","Music","Contact"].map(n=><a key={n} onClick={()=>setMobileOpen(false)} href={"#"+n.toLowerCase()}>{n}</a>)}</nav>}
      </header>

      <section id="home" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-20 md:grid-cols-[1.2fr_.8fr] md:pt-32 lg:px-8">
        <div>
          <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/5 px-4 py-2 text-xs font-medium text-emerald-200"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300"/> Electronics × Software × Intelligent Systems</motion.div>
          <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}} className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-7xl">Engineering across <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">silicon & software.</span></motion.h1>
          <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.18}} className="mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">I’m Prajwal Mhetre — an Electronics & Communication engineering student and multidisciplinary builder exploring semiconductor design, embedded systems, AI/ML, backend engineering and cloud-native platforms.</motion.p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200">Explore selected work <ArrowDownRight size={17}/></a>
            <a href="https://www.linkedin.com/in/prajwalmhetre/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/5"><Linkedin size={16}/> Connect</a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
            {[["100","Project ideas"],["2","Engineering domains"],["2027","Graduation target"]].map(([v,l])=><div key={l}><div className="text-2xl font-semibold tracking-tight text-white">{v}<span className="text-cyan-300">+</span></div><div className="mt-1 text-xs text-slate-500">{l}</div></div>)}
          </div>
        </div>
        <motion.div initial={{opacity:0,scale:.92,rotate:2}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:.8}} className="relative mx-auto w-full max-w-[410px]">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-violet-500/20 blur-2xl"/>
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-[#111827] p-3 shadow-2xl shadow-cyan-950/40">
            <div className="mb-3 flex items-center justify-between px-2 pt-1 font-mono text-[10px] uppercase tracking-[.22em] text-slate-500"><span>Engineer profile / 01</span><span className="text-emerald-300">Available to connect</span></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-[#d8c18e]">
              <Image src="/profile.jpg" alt="Portrait of Prajwal Mhetre" fill priority sizes="(max-width: 768px) 90vw, 410px" className="object-cover object-center"/>
            </div>
            <div className="flex items-center justify-between px-2 pb-1 pt-4"><div><div className="font-semibold">Prajwal Mhetre</div><div className="mt-1 text-xs text-slate-400">Electronics · Software · AI</div></div><div className="rounded-full border border-cyan-300/30 p-3 text-cyan-200"><Cpu size={20}/></div></div>
          </div>
          <div className="absolute -bottom-5 -left-8 hidden rounded-xl border border-white/10 bg-[#111827]/95 px-4 py-3 shadow-xl backdrop-blur md:block"><div className="font-mono text-[10px] text-slate-500">CURRENT MODE</div><div className="mt-1 text-sm font-semibold text-cyan-200">Build · Measure · Improve</div></div>
        </motion.div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div><p className="font-mono text-xs uppercase tracking-[.25em] text-cyan-300">01 / About</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Curious by design.<br/>Practical by default.</h2></div>
          <div className="space-y-5 text-base leading-8 text-slate-400"><p>I’m pursuing a B.Tech in Electronics & Communication Engineering (2027), after completing a Diploma in Computer Science Engineering. I enjoy working across abstraction layers — from RTL and microcontrollers to APIs, data systems and cloud deployment.</p><p>My interests include digital design, computer architecture, firmware, real-time systems, wireless communication, applied AI and reliable software infrastructure. I value reproducible experiments, clear documentation, measurable testing and engineering trade-offs.</p>
            <div className="grid gap-4 pt-3 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-white/[.025] p-5"><GraduationCap className="mb-3 text-cyan-300"/><div className="font-semibold text-white">B.Tech — E&TC</div><div className="mt-1 text-sm text-slate-500">Bharati Vidyapeeth College of Engineering, Pune · Expected 2027</div></div><div className="rounded-2xl border border-white/10 bg-white/[.025] p-5"><Code2 className="mb-3 text-violet-300"/><div className="font-semibold text-white">Diploma — Computer Science</div><div className="mt-1 text-sm text-slate-500">Basavakalyan Polytechnic · 2023</div></div></div>
          </div>
        </div>
      </section>

      <section id="focus" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-cyan-300">02 / Engineering focus</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Two domains. One systems mindset.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="group rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[.09] to-transparent p-7 transition hover:-translate-y-1 hover:border-cyan-300/40"><CircuitBoard className="h-9 w-9 text-cyan-300"/><h3 className="mt-6 text-2xl font-semibold">Semiconductor & Embedded</h3><p className="mt-3 leading-7 text-slate-400">RTL design, RISC-V architecture, verification, FPGA, digital systems, STM32, ESP32, RTOS, firmware, IoT and wireless systems.</p><div className="mt-6 flex flex-wrap gap-2">{["Verilog","SystemVerilog","RISC-V","STM32","FreeRTOS","FPGA","SPICE"].map(s=><span key={s} className="rounded-full border border-cyan-300/20 px-3 py-1 text-xs text-cyan-100">{s}</span>)}</div></div>
          <div className="group rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-300/[.09] to-transparent p-7 transition hover:-translate-y-1 hover:border-violet-300/40"><Cloud className="h-9 w-9 text-violet-300"/><h3 className="mt-6 text-2xl font-semibold">Software & Intelligent Systems</h3><p className="mt-3 leading-7 text-slate-400">Backend APIs, full-stack products, AI/ML, LLM applications, databases, distributed systems, cloud, containers and CI/CD.</p><div className="mt-6 flex flex-wrap gap-2">{["Python","C++","Java","TypeScript","FastAPI","PostgreSQL","Docker","Kubernetes"].map(s=><span key={s} className="rounded-full border border-violet-300/20 px-3 py-1 text-xs text-violet-100">{s}</span>)}</div></div>
        </div>
        <div className="mt-7 rounded-2xl border border-white/10 bg-white/[.025] p-6"><div className="mb-4 text-sm font-semibold text-white">Technical toolkit</div><div className="flex flex-wrap gap-2">{skills.map(s=><span key={s} className="rounded-lg bg-white/[.06] px-3 py-2 text-xs text-slate-300">{s}</span>)}</div></div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-cyan-300">03 / Selected repositories</p><h2 className="mt-4 text-4xl font-semibold tracking-tight">Work you can inspect.</h2><p className="mt-3 max-w-2xl text-slate-400">A selection of repositories from my engineering work. Open the source to review implementation, documentation and current project status.</p>
        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{featured.map((p,i)=><motion.a initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} key={p.name} href={p.href} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/[.025] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[.04]"><div className="flex items-center justify-between"><div className="rounded-xl border border-white/10 p-3 text-cyan-200"><Terminal size={20}/></div><ArrowUpRight className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200"/></div><h3 className="mt-6 text-lg font-semibold">{p.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{p.desc}</p><div className="mt-5 font-mono text-[10px] uppercase tracking-wider text-cyan-200">{p.tags}</div></motion.a>)}</div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-cyan-300">04 / Project library</p><div className="mt-4 flex flex-wrap items-end justify-between gap-5"><div><h2 className="text-4xl font-semibold tracking-tight">100-project engineering map.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">A curated build roadmap: 50 semiconductor and embedded concepts + 50 software concepts. These are project ideas, not claims that all 100 are already completed.</p></div><div className="rounded-full border border-white/10 px-4 py-2 font-mono text-xs text-slate-300">100 ENTRIES</div></div>
        <div className="mt-8 flex flex-wrap gap-2">{([{id:"all",label:"All projects (100)"},{id:"semiconductor",label:"Semiconductor (50)"},{id:"software",label:"Software (50)"}] as const).map(t=><button key={t.id} onClick={()=>{setKind(t.id);setLevel("All")}} className={"rounded-full px-4 py-2 text-xs font-semibold transition "+(kind===t.id?"bg-cyan-300 text-slate-950":"border border-white/10 text-slate-300 hover:border-cyan-300/40")}>{t.label}</button>)}</div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row"><label className="relative flex-1"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects, technologies or domains..." className="w-full rounded-xl border border-white/10 bg-white/[.04] py-3 pl-11 pr-4 text-sm outline-none placeholder:text-slate-600 focus:border-cyan-300/50"/></label><select value={level} onChange={e=>setLevel(e.target.value)} className="rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-sm text-slate-300 outline-none"><option>All</option><option>Advanced</option><option>Intermediate</option><option>Existing repo</option><option>Roadmap</option></select></div>
        <div className="mt-5 flex items-center justify-between text-xs text-slate-500"><span>Showing {projects.length} of {kind==="all"?100:50} entries</span><span>Filter · Explore · Build</span></div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{projects.map((p,i)=><motion.article layout key={p.id+"-"+p.title} initial={{opacity:0}} animate={{opacity:1}} className="rounded-xl border border-white/[.08] bg-white/[.025] p-4 transition hover:border-cyan-300/25"><div className="flex items-start justify-between gap-3"><span className="font-mono text-[10px] text-slate-600">#{String(p.id).padStart(2,"0")}</span><span className="rounded-full bg-white/[.06] px-2.5 py-1 text-[10px] text-slate-400">{p.level}</span></div><h3 className="mt-3 text-sm font-semibold text-slate-100">{p.title}</h3><div className="mt-2 text-xs text-cyan-200">{p.area}</div><p className="mt-2 text-xs leading-5 text-slate-500">{p.stack}</p></motion.article>)}</div>
        {projects.length===0&&<div className="rounded-xl border border-white/10 p-10 text-center text-slate-400">No matching projects. Try a different search.</div>}
      </section>

      <section id="music" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 py-20 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[.25em] text-cyan-300">05 / Off the clock</p><div className="mt-4 grid items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#101b2b] to-[#11111d] p-7 md:grid-cols-[1fr_auto] md:p-10"><div><div className="flex items-center gap-3 text-violet-200"><Music2/><span className="font-mono text-xs uppercase tracking-[.2em]">Music & focus</span></div><h2 className="mt-5 text-3xl font-semibold">Good sound. Deep work.</h2><p className="mt-3 max-w-xl leading-7 text-slate-400">A small corner for focus sessions, instrumental playlists and the soundtracks behind long debugging nights. Choose what you want to play — audio will never autoplay.</p><a href="https://open.spotify.com/search/focus%20instrumental" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-300/30 px-5 py-3 text-sm font-semibold text-violet-200 transition hover:bg-violet-300/10">Explore focus music on Spotify <ExternalLink size={15}/></a></div><div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-violet-300/20 bg-violet-300/[.05]"><div className="absolute inset-4 animate-spin rounded-full border border-dashed border-violet-300/30" style={{animationDuration:"22s"}}/><div className="flex items-end gap-1">{[20,38,27,52,34,44,18,31].map((h,i)=><span key={i} className="w-1.5 animate-pulse rounded-full bg-gradient-to-t from-cyan-300 to-violet-300" style={{height:h,animationDelay:(i*110)+"ms"}}/>)}</div></div></div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 pt-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[.09] via-blue-300/[.04] to-violet-300/[.08] p-8 md:p-12"><p className="font-mono text-xs uppercase tracking-[.25em] text-cyan-200">06 / Contact</p><h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">Have an engineering problem worth solving?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-400">I’m open to meaningful conversations, collaborations, internships and engineering opportunities across embedded systems, semiconductor design and software.</p><div className="mt-8 flex flex-wrap gap-3"><a href="https://www.linkedin.com/in/prajwalmhetre/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"><Linkedin size={16}/> LinkedIn</a><a href="https://github.com/PrajwalMhetre" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/5"><Github size={16}/> GitHub</a></div><div className="mt-8 flex items-center gap-2 text-xs text-slate-500"><MapPin size={14}/> Pune, Maharashtra, India</div></div>
        <footer className="flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs text-slate-600 sm:flex-row"><span>© {new Date().getFullYear()} Prajwal Mhetre. Built with intent.</span><span>Silicon · Systems · Software</span></footer>
      </section>
    </main>
  );
}
