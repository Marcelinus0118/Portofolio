"use client";

import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function getSnapshot() {
  if (typeof document === "undefined") return false;
  const root = document.documentElement;
  if (root.classList.contains("dark")) return true;
  if (root.classList.contains("light")) return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", callback);
  if (typeof document !== "undefined") {
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
  return () => {
    observer.disconnect();
    mediaQuery.removeEventListener("change", callback);
  };
}

function getServerSnapshot() {
  return false;
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const root = document.documentElement;
    if (saved === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else if (saved === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentlyDark =
      root.classList.contains("dark") ||
      (prefersDark && !root.classList.contains("light"));

    root.classList.remove("dark", "light");

    if (currentlyDark) {
      if (prefersDark) {
        root.classList.add("light");
      }
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-secondary transition-all"
      aria-label="Toggle dark mode"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
