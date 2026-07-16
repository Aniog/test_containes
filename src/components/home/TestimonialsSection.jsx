import { Star } from 'lucide-react'

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-editorial text-velmora-muted">Customer love</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-ink sm:text-5xl">
            Reviews that read like little love notes
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[2rem] border border-velmora-line/70 bg-velmora-paper px-6 py-7 text-velmora-ink shadow-velmora-card"
            >
              <div className="flex gap-1 text-velmora-accent">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-velmora-muted">“{testimonial.quote}”</p>
              <p className="mt-6 text-xs uppercase tracking-editorial text-velmora-ink">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
