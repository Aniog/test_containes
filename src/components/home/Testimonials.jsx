import { Star } from 'lucide-react'
const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I bought the Golden Sphere Huggies and I haven\'t taken them off since. The quality is incredible for the price — they look and feel like fine jewelry.',
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Claire W.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. She wears it every single day.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Priya S.',
    rating: 5,
    text: 'The Majestic Flora Nectar necklace is absolutely stunning. I get compliments every time I wear it. Fast shipping, beautiful packaging. 10/10.',
    product: 'Majestic Flora Nectar',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso">What They're Saying</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map(review => (
            <div key={review.id} className="bg-ivory p-8 md:p-10 relative">
              {/* Quote mark */}
              <span className="font-serif text-6xl text-gold/20 leading-none absolute top-4 left-6">"</span>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={12} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
                ))}
              </div>

              <p className="font-serif text-lg font-light text-espresso leading-relaxed italic">
                "{review.text}"
              </p>

              <div className="mt-6 pt-5 border-t border-mist">
                <p className="font-sans text-xs tracking-wider text-espresso font-medium">{review.name}</p>
                <p className="font-sans text-xs text-stone mt-0.5">Verified Purchase · {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
