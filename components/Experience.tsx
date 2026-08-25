"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Experience.module.css";
import { Briefcase, CalendarDays, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Web, Mobile & AI Engineer",
    company: "R-Tech",
    type: "Remote",
    period: "Aug 2023 – Present",
    duration: "3+ years",
    color: "#7c3aed",
    current: true,
    bullets: [
      "Designed, developed, and maintained cross-platform mobile applications using Flutter & Dart, and backend services & RESTful APIs in Python and Go full-cycle from requirements through deployment.",
      "Designed and integrated RESTful APIs connecting mobile, web, and backend systems, enabling real-time data sync and high-performance functionality.",
      "Contributed to system architecture and database design decisions across client engagements, balancing scalability, performance, and maintainability.",
      "Integrated LLM APIs into production mobile and backend systems, AI-powered features include conversational assistants, symptom analysis, and intelligent alerts.",
      "Enforced secure data handling, input validation, and authentication best practices; participated in code reviews and maintained technical documentation.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Qwetu Sacco Bank",
    type: "Onsite",
    period: "May 2025 – Aug 2025",
    duration: "3 months",
    color: "#06b6d4",
    current: false,
    bullets: [
      "Supported unit and automated testing, debugging, and documentation workflows in a regulated financial services environment.",
      "Created and maintained process notes and technical documentation to capture repeatable engineering workflows.",
      "Gained practical understanding of compliance considerations and transaction data integrity within a banking context.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="bg-orb bg-orb-cyan" style={{ width: 400, height: 400, top: "20%", right: "-10%" }} />

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;Experience /&gt;</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Building production-grade software for real clients from mobile apps and backend APIs to AI-powered systems.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {/* Timeline connector */}
              <div className={styles.connector}>
                <div
                  className={styles.dot}
                  style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}80` }}
                />
                {i < experiences.length - 1 && (
                  <div className={styles.line} style={{ background: `linear-gradient(180deg, ${exp.color}40, transparent)` }} />
                )}
              </div>

              {/* Card */}
              <div
                className={`glass-card ${styles.card}`}
                style={{ "--exp-color": exp.color } as React.CSSProperties}
              >
                {exp.current && (
                  <div className={styles.currentBadge}>
                    <span className={styles.currentDot} />
                    Current
                  </div>
                )}

                <div className={styles.cardTop}>
                  <div className={styles.roleInfo}>
                    <div className={styles.iconWrap} style={{ color: exp.color, borderColor: `${exp.color}30` }}>
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <div className={styles.company}>{exp.company}</div>
                    </div>
                  </div>

                  <div className={styles.meta}>
                    <span className={styles.metaItem}>
                      <CalendarDays size={14} /> {exp.period}
                    </span>
                    <span className={styles.metaItem}>
                      <MapPin size={14} /> {exp.type}
                    </span>
                    <span className={styles.duration} style={{ color: exp.color }}>
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className={styles.bullets}>
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className={styles.bullet}>
                      <CheckCircle2 size={15} style={{ color: exp.color, flexShrink: 0 }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
