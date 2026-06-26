import * as React from "react"

export default function SectionTitle({ eyebrow, title, description, align = "center", light = false }) {
  return (
    <div className={`${align === "center" ? "text-center" : align === "left" ? "text-left" : "text-right"} max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  )
}
