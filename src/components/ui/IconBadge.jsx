import { cn } from "@/lib/utils";

export default function IconBadge({ icon: Icon, className, tone = "brand", size = "md" }) {
  const sizeClass = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-14 w-14",
  }[size];
  const iconSize = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-7 w-7" }[size];
  const toneClass = {
    brand: "bg-brand-50 text-brand-700",
    accent: "bg-accent-50 text-accent-600",
    white: "bg-white/10 text-white",
  }[tone];
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-md",
        sizeClass,
        toneClass,
        className
      )}
    >
      <Icon className={iconSize} />
    </div>
  );
}
