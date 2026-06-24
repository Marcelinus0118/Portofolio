"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { staggerContainer } from "@/lib/animations";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="container-main mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies and tools I have experience with"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <Card key={category.category}>
              <h3 className="text-lg font-semibold mb-5">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 text-sm rounded-lg border border-border bg-secondary/50 text-foreground"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
