import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const About = () => {
  return (
    <main className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-[var(--color-bg-secondary)]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4 block">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-text-primary)] mb-6 max-w-3xl mx-auto">
            Where Quiet Luxury Meets Lasting Quality
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            We believe beautiful jewelry shouldn't cost the earth — in price or ethics.
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
                alt="Jewelry crafting"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
                The Beginning
              </h2>
              <div className="space-y-4 text-[var(--color-text-secondary)]">
                <p>
                  Velmora was founded in 2019 by two sisters who shared a frustration: everywhere they looked, they found jewelry that was either beautifully crafted but prohibitively expensive, or affordable but poorly made.
                </p>
                <p>
                  They believed there had to be a better way — jewelry that combined thoughtful design, quality materials, and accessible pricing. And so Velmora was born.
                </p>
                <p>
                  Every piece in our collection is designed in our studio, crafted with care, and made to be worn and loved for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section bg-[var(--color-bg-secondary)]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] text-center mb-12">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Over Quantity',
                description: 'We create fewer pieces, but make each one something you\'ll treasure for years.'
              },
              {
                title: 'Transparent Pricing',
                description: 'No inflated "retail prices" or artificial sales. Fair pricing, always.'
              },
              {
                title: 'Responsible Luxury',
                description: '18K gold plating, hypoallergenic metals, and packaging that respects our planet.'
              }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-[var(--color-gold)] flex items-center justify-center">
                  <span className="font-serif text-[var(--color-gold)] text-xl">{i + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-[var(--color-text-primary)] mb-2">{value.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section bg-[var(--color-bg-primary)] text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] mb-6">
            Discover the Collection
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
            Every piece tells a story. Find yours.
          </p>
          <Link to="/collection">
            <Button variant="primary" size="lg">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
