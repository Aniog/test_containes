import React from 'react'
import { testimonials } from '@/data/products'
import SectionHeading from '@/components/layout/SectionHeading'
import ReviewStars from '@/components/ui/ReviewStars'

const TestimonialsSection = () => (
  <section className="bg-white/50 py-20 lg:py-24">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <SectionHeading
        eyebrow="Client Notes"
        title="Loved for the details that matter"
        description="Thoughtful finishes, gift-ready packaging, and an elevated experience that feels effortless from order to unboxing."
        align="center"
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="rounded-[2rem] border border-velmora-line bg-velmora-ivory p-6 shadow-soft sm:p-8"
          >
            <ReviewStars rating={5} />
            <p className="mt-6 text-base leading-8 text-velmora-ink">“{testimonial.text}”</p>
            <p className="mt-8 text-xs uppercase tracking-[0.28em] text-velmora-muted">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialsSection
