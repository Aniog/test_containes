import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTABanner({
  title = "Ready to source from China with confidence?",
  description = "Tell us what you need to make. We'll send you a clear sourcing plan within one business day — at no cost.",
  buttonLabel = "Get a Free Sourcing Quote",
  to = "/contact",
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand text-white p-8 md:p-12 shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand via-brand to-accent/60 opacity-90" />
          <div className="relative grid gap-6 md:gap-10 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                {title}
              </h3>
              <p className="mt-3 text-base md:text-lg text-white/85 max-w-2xl">
                {description}
              </p>
            </div>
            <div className="md:justify-self-end">
              <Link
                to={to}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand shadow-sm transition hover:bg-white/95"
              >
                {buttonLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
