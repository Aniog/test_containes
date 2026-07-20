import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <main className="pt-24 lg:pt-32 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1920&q=80"
          alt="Velmora craftsmanship"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 container h-full flex items-center justify-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-text-light text-center">
            Our Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromising on quality or breaking the bank. We set out to create pieces that bridge the gap between fine jewelry and fashion accessories—timeless designs that feel luxurious yet remain accessible.
            </p>
            
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Our name, derived from the French "velours" (velvet), represents our commitment to softness—both in the feel of our pieces and the experience of wearing them. Each item in our collection is thoughtfully designed in our studio, crafted with care, and delivered with love.
            </p>

            <p className="text-lg text-secondary leading-relaxed mb-8">
              We believe in jewelry that becomes part of your story. Whether it's the pair of huggie earrings you wear every day, the necklace that completes your evening look, or the special piece that marks a milestone moment, Velmora is here to be treasured.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6">
                <div className="font-serif text-4xl text-accent mb-2">18K</div>
                <p className="text-sm text-secondary">Gold Plated</p>
              </div>
              <div className="text-center p-6">
                <div className="font-serif text-4xl text-accent mb-2">30</div>
                <p className="text-sm text-secondary">Day Returns</p>
              </div>
              <div className="text-center p-6">
                <div className="font-serif text-4xl text-accent mb-2">Free</div>
                <p className="text-sm text-secondary">Worldwide Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card-bg">
        <div className="container text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">
            Ready to discover your new favorites?
          </h2>
          <Link 
            to="/shop"
            className="inline-block px-8 py-4 bg-primary text-text-light hover:bg-accent transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;