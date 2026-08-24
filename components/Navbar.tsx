"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return () => unsub();
  }, [scrollY]);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a className={styles.logo} href="#hero" onClick={() => handleNav("#hero")}>
          <span className={styles.logoAngle}>&lt;</span>
          <span className="gradient-text">RO</span>
          <span className={styles.logoAngle}>/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                className={`${styles.link} ${active === link.href ? styles.active : ""}`}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
                <span className={styles.linkUnderline} />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          className={`btn-primary ${styles.cta}`}
          href="mailto:reggieomondi2002@gmail.com"
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={styles.mobileMenu}
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                className={styles.mobileLink}
                onClick={() => handleNav(link.href)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
