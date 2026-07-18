import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The quality is incredible for the price. I've worn my huggies every day for six months and they still look brand new.",
      name: "Elena M.",
    },
    {
      quote: "Bought the Flora necklace as a gift for my sister. She hasn't taken it off since. The packaging alone felt so special.",
      name: "Priya K.",
    },
    {
      quote: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and rich. Will be back for more.",
      name: "Sophie L.",
    },
  ]

  return (
    <section className="bg-vel-bg-alt py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[0.15em] text-xs text-vel-gold mb-2">Kind Words</div>
          <h2 className="heading-serif text-4xl md:text-5xl tracking-[-0.01em]">From Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="text-center">
              <div className="stars mb-4 text-lg">★★★★★</div>
              <p className="text-vel-muted italic leading-relaxed mb-6">"{t.quote}"</p>
              <div className="text-sm tracking-wide">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
