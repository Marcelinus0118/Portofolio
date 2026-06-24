"use client";

import { useEffect, useRef } from "react";

export function GlowEffect() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = e.clientX;
      const y = e.clientY;
      ref.current.style.setProperty("--x", `${x}px`);
      ref.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background:
          "radial-gradient(600px at var(--x, 0px) var(--y, 0px), rgba(108, 92, 231, 0.06), transparent 80%)",
      }}
    />
  );
}
