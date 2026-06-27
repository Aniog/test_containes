import { Star } from 'lucide-react'

const reviews = [
  {
    text: 'Every piece feels like it was made just for me. The gold is warm and the weight is perfect — I never take my huggies off.',
    name: 'Isabel',
    initial: 'M',
  },
  {
    text: 'Ordered the Flora Nectar necklace for my sister\'s wedding. It arrived beautifully boxed and looked even better in person.',
    name: 'Camille',
    initial: 'R',
  },
  {
    text: 'Finally, demi-fine jewelry that feels truly premium. The packaging alone made the unboxing feel like a gift to myself.',
    name: 'Zara',
    initial: 'K',
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-[28px] md:text-[36px] tracking-[0.04em] text-rich-brown">
          Loved by You
        </h2>
        <div className="w-[40px] h-[1px] bg-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {reviews.map((review) => (
          <div key={review.name} className="text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-sm text-deep-taupe leading-relaxed italic max-w-[300px] mx-auto">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gold-pale flex items-center justify-center text-xs font-semibold text-rich-brown">
                {review.initial}
              </div>
              <span className="text-xs tracking-[0.08em] uppercase font-medium text-rich-brown">
                {review.name} {review.initial}.
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
