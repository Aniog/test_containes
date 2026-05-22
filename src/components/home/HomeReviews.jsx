import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Maria C.',
    rating: 5,
    text: 'The best Margherita I\'ve had outside of Naples. The crust is perfectly charred and the mozzarella is so fresh. We come here every Friday!',
  },
  {
    name: 'James T.',
    rating: 5,
    text: 'Truffle Mushroom pizza is absolutely divine. The atmosphere is warm and the staff are incredibly welcoming. Highly recommend!',
  },
  {
    name: 'Sofia R.',
    rating: 5,
    text: 'Booked a table for our anniversary and they made it so special. The food was incredible and the service was impeccable.',
  },
]

export default function HomeReviews() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">What Our Guests Say</h2>
          <p className="text-stone-500">Real reviews from real pizza lovers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <div key={r.name} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <p className="font-semibold text-stone-900 text-sm">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
