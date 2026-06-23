import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.35em] text-velvet-500 uppercase mb-3">
            Loved by You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-950 font-medium tracking-tight">
            What Customers Say
          </h2>
          <div className="hairline-divider w-16 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="text-center px-4"
            >
              <div className="flex justify-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className="fill-velvet-950 text-velvet-950"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <p className="font-serif italic text-sm text-velvet-700 leading-relaxed mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs tracking-[0.15em] text-velvet-900 uppercase font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
