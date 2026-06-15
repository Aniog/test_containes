const reviews = [
  {
    id: 1,
    text: 'I bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging alone felt so luxurious.',
    name: 'Amelia R.',
    initial: 'A',
    rating: 5,
  },
  {
    id: 2,
    text: 'The Golden Sphere Huggies are my everyday earrings now. They look so much more expensive than they are.',
    name: 'Sophie L.',
    initial: 'S',
    rating: 5,
  },
  {
    id: 3,
    text: 'Velmora is my go-to for jewelry gifts. The quality is incredible and the pieces are so elegant.',
    name: 'Charlotte M.',
    initial: 'C',
    rating: 5,
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-1 mb-4">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 12 12">
          <path
            d="M6 1l1.236 2.506L10 3.927l-2 1.95.472 2.75L6 7.25l-2.472 1.377L4 5.877l-2-1.95 2.764-.421L6 1z"
            fill="#C9A96E"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-[10px] tracking-widest3 text-gold mb-3">REVIEWS</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map(review => (
            <div key={review.id} className="bg-ivory p-8 md:p-10 relative">
              <Stars />
              <p className="font-serif text-3xl text-gold/30 leading-none mb-2">"</p>
              <p className="font-manrope text-sm text-muted leading-relaxed">{review.text}</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-divider">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="font-serif text-sm text-obsidian">{review.initial}</span>
                </div>
                <span className="font-manrope text-xs tracking-wide text-obsidian">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
