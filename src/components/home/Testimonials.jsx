import { TESTIMONIALS } from '@/data/products'
import StarRating from '@/components/ui/StarRating'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="bg-velmora-surface py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="What Our Customers Say" />
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="border border-stone-200 bg-white p-8 text-center transition-shadow duration-300 hover:shadow-sm"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-velmora-base">
                “{t.text}”
              </p>
              <p className="mt-5 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-text-secondary">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
