import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const coralCards = [
  {
    id: 'brain-coral',
    titleId: 'reef-title-brain-coral',
    descId: 'reef-desc-brain-coral',
    imgId: 'reef-img-brain-coral-a1b2c3',
    title: 'Brain Coral',
    desc: 'Ancient architects of the reef, brain corals can live for centuries, their labyrinthine surfaces sheltering thousands of species.',
    tag: 'Diploria labyrinthiformis',
    color: '#FF8C42',
  },
  {
    id: 'staghorn',
    titleId: 'reef-title-staghorn',
    descId: 'reef-desc-staghorn',
    imgId: 'reef-img-staghorn-d4e5f6',
    title: 'Staghorn Coral',
    desc: 'Fast-growing and branching, staghorn corals form dense thickets that provide critical habitat for reef fish and invertebrates.',
    tag: 'Acropora cervicornis',
    color: '#FF6B6B',
  },
  {
    id: 'clownfish',
    titleId: 'reef-title-clownfish',
    descId: 'reef-desc-clownfish',
    imgId: 'reef-img-clownfish-g7h8i9',
    title: 'Clownfish & Anemone',
    desc: 'A symbiotic masterpiece — the clownfish protects its host anemone while gaining shelter from predators among the stinging tentacles.',
    tag: 'Amphiprioninae',
    color: '#FFD700',
  },
  {
    id: 'sea-turtle',
    titleId: 'reef-title-sea-turtle',
    descId: 'reef-desc-sea-turtle',
    imgId: 'reef-img-sea-turtle-j1k2l3',
    title: 'Green Sea Turtle',
    desc: 'Graceful navigators of the deep, green sea turtles have roamed the oceans for over 100 million years, grazing on seagrass and algae.',
    tag: 'Chelonia mydas',
    color: '#7FFFD4',
  },
  {
    id: 'parrotfish',
    titleId: 'reef-title-parrotfish',
    descId: 'reef-desc-parrotfish',
    imgId: 'reef-img-parrotfish-m4n5o6',
    title: 'Parrotfish',
    desc: 'The reef\'s sand-makers — parrotfish bite off chunks of coral, digest the algae, and excrete fine white sand that forms tropical beaches.',
    tag: 'Scaridae family',
    color: '#FF69B4',
  },
  {
    id: 'sea-fan',
    titleId: 'reef-title-sea-fan',
    descId: 'reef-desc-sea-fan',
    imgId: 'reef-img-sea-fan-p7q8r9',
    title: 'Sea Fan Coral',
    desc: 'Elegant purple and orange sea fans sway in the current, their intricate lattice structures filtering plankton from passing water.',
    tag: 'Gorgonia ventalina',
    color: '#DA70D6',
  },
];

