import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowUpRight } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { industries } from "@/lib/content";

export default function Industries() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="industries"
      ref={containerRef}
      className="relative bg-pearl py-24 md:py-32"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <p id="industries-eyebrow" className="eyebrow mb-4">
              Industries served
            </p>
            <h2
              id="industries-title"
              className="font-display text-steel-deep text-4xl md:text-5xl leading-tight"
            >
              Trusted by fabricators
              <span className="block text-graphite/70 italic">in the most demanding sectors.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              id="industries-subtitle"
              className="text-slate2 text-base md:text-lg leading-relaxed"
            >
              From architectural façades to switchgear and shipbuilding — our
              folders are running production lines in the industries where
              downtime is not an option.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <article
              key={ind.id}
              className="group relative bg-white border border-mist shadow-card overflow-hidden hover:shadow-soft transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <img
                  alt={ind.name}
                  data-strk-img-id={`industry-img-${ind.id}`}
                  data-strk-img={`[industry-desc-${ind.id}] [industry-name-${ind.id}] [industries-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-deep/60 via-steel-deep/10 to-transparent" />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    id={`industry-name-${ind.id}`}
                    className="font-display text-2xl text-steel-deep leading-tight"
                  >
                    {ind.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-bronze flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p
                  id={`industry-desc-${ind.id}`}
                  className="mt-3 text-slate2 text-[15px] leading-relaxed"
                >
                  {ind.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
