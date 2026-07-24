import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const values = [
  {
    title: 'Accessible Luxury',
    description: 'We believe fine jewelry should not require a fine jewelry price tag. By working directly with artisan workshops, we deliver exceptional quality at prices that make self-purchase feel just as good as gifting.',
  },
  {
    title: 'Conscious Craft',
    description: 'Every piece is designed to last. We use premium base metals with thick 18K gold plating — not the thin flash-plating found in fast fashion jewelry. Our pieces are built for daily wear, not just special occasions.',
  },
  {
    title: 'Inclusive Design',
    description: 'Our jewelry is designed for every woman. Hypoallergenic materials mean no irritation, no green marks, no compromises. Comfortable enough for sensitive skin, beautiful enough for any occasion.',
  },
];

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-cream-100 pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title] artisan jewelry workshop gold craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-walnut-950/50" />
        <div className="relative z-10 text-center px-4">
          <h1 id="about-hero-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100 tracking-wide">
            Our Story
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle mb-6">Born from Belief</p>
          <h2 className="section-title mb-8">Jewelry Without Compromise</h2>
          <div className="space-y-5 font-sans text-base text-walnut-600 leading-relaxed">
            <p>
              Velmora was founded in 2021 with a radical idea: that beautiful, well-made jewelry
              should be available to every woman, not just those who can afford the traditional luxury markup.
            </p>
            <p>
              Our founder, frustrated by the gap between costume jewelry that tarnished in weeks and
              fine jewelry that cost thousands, set out to create a third option — premium demi-fine
              pieces that look and feel luxurious, last for years, and sit at an accessible price point.
            </p>
            <p>
              Today, Velmora serves thousands of women across 40 countries. Each piece is designed
              in our London studio and crafted by artisan workshops using 18K gold plating over
              premium base metals. The result is jewelry that sparkles like solid gold, feels
              comfortable all day, and costs a fraction of traditional fine jewelry.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="section-subtitle mb-3">What We Stand For</p>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-2xl text-walnut-900 tracking-wide mb-4">{value.title}</h3>
                <p className="font-sans text-sm text-walnut-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Discover the Collection</h2>
          <p className="font-sans text-sm text-walnut-500 mb-8">
            Every piece is designed to be treasured. Find your new favorite.
          </p>
          <Link to="/shop" className="btn-primary text-xs">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
