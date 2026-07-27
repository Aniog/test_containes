import { Link } from "react-router-dom";

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  align = "left",
}) {
  const isCenter = align === "center";
  return (
    <section className="bg-brand-surface border-b border-brand-line">
      <div className="container-x py-14 md:py-20">
        <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-brand-muted">
              {description}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className={`mt-8 flex flex-wrap gap-3 ${isCenter ? "justify-center" : ""}`}>
              {primaryCta && (
                <Link to={primaryCta.to} className="btn-primary">
                  {primaryCta.label}
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
}
