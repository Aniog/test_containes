import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'They sent photos from the factory floor every week and flagged a tooling issue before it cost us a week of production. Exactly the kind of presence we needed on the ground in China.',
    name: 'Megan R.',
    role: 'Operations Lead',
    company: 'US cookware brand',
  },
  {
    quote:
      'We had two previous agents that missed quality problems. Their AQL-based pre-shipment inspection caught a finish issue, and the factory fixed it before the container left the port.',
    name: 'Lukas B.',
    role: 'Procurement Manager',
    company: 'German lighting distributor',
  },
  {
    quote:
      'They speak the language, know the factory owners, and write reports we can actually act on. We now ship 4 containers a year through them without flying to China.',
    name: 'Hannah C.',
    role: 'Founder',
    company: 'Australian outdoor apparel',
  },
]

export default function ClientLogos() {
  return (
    <section className="section-y bg-white border-y border-hairline">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-hairline bg-white p-6 shadow-card"
            >
              <div className="flex items-center gap-1 text-status-warning mb-3" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-primary/40" />
              <blockquote className="mt-3 text-ink leading-relaxed text-[15px]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-hairline text-sm">
                <div className="font-semibold text-ink">{t.name}</div>
                <div className="text-ink-soft">
                  {t.role} · {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-muted-ink">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold">Buyers served in</div>
          {['USA', 'Canada', 'UK', 'Germany', 'France', 'Australia', 'UAE', 'Japan'].map((c) => (
            <span key={c} className="text-sm font-semibold text-ink-soft">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
