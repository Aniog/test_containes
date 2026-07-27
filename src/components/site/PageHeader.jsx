import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PageHeader = ({ eyebrow, title, subtitle, primaryCtaLabel, primaryCtaTo }) => {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(200,16,46,0.35), transparent 40%), radial-gradient(circle at 80% 60%, rgba(29,78,216,0.25), transparent 45%)",
        }}
      />
      <div className="container-x relative py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
          <h1 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-tight text-white md:text-[52px]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/80">
            {subtitle}
          </p>
          {primaryCtaLabel && (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link to={primaryCtaTo || "/contact"} className="btn btn-primary">
                {primaryCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-white/85 hover:text-white"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
