import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="caption text-gold mb-3 tracking-mega-wide">What They Say</p>
          <h2 className="heading-lg text-charcoal">Customer Stories</h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-50 p-8 md:p-10 border border-charcoal-100/50 hover:shadow-luxury transition-shadow duration-500"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold/30 mb-6" strokeWidth={1} />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-charcoal-500 body-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-sm font-medium text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-charcoal-400 mt-0.5">
                    Verified Buyer
                  </p>
                </div>
                <span className="text-xs text-charcoal-300 italic">
                  Re: {testimonial.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
