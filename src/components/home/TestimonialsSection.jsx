import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            What Our Community Says
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="bg-background border border-border p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1 font-light">
                “{review.text}”
              </p>
              <p className="mt-6 text-xs tracking-widest uppercase font-medium text-muted">
                — {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
