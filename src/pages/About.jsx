import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref} className="pt-16 md:pt-20 bg-ivory">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title] gold jewelry atelier craftsmanship warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col items-center justify-center text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-ivory/80 mb-4">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-6xl text-ivory"
          >
            Crafted to be Treasured
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-4">
            Est. with intention
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
            Beautiful, lasting jewelry shouldn't require a special occasion.
          </h2>
          <p className="mt-6 text-ink/75 leading-relaxed">
            Velmora was founded on the belief that demi-fine quality can be
            honest, accessible, and made to be lived in. Each piece is
            hand-finished in 18K gold plating, designed in our studio, and
            crafted to move with you — from morning coffee to evening out.
          </p>
          <p className="mt-4 text-ink/75 leading-relaxed">
            By working directly with our makers and cutting out the middlemen,
            we bring you considered design at an honest price.
          </p>
          <div className="mt-10">
            <Button as={Link} to="/shop" variant="outline">
              Explore the Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
