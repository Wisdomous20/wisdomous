"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .73.593 1.323 1.325 1.323h11.495v-9.845H9.69V10.41h3.13V7.797c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.463.1 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763V10.41h3.587l-.467 3.738h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.325C24 .593 23.408 0 22.675 0z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/20 px-4 sm:px-6 lg:px-8 py-16 z-10 overflow-hidden">
      {/* Background gradient elements */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-border/20 pb-12"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Wisdomous</h3>
            <p className="text-foreground/60">
              Transforming ideas into intelligent digital solutions that drive growth and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Work", "About", "Services", "Contact"].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href="#"
                    className="text-foreground/60 hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-2">
              <p className="text-foreground/60 flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                wisdomoustech@gmail.com
              </p>
              <p className="text-foreground/60">+639-496-774-475</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-foreground/50">
            © {currentYear} Wisdomous Software Inc. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 items-center">
            <motion.a
              href="https://www.facebook.com/share/18mjZ3ExFK/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "var(--color-accent)" }}
              className="text-foreground/60 hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-foreground/60 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-foreground/60 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
