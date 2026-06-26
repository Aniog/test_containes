import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, subtitle, breadcrumb, ctaPrimary, ctaSecondary }) {
  return (
    <section className="relative overflow-hidden bg-[#F6F1EA] border-b border-[#E5E1D8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(200,85,61,0.10) 0, transparent 45%), radial-gradient(circle at 10% 90%, rgba(14,42,71,0.08) 0, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 md:py-20">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-6 text-[13px] text-[#64748B]">
            <ol className="flex items-center gap-1.5">
              {breadcrumb.map((b, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {b.to ? (
                    <Link to={b.to} className="hover:text-[#C8553D]">{b.label}</Link>
                  ) : (
                    <span className="text-[#0F172A] font-medium">{b.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span className="text-[#C7BFB1]">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#0F172A] max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-[17px] md:text-[18px] leading-relaxed text-[#475569] max-w-2xl">
            {subtitle}
          </p>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {ctaPrimary && (
              <Link to={ctaPrimary.to} className="btn-primary">
                {ctaPrimary.label} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {ctaSecondary && (
              <Link to={ctaSecondary.to} className="btn-secondary">
                {ctaSecondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}