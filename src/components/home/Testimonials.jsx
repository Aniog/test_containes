import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "The quality is incredible for the price. I've received so many compliments on my Golden Sphere Huggies — they look like they cost five times as much.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    id: 2,
    text: "I bought the Royal Heirloom Set as a gift for my sister and she was absolutely thrilled. The packaging alone made it feel so special.",
    name: "Emma L.",
    rating: 5,
  },
  {
    id: 3,
    text: "Finally, jewelry that doesn't irritate my sensitive ears. I wear my Vivid Aura ear cuff every single day — it's become my signature piece.",
    name: "Rachel K.",
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 border-t border-velmora-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-velmora-charcoal font-light">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="text-center">
              <Stars count={t.rating} />
              <p className="mt-4 text-sm text-velmora-stone leading-relaxed italic font-light">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs uppercase tracking-extra-wide font-medium text-velmora-charcoal">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
