import { cn } from "@/lib/utils"

export default function SectionHeader({ label, title, description, centered = true, className }) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {label && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-blue-600">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold text-navy-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg text-slate-600", centered && "mx-auto max-w-3xl")}>
          {description}
        </p>
      )}
    </div>
  )
}
