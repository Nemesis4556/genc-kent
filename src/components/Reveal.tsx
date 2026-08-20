import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
  y?: number;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  y = 28,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const style: CSSProperties = {
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    opacity: visible ? 1 : 0,
    transition: `opacity 0.9s cubic-bezier(0.16,0.8,0.25,1) ${delay}s, transform 0.9s cubic-bezier(0.16,0.8,0.25,1) ${delay}s`,
    willChange: "transform, opacity",
  };
  const Tag = as;
  return (
    <Tag ref={ref as never} style={style} className={className}>
      {children}
    </Tag>
  );
}
