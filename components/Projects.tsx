"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Projects.module.css";
import {
  ExternalLink, Smartphone, Brain,
  LayoutDashboard, CheckSquare, Phone, MessageSquare, MapPin
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "mywallet",
    title: "MyWallet",
    subtitle: "Lumina Bank",
    description:
      "A modern, Kenyan-focused mobile wallet application built with Flutter. Provides secure biometric authentication, seamless M-Pesa payments (Paybill, Pochi), deposits, and intuitive finance management.",
    tags: ["Flutter", "Biometrics", "M-Pesa", "sqflite", "PDF Export", "UI/UX"],
    icon: <Smartphone size={28} />,
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #0891b2 0%, #7c3aed 100%)",
    featured: true,
    bullets: [
      "Multi-layered Auth: OTP, PIN & Biometrics via local_auth",
      "Kenyan Payments: Paybill, Buy Goods, Pochi La Biashara",
      "Detailed Ledgers & PDF Statement Exports",
      "Offline local storage via sqflite & secure_storage",
    ],
    github: "https://codemagic.io/app/6a2bff3f0330d4437e444016/build/6a6b2f9624c9d250ceacff63",
  },
  {
    id: "drai",
    title: "Dr.AI",
    subtitle: "AI-Powered Healthcare App",
    description:
      "A cross-platform Flutter + Python app featuring AI-driven symptom analysis, personalized nutrition plans, and fitness tracking via LLM API integration.",
    tags: ["Flutter", "Python", "LLM APIs", "Healthcare", "AI"],
    icon: <Brain size={28} />,
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #be185d 0%, #7c3aed 100%)",
    featured: true,
    bullets: [
      "AI symptom analysis via LLM integration",
      "Personalized nutrition & fitness plans",
      "Cross-platform Flutter frontend",
      "Python REST backend",
    ],
    github: "https://codemagic.io/app/6a2be9c3f0baf157ae8c435e/build/6a2bf06f29f8b6f0887976a5",
  },
  {
    id: "admin-erp",
    title: "Admin ERP",
    subtitle: "Multi-Role ERP Web & Mobile",
    description:
      "A multi-role enterprise resource platform (administrator, manager, end-user) with role-based access control, real-time data updates and scalable database workflows.",
    tags: ["Flutter", "Python", "RBAC", "ERP", "REST API", "Web", "Mobile"],
    icon: <LayoutDashboard size={28} />,
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #d97706 0%, #ef4444 100%)",
    featured: false,
    bullets: [
      "Multi-role: Admin, Manager, End-user",
      "Role-based access control (RBAC)",
      "Real-time REST API updates",
      "Platform-specific UX (Android & iOS)",
    ],
    github: "https://github.com/Kidddvenus/admin-dashboard",
  },
  {
    id: "beta",
    title: "Beta",
    subtitle: "Project & Task Management",
    description:
      "Cross-platform Flutter project and task management solution with real-time data synchronization, structured workflow tracking, and a Python RESTful backend.",
    tags: ["Flutter", "Python", "Real-time", "Task Management", "REST API"],
    icon: <CheckSquare size={28} />,
    color: "#10b981",
    gradient: "linear-gradient(135deg, #059669 0%, #06b6d4 100%)",
    featured: false,
    bullets: [
      "Real-time sync across devices",
      "Structured workflow & task tracking",
      "RESTful Python backend",
      "Cross-platform Flutter frontend",
    ],
    github: "https://github.com/Kidddvenus/beta",
  },
  {
    id: "careconnect",
    title: "CareConnect",
    subtitle: "AI Voice Agent for Appointments",
    description:
      "A 24/7 automated appointment management system using n8n workflow automation and AI voice APIs, with webhook triggers, conditional logic, and notification pipelines.",
    tags: ["n8n", "AI Voice", "Automation", "Webhooks", "Notifications"],
    icon: <Phone size={28} />,
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #6d28d9 0%, #ec4899 100%)",
    featured: false,
    bullets: [
      "AI voice agents for appointment scheduling",
      "n8n workflow automation engine",
      "Webhook triggers & conditional logic",
      "Automated notification pipelines",
    ],
    github: "https://github.com/Kidddvenus/CareConnect-n8n",
  },
  {
    id: "info-assistant",
    title: "Info Assistant",
    subtitle: "Conversational AI App",
    description:
      "An Android conversational AI assistant handling natural language queries with context-aware responses, end-to-end LLM API integration, and secure credential management.",
    tags: ["Flutter", "Android", "LLM APIs", "Conversational AI", "NLP"],
    icon: <MessageSquare size={28} />,
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #0e7490 0%, #10b981 100%)",
    featured: false,
    bullets: [
      "Natural language processing via LLM API",
      "Context-aware multi-turn conversations",
      "Secure credential management",
      "Flutter Android-native build",
    ],
    github: "https://github.com/Kidddvenus/Info-Assistant",
  },
  {
    id: "attendance-pulse",
    title: "Attendance Pulse",
    subtitle: "GPS Attendance Tracker",
    description:
      "A GPS-based attendance tracking app for students using real-time geolocation, biometric verification, interactive maps, and Firebase Auth/Firestore.",
    tags: ["Flutter", "Firebase", "GPS", "Biometrics", "Google Maps"],
    icon: <MapPin size={28} />,
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
    featured: false,
    bullets: [
      "Biometric verification via local_auth",
      "Real-time GPS tracking & reverse geocoding",
      "Firebase Auth & Firestore database",
      "Interactive Google Maps embed",
    ],
    github: "https://github.com/Kidddvenus/pulse",
  },
];

