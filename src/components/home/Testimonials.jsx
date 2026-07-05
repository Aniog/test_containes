import React from "react";
import StarRating from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/data/catalog";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-muted/60 border-y border-border">
      <div className="container-velmora py-20 md:py-28">
        <div className="text-center">
          <p className="eyebrow">From our community</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            What they're <em className="not-italic text-accent">saying</em>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col bg-card border border-border p-8 md:p-10"
            >
              <Quote
                size={28}
                strokeWidth={1}
                className="text-accent/70"
                aria-hidden
              />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl leading-snug text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-widest2 text-muted-foreground">
                    Verified buyer
                  </p>
                </div>
                <StarRating value={t.rating} size={12} />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
