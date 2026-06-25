import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "upj-speakup",
    title: "UPJ SpeakUp!",
    description:
      "Platform partisipasi mahasiswa untuk menyampaikan aspirasi dan pendapat secara digital. Dibangun dengan Laravel dan MySQL.",
    image: "/projects/upjspeakup.png",
    tags: ["Laravel", "MySQL", "PHP", "Bootstrap"],
    githubUrl: "https://github.com/Marcelinus0118/UPJSPEAKUP",
  },
  {
    id: "dns-spoofing-detection",
    title: "Construction Detection",
    description:
      "A Personal Protective Equipment (PPE) detection system using YOLOv11 to identify helmets, safety vests, and safety shoes in construction site images.",
    image: "/projects/detection.png",
    tags: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    githubUrl: "https://huggingface.co/spaces/marcel0118/ppe-detection",
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
