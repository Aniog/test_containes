import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import JewelryImage from '@/components/ui/JewelryImage';
import { useStrkImages } from '@/lib/useStrkImages';

const PILLARS = [
  {
    id: 'p1',
    title: 'Made by hand',
    body:
      'Every piece is finished by an artisan in our small studio — never rushed, never automated.',
  },
  {
    id: 'p2',
    title: 'Demi-fine, always',
    body:
      '18K gold-plated recycled brass. The warmth of fine gold, at a price that lets you collect.',
  },
  {
    id: 'p3',
    title: 'Quietly sustainable',
    body:
      'Recycled metals, recycled packaging, small-batch production. No leftovers, no shortcuts.',
  },
];

export default function About() {
  const ref = useRef(null);
  useStrkImages(ref, []);

  return (
    <Layout>
      <div ref={ref}>
        {/* Editorial intro */}
        <section className="bg-porcelain pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
              About Velmora
            </p>
            <h1
              id="about-headline"
              className="mt-4 font-serif font-light text-espresso text-4xl md:text-6xl lg:text-7xl leading-[1.05]"
            >
              Quiet luxury,
              <br />
              made for daily wear.
            </h1>
            <p className="mt-8 text-base md:text-lg text-espresso/80 font-sans leading-relaxed max-w-2xl mx-auto">
              We started Velmora because we wanted jewelry that felt
              heirloom from the moment we put it on — without the fine-jewelry
              price tag. Every piece is hand-finished in 18K gold-plated brass,
              made in small batches by people we know by name.
            </p>
          </div>
        </section>

        {/* Big editorial image */}
        <section className="bg-porcelain pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <JewelryImage
                imgId="velmora-about-hero-2c8f4d"
                query="[about-headline]"
                fallbackQuery="atelier jewelry studio gold pieces still life warm natural light"
                ratio="16x9"
                width={2200}
                kind="set"
                theme="warm"
                alt="Velmora atelier"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="bg-linen py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {PILLARS.map((p) => (
                <article key={p.id}>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans">
                    {p.id.replace('p', '0')}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl md:text-4xl text-espresso">
                    {p.title}
                  </h3>
                  <div className="mt-4 w-10 h-px bg-hairline" />
                  <p className="mt-4 text-[15px] text-espresso/80 font-sans leading-relaxed">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-porcelain py-20 md:py-28 text-center">
          <div className="max-w-2xl mx-auto px-5">
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">
              Begin your collection.
            </h2>
            <p className="mt-4 text-mute font-sans">
              A few first pieces, the kind you'll never want to take off.
            </p>
            <div className="mt-8">
              <Button as={Link} to="/shop" variant="primary" size="lg">
                Shop the Collection
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
