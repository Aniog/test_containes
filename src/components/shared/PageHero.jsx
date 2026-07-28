import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import Container from "@/components/ui/Container";
import strkImgConfig from "@/strk-img-config.json";

export default function PageHero({
  eyebrow,
  title,
  description,
  imageId,
  backgroundId,
  imageQueryTitleId = "page-hero-title",
  imageQuerySubtitleId = "page-hero-subtitle",
}) {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-primary text-white"
    >
      <div
        className="absolute inset-0 -z-10 opacity-20"
        data-strk-bg-id={backgroundId || `${imageId}-bg-4b7e2c`}
        data-strk-bg={`[${imageQuerySubtitleId}] [${imageQueryTitleId}]`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary-700"
        aria-hidden="true"
      />
      <Container>
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {eyebrow}
              </span>
            )}
            <h1
              id={imageQueryTitleId}
              className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl"
            >
              {title}
            </h1>
            {description && (
              <p
                id={imageQuerySubtitleId}
                className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80"
              >
                {description}
              </p>
            )}
          </div>

          <div className="relative lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-card-hover">
              <img
                alt=""
                aria-hidden="true"
                className="aspect-[4/3] w-full object-cover"
                data-strk-img-id={imageId}
                data-strk-img={`[${imageQuerySubtitleId}] [${imageQueryTitleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
