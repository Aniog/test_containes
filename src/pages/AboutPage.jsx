import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="section-subtitle block mb-3">OUR STORY</span>
          <h1 className="section-title">About Velmora</h1>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="section-title text-3xl mb-6">Jewelry that tells your story</h2>
            <div className="space-y-4 text-charcoal-600 font-sans leading-relaxed">
              <p>
                At Velmora, we believe every woman deserves to wear jewelry that makes her feel 
                extraordinary. Founded in 2019, our journey began with a simple vision: to create 
                demi-fine jewelry that bridges the gap between fashion and fine jewelry.
              </p>
              <p>
                Each piece in our collection is designed with intention—crafted to be layered, 
                mixed, and treasured for years to come. We source only the finest materials: 
                18K gold plating over sterling silver, high-quality cubic zirconia stones, 
                and hypoallergenic metals that are gentle on sensitive skin.
              </p>
              <p>
                Our name, Velmora, is derived from the Italian word for "much loved"—a tribute 
                to the jewelry we create that becomes beloved by those who wear it.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-16 bg-cream-100/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-3xl text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-2">Quality First</h3>
                <p className="text-sm text-charcoal-600">Every piece meets our rigorous quality standards before reaching you.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-2">Timeless Design</h3>
                <p className="text-sm text-charcoal-600">We create pieces that transcend seasons and trends.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gold-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-charcoal-900 mb-2">Made with Love</h3>
                <p className="text-sm text-charcoal-600">Each piece is handled with care from sketch to delivery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="section-title text-3xl mb-6">Discover Our Collection</h2>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            Shop Now
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
