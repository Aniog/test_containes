import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <main className="pt-24 md:pt-28">
      <section className="section-container py-16 md:py-24">
        <p className="eyebrow">Our Story</p>
        <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Quiet luxury, intentional craft</h1>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-5 font-body text-base text-ink-secondary leading-relaxed">
            <p>
              Velmora was founded in 2023 with a single idea: fine jewelry should feel within reach
              without losing the soul of true craftsmanship. We design every piece in-house, source
              responsible materials, and finish each item by hand.
            </p>
            <p>
              Our collections are built around warm gold tones, restrained silhouettes, and details
              that reward close attention. From the first sketch to the final polish, we obsess over
              the small things so you can wear them with confidence.
            </p>
            <p>
              We believe in fewer, better pieces. In jewelry that travels with you. In gifts that
              feel considered. And in a brand that respects both its materials and the people who
              wear them.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1200&q=80"
              alt="Velmora studio"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 md:py-24">
        <div className="section-container grid gap-10 md:grid-cols-3">
          {[
            {
              title: 'Designed in-house',
              text: 'Every silhouette, texture, and finish is developed by our studio team.',
            },
            {
              title: 'Responsible materials',
              text: '18K gold-plated brass, nickel-free findings, and recycled packaging.',
            },
            {
              title: 'Made to last',
              text: 'Quality checks at every stage, with care guidance for lifelong wear.',
            },
          ].map((item) => (
            <div key={item.title} className="card-surface p-6">
              <h3 className="font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 font-body text-sm text-ink-secondary leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container py-16 md:py-24">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Stay connected</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
              Join the Velmora circle
            </h2>
            <p className="mt-2 font-body text-sm text-ink-secondary">
              New drops, styling notes, and 10% off your first order.
            </p>
          </div>
          <Link to="/shop">
            <Button>Shop the Collection</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
