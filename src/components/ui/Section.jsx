import { cn } from "@/lib/utils";

export function Section({
  as: Tag = "section",
  className,
  children,
  containerClassName,
  size = "default",
  tone = "default",
  id,
}) {
  const toneClasses = {
    default: "bg-white text-brand-ink",
    paper: "bg-brand-paper text-brand-ink",
    mist: "bg-brand-mist text-brand-ink",
    navy: "bg-brand-navy text-white",
    navyAlt: "bg-brand-navy-2 text-white",
  };
  const sizeClasses = {
    sm: "py-12 md:py-16",
    default: "py-16 md:py-24",
    lg: "py-20 md:py-28",
  };
  return (
    <Tag
      id={id}
      className={cn(toneClasses[tone], sizeClasses[size], className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
