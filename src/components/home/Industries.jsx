import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/products";

export default function Industries() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="industries" ref={containerRef} className="py-20 md:py-28 bg-cream">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Industries served"
            title={
              <>
                A fold for every <em className="not-italic text-brass">trade</em>.
              </>
            }
            description="From architectural facades to mass-produced enclosures, our machines quietly shape metal for the people who shape buildings, cities, and infrastructure."
            className="max-w-2xl"
          />
          <p className="text-sm text-ink-muted max-w-xs">
            Six industries, hundreds of fabricators, one shared standard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <article
              key={ind.name}
              className="group relative aspect-[3/4] overflow-hidden bg-ink"
            >
              <img
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                data-strk-img-id={ind.imgId}
                data-strk-img={`[${ind.descId}] [${ind.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3
                  id={ind.titleId}
                  className="font-serif text-2xl md:text-3xl text-cream-soft leading-tight"
                >
                  {ind.name}
                </h3>
                <p
                  id={ind.descId}
                  className="mt-2 text-xs uppercase tracking-wider2 text-brass-soft"
                >
                  Explore applications
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
