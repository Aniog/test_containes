import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-sans text-xs tracking-widest text-velmora-gold uppercase">
            About Us
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mt-4 mb-8">
            Our Story
          </h1>
          
          <div className="space-y-6 text-velmora-charcoal/80">
            <p className="font-sans text-base leading-relaxed">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary. We create pieces that transcend trends, focusing on timeless elegance and exceptional quality.
            </p>
            <p className="font-sans text-base leading-relaxed">
              Our name, derived from the Latin "velum" (veil) and "mora" (moment), reflects our mission—to create those perfect, memorable moments in life. Whether it's the gift you give to celebrate a milestone or the piece you treat yourself to after a long day, Velmora jewelry is designed to be treasured.
            </p>
            <p className="font-sans text-base leading-relaxed">
              Each piece in our collection is thoughtfully designed in our studio and crafted with care. We use only the finest materials: 18K gold plating, genuine gemstones, and ethically sourced crystals. Our demi-fine approach means you get the look and feel of fine jewelry at an accessible price point.
            </p>
            <p className="font-sans text-base leading-relaxed">
              We believe in jewelry that becomes part of your story—pieces you'll reach for again and again, that become old friends you can't imagine being without.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}