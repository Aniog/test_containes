import { TESTIMONIALS } from '@/data/products'
import RatingStars from '@/components/ui/RatingStars'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-beige/40"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p id="testimonials-eyebrow" className="eyebrow">
            Worn & loved
          </p>
          <h2
            id="testimonials-title"
            className="mt-4 font-serif text-4xl md:text-5xl text-espresso font-light tracking-tight"
          >
            From the people who <em className="italic">keep them on</em>
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <li
              key={t.name}
              className="bg-creamLight p-8 md:p-10 border border-taupeLight/40 flex flex-col"
            >
              <RatingStars value={t.rating} showCount={false} size={14} />
              <p
                id={`testimonial-${idx}-quote`}
                className="mt-6 font-serif italic text-xl md:text-[22px] text-espresso font-light leading-relaxed flex-1"
              >
                "{t.quote}"
              </p>
              <p className="mt-8 text-[10px] tracking-widest3 uppercase text-espresso/60 font-medium">
                — {t.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
