import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/catalog'

export default function Testimonials() {
  return (
    <section
      className="bg-paper py-24 text-ink md:py-32"
      aria-labelledby="testimonials-title"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p
            id="testimonials-eyebrow"
            className="eyebrow eyebrow-line text-brass-2"
          >
            <span>What customers say</span>
          </p>
          <h2
            id="testimonials-title"
            className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Trusted by fabricators who cannot afford to be wrong.
          </h2>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="flex h-full flex-col gap-6 rounded-2xl border border-line-2 bg-bone p-8 md:p-10"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-brass-2" strokeWidth={1.5} />
                <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-brass text-brass"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>
              <p
                id={`testimonial-${t.id}-quote`}
                className="flex-1 text-lg leading-relaxed text-ink"
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-2 border-t border-line-2 pt-5">
                <p
                  id={`testimonial-${t.id}-author`}
                  className="text-sm font-semibold text-ink"
                >
                  {t.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-eyebrow text-ash">
                  {t.role} · {t.company}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
