import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-28 pb-20">
      <div className="text-center mb-16">
        <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-3">Est. 2018</div>
        <h1 className="serif text-5xl tracking-[-0.02em] mb-6">Our Story</h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-[42ch] mx-auto">
          Quiet luxury, made to be worn every day.
        </p>
      </div>

      <div className="prose prose-neutral max-w-none">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-3">
            <p className="text-[17px] leading-relaxed text-[var(--color-text-muted)]">
              Velmora began in a small atelier in Lisbon, where our founder, a former fine jewelry designer, 
              grew frustrated with the gap between precious jewelry and disposable fashion pieces.
            </p>
            <p className="text-[17px] leading-relaxed text-[var(--color-text-muted)] mt-6">
              She believed women deserved something in between—jewelry that felt substantial and beautiful, 
              without the prohibitive price tag. Pieces that could be worn daily, layered, gifted, and passed down.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[4/3] bg-[var(--color-cream)]" />
          </div>
        </div>

        <div className="border-l-2 border-[var(--color-gold)] pl-8 my-16">
          <p className="text-xl italic text-[var(--color-text)]">
            "We don't make jewelry for special occasions. We make jewelry for every day that becomes special because of it."
          </p>
          <p className="text-sm mt-4 text-[var(--color-text-muted)]">— Founder, Velmora</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="serif text-2xl mb-4 tracking-[-0.01em]">Our Materials</h3>
            <p className="text-[var(--color-text-muted)]">
              Every piece is crafted from 18K gold-plated brass with hypoallergenic posts and findings. 
              We source crystals from ethical suppliers and finish each piece by hand in our Lisbon studio.
            </p>
          </div>
          <div>
            <h3 className="serif text-2xl mb-4 tracking-[-0.01em]">Our Promise</h3>
            <p className="text-[var(--color-text-muted)]">
              We stand behind every piece. If something isn't right, we'll make it right. 
              Our 30-day return policy and lifetime repair program reflect our commitment to lasting quality.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-12 border-t border-[var(--color-border)] text-center">
        <a href="#contact" className="btn btn-outline">Get in Touch</a>
      </div>
    </div>
  )
}

export default About
