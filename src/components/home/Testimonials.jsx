import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../data/products";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-title">Kind Words</h2>
        <p className="section-subtitle">
          Hear from our community
        </p>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 md:p-8 rounded-none">
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-velmora-pewter mt-4 leading-relaxed font-sans">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Name */}
              <p className="text-xs tracking-wide uppercase font-medium text-velmora-ebony mt-5">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}