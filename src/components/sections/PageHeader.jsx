import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ eyebrow, title, description, breadcrumb = [] }) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {breadcrumb.length > 0 && (
          <nav className="flex items-center text-xs text-white/70 mb-5" aria-label="Breadcrumb">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center">
                {i > 0 && <ChevronRight className="h-3 w-3 mx-1.5 text-white/40" />}
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-white/85 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
