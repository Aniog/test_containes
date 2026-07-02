import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Vivid Aura ear cuff every single day. It's so comfortable and gets compliments constantly. The quality is incredible for the price.",
    name: 'Sophie M.',
    location: 'New York',
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a birthday gift for my sister and she absolutely loved it. The packaging is beautiful and the jewelry feels so luxurious.",
    name: 'Camille R.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "The Golden Sphere Huggies are my new everyday earrings. They're the perfect size — not too big, not too small. Shipping was fast and the quality exceeded my expectations.",
    name: 'Aisha T.',
    location: 'Toronto',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-ivory-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold-dust mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map(t => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-cormorant text-xl font-light text-ink leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold-dust mb-5" />

              {/* Author */}
              <div>
                <p className="font-manrope text-xs font-semibold text-ink tracking-wide">{t.name}</p>
                <p className="font-manrope text-xs text-whisper mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
