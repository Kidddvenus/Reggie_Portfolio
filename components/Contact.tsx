"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Contact.module.css";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  { icon: <Mail size={20} />, label: "Email", value: "reggieomondi2002@gmail.com", href: "mailto:reggieomondi2002@gmail.com", color: "#7c3aed" },
  { icon: <Phone size={20} />, label: "Phone", value: "+254 705 079 949", href: "tel:+254705079949", color: "#06b6d4" },
  { icon: <MapPin size={20} />, label: "Location", value: "Nairobi, Kenya", href: null, color: "#10b981" },
  { icon: <FaGithub size={20} />, label: "GitHub", value: "github.com/Kidddvenus", href: "https://github.com/Kidddvenus", color: "#ec4899" },
  { icon: <FaLinkedin size={20} />, label: "LinkedIn", value: "Reggie Omondi", href: "https://linkedin.com/in/reggie-omondi-1052b0275", color: "#f59e0b" },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Build mailto link
    const mailto = `mailto:reggieomondi2002@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="bg-orb bg-orb-purple" style={{ width: 500, height: 500, top: "20%", right: "-15%" }} />
      <div className="bg-orb bg-orb-cyan" style={{ width: 350, height: 350, bottom: "10%", left: "-10%" }} />

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">&lt;Contact /&gt;</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Open to freelance projects, full-time roles, and exciting collaborations. Let&apos;s build something great.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Left: Contact info */}
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className={styles.availability}>
              <span className={styles.availDot} />
              <span>Available for opportunities</span>
            </div>

            <p className={styles.intro}>
              Whether you need a Flutter app, a Python/Go backend, or AI integrations —
              I&apos;d love to hear about your project. Let&apos;s create something exceptional together.
            </p>

            <div className={styles.contactCards}>
              {contactInfo.map((c) => (
                <div key={c.label} className={styles.contactItem}>
                  <div className={styles.contactIcon} style={{ color: c.color, borderColor: `${c.color}30`, background: `${c.color}10` }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className={styles.contactLabel}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={styles.contactValue} style={{ color: c.color }}>
                        {c.value}
                      </a>
                    ) : (
                      <span className={styles.contactValue} style={{ color: c.color }}>{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Referee */}
            <div className={`glass-card-cyan ${styles.referee}`}>
              <div className={styles.refTag}>Referee</div>
              <div className={styles.refName}>Alphonce Chore</div>
              <div className={styles.refRole}>ICT Manager, Qwetu Sacco Bank</div>
              <a href="tel:+254722257879" className={styles.refPhone}>0722 257 879</a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className={`glass-card ${styles.formCard}`}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h3 className={styles.formTitle}>Send a Message</h3>

            {sent ? (
              <div className={styles.sentMsg}>
                <CheckCircle size={40} style={{ color: "#10b981" }} />
                <p>Message ready! Your email client should open.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className={`btn-primary ${styles.sendBtn}`} disabled={sending}>
                  <Send size={18} />
                  <span>{sending ? "Opening email client..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
