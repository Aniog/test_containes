import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear the Golden Sphere Huggies every single day. They haven\'t tarnished at all after 6 months — and I get compliments constantly. Worth every penny.',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — looks so much more expensive than it is.',
  },
  {
    id: 3,
    name: 'Isabelle T.',
    rating: 5,
    text: 'Finally found a brand that gets it. The Majestic Flora necklace is delicate but substantial. Hypoallergenic as promised — no irritation at all. I\'m obsessed.',
  },
]

function StarRow({ count }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} strokeWidth={1} color="#C9A96E" fill="#C9A96E" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet font-light">What Our Customers Say</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="bg-off-white p-8 md:p-10 relative">
              {/* Decorative quote */}
              <span className="absolute top-6 right-8 font-serif text-6xl text-gold/15 leading-none select-none">"</span>

              <StarRow count={t.rating} />
              <p className="font-serif text-lg text-velvet font-light leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold" />
                <span className="font-sans text-xs uppercase tracking-widest text-mink">{t.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-linen pt-12">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '2,400+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-velvet font-light mb-1">{stat.value}</p>
              <p className="font-sans text-xs uppercase tracking-widest text-mink">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
