import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-[var(--velmora-bg-alt)] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.2em] uppercase text-[var(--velmora-gold)] mb-3">Est. 2019</div>
          <h1 className="serif text-5xl mb-6">The Velmora Story</h1>
          <p className="text-lg text-[var(--velmora-text-muted)]">Jewelry that feels like an extension of you — not a statement you have to make.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-neutral max-w-none">
          <div className="grid md:grid-cols-5 gap-10 items-start mb-16">
            <div className="md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85" 
                alt="Velmora founder" 
                className="w-full rounded-sm"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="serif text-3xl mb-6">A Different Kind of Fine</h2>
              <div className="space-y-4 text-[var(--velmora-text-muted)] leading-relaxed">
                <p>Velmora was founded by two sisters who grew tired of choosing between cheap costume jewelry and pieces that cost more than a month's rent. We wanted something in between — beautiful enough to treasure, accessible enough to wear every day.</p>
                <p>Our name comes from the Latin "vel" (veil) and "mora" (delay) — a reminder to slow down and choose what truly matters.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="serif text-3xl mb-6">What We Believe</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Less, but better", text: "We design fewer pieces, and we design them well. Each style is considered for months before it reaches your hands." },
                { title: "Real materials", text: "18K gold plating over hypoallergenic brass. No nickel. No green skin. Pieces that last years, not weeks." },
                { title: "Fair pricing", text: "By selling directly to you, we cut out the middlemen. The price you see is the price we believe is fair." },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--velmora-text-muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--velmora-border)] pt-12">
            <h2 className="serif text-3xl mb-6">Our Promise</h2>
            <p className="text-[var(--velmora-text-muted)] leading-relaxed mb-4">
              Every piece of Velmora jewelry is backed by our 30-day return policy and a one-year guarantee against manufacturing defects. We want you to feel confident in your purchase — and in the woman who wears it.
            </p>
            <Link to="/shop" className="btn btn-gold mt-4 inline-block">Explore the Collection</Link>
          </div>
        </div>
      </div>

      {/* Values Strip */}
      <div className="bg-[var(--velmora-black)] text-[var(--velmora-bg)] py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm">
          <div>
            <div className="text-[var(--velmora-gold)] mb-1">01</div>
            <div>Ethically Sourced</div>
          </div>
          <div>
            <div className="text-[var(--velmora-gold)] mb-1">02</div>
            <div>Hand Finished</div>
          </div>
          <div>
            <div className="text-[var(--velmora-gold)] mb-1">03</div>
            <div>Nickel Free</div>
          </div>
          <div>
            <div className="text-[var(--velmora-gold)] mb-1">04</div>
            <div>Carbon Negative</div>
          </div>
        </div>
      </div>
    </div>
  );
}
