import { testimonials } from '@/data/products'
import StarRating from '@/components/ui/StarRating'
import { useStrkImages } from '@/lib/useStrkImages'
import SectionHeading from '@/components/home/SectionHeading'

export default function Testimonials() {
  const ref = useStrkImages([])
  return (
    <section ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Loved By Many"
          title="Words From Our Community"
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-cream border border-line p-8 flex flex-col"
            >
              <StarRating value={t.rating} size={16} />
              <blockquote className="mt-5 font-serif text-xl md:text-2xl text-ink leading-snug italic">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-stone">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
