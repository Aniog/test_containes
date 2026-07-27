import { Badge } from "@/components/ui/Badge"

export default function SectionHeader({ badge, title, description, centered = true, className = "" }) {
  return (
    <div className={`${centered ? "text-center" : ""} max-w-3xl ${centered ? "mx-auto" : ""} mb-12 md:mb-16 ${className}`}>
      {badge && (
        <Badge className="mb-4" variant="default">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  )
}
