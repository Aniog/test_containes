import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      text: "The quality is exceptional. I wear my Golden Sphere Huggies every single day and they still look brand new.",
      name: "Elena M.",
      rating: 5,
    },
    {
      text: "Bought the Royal Heirloom Set as a gift for my sister. She hasn't taken it off since. Absolutely stunning.",
      name: "Sofia R.",
      rating: 5,
    },
    {
      text: "Finally, jewelry that feels luxurious but doesn't break the bank. The Majestic Flora necklace is my favorite piece.",
      name: "Aisha K.",
      rating: 5,
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-[var(--color-cream)]">
      <div className="text-center mb-12">
        <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">In Their Words</div>
        <h2 className="serif text-4xl tracking-[-0.01em]">What Our Clients Say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial">
            <div className="stars mb-4">★★★★★</div>
            <p className="text-[15px] leading-relaxed mb-6">"{t.text}"</p>
            <div className="text-sm text-[var(--color-text-muted)]">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
