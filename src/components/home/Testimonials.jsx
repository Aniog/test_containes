import { useStrkImages } from "@/lib/useStrkImages"
import { testimonials } from "@/data/products"
import { Stars } from "@/components/ui/Stars"

export default function Testimonials() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="bg-espresso text-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Loved by Many
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light">
            Words from Our Wearers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="border border-ivory/15 p-8 md:p-10 flex flex-col"
            >
              <Stars rating={t.rating} size={15} />
              <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mt-5 font-light italic">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-ivory/60">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
