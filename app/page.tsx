'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  GraduationCap, 
  Code2, 
  Database, 
  ExternalLink, 
  FileText, 
  MapPin, 
  Server,
  BrainCircuit,
  BarChart3,
  Layers,
  Sparkles,
  Globe,
  Briefcase
} from 'lucide-react';

/* Inline Brand SVGs for GitHub and LinkedIn */
const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
  </svg>
);

export default function PortfolioCV() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Accent Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-16">
        
        {/* HEADER / CV TOP SECTION */}
        <motion.header 
          initial="hidden" 
          animate="visible" 
          variants={fadeIn}
          className="border-b border-slate-800/80 pb-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Curriculum Vitae
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
                Raiyan Fardin Haque
              </h1>
              <p className="text-xl text-cyan-400 font-medium mt-1">
                Software Engineer & Data Systems Specialist
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Computer Science & Engineering Graduate | East West University
              </p>
              <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap md:flex-col gap-3 text-sm text-slate-300 w-full md:w-auto">
              <a href="mailto:fardinraiyan809@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg">
                <Mail className="w-4 h-4 text-cyan-400" /> fardinraiyan809@gmail.com
              </a>
              <a href="tel:01939973520" className="flex items-center gap-2 hover:text-cyan-400 transition-colors bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg">
                <Phone className="w-4 h-4 text-cyan-400" /> 01939973520
              </a>
              <div className="flex gap-2">
                <a href="https://linkedin.com/in/raiyan-fardin" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 hover:text-cyan-400 transition-colors bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" /> LinkedIn
                </a>
                <a href="https://github.com/Fardin520" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 hover:text-cyan-400 transition-colors bg-slate-900/60 border border-slate-800 px-3 py-2 rounded-lg">
                  <GithubIcon className="w-4 h-4 text-cyan-400" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.header>

        {/* EXECUTIVE SUMMARY */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" /> Professional Summary
          </h2>
          <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm text-slate-300 leading-relaxed">
            Detail-oriented Software Engineer and Computer Science major specializing in full-stack web architectures, REST API design, data processing, and machine learning. Proven capability in building modern frontend interfaces, optimizing backend system pipelines, constructing interactive business dashboards, and implementing digital image processing protocols[cite: 1]. Focused on engineering clean, scalable software solutions while leveraging analytical data skills[cite: 1].
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-cyan-400" /> Education
          </h2>
          <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-xl font-bold text-slate-100">East West University</h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-cyan-400 w-fit">
                Expected Graduation: Dec 2026
              </span>
            </div>
            <p className="text-slate-300 font-medium">Bachelor of Science in Computer Science and Engineering</p>
            <p className="text-slate-400 text-sm">Dhaka, Bangladesh</p>
            
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Key Computer Science Coursework</p>
              <div className="flex flex-wrap gap-2">
                {['Data Structures & Algorithms', 'Database Systems', 'Software Engineering Principles', 'Machine Learning', 'Digital Image Processing', 'Web Technologies'].map((course, idx) => (
                  <span key={idx} className="bg-slate-800/80 text-slate-300 text-xs px-3 py-1.5 rounded-md border border-slate-700/50">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* TECHNICAL SKILLS MATRIX */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" /> Comprehensive Technical Matrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Frontend & Web Engineering */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-3">
                <Globe className="w-4 h-4" /> Web Engineering & Frontend
              </div>
              <div className="flex flex-wrap gap-2">
                {['Next.js (App Router)', 'React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'Framer Motion', 'Responsive UI Design'].map((skill, idx) => (
                  <span key={idx} className="bg-slate-800/60 text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-700/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend & Systems */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-3">
                <Server className="w-4 h-4" /> Backend Architecture & Databases
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C++', 'FastAPI', 'Flask', 'REST APIs', 'SQL (MySQL, PostgreSQL)', 'Database Architecture'].map((skill, idx) => (
                  <span key={idx} className="bg-slate-800/60 text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-700/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI, Machine Learning & Vision */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-3">
                <BrainCircuit className="w-4 h-4" /> AI, NLP & Image Processing
              </div>
              <div className="flex flex-wrap gap-2">
                {['Scikit-Learn', 'NLTK', 'OpenCV', 'Natural Language Processing', 'Histogram Modeling'].map((skill, idx) => (
                  <span key={idx} className="bg-slate-800/60 text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-700/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Analytics & Tools */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-3">
                <BarChart3 className="w-4 h-4" /> Data Analytics & Developer Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {['Power BI', 'Advanced Excel', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Git / GitHub', 'VS Code', 'Node.js', 'Jupyter'].map((skill, idx) => (
                  <span key={idx} className="bg-slate-800/60 text-slate-200 text-xs px-2.5 py-1 rounded-md border border-slate-700/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-400" /> Software Engineering & Data Projects
          </h2>
          
          <div className="space-y-6">

            {/* Portfolio Web Application */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-100">Interactive Web CV & Portfolio Platform</h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded">
                  Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion
                </span>
              </div>
              <p className="text-slate-300 text-sm">
                Architected and developed a responsive, high-performance portfolio web platform featuring dynamic animations, structured schema layouts, and modern glassmorphic dark-mode UI.
              </p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pl-1">
                <li>Built modular React components with TypeScript strict typing to ensure high reliability.</li>
                <li>Leveraged Tailwind CSS utility architecture and Framer Motion for scroll-triggered micro-interactions.</li>
              </ul>
            </div>

            {/* Smart ATS Backend */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-100">Smart ATS API Engine</h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded">
                  Python, FastAPI/Flask, REST API, Text Analytics
                </span>
              </div>
              <p className="text-slate-300 text-sm">
                Engineered a robust backend REST API tailored for an Applicant Tracking System (ATS) to handle resume assessment and profile evaluation logic[cite: 1].
              </p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pl-1">
                <li>Developed automated text analytics parsing scripts to extract skills, experience levels, and contact data[cite: 1].</li>
                <li>Structured database schemas to log candidate profiles securely and process multi-attribute filtering queries[cite: 1].</li>
              </ul>
              <div className="pt-2">
                <a href="https://github.com/Fardin520" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline">
                  View Repository <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* E-Commerce Marketplace Performance Analysis */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-100">E-Commerce Marketplace Analytics Engine</h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded">
                  Python, SQL, Power BI
                </span>
              </div>
              <p className="text-slate-300 text-sm">
                Designed and implemented an interactive analytics dashboard to visualize marketplace KPIs, sales growth, and consumer trends[cite: 1].
              </p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pl-1">
                <li>Wrote optimized SQL queries to clean, filter, and extract key metrics from relational data tables[cite: 1].</li>
                <li>Utilized Python (Pandas/Seaborn) for exploratory data analysis (EDA) to pinpoint operational performance bottlenecks[cite: 1].</li>
              </ul>
              <div className="pt-2">
                <a href="https://github.com/Fardin520" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline">
                  View Repository & Dashboard <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Capstone NLP */}
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm space-y-4 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-100">
                  E-Commerce Review Sentiment Pipeline <span className="text-cyan-400 font-normal text-sm">(Capstone Project)</span>
                </h3>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded">
                  Python, NLP, NLTK
                </span>
              </div>
              <p className="text-slate-300 text-sm">
                Building an NLP intelligence system to parse, clean, and execute text preprocessing steps on consumer product reviews[cite: 1].
              </p>
              <ul className="list-disc list-inside text-sm text-slate-400 space-y-1.5 pl-1">
                <li>Leveraged tokenization, lemmatization, and sentiment evaluation algorithms to convert raw text into structured analytics data[cite: 1].</li>
              </ul>
            </div>

          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800/80 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Raiyan Fardin Haque. Built with Next.js, React, TypeScript & Tailwind CSS.</p>
        </footer>

      </div>
    </div>
  );
}