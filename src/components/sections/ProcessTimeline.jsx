import { cn } from "@/lib/utils"

export default function ProcessTimeline({ steps, tone = "light" }) {
  const isDark = tone === "dark"
  return (
    <ol className="relative space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "relative rounded-xl border p-6",
            isDark
              ? "border-white/10 bg-white/5"
              : "border-slate-200 bg-white"
          )}
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold",
                isDark
                  ? "bg-accent-500 text-white"
                  : "bg-navy-900 text-white"
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3
              className={cn(
                "text-base font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              {step.title}
            </h3>
          </div>
          <p
            className={cn(
              "mt-3 text-sm",
              isDark ? "text-slate-300" : "text-slate-600"
            )}
          >
            {step.description}
          </p>
          {step.deliverable ? (
            <p
              className={cn(
                "mt-3 text-xs font-medium uppercase tracking-wider",
                isDark ? "text-accent-300" : "text-accent-600"
              )}
            >
              Deliverable: {step.deliverable}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  )
}
