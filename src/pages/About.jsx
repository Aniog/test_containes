import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[#F5F3EF]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A962] mb-4 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-[#1C1917] mb-6">
              Jewelry with intention
            </h1>
            <p className="text-[#57534E] text-lg leading-relaxed">
              We believe every woman deserves to feel extraordinary. Velmora creates jewelry that celebrates life's moments, big and small.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80"
                alt="Velmora craftsmanship"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">
                Founded with purpose
              </h2>
              <div className="space-y-4 text-[#57534E] leading-relaxed">
                <p>
                  Velmora began in 2019 when our founder, searching for jewelry that balanced quality and accessibility, realized the market had a gap. Beautiful jewelry was either cheap and quick to tarnish, or impossibly expensive.
                </p>
                <p>
                  We set out to create something different: demi-fine pieces crafted with the same attention as fine jewelry, but accessible to everyday wear. Each Velmora piece is designed to become a treasured part of your personal story.
                </p>
                <p>
                  Today, we're proud to have a community of women who share our belief that luxury should be lived, not just saved for special occasions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-[#F5F3EF]">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-center text-[#1C1917] mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Every piece is crafted with premium materials—18K gold vermeil and hypoallergenic metals built to last.'
              },
              {
                title: 'Inclusive Design',
                description: 'Jewelry should be for everyone. We design for diverse styles, occasions, and budgets.'
              },
              {
                title: 'Sustainable Choices',
                description: 'We\'re committed to reducing our environmental footprint through responsible sourcing and packaging.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-xl text-[#1C1917] mb-3">{value.title}</h3>
                <p className="text-[#57534E]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#1C1917] text-center">
        <div className="container">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Ready to discover your next favorite piece?
          </h2>
          <Link to="/shop" className="btn-gold inline-flex mt-4">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
