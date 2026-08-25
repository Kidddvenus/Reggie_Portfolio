"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "./About.module.css";
import { Code2, Cpu, Globe, Trophy, Users, Zap, Shield, Monitor } from "lucide-react";

const FloatingSphere = dynamic(() => import("./canvas/FloatingSphere"), {
  ssr: false,
  loading: () => <div className={styles.spherePlaceholder} />,
});

const stats = [
  { icon: <Code2 size={20} />, value: "4+", label: "Years Experience" },
  { icon: <Globe size={20} />, value: "10+", label: "Projects Shipped" },
  { icon: <Cpu size={20} />, value: "3", label: "Core Stacks" },
  { icon: <Trophy size={20} />, value: "1st", label: "Tech Expo 2025" },
];

const highlights = [
  { icon: <Zap size={16} />, text: "Flutter & Dart cross-platform mobile" },
  { icon: <Monitor size={16} />, text: "Modern Web Development (React)" },
  { icon: <Cpu size={16} />, text: "Go & Python backend engineering" },
  { icon: <Globe size={16} />, text: "RESTful API design & microservices" },
  { icon: <Users size={16} />, text: "Agile, CI/CD & code review culture" },
  { icon: <Trophy size={16} />, text: "LLM API & AI workflow automation" },
  { icon: <Shield size={16} />, text: "Security-aware (Cisco certified)" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section id="about" className="section" ref={ref}>
      {/* Bg orbs */}
      <div className="bg-orb bg-orb-green" style={{ width: 400, height: 400, top: "10%", right: "-10%" }} />
      <div className="bg-orb bg-orb-cyan" style={{ width: 300, height: 300, bottom: "5%", left: "-5%" }} />

      <div className="section-inner">
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left: 3D sphere + stats */}
          <motion.div className={styles.left} variants={itemVariants}>
            <div className={styles.sphereWrapper}>
              <FloatingSphere />
              <div className={styles.sphereRing} />
              <div className={styles.sphereRing2} />
            </div>

            {/* Stats grid */}
            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={`glass-card ${styles.statCard}`}>
                  <div className={styles.statIcon}>{s.icon}</div>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text content */}
          <div className={styles.right}>
            <motion.span className="section-tag" variants={itemVariants}>
              &lt;About Me /&gt;
            </motion.span>

            <motion.h2 className="section-title" variants={itemVariants}>
              Building the{" "}
              <span className="gradient-text">Future</span>, one app at a time
            </motion.h2>

            <div className="divider" />

            <motion.p className={styles.bio} variants={itemVariants}>
              I&apos;m <strong>Reggie Omondi</strong>, a Software Engineer and AI Engineer
              based in Nairobi, Kenya, with four years of hands-on experience building
              end-to-end digital products — from elegant Flutter mobile interfaces and modern web applications to
              high-performance Go and Python backends.
            </motion.p>

            <motion.p className={styles.bio} variants={itemVariants}>
              My flagship project <span className={styles.accent}>MyWallet</span> — a Kenyan
              digital wallet with real-time M-Pesa integration showcases my ability to
              design microservices architectures, implement secure auth flows, and deliver
              polished cross-platform experiences. I&apos;m also security-aware with a
              Cisco Cybersecurity Essentials certification.
            </motion.p>

            <motion.p className={styles.bio} variants={itemVariants}>
              Beyond coding, I integrate AI and automation into production systems from
              LLM-powered conversational assistants to n8n workflow automation. I thrive
              at the intersection of mobile, web, backend, and intelligent systems.
            </motion.p>

            {/* Highlights */}
            <motion.div className={styles.highlights} variants={itemVariants}>
              {highlights.map((h) => (
                <div key={h.text} className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="mailto:reggieomondi2002@gmail.com"
                className="btn-primary"
              >
                Let&apos;s Collaborate
              </a>
              <a
                href="https://github.com/Kidddvenus"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                View GitHub
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