function ProjectCard({ project, index, inView }: { project: (typeof projects)[0]; index: number; inView: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className={`${styles.cardWrapper} ${project.featured ? styles.featured : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`${styles.cardInner} ${flipped ? styles.flipped : ""}`}>
        {/* Front */}
        <div className={styles.cardFront} style={{ "--proj-color": project.color } as React.CSSProperties}>
          <div className={styles.cardGlow} style={{ background: `${project.color}20` }} />
          <div className={styles.cardBorder} style={{ background: project.gradient }} />

          <div className={styles.projIconWrap} style={{ background: `${project.color}15`, borderColor: `${project.color}30` }}>
            <span style={{ color: project.color }}>{project.icon}</span>
          </div>

          {project.featured && (
            <div className={styles.featuredTag}>⭐ Featured</div>
          )}

          <h3 className={styles.projTitle}>{project.title}</h3>
          <div className={styles.projSubtitle}>{project.subtitle}</div>
          <p className={styles.projDesc}>{project.description}</p>

          <div className={styles.tagRow}>
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className={styles.tag} style={{ borderColor: `${project.color}40`, color: project.color }}>
                {t}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className={styles.tagMore}>+{project.tags.length - 4}</span>
            )}
          </div>

          <div className={styles.hoverHint}>Hover for details →</div>
        </div>

        {/* Back */}
        <div className={styles.cardBack} style={{ "--proj-color": project.color } as React.CSSProperties}>
          <div className={styles.cardBorder} style={{ background: project.gradient }} />

          <div style={{ color: project.color, marginBottom: 12 }}>{project.icon}</div>
          <h3 className={styles.projTitle}>{project.title}</h3>

          <ul className={styles.backBullets}>
            {project.bullets.map((b, i) => (
              <li key={i} className={styles.backBullet}>
                <span className={styles.bulletDot} style={{ background: project.color }} />
                {b}
              </li>
            ))}
          </ul>

          <div className={styles.allTags}>
            {project.tags.map((t) => (
              <span key={t} className={styles.tag} style={{ borderColor: `${project.color}40`, color: project.color }}>
                {t}
              </span>
            ))}
          </div>

          <div className={styles.cardLinks}>
            <a href={project.github} target="_blank" rel="noreferrer" className={styles.linkBtn}>
              {project.github.includes("github.com") ? (
                <><FaGithub size={16} /> GitHub</>
              ) : (
                <><ExternalLink size={16} /> Live Build</>
              )}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section" ref={ref} style={{ background: "var(--section-alt-bg)" }}>
      <div className="bg-orb bg-orb-green" style={{ width: 500, height: 500, bottom: "-10%", right: "-10%" }} />

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;Projects /&gt;</span>
          <h2 className="section-title">
            Things I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            Production-grade applications spanning mobile, Web, backend, AI — hover any card to explore details.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
