import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaTo = "/contact",
}) {
  return (
    <section className="border-b border-border-soft bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-slate-body">
              {description}
            </p>
          )}
          {ctaLabel && (
            <div className="mt-8">
              <Button as={Link} to={ctaTo} size="lg">
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
