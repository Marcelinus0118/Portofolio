"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { experiences } from "@/data/experience";
import { GraduationCap, Music, Gift } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  university: GraduationCap,
  "music-chair": Music,
  "christmas-event": Gift,
};

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="container-main mx-auto">
        <SectionHeading
          title="Experience & Organization"
          subtitle="My journey through education and organizational activities"
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.id] || GraduationCap;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  className="relative pl-0 sm:pl-14"
                  variants={isEven ? fadeInLeft : fadeInRight}
                >
                  <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full border border-border bg-card items-center justify-center">
                    <Icon size={16} className="text-primary" />
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.role}</h3>
                        <p className="text-sm text-primary">{exp.organization}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
