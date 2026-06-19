import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(26,24,22,0.4) 0%, rgba(26,24,22,0.6) 100%)',
            }}
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-2xl px-4">
          <h1
            className="font-serif text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Story
          </h1>
          <p className="text-lg opacity-80">
            Crafting jewelry that celebrates every moment
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="space-y-8 text-center">
            <p
              className="font-serif text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
            >
              Velmora was born from a simple belief: every woman deserves to wear jewelry that makes her feel extraordinary, every day.
            </p>
            
            <div className="space-y-6 text-sm leading-relaxed" style={{ color: 'var(--color-walnut)' }}>
              <p>
                Founded in 2019, we started with a small collection of pieces designed for ourselves — jewelry that could transition from morning meetings to evening cocktails, from casual brunches to special occasions.
              </p>
              <p>
                We craft demi-fine pieces in 18K gold plate that bridge the gap between fashion jewelry and fine jewelry. Our goal is accessible luxury — exceptional quality at prices that make sense.
              </p>
              <p>
                Each piece is designed in our studio in Los Angeles and crafted with care by skilled artisans. We believe the details matter: the weight of the metal, the shine of the finish, the way it catches light.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                style={{ backgroundColor: 'var(--color-gold-pale)' }}
              >
                <span className="text-2xl">✨</span>
              </div>
              <h3
                className="font-serif text-lg mb-2"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
              >
                Quality First
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-walnut)' }}>
                18K gold plate over brass. Hypoallergenic. Built to last.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                style={{ backgroundColor: 'var(--color-gold-pale)' }}
              >
                <span className="text-2xl">🌍</span>
              </div>
              <h3
                className="font-serif text-lg mb-2"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
              >
                Responsibly Made
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-walnut)' }}>
                Thoughtful production with respect for people and planet.
              </p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                style={{ backgroundColor: 'var(--color-gold-pale)' }}
              >
                <span className="text-2xl">💜</span>
              </div>
              <h3
                className="font-serif text-lg mb-2"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
              >
                Designed for You
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-walnut)' }}>
                Jewelry that fits your life, your style, your story.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link to="/collection" className="btn-primary inline-block">
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}