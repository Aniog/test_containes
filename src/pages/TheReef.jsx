import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const REEF_SECTIONS = [
  {
    id: 'staghorn',
    title: 'Staghorn Coral',
    subtitle: 'Acropora cervicornis',
    description: 'One of the fastest-growing corals, its branching structure creates vital habitat for hundreds of reef species. Named for its resemblance to deer antlers.',
    stat: '10cm/year growth',
    color: '#FF6B6B',
  },
  {
    id: 'brain',
    title: 'Brain Coral',
    subtitle: 'Diploria labyrinthiformis',
    description: 'Ancient architects of the reef. Some brain corals are over 900 years old, their grooved surfaces resembling the folds of a human brain.',
    stat: '900+ years old',
    color: '#FF8C42',
  },
  {
    id: 'clownfish',
    title: 'Clownfish & Anemone',
    subtitle: 'Amphiprioninae',
    description: 'A symbiotic masterpiece. The clownfish is immune to the anemone\'s sting, living safely within its tentacles while protecting it from predators.',
    stat: '28 known species',
    color: '#FFD166',
  },
  {
    id: 'mantaray',
    title: 'Manta Ray',
    subtitle: 'Mobula birostris',
    description: 'Gentle giants of the reef. With wingspans reaching 7 meters, manta rays glide effortlessly through the water, filtering plankton with their cephalic fins.',
    stat: '7m wingspan',
    color: '#06D6A0',
  },
  {
    id: 'nudibranch',
    title: 'Nudibranch',
    subtitle: 'Chromodoris willani',
    description: 'The jewels of the sea. These shell-less mollusks display extraordinary colors as a warning to predators, each species more vivid than the last.',
    stat: '3,000+ species',
    color: '#118AB2',
  },
  {
    id: 'seahorse',
    title: 'Seahorse',
    subtitle: 'Hippocampus kuda',
    description: 'Nature\'s most devoted fathers. Male seahorses carry and birth their young, with some species giving birth to over 1,000 offspring at once.',
    stat: '1,000 offspring',
    color: '#9B5DE5',
  },
];

function ReefCard({ item, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-3xl group cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.8s ease ${index * 0.1}s`,
        minHeight: '420px',
      }}
    >
      {/* Background image */}
      <img
        data-strk-img-id={`reef-card-${item.id}-bg`}
        data-strk-img={`[reef-card-${item.id}-desc] [reef-card-${item.id}-title] [reef-page-title]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Brightness overlay — high brightness on hover */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Glassmorphism text overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500"
        style={{
          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '0 0 1.5rem 1.5rem',
        }}
      >
        {/* Stat badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 text-xs tracking-widest uppercase"
          style={{
            background: `${item.color}20`,
            border: `1px solid ${item.color}60`,
            color: item.color,
            fontFamily: 'Cinzel, serif',
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }}
          />
          {item.stat}
        </div>

        <h3
          id={`reef-card-${item.id}-title`}
          className="text-xl font-bold mb-1"
          style={{ fontFamily: 'Cinzel, serif', color: '#ffffff' }}
        >
          {item.title}
        </h3>
        <p
          className="text-xs tracking-widest uppercase mb-3"
          style={{ color: item.color, fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}
        >
          {item.subtitle}
        </p>
        <p
          id={`reef-card-${item.id}-desc`}
          className="text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.8)' }}
        >
          {item.description}
        </p>
      </div>

      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 30px ${item.color}30, 0 0 30px ${item.color}20`,
          border: `1px solid ${item.color}40`,
        }}
      />
    </div>
  );
}

export default function TheReef() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #001a2e 0%, #002244 30%, #001a2e 100%)' }}
    >
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero background image */}
        <img
          data-strk-img-id="reef-hero-bg-a1b2c3"
          data-strk-img="[reef-hero-subtitle] [reef-page-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Coral reef"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) saturate(1.4)' }}
        />

        {/* Water caustic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, rgba(0,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(0,128,255,0.1) 0%, transparent 50%)',
          }}
        />

        {/* Hero content — glassmorphism panel */}
        <div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease 0.2s',
          }}
        >
          <div
            className="inline-block px-12 py-10 rounded-3xl mb-8"
            style={{
              background: 'rgba(0, 20, 40, 0.4)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(0,255,255,0.2)',
              boxShadow: '0 8px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}
          >
            <p
              className="text-sm tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: 'Cinzel, serif', color: '#00FFFF', opacity: 0.8 }}
            >
              Zone II
            </p>
            <h1
              id="reef-page-title"
              className="text-6xl md:text-8xl font-black tracking-widest mb-4"
              style={{
                fontFamily: 'Cinzel, serif',
                color: '#ffffff',
                textShadow: '0 0 40px rgba(0,255,255,0.4)',
              }}
            >
              The Reef
            </h1>
            <p
              id="reef-hero-subtitle"
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '500px', margin: '0 auto' }}
            >
              A world of impossible color and teeming life. The coral reef — Earth's most biodiverse marine ecosystem.
            </p>
          </div>

          {/* Water ripple stats */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: '25%', label: 'of marine species' },
              { value: '4,000+', label: 'fish species' },
              { value: '800+', label: 'coral species' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="px-6 py-3 rounded-full"
                style={{
                  background: 'rgba(0,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,255,255,0.2)',
                }}
              >
                <span
                  className="text-xl font-bold mr-2"
                  style={{ color: '#00FFFF', fontFamily: 'Cinzel, serif' }}
                >
                  {value}
                </span>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(0,255,255,0.5)', fontFamily: 'Cinzel, serif' }}>
            Explore
          </span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(180deg, rgba(0,255,255,0.5), transparent)' }} />
        </div>
      </section>

      {/* Reef Gallery Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: 'Cinzel, serif', color: '#00FFFF', opacity: 0.7 }}
          >
            Inhabitants
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-widest"
            style={{ fontFamily: 'Cinzel, serif', color: '#ffffff' }}
          >
            Life on the Reef
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.4))' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#00FFFF', boxShadow: '0 0 10px #00FFFF' }} />
            <div className="h-px w-24" style={{ background: 'linear-gradient(90deg, rgba(0,255,255,0.4), transparent)' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REEF_SECTIONS.map((item, i) => (
            <ReefCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Featured wide panel */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{ minHeight: '400px' }}
        >
          <img
            data-strk-img-id="reef-wide-panel-d4e5f6"
            data-strk-img="[reef-wide-title] [reef-page-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Coral reef panorama"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.6) saturate(1.3)' }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(0,10,30,0.3)' }}
          >
            <div
              className="text-center px-8 py-10 rounded-3xl max-w-2xl"
              style={{
                background: 'rgba(0,20,40,0.5)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,255,255,0.2)',
              }}
            >
              <h3
                id="reef-wide-title"
                className="text-3xl md:text-4xl font-bold tracking-widest mb-4"
                style={{ fontFamily: 'Cinzel, serif', color: '#ffffff' }}
              >
                The Great Barrier Reef
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Stretching over 2,300 kilometers along Australia's northeast coast, it is the world's largest coral reef system — visible from space, and home to over 1,500 species of fish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
