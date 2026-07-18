import React from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/products";
import StarRating from "@/components/ui/StarRating";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-text-primary mb-3">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-surface border border-border-light p-8 text-center hover:shadow-md transition-shadow duration-300"
            >
              <Quote size={24} className="text-gold-muted mx-auto mb-4" />
              <StarRating rating={testimonial.rating} size={14} />
              <p className="text-sm text-text-secondary leading-relaxed mt-4 mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-medium text-sm text-text-primary">{testimonial.name}</p>
                <p className="text-[11px] text-text-tertiary mt-0.5">
                  Verified Buyer · {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
