import { cn } from "@/lib/utils";

const Section = ({
  id,
  className = "",
  bg = "white",
  children,
  containerClassName = "",
}) => {
  const bgClass = {
    white: "bg-white",
    muted: "bg-ink-50",
    navy: "bg-navy-900 text-white",
  }[bg] || "bg-white";
  return (
    <section id={id} className={cn(bgClass, className)}>
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  );
};

export default Section;
