import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CtaBanner({
  title = "Ready to source from China with confidence?",
  description = "Send us your product specifications. We respond within one business day with a sourcing plan and a clear next step.",
  primaryLabel = "Get a Free Sourcing Quote",
  primaryTo = "/contact",
  secondaryLabel,
  secondaryTo,
  variant = "dark",
}) {
  if (variant === "light") {
    return (
      <section className="border-t border-brand-line bg-white">
        <div className="container-x py-16">
          <div className="rounded-xl border border-brand-line bg-brand-surface p-8 md:p-12 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-muted">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to={primaryTo} className="btn-primary">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              {secondaryLabel && (
                <Link to={secondaryTo} className="btn-secondary">
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand-ink text-white">
      <div className="container-x py-16 md:py-20">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {title}
            </h2>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-white/75">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={primaryTo}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-ink shadow-sm transition-colors hover:bg-brand-accent/90"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondaryLabel && (
              <Link
                to={secondaryTo}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
