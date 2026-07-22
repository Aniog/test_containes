import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

export default function Reveal({ children, className, as: Tag = "div", delay = 0 }) {
  const { ref, isVisible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
