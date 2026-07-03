import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/data/products'
import StarRating from '@/components/shared/StarRating'

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-ink-900 text-ivory-50">
      <div className="container-x">
        <div className="text-center mb-12 lg:mb-16">
          <span className="eyebrow text-ivory-50/70">From our community</span>
          <h2 className="mt-3 font-serif text-ivory-50 text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.05] text-balance">
            Worn, gifted, kept.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-ink-800 border border-ivory-100/10 p-7 lg:p-8 flex flex-col"
            >
              <Quote className="w-5 h-5 text-gold-300 mb-5" strokeWidth={1.2} />
              <StarRating value={t.rating} className="mb-5" />
              <blockquote className="font-serif text-[19px] lg:text-[21px] leading-[1.45] text-ivory-50 text-pretty flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ivory-100/15">
                <p className="text-[13px] font-medium text-ivory-50">{t.name}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-[0.22em] text-ivory-100/60">
                  On the {t.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
