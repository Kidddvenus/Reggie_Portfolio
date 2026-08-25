"use client";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ParticleField = dynamic(() => import("./canvas/ParticleField"), {
  ssr: false,
  loading: () => <div style={{ position: "absolute", inset: 0, background: "var(--bg-primary)" }} />,
});

const TITLES = [
  "Full-Stack Developer",
  "Flutter & Dart Expert",
  "Go & Python Engineer",
  "AI Integration Specialist",
  "Mobile App Developer",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = TITLES[titleIndex];
    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % TITLES.length);
      }
    }
    // return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, titleIndex]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    // `visible` is a function so we can use the `custom` prop on motion components.
    // Cast the easing array to `any` to satisfy framer-motion's TypeScript types.
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as any },
    }),
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* 3D Background */}
      <div className={styles.canvasWrapper}>
        <ParticleField />
      </div>

      {/* Radial gradient overlays */}
      <div className={styles.radialGlow1} />
      <div className={styles.radialGlow2} />
      <div className={styles.radialGlow3} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContent}>
          {/* Location badge */}
        <motion.div
          className={styles.locationBadge}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <MapPin size={14} />
          <span>Nairobi, Kenya</span>
          <span className={styles.pulse} />
        </motion.div>

        {/* Name */}
        <motion.h1
          className={styles.name}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Reggie Omondi</span>
        </motion.h1>

        {/* Typewriter title */}
        <motion.div
          className={styles.titleRow}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <span className={styles.titlePrefix}>I build </span>
          <span className={styles.typewriter}>
            {displayed}
            <span className={styles.cursor}>|</span>
          </span>
        </motion.div>

        {/* Summary */}
        <motion.p
          className={styles.summary}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          Full-Stack Developer with <strong>4+ years</strong> of experience building
          cross-platform mobile apps, scalable backend APIs, and AI-powered systems.
          Winner of the <span className={styles.highlight}>Taifa Teule Tech Expo 2025</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className={styles.actions}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.0}
        >
          <a href="#projects" className="btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
          }}>
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-outline" onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Get In Touch
          </a>
        </motion.div>

        {/* Social / contact pills */}
        <motion.div
          className={styles.socials}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
        >
          <a href="https://github.com/Kidddvenus" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
            <FaGithub size={18} /><span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/reggie-omondi-1052b0275" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <FaLinkedin size={18} /><span>LinkedIn</span>
          </a>
          <a href="mailto:reggieomondi2002@gmail.com" className={styles.socialLink} aria-label="Email">
            <Mail size={18} /><span>Email</span>
          </a>
          <a href="tel:+254705079949" className={styles.socialLink} aria-label="Phone">
            <Phone size={18} /><span>Call</span>
          </a>
        </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          className={styles.imageContent}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <div className={styles.imageGlow} />
          <Image
            src="/profile.jpeg"
            alt="Reggie Omondi"
            width={320}
            height={420}
            className={styles.profileImage}
            priority
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
