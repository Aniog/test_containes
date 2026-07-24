import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-[var(--color-cream-dark)]">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-xs font-sans tracking-[0.2em] text-[var(--color-warm-gold)] uppercase">
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-charcoal)] mt-4">
              Crafted with Intention
            </h1>
            <p className="mt-6 text-lg text-[var(--color-stone)] leading-relaxed">
              Founded in 2018, Velmora was born from a simple belief: every woman deserves 
              jewelry that makes her feel extraordinary, without the extraordinary price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-4xl text-[var(--color-charcoal)]">
                The Velmora Way
              </h2>
              <div className="divider my-6" />
              <p className="text-[var(--color-stone)] leading-relaxed mb-6">
                We believe that jewelry should be more than an accessory—it should be a form of 
                self-expression, a memory keeper, a daily reminder of your worth. Our pieces 
                are designed to transition seamlessly from morning coffee to evening elegance.
              </p>
              <p className="text-[var(--color-stone)] leading-relaxed mb-6">
                Each piece in our collection is crafted with intention, using only the finest 
                materials and attention to detail. We source our 18K gold-plated components 
                from ethical suppliers and work with skilled artisans who share our commitment 
                to quality.
              </p>
              <p className="text-[var(--color-stone)] leading-relaxed">
                Our name, Velmora, comes from the Latin "vel" meaning "to veil" and "mora" 
                meaning "to linger"—a reminder that true beauty lingers in the details.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop"
                  alt="Velmora craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-cream-dark)]">
        <div className="container">
          <h2 className="font-serif text-4xl text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on materials. Every piece is crafted to last, using premium 18K gold plating and ethically sourced components.'
              },
              {
                title: 'Sustainable Luxury',
                description: 'We believe luxury shouldnt cost the earth. Our packaging is recyclable, and we partner with suppliers who share our environmental values.'
              },
              {
                title: 'Inclusive Design',
                description: 'Jewelry is for everyone. Our collections are designed to celebrate diverse styles, preferences, and budgets.'
              }
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="font-serif text-2xl text-[var(--color-charcoal)]">
                  {value.title}
                </h3>
                <p className="mt-4 text-[var(--color-stone)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="font-serif text-4xl text-[var(--color-charcoal)]">
            Experience Velmora
          </h2>
          <p className="mt-4 text-[var(--color-stone)] max-w-md mx-auto">
            Discover our collection of demi-fine jewelry, crafted for everyday luxury
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-8 btn-primary"
          >
            Shop Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}