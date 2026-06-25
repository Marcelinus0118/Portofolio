"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Mail, MessageSquare, Send, AtSign } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "marcelinus0118.com",
    href: "mailto:marcelinus0118.com",
  },
  {
    icon: AtSign,
    label: "GitHub",
    value: "Marcelinus0118",
    href: "https://github.com/Marcelinus0118",
  },
  {
    icon: MessageSquare,
    label: "LinkedIn",
    value: "Marcelinus Nugraha",
    href: "https://www.linkedin.com/in/marcelinus-nugraha-676150288/",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-main mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="Have a question or want to work together? Drop me a message!"
        />

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="lg:col-span-2 space-y-4" variants={fadeInUp}>
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/[0.08] text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <method.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{method.label}</p>
                  <p className="text-sm font-medium">{method.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            className="lg:col-span-3 space-y-4"
            variants={fadeInUp}
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
            />
            <Button type="submit" className="w-full sm:w-auto">
              <Send size={16} />
              {isSubmitted ? "Message Sent!" : "Send Message"}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
