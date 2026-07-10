import React from "react";
import StarRating from "@/components/ui/StarRating";

const TESTIMONIALS = [
  {
    quote:
      "I've stopped buying fast jewelry. The Golden Sphere huggies are the first pair I've worn daily for over a year and they still look new.",
    name: "Maya R.",
    location: "Brooklyn, NY",
    rating: 5,
    imgId: "testimonial-maya-b3c4d5",
    query: "soft portrait of woman with short hair wearing small gold earrings warm window light neutral wall",
  },
  {
    quote:
      "Bought the Royal Heirloom set for my sister's thirtieth. The packaging alone made her cry — the piece, she never takes off.",
    name: "Alia B.",
    location: "London, UK",
    rating: 5,
    imgId: "testimonial-alia-e6f7g8",
    query: "editorial portrait of woman with curly hair wearing 18K gold plated pendant and huggies warm light",
  },
  {
    quote:
      "Quietly the most worn thing I own. The weight of the Vivid Aura cuff is real — feels like something I bought years ago.",
    name: "Sloane P.",
    location: "Los Angeles, CA",
    rating: 5,
    imgId: "testimonial-sloane-h9i0j1",
    query: "closeup portrait of woman with gold ear cuff on neutral background warm soft daylight editorial",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand-100">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <span className="label-cap text-champagne-600">From Our Customers</span>
          <h2
            id="testimonials-title"
            className="mt-4 font-serif text-4xl md:text-5xl font-light text-ink-950"
          >
            Words from the people who keep them.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="bg-sand-50 p-8 md:p-10 flex flex-col"
            >
              <StarRating value={t.rating} size={14} />
              <p
                id={`testimonial-quote-${t.name.split(" ")[0].toLowerCase()}`}
                className="mt-6 font-serif text-xl md:text-2xl font-light text-ink-950 leading-snug"
              >
                "{t.quote}"
              </p>
              <div className="mt-auto pt-8 flex items-center gap-3">
                <div className="w-10 h-10 overflow-hidden rounded-full bg-ink-900 flex-shrink-0">
                  <StrkCircleImg imgId={t.imgId} query={t.query} />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink-950">{t.name}</p>
                  <p className="text-xs text-textmute">{t.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StrkCircleImg({ imgId, query }) {
  // small circular portrait
  return (
    <img
      alt=""
      className="w-full h-full object-cover"
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio="1x1"
      data-strk-img-width="120"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  );
}
