import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen pt-20 bg-ivory">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 
            className="heading-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Our Story
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            Where passion meets craftsmanship
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-warm-gray leading-relaxed">
            <p className="text-xl">
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary.
            </p>
            <p>
              Founded in 2019, we started with a small collection of handcrafted pieces designed for our friends and family. The response was overwhelming. Women connected with our vision of accessible luxury — jewelry that feels expensive without the prohibitive price tag.
            </p>
            <p>
              Today, we partner with skilled artisans who share our passion for quality. Each Velmora piece is thoughtfully designed, carefully crafted, and finished with 18K gold plating that lasts. We believe in slow fashion — pieces you'll treasure for years, not trends that fade.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: 'Quality First', desc: 'Premium materials and craftsmanship in every piece' },
              { title: 'Ethical Sourcing', desc: 'Responsibly sourced materials from trusted suppliers' },
              { title: 'Designed to Last', desc: 'Timeless designs that transcend trends' },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="heading-product text-sm mb-2">{value.title}</h3>
                <p className="text-sm text-warm-gray">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ivory">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="heading-serif text-2xl mb-4">Ready to discover your next treasure?</h2>
          <Link to="/shop">
            <button className="inline-flex items-center gap-2 btn-secondary">
              <span>Shop the Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
