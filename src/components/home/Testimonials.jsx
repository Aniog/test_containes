import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">Kind Words</h2>
          <p className="section-subheading mt-3">From our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 md:p-8 rounded-sm border border-velmora-100"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-velmora-600 font-sans leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <span className="text-xs tracking-wider uppercase font-sans font-medium text-velmora-500">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}