import { Star } from 'lucide-react'
import { REVIEWS } from '@/data/products'

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">
            Kind Words
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-card p-8 border border-border"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < review.rating ? 'fill-primary text-primary' : 'fill-muted text-muted'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-6 italic font-serif">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs tracking-[0.08em] uppercase text-muted-foreground">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}