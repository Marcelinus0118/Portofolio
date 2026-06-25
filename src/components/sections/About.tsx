"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Code2, Shield, Brain, BarChart3, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";

const interests = [
  { icon: Code2, label: "Web Development", description: "Building modern and responsive web applications" },
  { icon: Shield, label: "Cyber Security", description: "Exploring system and network security" },
  { icon: Brain, label: "Machine Learning", description: "Developing AI models and data science solutions" },
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-main mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about who I am and what I do"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-border mx-auto lg:mx-0">
                <div className="w-full h-full bg-gradient-to-br from-primary/[0.08] to-accent/[0.08] flex items-center justify-center">
                  <GraduationCap size={64} className="text-primary/30" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-6 text-justify"
              variants={fadeInUp}
            >
              I am an Informatics student at Universitas Pembangunan Jaya
              with a deep interest in technology. With a focus on Web
              Development, Cyber Security, Machine Learning, and Data
              Analytics, I continuously learn and develop myself to create
              innovative digital solutions.
            </motion.p>

            <motion.p
              className="text-muted-foreground leading-relaxed text-justify"
              variants={fadeInUp}
            >
              I believe that technology is a powerful tool for solving
              real-world problems. Through various projects and organizational
              experiences, I continuously sharpen my technical and soft skills.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {interests.map((interest) => (
            <Card key={interest.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/[0.08] text-primary mb-4">
                <interest.icon size={24} />
              </div>
              <h3 className="font-semibold mb-2">{interest.label}</h3>
              <p className="text-sm text-muted-foreground">
                {interest.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