const CoralCard = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-3xl cursor-pointer group"
      style={{
        aspectRatio: '3/4',
        transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'scale(1.03) translateY(-4px)' : 'scale(1)',
        boxShadow: hovered
          ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${card.color}33`
          : '0 8px 32px rgba(0,0,0,0.4)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Coral image */}
      <img
        data-strk-img-id={card.imgId}
        data-strk-img={`[${card.descId}] [${card.titleId}] vibrant coral reef underwater`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={card.title}
        className="w-full h-full object-cover"
        style={{ transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Glassmorphism text overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5"
        style={{
          background: 'rgba(0, 10, 40, 0.45)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '0 0 1.5rem 1.5rem',
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          transition: 'transform 0.4s ease',
        }}
      >
        <div
          className="text-xs font-cinzel tracking-widest mb-1"
          style={{ color: card.color, opacity: 0.9 }}
        >
          {card.tag}
        </div>
        <h3 className="font-cinzel font-bold text-white text-lg mb-2">{card.title}</h3>
        <p
          className="text-sm leading-relaxed"
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontFamily: 'Inter, sans-serif',
            maxHeight: hovered ? '80px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.4s ease',
          }}
        >
          {card.desc}
        </p>
      </div>

      {/* Hidden text for image query */}
      <span id={card.titleId} className="sr-only">{card.title}</span>
      <span id={card.descId} className="sr-only">{card.desc}</span>
    </div>
  );
};

const TheReef = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        background: 'linear-gradient(180deg, #001a44 0%, #002266 30%, #001133 70%, #000510 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Hero section */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Hero background image */}
        <div
          className="absolute inset-0"
          data-strk-bg-id="reef-hero-bg-x9y8z7"
          data-strk-bg="[reef-hero-subtitle] [reef-hero-title] vibrant coral reef underwater photography"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(0,10,40,0.3) 0%, rgba(0,5,20,0.6) 100%)' }}
        />

        {/* Hero content */}
        <div
          className={`relative z-10 text-center px-6 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <p
            id="reef-hero-subtitle"
            className="text-xs font-cinzel tracking-[0.4em] mb-4"
            style={{ color: '#7FFFD4' }}
          >
            EXPLORE · DISCOVER · WONDER
          </p>
          <h1
            id="reef-hero-title"
            className="font-cinzel font-black mb-6"
            style={{
              fontSize: 'clamp(3rem, 10vw, 7rem)',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #ffffff 0%, #7FFFD4 40%, #FF8C42 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The Reef
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter, sans-serif' }}
          >
            A world of impossible color and breathtaking complexity. The coral reef is Earth's most biodiverse marine ecosystem.
          </p>

          {/* Glass stat cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: '25%', label: 'of marine species' },
              { value: '4,000+', label: 'fish species' },
              { value: '800+', label: 'coral species' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-bright px-6 py-4 text-center"
                style={{ minWidth: '120px' }}
              >
                <div className="font-cinzel font-bold text-2xl" style={{ color: '#7FFFD4' }}>{stat.value}</div>
                <div className="text-xs text-white/60 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-12 mx-auto" style={{ background: 'linear-gradient(180deg, rgba(127,255,212,0.6), transparent)' }} />
        </div>
      </div>

      {/* Gallery section */}
      <div className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-cinzel tracking-widest mb-3" style={{ color: '#7FFFD4' }}>REEF INHABITANTS</p>
          <h2
            className="font-cinzel font-bold mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff' }}
          >
            Life in the Shallows
          </h2>
          <p className="text-white/60 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Hover over each card to reveal the story behind these extraordinary creatures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coralCards.map((card) => (
            <CoralCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* Feature section — glassmorphism panels */}
      <div className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left panel */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: 'rgba(0, 30, 80, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(127,255,212,0.2)',
            }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #7FFFD4, transparent)', filter: 'blur(30px)' }}
            />
            <p className="text-xs font-cinzel tracking-widest mb-3" style={{ color: '#7FFFD4' }}>ECOSYSTEM</p>
            <h3 className="font-cinzel font-bold text-2xl text-white mb-4">Coral Bleaching Crisis</h3>
            <p className="text-white/65 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Rising ocean temperatures cause corals to expel their symbiotic algae, turning them ghostly white. Without intervention, 70–90% of reefs could disappear by 2050.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#FF6B6B' }} />
              <span className="text-xs text-white/50 font-cinzel tracking-wider">CRITICAL STATUS</span>
            </div>
          </div>

          {/* Right panel */}
          <div
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: 'rgba(0, 30, 80, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,140,66,0.2)',
            }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #FF8C42, transparent)', filter: 'blur(30px)' }}
            />
            <p className="text-xs font-cinzel tracking-widest mb-3" style={{ color: '#FF8C42' }}>CONSERVATION</p>
            <h3 className="font-cinzel font-bold text-2xl text-white mb-4">Reef Restoration</h3>
            <p className="text-white/65 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Scientists are growing coral fragments in underwater nurseries and transplanting them to damaged reefs. New heat-resistant coral strains offer hope for survival.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7FFFD4' }} />
              <span className="text-xs text-white/50 font-cinzel tracking-wider">ACTIVE RESEARCH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheReef;
