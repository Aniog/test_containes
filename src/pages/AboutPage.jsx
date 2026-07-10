import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1920&h=800&fit=crop"
          alt="Velmora artisan at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-serif text-h1 text-primary">Our Story</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-30 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-body text-secondary-text leading-relaxed mb-8">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
            </p>
            <p className="text-body text-secondary-text leading-relaxed mb-8">
              Founded in 2020, we set out to challenge the notion that fine jewelry must come with a prohibitive cost. Our team of designers draws inspiration from art, nature, and the quiet moments that define our lives — the morning coffee, the evening walk, the celebration of small victories.
            </p>
            <p className="text-body text-secondary-text leading-relaxed mb-8">
              Each piece in our collection is thoughtfully designed in our studio and crafted with care using premium 18K gold plating over sterling silver. We work with skilled artisans who share our commitment to quality and ethical production.
            </p>
            <p className="text-body text-secondary-text leading-relaxed mb-12">
              We believe in jewelry that tells a story — yours. Whether it's a gift for someone you love or a treat for yourself, Velmora pieces are designed to be treasured, worn, and cherished.
            </p>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <h3 className="font-serif text-h4 mb-3">Quality</h3>
                <p className="text-small text-secondary-text">
                  Premium materials and expert craftsmanship ensure lasting beauty
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-h4 mb-3">Value</h3>
                <p className="text-small text-secondary-text">
                  Accessible luxury that doesn't compromise on quality
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-h4 mb-3">Sustainability</h3>
                <p className="text-small text-secondary-text">
                  Ethical production and responsible sourcing
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
              <Link
                to="/shop"
                className="inline-block bg-secondary text-primary px-10 py-4 text-body font-medium hover:bg-accent transition-smooth"
              >
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}