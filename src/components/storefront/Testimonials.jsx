import { testimonials } from '@/data/products.js'
import Stars from '@/components/ui/Stars.jsx'

export default function Testimonials() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[#8a6c5d]">Loved by our customers</p>
        <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl text-[#241d1f] md:text-5xl">
          Reviews that feel as warm as the pieces
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((review) => (
          <article
            key={review.id}
            className="rounded-[2rem] border border-[#e5d5c8] bg-white/75 p-7 text-center shadow-[0_16px_40px_rgba(36,29,31,0.05)]"
          >
            <Stars rating={5} centered />
            <p className="mt-5 text-base leading-8 text-[#5a4745]">“{review.quote}”</p>
            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[#6d5a57]">{review.author}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
