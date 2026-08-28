"use client";
import styles from "./Footer.module.css";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: <FaGithub size={18} />, href: "https://github.com/Kidddvenus", label: "GitHub" },
  { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/reggie-omondi-1052b0275", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:reggieomondi2002@gmail.com", label: "Email" },
];

export default function Footer() {
  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        {/* Logo & tagline */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.bracket}>&lt;</span>
            <span className="gradient-text">RO</span>
            <span className={styles.bracket}>/&gt;</span>
          </div>
          <p className={styles.tagline}>
            Full-Stack &amp; AI Engineer · Nairobi, Kenya
          </p>
          <p className={styles.tagline2}>
            Building elegant mobile apps, web applications,  scalable APIs, and intelligent systems.
          </p>
        </div>

        {/* Nav links */}
        <div className={styles.navLinks}>
          <div className={styles.navTitle}>Navigation</div>
          {links.map((l) => (
            <button key={l.href} className={styles.navLink} onClick={() => scroll(l.href)}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div className={styles.contactBlock}>
          <div className={styles.navTitle}>Connect</div>
          <div className={styles.socialRow}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={styles.socialIcon} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
          <a href="mailto:reggieomondi2002@gmail.com" className={styles.email}>
            reggieomondi2002@gmail.com
          </a>
          <a href="tel:+254705079949" className={styles.phone}>+254 705 079 949</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© 2025 Reggie Omondi. All rights reserved.</span>
          {/* <span className={styles.made}>
            Made with <Heart size={13} style={{ display: "inline", color: "#ec4899", verticalAlign: "middle" }} /> in Nairobi
          </span> */}
        </div>
      </div>
    </footer>
  );
}
