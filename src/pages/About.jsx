import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1920&h=800&fit=crop"
          alt="Our Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-5xl md:text-6xl text-white">Our Story</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-velmora-taupe text-lg leading-relaxed">
            Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary. 
            Founded in 2020, we set out to bridge the gap between luxury and accessibility, creating pieces that 
            are both timeless and attainable.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <h3 className="font-serif text-2xl mb-4">Craftsmanship</h3>
            <p className="text-velmora-taupe text-sm leading-relaxed">
              Each piece is thoughtfully designed in our studio with meticulous attention to detail and quality.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-2xl mb-4">Sustainability</h3>
            <p className="text-velmora-taupe text-sm leading-relaxed">
              We're committed to ethical sourcing and sustainable practices throughout our entire supply chain.
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-2xl mb-4">Inclusion</h3>
            <p className="text-velmora-taupe text-sm leading-relaxed">
              We believe beautiful jewelry should be accessible to everyone, regardless of budget or background.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 btn-outline"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}