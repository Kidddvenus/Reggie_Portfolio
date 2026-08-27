"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Projects.module.css";
import {
  ExternalLink, Smartphone, Brain,
  LayoutDashboard, CheckSquare, Phone, MessageSquare, MapPin, Globe
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "mywallet",
    title: "MyWallet",
    subtitle: "Fintech Mobile Wallet App",
    description:
      "A modern, Kenyan-focused mobile wallet application built with Flutter. Provides secure biometric authentication, seamless M-Pesa payments (Paybill, Pochi), deposits, and intuitive finance management.",
    tags: ["Flutter", "Biometrics", "M-Pesa", "UI/UX", "Python", "FastAPI", "Docker", "Microservices"],
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
    subtitle: "AI Health & Wellness App",
    description:
      "A cross-platform Flutter application providing users with AI-powered symptom analysis, personalized nutrition, mental health support, and emergency facility locators.",
    tags: ["Flutter", "AI", "Health", "OpenStreetMap", "Computer Vision", "Firebase", "Python", "FastAPI", "Microservices"],
    icon: <Brain size={28} />,
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #be185d 0%, #7c3aed 100%)",
    featured: true,
    bullets: [
      "AI Consultations: Symptom analysis & mental health",
      "Camera Scan: AI analysis of health-related images",
      "Emergency Services: Locate nearby hospitals & clinics",
      "Health Trackers: Weight, Sleep, Menstrual cycle & Prescriptions",
    ],
    github: "https://codemagic.io/app/6a2be9c3f0baf157ae8c435e/build/6a2bf06f29f8b6f0887976a5",
  },
  {
    id: "admin-erp",
    title: "Admin ERP",
    subtitle: "Admin Dashboard ERP",
    description:
      "A modern, cross-platform Admin Dashboard built with Flutter. Provides a comprehensive interface for managing members, leaders, cells, meetings, and reports, with seamless integration to Firebase Firestore.",
    tags: ["Flutter", "Firebase", "Cross-Platform", "Dashboard", "CSV Export", "Data Viz"],
    icon: <LayoutDashboard size={28} />,
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #d97706 0%, #ef4444 100%)",
    featured: false,
    bullets: [
      "Interactive Dashboards: Visualize key metrics",
      "Member & Meeting Management: Full CRUD operations",
      "Robust Reporting: Generate, export (CSV) and share reports",
      "Multi-Platform: Android, iOS, Web, Windows, Linux, macOS",
    ],
    github: "https://github.com/Kidddvenus/admin-dashboard",
  },
  {
    id: "beta",
    title: "Beta",
    subtitle: "Project & Task Management",
    description:
      "A cross-platform Flutter application for managing projects, employees, and tasks, with a Firebase-powered backend and AI/Cloud Function integrations.",
    tags: ["Flutter", "Firebase", "PDF Export"],
    icon: <CheckSquare size={28} />,
    color: "#10b981",
    gradient: "linear-gradient(135deg, #059669 0%, #06b6d4 100%)",
    featured: false,
    bullets: [
      "Project & Task Management: Create, view, and assign tasks",
      "Employee Records: Manage employees and project managers",      
      "Data Tables & PDF Export: View and export project/task data",
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
    video: "/Pulse demo.mp4",
  },
  {
    id: "gracedo",
    title: "Gracedo Services Limited",
    subtitle: "Pan-African Consultancy",
    description:
      "A premier Pan-African consultancy dedicated to bridging gaps in human development. We empower individuals, organizations, and communities through strategic development, impactful management, and visionary advisory.",
    tags: ["HTML5", "Tailwind CSS", "Vanilla JS", "Vercel"],
    icon: <Globe size={28} />,
    color: "#eab308",
    gradient: "linear-gradient(135deg, #ca8a04 0%, #ea580c 100%)",
    featured: true,
    bullets: [
      "Strategic Advisory & Project Management",
      "Digital Transformation & Conferencing",
      "Fast & Accessible HTML5 + Tailwind CSS UI",
      "Vercel Deployment with Speed Insights",
    ],
    github: "https://gracedo-project.vercel.app/",
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
            {"video" in project && (project as any).video && (
              <a href={(project as any).video} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                <ExternalLink size={16} /> Live demo
              </a>
            )}
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
