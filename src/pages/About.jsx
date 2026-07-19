import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const PILLARS = [
  {
    title: "Demi-fine, by design",
    body: "We work in 18k gold plating over brass and gold vermeil over sterling silver. The result has the look and weight of fine jewelry at a price that lets you wear it every day.",
  },
  {
    title: "Hypoallergenic, always",
    body: "All posts, hooks and findings are nickel-free. Sensitive ears, healed or not, are welcome here.",
  },
  {
    title: "Small workshops",
    body: "We partner with two small family workshops in Portugal and Thailand. We visit them, we know their names, and we pay above-market for the work.",
  },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="pt-28 md:pt-32 pb-20">
      <div className="container-7xl">
        <header className="max-w-2xl">
          <p className="eyebrow text-muted">◆ Our Story</p>
          <h1
            id="about-title"
            className="display-1 text-ink mt-3 text-5xl md:text-7xl text-balance"
          >
            Made slowly, worn often.
          </h1>
          <p className="text-base text-ink-soft mt-6 leading-relaxed">
            Velmora started in 2021 in a small studio in Lisbon. Our first
            piece was a pair of gold huggies, designed to be worn for a
            decade. Every piece since has been held to the same test: would
            we still want to wear it in ten years?
          </p>
        </header>

        <div className="mt-16 md:mt-24">
          <div className="relative overflow-hidden bg-stone" style={{ paddingTop: "56.25%" }}>
            <img
              alt="Inside the Velmora studio"
              data-strk-img-id="about-hero-1"
              data-strk-img="[about-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1600"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 md:mt-24">
          {PILLARS.map((p, i) => (
            <div key={p.title}>
              <p className="font-serif text-3xl text-gold">
                0{i + 1}
              </p>
              <h3 className="display-2 text-2xl text-ink mt-3">{p.title}</h3>
              <p className="text-sm text-ink-soft mt-4 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 text-center">
          <h2 className="display-1 text-3xl md:text-5xl text-ink text-balance">
            Find a piece you'll wear on repeat.
          </h2>
          <Link to="/shop" className="btn-outline mt-8 inline-flex">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
