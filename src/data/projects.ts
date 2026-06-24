import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "upj-speakup",
    title: "UPJ SpeakUp!",
    description:
      "Platform partisipasi mahasiswa untuk menyampaikan aspirasi dan pendapat secara digital. Dibangun dengan Laravel dan MySQL.",
    image: "/projects/speakup.png",
    tags: ["Laravel", "MySQL", "PHP", "Bootstrap"],
    githubUrl: "https://github.com/celnn/upj-speakup",
  },
  {
    id: "dns-spoofing-detection",
    title: "DNS Spoofing Detection",
    description:
      "Sistem deteksi DNS Spoofing menggunakan algoritma Decision Tree dan Naive Bayes untuk analisis keamanan jaringan.",
    image: "/projects/dns-detection.png",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    githubUrl: "https://github.com/celnn/dns-spoofing-detection",
  },
  {
    id: "image-processing",
    title: "Image Processing Application",
    description:
      "Aplikasi pengolahan citra digital dengan berbagai fitur filter, transformasi, dan analisis gambar.",
    image: "/projects/image-processing.png",
    tags: ["Python", "OpenCV", "NumPy", "Tkinter"],
    githubUrl: "https://github.com/celnn/image-processing",
  },
  {
    id: "data-analytics-dashboard",
    title: "Data Analytics Dashboard",
    description:
      "Dashboard analitik data interaktif untuk visualisasi dan insights data menggunakan teknologi modern.",
    image: "/projects/analytics-dashboard.png",
    tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
    githubUrl: "https://github.com/celnn/data-analytics-dashboard",
    liveUrl: "https://analytics-dashboard.vercel.app",
  },
];
