import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTA({
  title = "Ready to source from China with confidence?",
  description = "Send us your product spec and target quantity. We'll respond within one business day with a shortlist of vetted factories and a transparent quote.",
  primary = { to: "/contact", label: "Get a Free Sourcing Quote" },
  secondary = { to: "/how-it-works", label: "See How It Works" },
}) {
  return (
    <section className="bg-brand-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-200 sm:text-base">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <Link
              to={primary.to}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700"
            >
              {primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            {secondary && (
              <Link
                to={secondary.to}
                className="inline-flex items-center justify-center rounded-md border border-ink-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}