import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl lg:text-4xl text-charcoal tracking-wide">Loved by You</h2>
        <div className="mt-4 mx-auto w-12 h-px bg-gold" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="text-center px-4">
            {/* Stars */}
            <div className="flex items-center justify-center gap-0.5 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-stone leading-relaxed font-light italic">"{t.text}"</p>
            <p className="mt-5 font-serif text-sm tracking-wide text-charcoal">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
