import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sarah K.',
    text: 'The quality is stunning for the price. I wear my Vivid Aura cuff every single day and it still looks brand new after 6 months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mia T.',
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry — and the jewelry? Even better.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica R.',
    text: 'I have sensitive ears and these are the first earrings I can wear all day without irritation. Beautiful and comfortable.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="bg-surface p-8 md:p-10">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-sans text-sm md:text-base text-foreground leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="mt-6 font-sans text-xs uppercase tracking-[0.12em] text-muted">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
