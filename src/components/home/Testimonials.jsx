import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'I wear my Golden Sphere Huggies every single day. They haven\'t tarnished at all after 3 months — incredible quality for the price.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging was beautiful and she absolutely loved it. Will be ordering again!',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    text: 'The Amber Lace Earrings are even more beautiful in person. So lightweight and the gold tone is warm and rich, not cheap-looking at all.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-warm">
      <div className="section-padding">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[0.65rem] tracking-[0.3em] uppercase text-brand-gold mb-3">
            Love Letters
          </p>
          <h2 className="section-title text-3xl md:text-heading">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-ivory p-6 md:p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-sans text-sm text-brand-charcoal/80 leading-relaxed mb-5 italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <p className="font-sans text-xs tracking-[0.12em] uppercase text-brand-taupe font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
