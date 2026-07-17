import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';

const About = () => {
  return (
    <main className="min-h-screen pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">Our Story</h1>
          <p className="font-sans text-lg text-white/80">Timeless elegance, accessible luxury</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-xl md:text-2xl text-[var(--color-dark)] leading-relaxed mb-8">
              Founded in 2019, Velmora was born from a simple belief: every woman deserves to feel extraordinary without compromise.
            </p>
            <div className="space-y-6 text-[var(--color-secondary)] font-sans text-base leading-relaxed">
              <p>
                We create jewelry that bridges the gap between fine craftsmanship and accessible luxury. Each piece is thoughtfully designed in our studio and crafted by skilled artisans using premium materials — 18K gold plating, hypoallergenic metals, and carefully selected stones.
              </p>
              <p>
                Our name, derived from the Latin "vel mori" meaning "to want to live," reflects our commitment to creating jewelry that celebrates life's beautiful moments — both big and small.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-[var(--color-surface)] py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Craftsmanship',
                description: 'Every piece is made with meticulous attention to detail, ensuring lasting quality you can treasure for years.'
              },
              {
                title: 'Sustainability',
                description: 'We source responsibly and use recyclable packaging, because luxury should not cost the earth.'
              },
              {
                title: 'Inclusivity',
                description: 'Our designs celebrate every woman, every body, every story. Jewelry is for everyone.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border border-[var(--color-accent)] flex items-center justify-center">
                  <span className="font-serif text-2xl text-[var(--color-accent)]">{index + 1}</span>
                </div>
                <h3 className="font-serif text-xl text-[var(--color-dark)] mb-3">{value.title}</h3>
                <p className="font-sans text-sm text-[var(--color-secondary)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="section">
        <div className="container">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&q=80"
              alt="Velmora jewelry collection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[var(--color-dark)] py-16 md:py-24">
        <div className="container">
          <div className="max-w-xl mx-auto text-center text-white">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Get in Touch</h2>
            <p className="font-sans text-white/70 mb-8">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href="mailto:hello@velmora.com" className="flex items-center gap-2 font-sans text-white/80 hover:text-white transition-colors">
                <Mail size={18} />
                hello@velmora.com
              </a>
              <span className="hidden sm:block text-white/30">|</span>
              <span className="flex items-center gap-2 font-sans text-white/80">
                <MapPin size={18} />
                Los Angeles, CA
              </span>
            </div>
            <Link to="/shop">
              <Button variant="primary" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
