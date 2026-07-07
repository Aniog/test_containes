import StarRating from '@/components/ui/StarRating'

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Claire M.',
    rating: 5,
    text: 'The quality is stunning for the price. I wear my huggies every single day and they still look brand new.',
  },
  {
    id: 't2',
    name: 'Sophia L.',
    rating: 5,
    text: 'Beautiful packaging and even more beautiful jewelry. It felt like a true luxury unboxing experience.',
  },
  {
    id: 't3',
    name: 'Amara K.',
    rating: 5,
    text: 'I gifted the Royal Heirloom Set to my sister and she has not taken it off. Perfect for special occasions.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-espresso">
            Loved By You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-champagne/30 p-8 md:p-10 text-center"
            >
              <StarRating rating={item.rating} size={14} />
              <p className="mt-5 text-charcoal/80 font-sans font-light leading-relaxed italic">
                “{item.text}”
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] font-sans text-espresso">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
