import React from "react"
import { StarRating } from "@/components/ui/Components"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The quality is incredible for the price. I've worn my Vivid Aura ear cuff every single day for three months and it still looks brand new.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma L.",
    text: "Bought the Royal Heirloom Set as a gift for my sister. The packaging was beautiful and she absolutely loved it. Will definitely be ordering again.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica R.",
    text: "Finally found jewelry that doesn't irritate my sensitive skin. The Golden Sphere Huggies are my new everyday staple — so comfortable I forget I'm wearing them.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-text font-normal">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-surface p-6 sm:p-8 border border-velmora-border-light"
            >
              <StarRating rating={t.rating} size="md" />
              <blockquote className="mt-4 font-serif text-lg sm:text-xl text-velmora-text leading-relaxed italic">
                "{t.text}"
              </blockquote>
              <div className="mt-6 pt-4 border-t border-velmora-border-light">
                <p className="font-sans text-sm tracking-wider uppercase text-velmora-text-secondary">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-velmora-text-muted mt-0.5">
                  Verified Customer
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
