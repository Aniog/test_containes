import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-content mx-auto px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl text-charcoal leading-tight mb-6">
            Where Quiet Luxury Meets Artisanal Craft
          </h1>
          <p className="font-sans text-warm-gray leading-relaxed">
            Founded in 2019, Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without the extraordinary price tag.
          </p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="max-w-content mx-auto px-6 lg:px-12 mb-20 lg:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="aspect-[4/5] rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-charcoal mb-6">The Beginning</h2>
            <p className="font-sans text-warm-gray leading-relaxed mb-4">
              What started as a small collection of handcrafted pieces for friends and family has grown into a beloved brand with a global community of jewelry enthusiasts.
            </p>
            <p className="font-sans text-warm-gray leading-relaxed">
              We partner with master jewelers who share our passion for quality and detail, ensuring every Velmora piece meets our exacting standards.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl text-charcoal mb-6">Our Promise</h2>
            <p className="font-sans text-warm-gray leading-relaxed mb-4">
              Each piece is thoughtfully designed and crafted with 18K gold plating over hypoallergenic metals, ensuring beauty that lasts.
            </p>
            <p className="font-sans text-warm-gray leading-relaxed">
              We believe in jewelry that whispers rather than shouts — pieces that become cherished companions through life's moments, both big and small.
            </p>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/5] rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80"
              alt="Velmora jewelry"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
              Our Values
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {[
              { title: 'Quality Without Compromise', text: 'Every piece undergoes rigorous quality checks. We use only premium materials that stand the test of time.' },
              { title: 'Ethical Craftsmanship', text: 'We partner with factories that ensure fair wages, safe conditions, and respect for their craft.' },
              { title: 'Inclusive Luxury', text: 'We believe beautiful jewelry should be accessible. Our pricing makes everyday luxury a reality.' },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-12 h-px bg-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl text-charcoal mb-4">{value.title}</h3>
                <p className="font-sans text-sm text-warm-gray leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">
            Discover Our Collection
          </h2>
          <p className="font-sans text-warm-gray mb-10 max-w-xl mx-auto">
            Explore our curated selection of demi-fine jewelry, designed to accompany you through every moment.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-3">
            Shop Now
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
