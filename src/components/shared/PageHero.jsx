import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { to: "/contact", label: "Get a Free Quote" },
  secondaryCta,
  align = "left",
}) {
  const center = align === "center"
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="container-x py-14 md:py-20">
        <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <p className="eyebrow mb-3">{eyebrow}</p>
          )}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className={`mt-7 flex flex-col sm:flex-row gap-3 ${
                center ? "sm:justify-center" : ""
              }`}
            >
              {primaryCta && (
                <Link to={primaryCta.to}>
                  <Button variant="primary" size="md">
                    {primaryCta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.to}>
                  <Button variant="outline" size="md">
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PageHero
