import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="pt-24 md:pt-28">
      <section className="section-padding bg-white">
        <div className="container-editorial">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-2 font-serif text-3xl md:text-5xl text-ink">Quiet luxury,<br />made intentional.</h1>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-5 text-sm text-ink-secondary leading-relaxed">
              <p>
                Velmora was founded in 2023 with a single belief: fine jewelry should feel effortless. We design demi-fine pieces in warm 18K gold plating that transition from day to night, desk to dinner, and everyday moments to celebrations.
              </p>
              <p>
                Every design is made with intention, finished by hand, and packaged in recyclable materials because we believe luxury and responsibility belong together.
              </p>
              <p>
                Our team works with small, family-owned manufacturers in Italy and Thailand who share our commitment to quality, ethical sourcing, and transparent supply chains.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=900&q=80"
                alt="Velmora craftsmanship"
                className="h-72 w-full object-cover md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { title: 'Responsible Materials', text: 'We use recycled brass and hypoallergenic plating that meets strict EU nickel standards.' },
              { title: 'Thoughtful Packaging', text: 'Every order ships in a reusable velvet pouch and recyclable box. No excess, no waste.' },
              { title: 'Designed to Last', text: 'We create timeless silhouettes meant to be worn for years, not seasons.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-ink-secondary leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
