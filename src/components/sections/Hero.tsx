"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Download, Eye } from "lucide-react";

const roles = [
  "Web Developer",
  "Cyber Security Enthusiast",
  "Machine Learning Engineer",
  "Data Analyst",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [roleIndex, charIndex, isDeleting]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-accent/[0.03]" />
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-accent/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="container-main mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-8 inline-block">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-border mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-3xl font-bold text-primary/60">
                CN
              </div>
            </div>
          </div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="gradient-text">Marcelinus Nugraha Pratama</span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl text-muted-foreground mb-3 h-7 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>{roles[roleIndex].substring(0, charIndex)}</span>
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-lg mx-auto mb-10 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Mahasiswa Informatika Universitas Pembangunan Jaya dengan passion
            di Web Development, Cyber Security, dan Data Analytics.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button href="#projects">
              <Eye size={16} />
              View Projects
            </Button>
            <Button href="/cv/Marcelinus Nugraha Pratama-n-cv.pdf" variant="outline">
              <Download size={16} />
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
