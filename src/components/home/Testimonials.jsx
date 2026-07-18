import StarRating from '@/components/ui/StarRating'

const REVIEWS = [
  {
    name: 'Amara R.',
    text: 'The Golden Sphere Huggies are my everyday go-to. They feel substantial without being heavy — I never take them off.',
    product: 'Golden Sphere Huggies',
  },
  {
    name: 'Lena M.',
    text: 'Bought the Royal Heirloom Set as a gift and it arrived in the most beautiful box. The recipient was speechless.',
    product: 'Royal Heirloom Set',
  },
  {
    name: 'Priya S.',
    text: 'The filigree on the Amber Lace earrings is stunning in person. Photos do not do the craftsmanship justice.',
    product: 'Amber Lace Earrings',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-sand">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Kind Words</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="bg-cream p-8 md:p-10 flex flex-col items-center text-center shadow-soft"
            >
              <StarRating value={5} size={15} className="justify-center mb-5" />
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-relaxed italic">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm uppercase tracking-[0.15em] text-charcoal">
                  {r.name}
                </p>
                <p className="text-xs text-stone mt-1">on {r.product}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
