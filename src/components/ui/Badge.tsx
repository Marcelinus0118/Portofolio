import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

export function Badge({ children, className, variant = "primary" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "primary" && "bg-primary/10 text-primary",
        variant === "secondary" && "bg-secondary text-muted-foreground border border-border",
        variant === "default" && "bg-secondary text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
