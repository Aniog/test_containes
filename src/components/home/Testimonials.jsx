import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-mega-wide uppercase text-gold mb-3 font-sans font-medium">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-16 h-[1px] bg-gold/40 mx-auto mt-5" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 sm:p-10 border border-sand/50 relative group hover:shadow-lg transition-shadow duration-500"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-gold/20 absolute top-6 right-6"
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < testimonial.rating
                        ? "fill-gold text-gold"
                        : "text-sand"
                    }
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-warm-gray leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center">
                  <span className="font-serif text-sm text-gold font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-warm-gray">
                    on {testimonial.product}
                  </p>
                </div>
              </div>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
