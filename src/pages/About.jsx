import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { Button } from "@/components/ui/Button";

export default function About() {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-ivory">
      {/* Editorial hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden text-ivory">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-3c1b9a"
          data-strk-bg="[about-hero-title] jewelry atelier workshop warm light editorial wide"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="2000"
        />
        <div className="absolute inset-0 bg-onyx/45" />
        <div className="relative h-full max-w-[1280px] mx-auto px-6 md:px-10 flex items-end pb-16">
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-champagne mb-4">Our Story</p>
            <h1
              id="about-hero-title"
              className="font-serif font-light text-5xl md:text-7xl tracking-tight leading-[1.05] max-w-2xl"
            >
              A quieter kind of luxury.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-serif text-2xl md:text-3xl text-onyx leading-relaxed">
            Velmora began in a small studio in Paris with a simple idea — that
            jewelry doesn't have to shout to be precious.
          </p>
          <p className="mt-8 font-sans text-base md:text-lg text-espresso/85 leading-relaxed">
            We make demi-fine pieces, hand-finished in small batches with 18K
            gold plating over recycled brass. Designed to be worn daily,
            considered enough to be passed down. We believe in slow design,
            warm metallics, and the kind of details only you and your closest
            friends will notice.
          </p>
          <div className="mt-12">
            <Button as={Link} to="/shop" variant="primary">
              Explore the Collection
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Slowly Made", body: "Hand-finished in small batches by artisans we know by name." },
            { title: "Honest Materials", body: "18K gold plating over recycled brass. Nickel-free, hypoallergenic." },
            { title: "Built to Last", body: "Backed by our lifetime craftsmanship guarantee and free re-plating." },
          ].map((c) => (
            <div key={c.title}>
              <h3 className="font-serif text-2xl text-onyx mb-3">{c.title}</h3>
              <p className="font-sans text-espresso/80 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
