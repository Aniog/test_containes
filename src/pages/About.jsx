import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="text-xs tracking-[0.2em] uppercase text-vel-gold mb-4">Est. 2019</div>
        <h1 className="serif text-4xl md:text-5xl tracking-[-0.02em] mb-6">Jewelry for the life you actually live.</h1>
        <p className="text-lg text-vel-muted max-w-2xl mx-auto">
          Velmora creates demi-fine gold pieces that feel precious but are designed for everyday wear. 
          No special occasions required.
        </p>
      </section>

      {/* Philosophy */}
      <section className="bg-vel-surface border-y border-vel-border py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="serif text-2xl mb-4">Our Philosophy</h2>
            <p className="text-vel-muted leading-relaxed">
              We believe beautiful jewelry shouldn't live in a box. It should be worn, loved, and lived in. 
              That's why every piece we make is hypoallergenic, tarnish-resistant, and designed to become part of your daily ritual.
            </p>
          </div>
          <div>
            <h2 className="serif text-2xl mb-4">Our Promise</h2>
            <p className="text-vel-muted leading-relaxed">
              We use only the finest 18K gold plating over solid brass. Each piece is hand-finished in small batches. 
              We stand behind every item with a 30-day guarantee and lifetime repair program.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Thoughtful Design", desc: "Every curve, every clasp, every detail is considered. Nothing is added without purpose." },
            { title: "Responsible Sourcing", desc: "We work with suppliers who share our values. Traceable materials, fair labor practices." },
            { title: "Timeless, Not Trendy", desc: "We design pieces you'll still love in ten years. Quiet luxury that transcends seasons." },
          ].map((v, i) => (
            <div key={i}>
              <div className="text-vel-gold text-sm tracking-[0.15em] mb-3">0{i + 1}</div>
              <h3 className="serif text-xl mb-3">{v.title}</h3>
              <p className="text-sm text-vel-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-vel-deep text-vel-bg py-16 text-center">
        <h2 className="serif text-2xl mb-4">Ready to find your signature piece?</h2>
        <Link to="/shop" className="btn btn-accent mt-4 inline-block">Shop the Collection</Link>
      </section>
    </div>
  )
}

export default About