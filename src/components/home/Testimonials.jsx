import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "The quality is incredible for the price. I wear my Vivid Aura ear cuff every single day — it still looks brand new after months.",
    name: "Sarah M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. The packaging was gorgeous and she absolutely loved it. Will definitely order again.",
    name: "Jessica L.",
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found jewelry that doesn't irritate my sensitive skin. The hypoallergenic gold plating is a game-changer. Beautiful and comfortable.",
    name: "Amara K.",
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center px-4">
              <Stars count={t.rating} />
              <p className="mt-4 text-sm text-charcoal/80 leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
