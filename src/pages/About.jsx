import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-velmora-cream pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-center text-velmora-charcoal mb-8">
          Our Story
        </h1>
        
        <div className="hairline mb-12" style={{ maxWidth: '60px', margin: '0 auto 3rem' }} />

        <div className="prose prose-lg text-velmora-taupe mx-auto">
          <p className="mb-6">
            Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
          </p>
          
          <p className="mb-6">
            Founded in 2020, we craft each piece with intention—designing jewelry that transitions seamlessly from morning coffee to evening cocktails. Our demi-fine collections feature 18K gold plating, genuine gemstones, and meticulous craftsmanship that stands the test of time.
          </p>

          <p className="mb-6">
            We believe in quiet luxury—the kind that doesn't shout but whispers elegance. Our pieces are designed to be worn every day, becoming part of your personal story. Whether you're treating yourself or finding the perfect gift, Velmora jewelry adds a touch of refinement to any moment.
          </p>

          <p className="mb-12">
            Every piece in our collection is crafted with care, using ethically sourced materials and sustainable practices. We believe in creating jewelry that not only looks beautiful but feels beautiful too—jewelry that's made to be treasured for years to come.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/shop"
            className="inline-block bg-velmora-charcoal text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-velmora-gold transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}