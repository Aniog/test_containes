import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function StoryPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20" ref={containerRef}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
        <img
          data-strk-img-id="story-hero-img-a1b2c3"
          data-strk-img="[story-hero-desc] [story-hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Small Hours story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="label-caps text-cream/70 mb-4" id="story-hero-desc">Quiet luxury. Personal meaning.</p>
          <h1
            id="story-hero-title"
            className="font-serif text-5xl md:text-7xl text-cream font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Our Story
          </h1>
        </div>
      </div>

      {/* Origin */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="label-caps text-gold mb-4">Origin</p>
              <h2
                className="font-serif text-4xl md:text-5xl text-ink font-light mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              >
                The Small Hours
              </h2>
              <div className="space-y-5 text-muted text-sm font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>
                  The phrase "the small hours" refers to the time between midnight and dawn — the hours when the world is quiet and you are most yourself. It is the time when you take off your jewelry before bed, or put it on before anyone else is awake.
                </p>
                <p>
                  Small Hours was founded on the belief that the most meaningful jewelry is not the kind that gets noticed. It is the kind that means something to the person wearing it — a ring worn every day, a necklace kept close, a bracelet that has been through everything with you.
                </p>
                <p>
                  Every piece we make is designed for those hours. For the rituals that belong only to you.
                </p>
              </div>
            </div>
            <div className="overflow-hidden bg-cream-dark aspect-[3/4]">
              <img
                data-strk-img-id="story-origin-img-d4e5f6"
                data-strk-img="[story-origin-desc] [story-origin-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Small Hours origin"
                className="w-full h-full object-cover img-hover"
              />
            </div>
          </div>
          <p id="story-origin-title" className="sr-only">Small Hours jewelry brand origin story</p>
          <p id="story-origin-desc" className="sr-only">Intimate jewelry for quiet personal rituals midnight dawn</p>
        </div>
      </section>

      {/* Story nav */}
      <section className="py-16 px-6 md:px-10 bg-cream-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Craftsmanship', desc: 'How each piece is made, by hand, slowly.', to: '/story/craftsmanship' },
              { title: 'Sustainability', desc: 'Recycled metals, ethical stones, considered packaging.', to: '/story/sustainability' },
              { title: 'The Journal', desc: 'Stories, notes, and the process behind the pieces.', to: '/journal' },
            ].map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="group block p-8 bg-cream hover:bg-ink transition-colors duration-400"
              >
                <h3
                  className="font-serif text-2xl text-ink group-hover:text-cream font-light transition-colors duration-400"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted group-hover:text-cream/60 text-xs font-light mt-3 leading-relaxed transition-colors duration-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.desc}
                </p>
                <span className="label-caps text-gold group-hover:text-gold mt-5 block" style={{ fontSize: '9px' }}>
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
