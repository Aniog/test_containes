import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-center justify-center bg-[#0D0D0D]">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif-display text-[#F7F4EF] text-6xl tracking-[-0.01em]">Our Story</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-neutral max-w-none text-[#1A1A1A]">
          <p className="text-xl leading-relaxed">
            Velmora was founded in 2019 with a simple conviction: that fine jewelry should not require compromise.
          </p>
          
          <div className="my-10 h-px bg-[#EDE8E0]" />

          <h2 className="serif-heading text-3xl mt-10 mb-4">The Philosophy</h2>
          <p>
            We believe in quiet luxury — pieces that speak through their craftsmanship, not their price tag. 
            Every design begins with a question: Will this be worn for years? Will it feel as meaningful on day 1,000 as it did on day one?
          </p>

          <h2 className="serif-heading text-3xl mt-10 mb-4">The Craft</h2>
          <p>
            Our pieces are made in small batches by artisans who have spent decades perfecting their technique. 
            We use 18K gold plating over solid brass — a combination that offers the warmth and durability of solid gold at a more accessible price point.
          </p>
          <p className="mt-4">
            All stones are hand-selected. All finishes are inspected by eye. Nothing leaves our studio that we wouldn't gift to someone we love.
          </p>

          <h2 className="serif-heading text-3xl mt-10 mb-4">The Promise</h2>
          <ul className="list-none pl-0 space-y-2 mt-4">
            <li>✓ Hypoallergenic and nickel-free</li>
            <li>✓ 18K gold plating that holds its luster</li>
            <li>✓ Free worldwide shipping</li>
            <li>✓ 30-day returns, no questions</li>
            <li>✓ Lifetime repair program</li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-[#EDE8E0] flex flex-col sm:flex-row gap-4">
          <Link to="/shop" className="btn btn-primary flex-1 justify-center">Shop the Collection</Link>
          <Link to="/journal" className="btn btn-outline flex-1 justify-center">Read the Journal</Link>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#EDE8E0] py-14">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Thoughtful Design', text: 'Every curve, every clasp, every detail is considered.' },
            { title: 'Responsible Sourcing', text: 'We work only with partners who share our values.' },
            { title: 'Lasting Quality', text: 'Jewelry that becomes part of your story, not a trend.' },
          ].map((v, i) => (
            <div key={i}>
              <h4 className="serif-heading text-xl mb-2">{v.title}</h4>
              <p className="text-sm text-[#6B635C]">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
