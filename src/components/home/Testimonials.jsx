import { Star } from 'lucide-react'

const testimonials = [
  { id: 1, text: 'The quality is incredible for the price. I wear my Vivid Aura ear cuff every single day — it still looks brand new after months.', name: 'SARAH M.', rating: 5 },
  { id: 2, text: 'Bought the Royal Heirloom Set as a gift for my sister. She was absolutely speechless. The packaging alone is worth it.', name: 'EMILY R.', rating: 5 },
  { id: 3, text: "Finally found jewelry that doesn't irritate my sensitive skin. These pieces are hypoallergenic AND gorgeous. I'm obsessed.", name: 'JESSICA L.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">What They Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(t => (
            <div key={t.id} className="text-center px-4 py-8 md:py-10">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="#B8860B" stroke="#B8860B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal text-sm leading-relaxed italic font-light">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs uppercase tracking-wider text-taupe font-medium">
                &mdash; {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
