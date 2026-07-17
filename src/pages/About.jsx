import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 md:pt-22">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] bg-espresso overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&q=80"
            alt="Velmora artisan crafting jewelry"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-2xl px-6">
            <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-ivory text-section mb-4">
              Designed with Intention
            </h1>
            <p className="text-ivory/70 text-lg max-w-lg mx-auto">
              Every piece tells a story of craftsmanship, intention, and the belief that beautiful jewelry should be accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-subsection text-velvet mb-6">
                The Beginning
              </h2>
              <div className="space-y-4 text-mocha leading-relaxed">
                <p>
                  Velmora was founded in 2019 with a simple yet powerful vision: 
                  to create demi-fine jewelry that bridges the gap between fashion 
                  jewelry and fine jewelry—without the luxury markup.
                </p>
                <p>
                  Our founder, Maria Chen, spent years working with luxury jewelry 
                  brands and noticed a gap in the market. Women wanted beautiful, 
                  well-made jewelry that wouldn't tarnish or irritate their skin, 
                  but fine jewelry was out of reach.
                </p>
                <p>
                  So she set out to create something different. Velmora partners 
                with skilled artisans who share our commitment to quality, using 
                premium materials like 18K gold plating over hypoallergenic metals. 
                Every piece is designed to feel special, look stunning, and last.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                  alt="Jewelry crafting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-cream section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-4">
              Our Values
            </p>
            <h2 className="font-serif text-section text-velvet">
              What We Believe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-ivory p-8 rounded">
              <div className="w-12 h-12 bg-champagne/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-champagne text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-xl text-velvet mb-3">
                Quality Without Compromise
              </h3>
              <p className="text-mocha leading-relaxed">
                Every piece is crafted with attention to detail, using premium materials 
                that are built to last. We believe beautiful shouldn't mean temporary.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded">
              <div className="w-12 h-12 bg-champagne/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-champagne text-2xl">💫</span>
              </div>
              <h3 className="font-serif text-xl text-velvet mb-3">
                Inclusive Luxury
              </h3>
              <p className="text-mocha leading-relaxed">
                Fine jewelry shouldn't be exclusive. We design for everyone, 
                offering accessible price points without sacrificing craftsmanship 
                or style.
              </p>
            </div>

            <div className="bg-ivory p-8 rounded">
              <div className="w-12 h-12 bg-champagne/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-champagne text-2xl">🌿</span>
              </div>
              <h3 className="font-serif text-xl text-velvet mb-3">
                Conscious Craft
              </h3>
              <p className="text-mocha leading-relaxed">
                We're committed to ethical sourcing and sustainable practices. 
                Our packaging is recycled, our partners are vetted, and we're 
                constantly working to reduce our footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Process Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="aspect-[4/5] rounded overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80"
                  alt="Jewelry workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-subsection text-velvet mb-6">
                Our Process
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="w-8 h-8 bg-champagne text-velvet rounded-full flex items-center justify-center font-serif text-lg flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-medium text-velvet mb-1">Design</h4>
                    <p className="text-mocha text-sm">
                      Each piece starts with a sketch, inspired by timeless elegance 
                      and modern sensibility.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="w-8 h-8 bg-champagne text-velvet rounded-full flex items-center justify-center font-serif text-lg flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-medium text-velvet mb-1">Craft</h4>
                    <p className="text-mocha text-sm">
                      Our skilled artisans bring each design to life using 
                      traditional techniques and modern precision.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="w-8 h-8 bg-champagne text-velvet rounded-full flex items-center justify-center font-serif text-lg flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-medium text-velvet mb-1">Quality</h4>
                    <p className="text-mocha text-sm">
                      Every piece is inspected for quality, then carefully packaged 
                      and shipped to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-velvet section-padding">
        <div className="container-main text-center">
          <h2 className="font-serif text-ivory text-section mb-4">
            Explore the Collection
          </h2>
          <p className="text-ivory/70 mb-8 max-w-md mx-auto">
            Now that you know our story, discover the jewelry that brings it to life.
          </p>
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 bg-champagne text-velvet px-8 py-4 text-sm font-medium tracking-widest uppercase rounded-sm hover:bg-gold-light transition-colors"
          >
            Shop Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
