import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Est. 2018</span>
        <h1 className="serif text-5xl mt-3">Our Story</h1>
      </div>

      <div className="prose prose-lg max-w-none text-velmora-text-muted leading-relaxed space-y-8">
        <p className="text-xl text-velmora-charcoal">
          Velmora was founded with a simple conviction: that fine jewelry should be worn, 
          not stored away. We believe in pieces that become part of your daily ritual—quiet 
          companions to your life, not just occasions.
        </p>

        <div className="my-12 aspect-[16/9] bg-velmora-warm-gray rounded-sm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80" 
            alt="Velmora atelier workspace"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="serif text-3xl text-velmora-charcoal pt-4">The Velmora Difference</h2>
        
        <p>
          Every piece is crafted from 18K gold plating over sterling silver—substantial enough 
          to feel precious, light enough to wear every day. We source our crystals and findings 
          from trusted suppliers who share our commitment to quality and ethics.
        </p>

        <p>
          Our designs draw from both heritage jewelry-making traditions and the modern woman's 
          life. The result is demi-fine jewelry that feels at home with both a silk blouse and 
          a cashmere sweater.
        </p>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          <div>
            <div className="text-velmora-gold text-sm tracking-[0.1em] mb-2">18K GOLD PLATED</div>
            <p className="text-sm">Thick, durable plating that resists tarnish and maintains its warm luster over time.</p>
          </div>
          <div>
            <div className="text-velmora-gold text-sm tracking-[0.1em] mb-2">HYPOALLERGENIC</div>
            <p className="text-sm">Nickel-free construction suitable for sensitive skin. No irritation, just elegance.</p>
          </div>
          <div>
            <div className="text-velmora-gold text-sm tracking-[0.1em] mb-2">30-DAY RETURNS</div>
            <p className="text-sm">Not quite right? Return within 30 days for a full refund. No questions asked.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-velmora-border mt-12">
          <p className="text-sm">
            Questions? Reach us at <a href="mailto:hello@velmora.co" className="text-velmora-gold underline">hello@velmora.co</a>. 
            We're here to help you find the piece that feels like yours.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
