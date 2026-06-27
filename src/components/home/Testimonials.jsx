import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import Container from "@/components/layout/Container";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section className="bg-bone py-20 md:py-28" ref={ref}>
      <Container size="wide">
        <div className="reveal mb-12 md:mb-16 text-center">
          <p className="text-label text-muted">Kind Words</p>
          <h2 className="font-serif text-4xl md:text-6xl text-espresso mt-3 leading-tight">
            From our community
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-ivory border border-line p-8 md:p-10 flex flex-col"
            >
              <Quote strokeWidth={1.25} className="w-6 h-6 text-champagne mb-6" />
              <blockquote className="font-serif text-lg md:text-xl text-espresso leading-snug italic flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-line">
                <StarRating rating={t.rating} size="sm" showCount={false} />
                <p className="mt-3 text-label text-espresso">{t.name}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}