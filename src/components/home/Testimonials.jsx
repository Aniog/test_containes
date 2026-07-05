import StarRating from '@/components/StarRating'

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The quality is absolutely stunning for the price. I wear my Golden Sphere Huggies every single day and they still look brand new after 6 months.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone felt so luxurious, and she has not taken the necklace off since.',
    rating: 5,
  },
  {
    name: 'Jessica T.',
    text: 'Finally found jewelry that does not irritate my sensitive skin. The Amber Lace Earrings are delicate, lightweight, and get compliments every time I wear them.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24 bg-vbg">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-vmuted mb-3">
          Loved By Thousands
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-vtext">
          What Our Customers Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-vborder rounded-sm p-7 md:p-8"
          >
            <StarRating rating={t.rating} size={14} />
            <p className="font-sans text-sm text-vtext leading-relaxed mt-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <p className="font-sans text-xs font-medium text-vmuted mt-5 uppercase tracking-wider">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
