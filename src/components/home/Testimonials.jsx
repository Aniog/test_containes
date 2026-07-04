import React from "react";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import StarRating from "@/components/ui/StarRating.jsx";
import { testimonials } from "@/data/products.js";

const Testimonials = () => (
  <section className="py-20 sm:py-24 lg:py-28 bg-cream">
    <Container>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="eyebrow">From our community</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
          What they <span className="italic font-light">say</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="bg-pearl border border-ink/10 p-7 sm:p-8 flex flex-col"
          >
            <Quote size={22} className="text-champagne mb-4" />
            <blockquote className="font-serif text-[1.15rem] sm:text-[1.25rem] text-ink leading-snug flex-1">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between">
              <span className="font-sans text-[0.85rem] text-ink">
                {t.name}
              </span>
              <StarRating value={t.rating} size={12} />
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  </section>
);

export default Testimonials;
