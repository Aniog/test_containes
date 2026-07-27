import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, ChevronRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";

export function PageHero({
  eyebrow,
  title,
  titleId,
  description,
  descriptionId,
  imageId,
  imageQuery,
  imageRatio = "16x9",
  imageWidth = 1600,
  imageAlt,
  breadcrumb = [],
  primaryCta = { label: "Get a Free Sourcing Quote", to: "/contact" },
  secondaryCta = { label: "See how it works", to: "/how-it-works" },
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        data-strk-bg-id={imageId}
        data-strk-bg={imageQuery}
        data-strk-bg-ratio={imageRatio}
        data-strk-bg-width={imageWidth}
      />
      <div className="container-x relative grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          {breadcrumb.length > 0 ? (
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-primary-100/70"
            >
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              {breadcrumb.map((b, i) => (
                <span key={`${b.label}-${i}`} className="inline-flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3" />
                  {b.to ? (
                    <Link to={b.to} className="hover:text-white">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-white">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          ) : null}

          {eyebrow ? (
            <span
              id={titleId ? `${titleId}-eyebrow` : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {eyebrow}
            </span>
          ) : null}

          <h1
            id={titleId}
            className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl"
          >
            {title}
          </h1>

          {description ? (
            <p
              id={descriptionId}
              className="mt-5 max-w-2xl text-base text-primary-100/85 sm:text-lg"
            >
              {description}
            </p>
          ) : null}

          {(primaryCta || secondaryCta) && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta ? (
                <Link
                  to={primaryCta.to}
                  className="btn-accent h-12 px-6 text-sm font-semibold"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  to={secondaryCta.to}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-semibold text-white hover:border-white hover:bg-white/5"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>

        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card-hover">
            <img
              alt={imageAlt}
              data-strk-img-id={`${imageId}-card`}
              data-strk-img={`${imageQuery} [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
