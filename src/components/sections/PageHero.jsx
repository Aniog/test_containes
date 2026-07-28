import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { COMPANY } from "@/data/content";

export default function PageHero({ eyebrow, title, subtitle, breadcrumb }) {
  return (
    <section className="bg-surface-subtle border-b border-border">
      <div className="container-x py-12 md:py-20">
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-xs text-ink-muted mb-5" aria-label="Breadcrumb">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3 h-3" />}
                {b.path ? (
                  <Link to={b.path} className="hover:text-primary">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-ink-soft font-medium">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink text-balance">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-ink-soft leading-relaxed text-balance">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
