import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality exceeded my expectations. I have sensitive ears and these are the first earrings I can wear all day without irritation. Absolutely in love!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica W.',
    text: 'Bought the Royal Heirloom Set as a gift for my sister and she hasnt taken it off since. The packaging alone made it feel so special.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily R.',
    text: 'Ive been searching for demi-fine jewelry that doesnt turn green after a month. Velmora is the real deal — six months later and my huggies still look brand new.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">Loved by Women Worldwide</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="text-center">
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-sans text-sm md:text-base text-velmora-charcoal leading-relaxed italic">
                {review.text}
              </p>
              <p className="font-sans text-xs uppercase tracking-widest text-velmora-muted mt-6">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}