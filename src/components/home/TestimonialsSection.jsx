import { Star } from 'lucide-react'

export default function TestimonialsSection({ testimonials }) {
  return (
    <section className="section-shell bg-porcelain">
      <div className="container-shell space-y-10">
        <div className="space-y-4 text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">Loved for Everyday Gifting</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="panel-surface h-full p-8">
              <div className="mb-5 flex items-center gap-1 text-champagne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-3xl leading-tight text-obsidian">“</p>
              <p className="mt-3 text-base leading-8 text-espresso/78">{testimonial.quote}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-rose">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
