"use client"

import * as React from "react"
import Image from "next/image"
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  Code2, 
  Sparkles, 
  Sun, 
  Moon, 
  ExternalLink, 
  Check, 
  Terminal,
  Cpu,
  Layers,
  Database,
  Cloud,
  Wrench,
  UserCheck
} from "lucide-react"

// Inline definitions for Github and Linkedin icons since brand icons are removed in lucide-react v1.x
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { motion, AnimatePresence } from "framer-motion"

import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button"

// Skill groups matching the resume (expanded to 50+ total skills)
const skillCategories = [
  {
    name: "Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C/C++", "SQL", "Embedded C", "HTML5", "CSS3", "Go (Basic)", "Rust (Basic)", "Bash/Shell"]
  },
  {
    name: "AI / ML / GenAI",
    icon: Cpu,
    skills: ["LLMs", "RAG pipelines", "NLP", "Scikit-learn", "TensorFlow (Basic)", "Prompt Engineering", "AI Agents", "LangChain", "LlamaIndex", "Vector Databases", "Neural Networks", "Deep Learning"]
  },
  {
    name: "Full-Stack",
    icon: Layers,
    skills: ["React.js", "Node.js", "Express.js", "Flask", "REST API design", "JWT Authentication", "Next.js", "FastAPI", "Zustand", "GraphQL", "WebSockets"]
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "BigQuery", "Schema Design", "Query Optimization", "Redis", "Prisma ORM", "SQLite", "Firebase"]
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    skills: ["GCP", "AWS", "Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Vercel", "Nginx", "Linux Admin"]
  },
  {
    name: "Core CS & Soft Skills",
    icon: Wrench,
    skills: ["DSA", "OOP", "DBMS", "OS", "System Design", "SDLC", "Agile/Scrum", "Problem-solving", "Ownership", "Collaboration", "Documentation"]
  }
]

// Project data matching the resume
const projects = [
  {
    title: "ClauseIQ",
    subtitle: "AI Legal Document Intelligence Platform",
    tags: ["TypeScript", "LLMs", "RAG", "Document AI", "Next.js", "Tailwind CSS"],
    bullets: [
      "Built a production-grade AI platform that analyzes legal contracts and PDFs using LLMs and RAG — delivering document summarization, clause extraction, and risk detection.",
      "Architected a full retrieval pipeline: PDF ingestion, chunking, vector retrieval, and LLM-based structured output generation — end-to-end AI application development."
    ],
    github: "https://github.com/PrajwalMhetre/ClauseIQ"
  },
  {
    title: "GitPilot-AI",
    subtitle: "Agentic AI Developer Automation Tool",
    tags: ["Python", "LLM Agents", "Agentic Workflows", "LangChain", "Docker"],
    bullets: [
      "Built an autonomous AI agent that analyzes codebases, plans multi-step changes, and executes developer tasks end-to-end using tool-calling orchestration patterns.",
      "Implemented plan → act → validate loops with structured error handling — demonstrating production-grade agentic software design."
    ],
    github: "https://github.com/PrajwalMhetre/GitPilot-AI"
  },
  {
    title: "Fake-News-Detection",
    subtitle: "NLP Misinformation Classifier",
    tags: ["Python", "NLP", "Machine Learning", "Classification", "Flask"],
    bullets: [
      "Built an end-to-end NLP pipeline for fake news detection: text preprocessing, TF-IDF feature extraction, model training, evaluation, and REST API deployment."
    ],
    github: "https://github.com/PrajwalMhetre/Fake-News-Detection"
  },
  {
    title: "MediLens-AI",
    subtitle: "Medical AI Decision Support System",
    tags: ["HTML", "AI APIs", "Healthcare", "JavaScript", "Tailwind CSS"],
    bullets: [
      "Built a medical AI interface integrating AI model APIs for health data analysis and decision support — user-facing AI product shipped end-to-end."
    ],
    github: "https://github.com/PrajwalMhetre/MediLens-AI"
  }
]

