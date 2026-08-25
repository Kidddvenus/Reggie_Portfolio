"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Certifications.module.css";
import { Award, Shield, Trophy, Brain, Code2, BarChart3 } from "lucide-react";

const certifications = [
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "August 2023",
    icon: <Shield size={24} />,
    color: "#ef4444",
    type: "certification",
  },
  {
    title: "Machine Learning with Python",
    issuer: "FreeCodeCamp",
    date: "July 2024",
    icon: <Brain size={24} />,
    color: "#7c3aed",
    type: "certification",
  },
  {
    title: "Data Analytics with Python",
    issuer: "FreeCodeCamp",
    date: "October 2023",
    icon: <BarChart3 size={24} />,
    color: "#06b6d4",
    type: "certification",
  },
  {
    title: "Flutter Development Course",
    issuer: "Simplilearn",
    date: "June 2023",
    icon: <Code2 size={24} />,
    color: "#54c5f8",
    type: "certification",
  },
];

const awards = [
  {
    title: "Winner – Taifa Teule Tech Expo 2025",
    description:
      "First place at the Taifa Teule Tech Expo 2025, Kenya's premier technology innovation showcase, recognizing outstanding software engineering and AI integration.",
    icon: <Trophy size={32} />,
    color: "#facc15",
  },
];

const education = {
  degree: "BSc, Mathematics and Computer Science",
  school: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
  location: "Nairobi, Kenya",
  icon: <Award size={24} />,
  color: "#10b981",
};

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="section" ref={ref}>
      <div className="bg-orb bg-orb-cyan" style={{ width: 400, height: 400, top: "10%", left: "-8%" }} />
      <div className="bg-orb bg-orb-pink" style={{ width: 350, height: 350, bottom: "0%", right: "-8%" }} />

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;Credentials /&gt;</span>
          <h2 className="section-title">
            Certifications &amp;{" "}
            <span className="gradient-text">Awards</span>
          </h2>
          <p className="section-subtitle">
            Continuously investing in growth from mobile development to AI, cybersecurity, and data analytics.
          </p>
        </motion.div>

        {/* Award spotlight */}
        <motion.div
          className={styles.awardSpotlight}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className={styles.awardGlow} />
          <div className={styles.awardIcon}>
            <Trophy size={48} style={{ color: "#facc15" }} />
          </div>
          <div className={styles.awardContent}>
            <div className={styles.awardEyebrow}>🏆 Award</div>
            <h3 className={styles.awardTitle}>Winner – Taifa Teule Tech Expo 2025</h3>
            <p className={styles.awardDesc}>
              First place at Kenya&apos;s premier technology innovation showcase, recognizing outstanding
              software engineering, AI integration, and end-to-end product delivery.
            </p>
          </div>
          <div className={styles.awardShine} />
        </motion.div>

        {/* Certifications grid */}
        <div className={styles.certsGrid}>
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className={`glass-card-cyan ${styles.certCard}`}
              style={{ "--cert-color": cert.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              <div className={styles.certTopLine} style={{ background: cert.color }} />
              <div className={styles.certIconWrap} style={{ background: `${cert.color}15`, borderColor: `${cert.color}30` }}>
                <span style={{ color: cert.color }}>{cert.icon}</span>
              </div>
              <h4 className={styles.certTitle}>{cert.title}</h4>
              <div className={styles.certIssuer}>{cert.issuer}</div>
              <div className={styles.certDate}>{cert.date}</div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className={`glass-card ${styles.eduCard}`}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.eduIconWrap} style={{ background: `${education.color}15`, borderColor: `${education.color}30` }}>
            <span style={{ color: education.color }}>{education.icon}</span>
          </div>
          <div className={styles.eduContent}>
            <div className={styles.eduEyebrow}>Education</div>
            <h4 className={styles.eduDegree}>{education.degree}</h4>
            <div className={styles.eduSchool}>{education.school}</div>
            <div className={styles.eduLocation}>{education.location}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
