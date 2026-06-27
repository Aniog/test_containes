import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-ivory">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs tracking-[0.2em] uppercase text-gold mb-4 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Jewelry That Celebrates You
            </h1>
            <p className="text-warm-gray leading-relaxed">
              Founded in 2019, Velmora was born from a simple belief: every woman deserves to wear jewelry that makes her feel confident, beautiful, and uniquely herself.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-3xl text-charcoal mb-6">
                Our Beginning
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Velmora started in a small studio in New York City, where our founder, Maria Chen, was working as a jewelry designer for luxury brands. She noticed a gap in the market: beautiful, well-crafted jewelry that was accessible to everyday women.
                </p>
                <p>
                  With a passion for design and a commitment to quality, Maria set out to create jewelry that combined the craftsmanship of fine jewelry with prices that wouldn't break the bank.
                </p>
                <p>
                  Today, Velmora is proud to serve women across the globe, offering pieces that accompany them through every moment of their lives—from everyday adventures to once-in-a-lifetime celebrations.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
                alt="Velmora jewelry"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container-wide">
          <h2 className="font-serif text-3xl text-charcoal text-center mb-12">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <h3 className="font-serif text-xl text-charcoal mb-4">Quality Without Compromise</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Every piece is crafted with 18K gold plating and hypoallergenic materials. We never compromise on quality.
              </p>
            </div>
            <div className="text-center p-8">
              <h3 className="font-serif text-xl text-charcoal mb-4">Inclusive Luxury</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                Fine jewelry shouldn't be exclusive. We believe everyone deserves to feel special, every day.
              </p>
            </div>
            <div className="text-center p-8">
              <h3 className="font-serif text-xl text-charcoal mb-4">Sustainable Practice</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                We're committed to ethical sourcing and sustainable packaging. Beauty shouldn't cost the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="container-wide">
          <h2 className="font-serif text-3xl text-charcoal mb-6">
            Ready to Find Your Treasure?
          </h2>
          <Link to="/collection" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
