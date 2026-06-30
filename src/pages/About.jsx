import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-ink">Our Story</h1>
          <p className="mt-4 text-base text-ink/70 leading-relaxed">
            Velmora was founded with a singular vision: to create jewelry that feels as special as
            the moments you wear it for. We believe luxury should be accessible, design should be
            timeless, and every piece should be made to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-base-100">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80"
              alt="Velmora design studio"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-ink">
              Designed in California
            </h2>
            <p className="mt-4 text-sm text-ink/70 leading-relaxed">
              Our studio sits between the coast and the mountains, a place that inspires balance,
              warmth, and quiet beauty. Every Velmora piece begins as a sketch, refined through
              countless iterations until it feels effortless.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Ethical Materials',
              text: 'We use 18K gold-plated brass with hypoallergenic finishes. Every material is sourced with care.',
            },
            {
              title: 'Timeless Design',
              text: 'No fast trends. Our pieces are designed to transcend seasons and become part of your story.',
            },
            {
              title: 'Made for Real Life',
              text: 'Lightweight, durable, and easy to wear. From morning meetings to date nights.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-base-200 bg-cream p-6 shadow-soft">
              <h3 className="font-serif text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-ink/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
          >
            Shop the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
