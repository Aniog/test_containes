import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--cream)' }}>
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--cream-dark)' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subheading">Our Story</p>
            <h1 className="section-heading mb-6">Jewelry that tells your story</h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--espresso-light)' }}>
              Founded in 2020, Velmora was born from a simple belief: every woman deserves to feel special. We create demi-fine jewelry that bridges the gap between fashion and fine jewelry.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: 'var(--cream-dark)' }}>
                <span className="text-2xl" style={{ color: 'var(--gold)' }}>✦</span>
              </div>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--espresso-mid)' }}>Quality First</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--espresso-light)' }}>
                Every piece is crafted with 18K gold plating and hypoallergenic materials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: 'var(--cream-dark)' }}>
                <span className="text-2xl" style={{ color: 'var(--gold)' }}>♡</span>
              </div>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--espresso-mid)' }}>Made with Love</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--espresso-light)' }}>
                Each piece is designed with intention and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: 'var(--cream-dark)' }}>
                <span className="text-2xl" style={{ color: 'var(--gold)' }}>∞</span>
              </div>
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--espresso-mid)' }}>Sustainable</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--espresso-light)' }}>
                We're committed to ethical sourcing and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 text-center" style={{ backgroundColor: 'var(--cream-dark)' }}>
        <div className="container">
          <h2 className="section-heading mb-6">Ready to discover your perfect piece?</h2>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
