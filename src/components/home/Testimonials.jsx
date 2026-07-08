import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={12}
          style={{ color: '#C9A96E', fill: '#C9A96E' }}
          strokeWidth={1}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-obsidian py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-sans font-medium uppercase tracking-[0.25em] text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory tracking-wide">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-charcoal border border-ivory/10 p-8 flex flex-col"
            >
              <StarRow />
              <blockquote className="font-serif text-base md:text-lg font-light text-ivory/90 leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </blockquote>
              <div className="border-t border-ivory/10 pt-4">
                <p className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-gold">
                  {t.author}
                </p>
                <p className="text-[10px] font-sans text-ivory/40 mt-0.5 uppercase tracking-wider">
                  Verified Purchase · {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-14 md:mt-16 grid grid-cols-3 gap-4 border-t border-ivory/10 pt-12">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '2,400+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-light text-gold mb-1">{stat.value}</p>
              <p className="text-[10px] font-sans uppercase tracking-[0.15em] text-ivory/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
