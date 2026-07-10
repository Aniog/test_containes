import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs uppercase tracking-widest text-velmora-taupe">
          About Velmora
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mt-4 mb-8">
          Our Story
        </h1>
        
        <div className="prose prose-lg text-velmora-taupe">
          <p className="mb-6">
            Velmora was born from a simple belief: jewelry should be more than an accessory—it should be a treasured part of your story. Founded in 2020, we set out to create pieces that balance premium quality with accessible luxury.
          </p>
          
          <p className="mb-6">
            Our name, derived from the Latin "velum" (veil) and "mor" (custom), reflects our philosophy of unveiling personal elegance through timeless design. Each piece in our collection is thoughtfully crafted in our studio, drawing inspiration from the quiet moments of beauty in everyday life.
          </p>

          <h2 className="font-serif text-2xl text-velmora-charcoal mt-12 mb-4">Our Materials</h2>
          <p className="mb-6">
            We use only premium materials—18K gold plating over brass, genuine crystals, and ethically sourced gemstones. Every piece is designed to last, with proper care, for generations.
          </p>

          <h2 className="font-serif text-2xl text-velmora-charcoal mt-12 mb-4">Our Promise</h2>
          <p className="mb-6">
            We stand behind the quality of every piece we create. That's why we offer a 30-day return policy, free worldwide shipping, and a lifetime of customer support. Your satisfaction is our priority.
          </p>
        </div>

        <div className="mt-12">
          <Link
            to="/shop"
            className="inline-block bg-velmora-charcoal text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-velmora-gold transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}