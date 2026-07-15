import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/cn";

// Wrap a section/element to fade-and-rise on first viewport intersection.
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
  ...rest
}) {
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "is-visible", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
