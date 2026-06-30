import { Star } from 'lucide-react'

const reviews = [
  { name: 'Emily R.', text: 'Absolutely stunning quality. The gold finish is so rich and has held up beautifully through daily wear. I get compliments every time.', rating: 5 },
  { name: 'Sarah K.', text: 'Ordered the Royal Heirloom Set as a gift for my sister\'s wedding. The packaging was gorgeous and the jewelry exceeded all expectations.', rating: 5 },
  { name: 'Maya T.', text: 'Finally found demi-fine earrings that don\'t irritate my sensitive ears. The Golden Sphere Huggies are my new everyday staple.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-dark tracking-wider">
            Loved by You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center gap-0.5 text-gold mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-warm-gray text-sm leading-relaxed font-sans italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-xs tracking-widest uppercase text-warm-dark font-sans">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}