import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-2">
            Reviews
          </p>
          <h2 className="font-cormorant text-3xl md:text-5xl font-light text-velmora-text">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-velmora-cream border border-velmora-border p-8 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg italic text-velmora-text leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-velmora-border">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="font-cormorant text-sm text-velmora-gold font-medium">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <span className="font-manrope text-xs uppercase tracking-widest text-velmora-muted">
                  {t.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-12 pt-12 border-t border-velmora-border">
          <div className="text-center">
            <p className="font-cormorant text-4xl font-light text-velmora-text">4.9</p>
            <div className="flex items-center justify-center gap-0.5 my-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
              ))}
            </div>
            <p className="font-manrope text-xs text-velmora-muted uppercase tracking-widest">Average Rating</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-velmora-border" />
          <div className="text-center">
            <p className="font-cormorant text-4xl font-light text-velmora-text">2,400+</p>
            <p className="font-manrope text-xs text-velmora-muted uppercase tracking-widest mt-1">Happy Customers</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-velmora-border" />
          <div className="text-center">
            <p className="font-cormorant text-4xl font-light text-velmora-text">98%</p>
            <p className="font-manrope text-xs text-velmora-muted uppercase tracking-widest mt-1">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  )
}
