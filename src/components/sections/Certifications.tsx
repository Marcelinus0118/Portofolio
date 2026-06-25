"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { certifications } from "@/data/certifications";
import { ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-main mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications I have earned"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CertCard({ cert }: { cert: (typeof certifications)[number] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-sm hover:border-primary/20 transition-all duration-200"
      variants={fadeInUp}
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-primary/[0.06] to-accent/[0.06] flex items-center justify-center relative overflow-hidden">
        {!imgError ? (
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="text-center p-4">
            <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-primary/[0.08] border border-border flex items-center justify-center">
              <span className="text-xl font-bold text-primary/50">
                {cert.title.charAt(0)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{cert.issuer}</p>
          </div>
        )}

        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-card/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium">
              <ExternalLink size={14} />
              View Credential
            </span>
          </a>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {cert.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{cert.issuer}</span>
          <span className="text-xs text-muted-foreground">{cert.date}</span>
        </div>
      </div>
    </motion.div>
  );
}
