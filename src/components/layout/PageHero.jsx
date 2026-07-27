import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  heroId = "page-hero",
  bgQuery = "China sourcing agent overseas buyers",
}) {
  return (
    <section className="relative overflow-hidden bg-brand-700 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-700 to-brand-900"
      />
      <div
        aria-hidden="true"
        data-strk-bg-id={`${heroId}-bg`}
        data-strk-bg={bgQuery}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 opacity-20 mix-blend-overlay"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 md:py-24">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-sm text-brand-100"
          >
            <Link to="/" className="hover:text-white">Home</Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {b.to ? (
                  <Link to={b.to} className="hover:text-white">{b.label}</Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p
            id={`${heroId}-eyebrow`}
            className="text-sm font-semibold uppercase tracking-wider text-brand-200"
          >
            {eyebrow}
          </p>
        )}
        <h1
          id={`${heroId}-title`}
          className="mt-2 text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight max-w-4xl balance"
        >
          {title}
        </h1>
        {description && (
          <p
            id={`${heroId}-description`}
            className="mt-5 text-lg text-brand-50/90 max-w-3xl leading-relaxed"
          >
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
        {!children && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              as="link"
              to="/contact"
              size="lg"
              variant="accent"
              icon={ArrowRight}
            >
              Get a Free Sourcing Quote
            </Button>
            <Button
              as="link"
              to="/services"
              size="lg"
              variant="outlineLight"
            >
              See Our Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
