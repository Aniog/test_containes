import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
      name: "Elena M."
    },
    {
      id: 2,
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Beautiful packaging too.",
      name: "Sofia R."
    },
    {
      id: 3,
      text: "Finally found jewelry that doesn't irritate my skin. The gold tone is warm and rich. Will be back for more.",
      name: "Aisha K."
    }
  ]

  return (
    <section className="bg-velmora-ivory py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Kind Words</span>
          <h2 className="serif text-4xl mt-2">From Our Customers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="stars flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-velmora-text-muted italic leading-relaxed mb-4">
                "{t.text}"
              </p>
              <p className="text-sm tracking-[0.05em] text-velmora-charcoal">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
