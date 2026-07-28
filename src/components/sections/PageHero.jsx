import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PageHero = ({ eyebrow, title, subtitle, primaryCta, secondaryCta }) => {
  return (
    <section className="border-b border-ink-200 bg-white">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-ink-900 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-ink-700 leading-relaxed">
              {subtitle}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primaryCta && (
                <Link to={primaryCta.to} className="btn-primary">
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.to} className="btn-secondary">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
