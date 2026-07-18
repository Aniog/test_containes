import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-cream border border-hairline">
      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-gold stroke-gold" strokeWidth={1} />
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif text-base md:text-lg font-light text-ink leading-relaxed italic flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-hairline">
        <div className="w-8 h-8 rounded-full bg-champagne flex items-center justify-center">
          <span className="font-serif text-sm text-taupe">{testimonial.name[0]}</span>
        </div>
        <span className="font-sans text-xs tracking-widest uppercase text-taupe">
          {testimonial.name}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
            Loved by Thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold stroke-gold" strokeWidth={1} />
            ))}
          </div>
          <span className="font-sans text-sm text-taupe">
            4.8 out of 5 · <span className="text-ink font-medium">2,400+ reviews</span>
          </span>
        </div>
      </div>
    </section>
  );
}
