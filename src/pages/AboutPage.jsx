import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-velmora-cream pt-8 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-velmora-charcoal">
            Our Story
          </h1>
          <div className="hairline max-w-16 mx-auto mt-4" />
        </div>

        {/* Content */}
        <div className="space-y-8 text-velmora-charcoal/70 leading-relaxed">
          <p>
            Velmora was born from a simple belief: every woman deserves jewelry 
            that makes her feel extraordinary, without compromise. We create 
            demi-fine pieces that bridge the gap between accessible luxury and 
            timeless elegance.
          </p>
          
          <p>
            Founded in 2020, our journey began in a small studio where we 
            experimented with materials and designs that would become our 
            signature aesthetic. We believed that beautiful jewelry shouldn't 
            require a special occasion—it should be part of your everyday.
          </p>

          <div className="my-12">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&q=80"
              alt="Velmora studio"
              className="w-full aspect-video object-cover"
            />
          </div>

          <h2 className="font-serif text-2xl text-velmora-charcoal pt-8">
            Our Craft
          </h2>
          <p>
            Each piece in our collection is thoughtfully designed in our studio, 
            crafted with care using only the finest materials — 18K gold plating 
            on sterling silver, genuine crystals, and ethically sourced gemstones. 
            We work with skilled artisans who share our commitment to quality and 
            attention to detail.
          </p>

          <h2 className="font-serif text-2xl text-velmora-charcoal pt-8">
            Our Values
          </h2>
          <ul className="space-y-4 list-disc list-inside">
            <li>
              <strong className="text-velmora-charcoal">Quality:</strong> We never 
              compromise on materials or craftsmanship
            </li>
            <li>
              <strong className="text-velmora-charcoal">Sustainability:</strong> 
              We're committed to responsible sourcing and sustainable practices
            </li>
            <li>
              <strong className="text-velmora-charcoal">Inclusivity:</strong> 
              Beautiful jewelry should be accessible to everyone
            </li>
            <li>
              <strong className="text-velmora-charcoal">Customer Care:</strong> 
              Your satisfaction is our top priority
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-velmora-charcoal pt-8">
            Our Promise
          </h2>
          <p>
            We believe in jewelry that tells a story. Pieces that become heirlooms, 
            that witness your milestones, that you reach for again and again. Every 
            Velmora piece is designed to be worn and loved, not just saved for special 
            occasions.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>
    </main>
  );
}