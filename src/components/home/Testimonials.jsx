import StarRating from '@/components/StarRating'

const testimonials = [
  {
    id: 't1',
    name: 'Amanda K.',
    text: 'The quality exceeded my expectations. I wear my huggies every day and they still look brand new.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sophia L.',
    text: 'Beautiful packaging and even more beautiful jewelry. It felt like receiving a luxury gift to myself.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Rachel M.',
    text: 'Finally, demi-fine jewelry that does not irritate my sensitive skin. Elegant and comfortable.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-semibold mb-3">
            Customer Love
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink font-medium">
            What She Said
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-cream-dark p-8 md:p-10 flex flex-col items-center text-center"
            >
              <StarRating rating={item.rating} size={14} />
              <p className="mt-5 font-serif text-lg md:text-xl text-ink leading-relaxed">
                “{item.text}”
              </p>
              <p className="mt-6 font-sans text-xs uppercase tracking-widest text-stone font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
