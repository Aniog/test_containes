import { cn } from "@/lib/utils"

export function SectionHeader({ eyebrow, title, subtitle, centered = true, className }) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-[#1A4B8C] mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2E] mb-4">{title}</h2>
      {subtitle && (
        <p className={cn("text-lg text-[#6B7A8D]", centered && "max-w-2xl mx-auto")}>{subtitle}</p>
      )}
    </div>
  )
}
