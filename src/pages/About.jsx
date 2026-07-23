import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-24 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=1200&q=80"
              alt="Velmora craftsmanship"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-serif text-3xl md:text-5xl text-brand-ink">Our Story</h1>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-muted">
              <p>
                Velmora was founded with a singular vision: to create jewelry that feels both luxurious and wearable. We believe the best pieces are the ones you reach for every day.
              </p>
              <p>
                Every design begins as a hand-drawn sketch in our studio, inspired by nature, architecture, and the quiet details of everyday beauty. We work with skilled artisans who share our commitment to quality and sustainability.
              </p>
              <p>
                Our materials are sourced responsibly, and each piece is plated in 18K gold over hypoallergenic brass, finished by hand for a luminous, long-lasting wear.
              </p>
            </div>
            <Link to="/shop" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
