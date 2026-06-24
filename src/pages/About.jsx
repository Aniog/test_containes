import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      {/* Hero */}
      <section className="section-padding mb-16 md:mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-wide leading-tight">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-5 mb-6" />
          <p className="text-brand-warm-gray leading-relaxed">
            Velmora was born from a simple belief: that beautiful, well-crafted jewelry shouldn't come with a luxury markup. We design demi-fine pieces that honor traditional craftsmanship while embracing modern sensibility.
          </p>
        </div>
      </section>

      {/* Image + text split */}
      <section className="section-padding mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
              alt="Jewelry making process"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide mb-5">
              Crafted with Intention
            </h2>
            <p className="text-brand-warm-gray leading-relaxed mb-4">
              Each Velmora piece begins as a sketch — a moment of inspiration drawn from architecture, nature, and the quiet beauty of everyday life. Our design process is deliberate and unhurried, because we believe that great jewelry, like great art, cannot be rushed.
            </p>
            <p className="text-brand-warm-gray leading-relaxed">
              We work with skilled artisans who bring decades of expertise to every detail, from the precision of a clasp to the smoothness of a polished surface. The result is jewelry that feels substantial, looks refined, and wears beautifully over time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-warm py-16 md:py-24">
        <div className="section-padding">
          <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                title: 'Accessible Luxury',
                text: 'Premium materials and craftsmanship, priced honestly. No middlemen, no inflated markups — just beautiful jewelry at a fair price.',
              },
              {
                title: 'Thoughtful Design',
                text: 'Every piece is designed to be worn, not stored. We create jewelry that transitions effortlessly from morning coffee to evening out.',
              },
              {
                title: 'Lasting Quality',
                text: '18K gold plating over sterling silver, hypoallergenic components, and rigorous quality checks ensure each piece stands the test of time.',
              },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="font-serif text-lg tracking-wide text-brand-charcoal mb-3">{value.title}</h3>
                <div className="w-8 h-px bg-brand-gold mx-auto mb-4" />
                <p className="text-sm text-brand-warm-gray leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 md:py-24 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide mb-6">
          Explore the Collection
        </h2>
        <Link to="/shop" className="btn-accent">
          Shop Now
        </Link>
      </section>
    </div>
  )
}

export default About
