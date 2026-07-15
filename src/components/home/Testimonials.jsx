import { useRef } from 'react'
import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Testimonials() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2)
  const [gridRef, gridVisible] = useScrollAnimation(0.1)

  return (
    <section className="py-20 md:py-28 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`animate-fade-up ${titleVisible ? 'visible' : ''}`}>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real reviews from real women who wear Velmora every day.
          </p>
        </div>

        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${gridVisible ? 'visible' : ''}`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-8 md:p-10 rounded-sm shadow-[0_2px_20px_rgba(0,0,0,0.04)] animate-fade-up delay-${(index + 1) * 150} ${gridVisible ? 'visible' : ''}`}
            >
              <StarRating rating={testimonial.rating} size="md" />
              <p className="mt-5 text-foreground/80 text-base leading-relaxed italic serif-heading">
                "{testimonial.text}"
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
