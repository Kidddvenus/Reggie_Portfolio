"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Skills.module.css";
import {
  SiFlutter, SiDart, SiPython, SiGo, SiFastapi,
  SiMongodb, SiMysql, SiFirebase, SiDocker,
  SiGooglecloud, SiGit, SiVercel, SiN8N,
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript
} from "react-icons/si";
import { Brain, Shield, Smartphone, Server, Cloud, Database, Code2, Globe } from "lucide-react";

const skillGroups = [
  {
    category: "Mobile Development",
    icon: <Smartphone size={22} />,
    color: "#06b6d4",
    skills: [
      { name: "Flutter", icon: <SiFlutter />, level: 95 },
      { name: "Dart", icon: <SiDart />, level: 92 },
      { name: "State Management", icon: <Code2 size={16} />, level: 88 },
      { name: "Clean Architecture", icon: <Code2 size={16} />, level: 85 },
    ],
  },
  {
    category: "Web Development",
    icon: <Globe size={22} />,
    color: "#3b82f6",
    skills: [
      { name: "React", icon: <SiReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript />, level: 88 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: <Server size={22} />,
    color: "#7c3aed",
    skills: [
      { name: "Python", icon: <SiPython />, level: 90 },
      { name: "Go (Golang)", icon: <SiGo />, level: 82 },
      { name: "FastAPI", icon: <SiFastapi />, level: 88 },
      { name: "RESTful APIs", icon: <Code2 size={16} />, level: 93 },
    ],
  },
  {
    category: "Databases",
    icon: <Database size={22} />,
    color: "#10b981",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 85 },
      { name: "MySQL", icon: <SiMysql />, level: 80 },
      { name: "Firebase", icon: <SiFirebase />, level: 88 },
      { name: "Vector DBs", icon: <Database size={16} />, level: 70 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud size={22} />,
    color: "#f59e0b",
    skills: [
      { name: "Docker", icon: <SiDocker />, level: 82 },
      { name: "GCP", icon: <SiGooglecloud />, level: 75 },
      { name: "Git & CI/CD", icon: <SiGit />, level: 90 },
      { name: "Vercel", icon: <SiVercel />, level: 85 },
    ],
  },
  {
    category: "AI & Automation",
    icon: <Brain size={22} />,
    color: "#ec4899",
    skills: [
      { name: "LLM APIs", icon: <Brain size={16} />, level: 85 },
      { name: "n8n Automation", icon: <SiN8N />, level: 80 },
      { name: "ML Integration", icon: <Brain size={16} />, level: 72 },
      { name: "AI Voice Agents", icon: <Brain size={16} />, level: 75 },
    ],
  },
  {
    category: "Security",
    icon: <Shield size={22} />,
    color: "#ef4444",
    skills: [
      { name: "Secure Auth", icon: <Shield size={16} />, level: 88 },
      { name: "JWT & OAuth", icon: <Shield size={16} />, level: 85 },
      { name: "Input Validation", icon: <Shield size={16} />, level: 90 },
      { name: "Cybersecurity (Cisco)", icon: <Shield size={16} />, level: 80 },
    ],
  },
];

function SkillBar({ name, icon, level, color }: { name: string; icon: React.ReactNode; level: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className={styles.skillItem} ref={ref}>
      <div className={styles.skillHeader}>
        <span className={styles.skillIcon} style={{ color }}>{icon}</span>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPct}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <motion.div
          className={styles.barFill}
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section" ref={ref} style={{ background: "var(--section-alt-bg)" }}>
      <div className="bg-orb bg-orb-green" style={{ width: 500, height: 500, top: "50%", left: "-15%", transform: "translateY(-50%)" }} />

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;Core Skills /&gt;</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Full-spectrum engineering — from Flutter UIs and modern web applications to Go microservices, AI integrations and secure backend APIs.
          </p>
        </motion.div>

        <div className={styles.groupsGrid}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className={`glass-card ${styles.groupCard}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              style={{ "--group-color": group.color } as React.CSSProperties}
            >
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon} style={{ color: group.color }}>
                  {group.icon}
                </span>
                <h3 className={styles.groupTitle}>{group.category}</h3>
              </div>
              <div className={styles.skillsList}>
                {group.skills.map((s) => (
                  <SkillBar key={s.name} {...s} color={group.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
