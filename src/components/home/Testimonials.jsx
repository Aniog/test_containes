import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely stunning quality for the price. The Golden Sphere Huggies have become my everyday go-to. They look and feel so much more expensive than they are.',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'I bought the Royal Heirloom Set as a gift for my sister and she was in tears. The packaging is gorgeous and the jewelry itself is impeccable.',
  },
  {
    id: 3,
    name: 'Emma K.',
    rating: 5,
    text: 'Finally found jewelry that doesn\'t irritate my sensitive skin! I\'ve been wearing my Amber Lace Earrings every day for three months and they still look brand new.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-widest-2xl uppercase font-sans mb-3">
            Loved by Thousands
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light text-velmora-cream tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-velmora-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-surface rounded-lg p-6 md:p-8 border border-velmora-border/20"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-sm text-velmora-muted leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-velmora-gold/20 flex items-center justify-center">
                  <span className="text-xs text-velmora-gold font-medium">{t.name.charAt(0)}</span>
                </div>
                <span className="text-sm text-velmora-cream font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