export default function Portfolio() {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark")
  const [activeTab, setActiveTab] = React.useState(0)
  const [mounted, setMounted] = React.useState(false)
  
  // Playground state
  const [playgroundBtnStyle, setPlaygroundBtnStyle] = React.useState<"liquid" | "metal">("liquid")
  const [metalVariant, setMetalVariant] = React.useState<"default" | "primary" | "success" | "error" | "gold" | "bronze">("gold")
  
  // Contact Form State
  const [formState, setFormState] = React.useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    setTheme(initialTheme)
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  if (!mounted) {
    return <div className="min-h-screen bg-slate-950" />
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-900/20" />
        <div className="absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-900/15" />
        <div className="absolute bottom-[20%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-amber-500/5 blur-[120px] dark:bg-amber-900/10" />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-slate-50/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/50 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl h-16 items-center justify-between px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              Prajwal Mhetre
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-indigo-500 transition-colors">Experience</a>
            <a href="#playground" className="hover:text-indigo-500 transition-colors">Playground</a>
            <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://github.com/PrajwalMhetre" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/prajwalmhetre" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
              <LinkedinIcon className="h-5 w-5" />
            </a>
            
            {/* Elegant Sun/Moon Toggle */}
            <button 
              onClick={toggleTheme}
              className="relative p-2 rounded-full border border-slate-200 bg-white/50 text-slate-700 shadow-sm transition-all hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-24">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24 md:mb-36">
          <div className="md:col-span-7 flex flex-col items-start space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300 border border-indigo-500/20"
            >
              <Sparkles className="h-3.5 w-3.5" /> Open for Specialist Programmer Opportunities
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none"
            >
              Bridging Silicon Logic with{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Cognitive Scale
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
            >
              Hi, I'm <strong>Prajwal Kalidas Mhetre</strong>. Leveraging a unique dual foundation in Electronics and Computer Science, I design and deploy production-grade AI agents, LLM orchestration frameworks (like <em>GitPilot-AI</em>), and intelligent retrieval pipelines that power autonomous engineering.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#experience">
                <LiquidButton size="lg">
                  Explore Projects
                </LiquidButton>
              </a>
              <a href="#contact">
                <MetalButton variant="gold">
                  Get in Touch
                </MetalButton>
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center items-center"
          >
            <div className="relative group p-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-emerald-500/20 dark:from-indigo-500/30 dark:to-slate-800/10 shadow-2xl">
              {/* Outer glowing border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-700 pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 dark:border-slate-800 dark:bg-slate-900 w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
                <Image
                  src="/profile.jpg"
                  alt="Prajwal Mhetre Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover transform group-hover:scale-105 transition duration-500 filter brightness-[1.02]"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Professional Summary & About Section */}
        <section id="about" className="mb-24 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-tight border-b-2 border-indigo-500 inline-block pb-1">
                Profile Summary
              </h2>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                A dual-discipline engineer bridging Electronic systems and Advanced Computer Science.
              </p>
            </div>
            <div className="md:col-span-2 space-y-6">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I am a final-year B.Tech ECE student (2027 batch) with a prior Diploma in Computer Science and Engineering. This unique academic foundation allows me to understand software systems from low-level silicon logic up to high-level cloud abstractions and neural network prompts.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I have independently built and shipped multiple AI-powered full-stack applications—ranging from LLM-based document intelligence platform <strong className="text-indigo-400">ClauseIQ</strong> to autonomous terminal automation agent <strong className="text-indigo-400">GitPilot-AI</strong>. Experienced across the full software lifecycle: architecting data retrieval pipelines, designing secure APIs, writing reactive interfaces, and containerized deployments.
              </p>

              {/* Education Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white/50 dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-indigo-500" />
                    <h3 className="font-semibold text-sm">B.Tech ECE</h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">Bharati Vidyapeeth College of Engineering, Pune</p>
                  <div className="mt-2 flex justify-between items-center text-xs font-semibold">
                    <span>2024 to 2027</span>
                    <span className="text-emerald-500">Aggregate: 7.96 CGPA</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white/50 dark:border-slate-800 dark:bg-slate-900/50">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-emerald-500" />
                    <h3 className="font-semibold text-sm">Diploma CSE</h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">Basavakalyan Polytechnic College</p>
                  <div className="mt-2 flex justify-between items-center text-xs font-semibold">
                    <span>Completed</span>
                    <span className="text-emerald-500">CGPA: 8.88 / 10.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="mb-24 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight">Technical Armory</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
              My engineering stack spanning AI, software development, and systems.
            </p>
          </div>

          {/* Interactive Tabbed Interface */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skillCategories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all border ${
                    activeTab === idx
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.name}
                </button>
              )
            })}
          </div>

          <div className="p-6 md:p-8 rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/70 shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {skillCategories[activeTab].skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all dark:border-slate-800/40 dark:bg-slate-800/30 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-900/10"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Experience & Projects Section */}
        <section id="experience" className="mb-24 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Project Portfolio</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
                Independent production-grade systems engineered with source code on GitHub.
              </p>
            </div>
            <a 
              href="https://github.com/PrajwalMhetre" 
              target="_blank" 
              rel="noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 hover:text-indigo-600 transition-colors"
            >
              View GitHub Profile <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col h-full rounded-2xl border border-slate-200/80 bg-white/50 dark:border-slate-800/80 dark:bg-slate-900/50 backdrop-blur-md overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm"
              >
                {/* Visual Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/40">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                        {proj.subtitle}
                      </p>
                    </div>
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label={`${proj.title} GitHub repository`}
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Tag list */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bullets Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <ul className="space-y-3">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                        <Terminal className="h-3.5 w-3.5 shrink-0 text-slate-400 dark:text-slate-500 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Independent Release</span>
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-500 hover:text-indigo-600 transition-colors"
                    >
                      Inspect Source <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6 border-b-2 border-indigo-500 inline-block pb-1">
              Certifications
            </h2>
            <div className="space-y-4">
              {[
                { title: "Generative AI with LLMs", issuer: "DeepLearning.AI / Coursera" },
                { title: "Machine Learning Specialization", issuer: "Andrew Ng / Coursera" },
                { title: "Python for Data Science & AI", issuer: "IBM / Coursera" },
                { title: "Google Cloud Fundamentals", issuer: "Google / Coursera" }
              ].map((cert) => (
                <div key={cert.title} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/70 bg-white/40 dark:border-slate-800/70 dark:bg-slate-900/30">
                  <Award className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold leading-tight">{cert.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6 border-b-2 border-indigo-500 inline-block pb-1">
              Key Achievements
            </h2>
            <div className="space-y-4">
              {[
                "Shipped 4 complete AI-powered products independently (all live on GitHub).",
                "Diploma in CSE (CGPA 8.88) alongside B.Tech ECE — dual-technical foundation.",
                "Solved 100+ DSA problems on LeetCode & HackerRank — strong analytical logic.",
                "2027 batch with no active backlogs | 60%+ in X and XII — fully eligible for Infosys roles."
              ].map((ach, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200/70 bg-white/40 dark:border-slate-800/70 dark:bg-slate-900/30">
                  <UserCheck className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{ach}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Button Playground */}
        <section id="playground" className="p-8 md:p-12 rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50 shadow-lg mb-24 scroll-mt-20 relative overflow-hidden">
          {/* Subtle grid background for the playground */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Interactive Showcase</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
                Experience the liquid glass and metal button animations in real time.
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setPlaygroundBtnStyle("liquid")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  playgroundBtnStyle === "liquid"
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                Liquid Glass Button
              </button>
              <button
                onClick={() => setPlaygroundBtnStyle("metal")}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  playgroundBtnStyle === "metal"
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                Metal Button
              </button>
            </div>

            {/* Config options */}
            {playgroundBtnStyle === "metal" && (
              <div className="flex flex-wrap justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 max-w-md mx-auto">
                {(["default", "primary", "success", "error", "gold", "bronze"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setMetalVariant(v)}
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase rounded border transition-all ${
                      metalVariant === v
                        ? "bg-slate-800 border-slate-800 text-white dark:bg-slate-100 dark:border-slate-100 dark:text-slate-900"
                        : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            )}

            {/* Main demo canvas */}
            <div className="py-12 px-6 rounded-2xl bg-slate-50/50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-850 flex items-center justify-center min-h-[160px]">
              <div className="scale-110 transform transition-all duration-300">
                {playgroundBtnStyle === "liquid" ? (
                  <LiquidButton size="xl" className="shadow-lg">
                    Liquid Glass Button
                  </LiquidButton>
                ) : (
                  <MetalButton variant={metalVariant} className="shadow-lg">
                    {metalVariant.charAt(0).toUpperCase() + metalVariant.slice(1)} Metal
                  </MetalButton>
                )}
              </div>
            </div>

            <p className="text-[11px] text-slate-400 dark:text-slate-500 italic max-w-sm mx-auto">
              * The Liquid Glass button utilizes SVG filters (`feTurbulence`, `feDisplacementMap`, `feGaussianBlur`) for structural glass refraction and backdrop blur. The Metal button supports interactive mouse events, lighting gradients, dynamic borders, and a shine overlay.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="max-w-xl mx-auto mb-24 scroll-mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight">Get In Touch</h2>
            <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">
              Have an opening or a project idea? Drop a message directly to my inbox.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50 shadow-md backdrop-blur-md relative">
            {/* Success message overlay */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 rounded-3xl z-20 flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Message Shipped!</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-xs">
                    Thanks for reaching out, Prajwal will get back to you shortly at the provided email.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                  placeholder="Write your message here..."
                />
              </div>

              <div className="pt-2">
                <LiquidButton 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full flex justify-center text-center font-bold"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </LiquidButton>
              </div>
            </form>

            {/* Direct contact info below form */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-500 shrink-0" />
                <a href="mailto:work.mhetreprajwal@gmail.com" className="hover:underline truncate">work.mhetreprajwal@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>+91 8329956570</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 py-8 bg-white dark:border-slate-800/50 dark:bg-slate-950 transition-colors duration-300">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Prajwal Kalidas Mhetre. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#experience" className="hover:underline">Projects</a>
            <a href="#playground" className="hover:underline">Playground</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <div className="flex items-center gap-1.5">
            Built with 
            <span className="text-red-500">❤️</span> 
            using Next.js & Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  )
}
