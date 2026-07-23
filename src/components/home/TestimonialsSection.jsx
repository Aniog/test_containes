import { Star } from 'lucide-react'
import { testimonials } from '@/data/storeData'

function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mb-10 space-y-3">
        <p className="text-xs uppercase tracking-luxe text-champagne">Client notes</p>
        <h2 className="text-4xl sm:text-5xl">What they’re saying</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-[2rem] border border-mist/70 bg-ivory p-6 shadow-card">
            <div className="mb-5 flex gap-1 text-champagne">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm leading-8 text-ink/74">“{testimonial.quote}”</p>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-ink/55">
              {testimonial.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
