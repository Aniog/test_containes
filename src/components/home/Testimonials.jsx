import React from "react";
import { Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import StarRating from "@/components/ui/StarRating";

const REVIEWS = [
  {
    quote:
      "I bought the Golden Sphere Huggies as a self-gift and haven't taken them off in three weeks. The weight is just right.",
    author: "Amelia R.",
    rating: 5,
    product: "Golden Sphere Huggies",
  },
  {
    quote:
      "The Majestic Flora necklace is exactly the layered, romantic piece I couldn't find anywhere else. Stunning packaging too.",
    author: "Rosa M.",
    rating: 5,
    product: "Majestic Flora Nectar",
  },
  {
    quote:
      "Gifted the Royal Heirloom set to my sister for her wedding. The box alone made her cry. Worn every day since.",
    author: "June K.",
    rating: 5,
    product: "Royal Heirloom Set",
  },
];

const Testimonials = () => {
  return (
    <Section tone="ivory" size="lg">
      <Container>
        <div className="text-center mb-14 md:mb-20">
          <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-4">
            As loved by
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.05]">
            Worn, gifted, returned to
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {REVIEWS.map((r) => (
            <figure
              key={r.author}
              className="bg-surface p-8 md:p-10 flex flex-col"
            >
              <Quote size={28} strokeWidth={1.5} className="text-gold mb-6" />
              <blockquote className="font-serif text-2xl md:text-[26px] leading-snug text-ink flex-1">
                "{r.quote}"
              </blockquote>
              <StarRating value={r.rating} count={null} showCount={false} className="mt-6" />
              <figcaption className="mt-5 pt-5 border-t border-ink/10">
                <p className="font-sans text-sm text-ink">{r.author}</p>
                <p className="text-[11px] uppercase tracking-eyebrow text-taupe mt-1">
                  On the {r.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
