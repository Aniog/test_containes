import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus Weber',
    role: 'Production Manager, Weber Sheet Metal GmbH',
    text: 'We switched to ARTITECT double folding machines three years ago. The accuracy is outstanding, and we have had zero unplanned downtime. Our throughput increased by 35%.',
    rating: 5,
  },
  {
    name: 'James Carter',
    role: 'Owner, Carter Fabrication Ltd',
    text: 'The Compact Metal Folder fit perfectly in our workshop. Despite its smaller footprint, it delivers industrial-grade performance. Excellent build quality.',
    rating: 5,
  },
  {
    name: 'Liu Chen',
    role: 'Operations Director, AsiaBuild Manufacturing',
    text: 'We operate 12 ARTITECT machines across our facilities. The consistency between units is remarkable. Their support team is always responsive and knowledgeable.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-surface-dark to-brand-900" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-400 text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
            Trusted by Professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-sm bg-surface-card border border-steel-700/30 hover:border-accent-500/20 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="text-steel-300 leading-relaxed mb-6">"{t.text}"</p>
              <div className="border-t border-steel-700/30 pt-4">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="text-steel-500 text-sm mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
