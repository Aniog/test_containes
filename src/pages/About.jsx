import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-bg">
      {/* Hero */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/90 to-bg-dark/50" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <span className="text-xs font-medium tracking-extra-wide uppercase text-accent mb-4 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Where elegance<br />
              <span className="italic text-accent">meets accessibility</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded in 2019, Velmora was born from a simple belief: 
              every woman deserves to feel extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-text mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  We believe that jewelry should not be reserved for special occasions alone. 
                  Our pieces are designed to accompany you through every moment — from morning 
                  coffee to evening celebrations.
                </p>
                <p>
                  By partnering directly with skilled artisans and controlling our supply chain, 
                  we offer jewelry that rivals traditional fine jewelry in quality and design, 
                  at prices that make sense.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                alt="Velmora craftsmanship"
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-bg-alt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-text">
              Our Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-text mb-2">Craftsmanship</h3>
              <p className="text-sm text-text-muted">
                Every piece is crafted with attention to detail by skilled artisans using 
                premium materials and traditional techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-text mb-2">Sustainability</h3>
              <p className="text-sm text-text-muted">
                We are committed to responsible sourcing and sustainable practices, 
                minimizing our environmental footprint.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-text mb-2">Inclusivity</h3>
              <p className="text-sm text-text-muted">
                Jewelry is for everyone. Our designs celebrate diversity and are 
                made to fit all identities and styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-bg">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-text mb-6">
            Ready to discover your new favorites?
          </h2>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-white text-sm font-medium tracking-extra-wide uppercase hover:bg-accent-dark transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
