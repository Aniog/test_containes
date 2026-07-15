import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-800 font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border border-velmora-100 p-6 lg:p-8 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>
              <p className="text-velmora-600 text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-wider uppercase text-velmora-400 mt-4 font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}