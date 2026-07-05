import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="uppercase tracking-[0.2em] text-xs text-velmora-muted mb-3">Est. 2019</p>
        <h1 className="serif text-5xl tracking-[0.03em] mb-6">The Velmora Story</h1>
        <p className="text-lg text-velmora-text-secondary max-w-2xl mx-auto">
          Quiet luxury, thoughtfully made. Jewelry designed to be worn every day, 
          and treasured for a lifetime.
        </p>
      </section>

      <div className="divider max-w-7xl mx-auto" />

      {/* Philosophy */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h2 className="serif text-3xl tracking-[0.03em] mb-4">Our Philosophy</h2>
          </div>
          <div className="md:col-span-3 text-velmora-text-secondary leading-relaxed space-y-5">
            <p>
              We believe that the most meaningful pieces are the ones you reach for every morning. 
              Not locked away for special occasions, but part of your daily ritual.
            </p>
            <p>
              That's why we design demi-fine jewelry that balances beauty with durability. 
              Each piece is crafted from responsibly sourced materials, finished by hand, 
              and tested to withstand real life.
            </p>
            <p>
              Our gold is 18K plated over sterling silver or brass — never plated over base metal. 
              Our stones are hand-selected for clarity and color. And every detail, from the clasp 
              to the engraving, is considered.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-velmora-surface py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="serif text-3xl tracking-[0.03em] mb-10 text-center">What We Value</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Craft", desc: "Every piece is designed in our studio and finished by skilled artisans. We inspect each item before it leaves our hands." },
              { title: "Materials", desc: "We use only 18K gold plating over sterling silver or brass. No base metals. Hypoallergenic and tarnish-resistant." },
              { title: "Longevity", desc: "We design for years of wear, not seasons. Our pieces are meant to become part of your story, not sit in a drawer." },
            ].map((v, i) => (
              <div key={i} className="text-center px-4">
                <h3 className="serif text-xl tracking-[0.05em] mb-3">{v.title}</h3>
                <p className="text-sm text-velmora-text-secondary leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h2 className="serif text-3xl tracking-[0.03em] mb-4">How It's Made</h2>
          </div>
          <div className="md:col-span-3">
            <div className="space-y-8 text-sm">
              {[
                { step: "01", title: "Design", text: "Sketches become wax models. We refine proportions until every curve feels right." },
                { step: "02", title: "Casting", text: "Master molds are created. Each piece is cast in small batches to ensure quality." },
                { step: "03", title: "Finishing", text: "Hand-polished, plated, and set with stones. Every detail inspected." },
                { step: "04", title: "Packaging", text: "Wrapped in velvet, placed in a keepsake box, and prepared for its journey to you." },
              ].map((s) => (
                <div key={s.step} className="flex gap-6">
                  <span className="serif text-2xl text-velmora-gold w-12 flex-shrink-0">{s.step}</span>
                  <div>
                    <p className="font-medium mb-1">{s.title}</p>
                    <p className="text-velmora-text-secondary">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-velmora-base text-velmora-cream py-16 text-center">
        <div className="max-w-md mx-auto px-6">
          <h3 className="serif text-2xl tracking-[0.05em] mb-4">Ready to find your piece?</h3>
          <p className="text-white/70 mb-8 text-sm">Explore our full collection of demi-fine jewelry.</p>
          <Link to="/shop" className="btn btn-gold inline-block">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;