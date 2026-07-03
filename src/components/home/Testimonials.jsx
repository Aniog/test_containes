import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import Rating from "../ui/Rating.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";

const REVIEWS = [
  {
    id: "review-elena",
    name: "Elena R.",
    imgId: "review-elena-3b8c",
    body: "“I wear the Golden Sphere Huggies every single day. They haven't lost a bit of their glow, and I forget I'm wearing them — exactly what I wanted.”",
    role: "Verified buyer · New York",
    product: "Golden Sphere Huggies",
    rating: 5,
  },
  {
    id: "review-sade",
    name: "Sade M.",
    imgId: "review-sade-1a4f",
    body: "“The Royal Heirloom Set was a gift to myself after a hard year. It arrived in the most beautiful box. I cried a little, no shame.”",
    role: "Verified buyer · London",
    product: "Royal Heirloom Set",
    rating: 5,
  },
  {
    id: "review-jules",
    name: "Jules K.",
    imgId: "review-jules-6d2e",
    body: "“Quality is unreal for the price. The Majestic Flora is my most complimented piece — someone stops me at least once a week.”",
    role: "Verified buyer · Los Angeles",
    product: "Majestic Flora Nectar",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-ink-950 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="gold">Customer love</Eyebrow>
          <h2 className="mt-5 font-serif text-[36px] font-light leading-[1.05] text-ink-100 md:text-[48px]">
            Worn, gifted,{" "}
            <span className="italic text-gold-300">treasured</span>.
          </h2>
        </div>

        <div
          ref={containerRef}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="flex flex-col border border-ink-800 bg-ink-900 p-7 md:p-8"
            >
              <Rating value={r.rating} size={14} />
              <blockquote className="mt-6 flex-1 font-serif text-[18px] font-light leading-relaxed text-ink-100">
                {r.body}
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <span className="relative block h-12 w-12 flex-shrink-0 overflow-hidden bg-ink-800">
                  <img
                    data-strk-img-id={r.imgId}
                    data-strk-img={`[${r.id}-name] [${r.id}-product] [testimonial-section-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    aria-hidden
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </span>
                <div>
                  <p
                    id={`${r.id}-name`}
                    className="font-sans text-[12px] font-medium uppercase tracking-widest2 text-ink-100"
                  >
                    {r.name}
                  </p>
                  <p
                    id={`${r.id}-product`}
                    className="mt-0.5 font-sans text-[11px] text-ink-400"
                  >
                    {r.product}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>
        <span id="testimonial-section-title" className="hidden">
          Velmora customer reviews
        </span>
      </div>
    </section>
  );
}
