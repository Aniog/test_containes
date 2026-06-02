import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const panels = [
  {
    id: 'panel-wildebeest',
    titleId: 'panel-wildebeest-title',
    subtitleId: 'panel-wildebeest-subtitle',
    captionId: 'panel-wildebeest-caption',
    imgId: 'hero-panel-wildebeest-a1b2c3',
    title: 'The Great Migration',
    subtitle: 'Two Million Souls in Motion',
    caption: 'Every year, the largest overland migration on Earth unfolds across the Serengeti plains — wildebeest, zebra, and gazelle following ancient instinct across the Mara River.',
    location: 'Serengeti National Park, Tanzania',
  },
  {
    id: 'panel-mara-river',
    titleId: 'panel-mara-river-title',
    subtitleId: 'panel-mara-river-subtitle',
    captionId: 'panel-mara-river-caption',
    imgId: 'hero-panel-mara-river-d4e5f6',
    title: 'The Mara Crossing',
    subtitle: 'Where Courage Meets Current',
    caption: 'The Mara River crossing is the most dramatic moment of the migration — thousands of wildebeest plunge into crocodile-filled waters, driven by an irresistible pull northward.',
    location: 'Masai Mara, Kenya',
  },
  {
    id: 'panel-savanna-dusk',
    titleId: 'panel-savanna-dusk-title',
    subtitleId: 'panel-savanna-dusk-subtitle',
    captionId: 'panel-savanna-dusk-caption',
    imgId: 'hero-panel-savanna-dusk-g7h8i9',
    title: 'Golden Hour',
    subtitle: 'The Plains at Dusk',
    caption: 'As the sun descends behind the acacia horizon, the savanna transforms into a canvas of amber and ochre. Silhouettes of giraffe and elephant punctuate the burning sky.',
    location: 'Ngorongoro Crater, Tanzania',
  },
  {
    id: 'panel-zebra-herd',
    titleId: 'panel-zebra-herd-title',
    subtitleId: 'panel-zebra-herd-subtitle',
    captionId: 'panel-zebra-herd-caption',
    imgId: 'hero-panel-zebra-herd-j1k2l3',
    title: 'Stripes on the Plain',
    subtitle: 'The Zebra Vanguard',
    caption: 'Zebra lead the migration, their keen senses detecting fresh grass and water. Their bold patterns dissolve into the shimmering heat of the open grassland.',
    location: 'Serengeti, Tanzania',
  },
  {
    id: 'panel-calving',
    titleId: 'panel-calving-title',
    subtitleId: 'panel-calving-subtitle',
    captionId: 'panel-calving-caption',
    imgId: 'hero-panel-calving-m4n5o6',
    title: 'Season of Birth',
    subtitle: 'Life Begins on the Serengeti',
    caption: 'In the southern Serengeti, half a million wildebeest calves are born within a few weeks — an overwhelming surge of new life that sustains the entire ecosystem.',
    location: 'Southern Serengeti, Tanzania',
  },
];

export default function GreatMigration() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    setIsVisible(true);
    return cleanup;
  }, []);

  const scrollToPanel = (index) => {
    if (!scrollRef.current) return;
    const panelWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: index * panelWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const panelWidth = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollRef.current.scrollLeft / panelWidth);
    setActiveIndex(newIndex);
  };

  const prev = () => scrollToPanel(Math.max(0, activeIndex - 1));
  const next = () => scrollToPanel(Math.min(panels.length - 1, activeIndex + 1));

  return (
    <div ref={containerRef} className="min-h-screen bg-earth-dark">
      {/* Horizontal scroll hero */}
      <div className="relative h-screen">
        <div
          ref={scrollRef}
          className="horizontal-scroll-container h-full"
          onScroll={handleScroll}
        >
          {panels.map((panel, i) => (
            <div key={panel.id} className="horizontal-scroll-panel h-full">
              {/* Parallax background image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  data-strk-img-id={panel.imgId}
                  data-strk-img={`[${panel.captionId}] [${panel.subtitleId}] [${panel.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={panel.title}
                  className="parallax-img"
                  style={{ animationDelay: `${i * -4}s` }}
                />
                {/* Heat haze overlay */}
                <div className="heat-haze-overlay" />
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-dark via-earth-dark/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-earth-dark/60 via-transparent to-transparent" />
              </div>

              {/* Panel content */}
              <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 lg:px-24">
                <div className={`max-w-2xl ${isVisible ? 'panel-dissolve-enter' : 'opacity-0'}`}>
                  <p
                    id={panel.captionId}
                    className="font-sans text-xs tracking-[0.3em] uppercase text-burnt-orange-light mb-4"
                  >
                    {panel.location}
                  </p>
                  <h1
                    id={panel.titleId}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-savanna-cream leading-none mb-3"
                  >
                    {panel.title}
                  </h1>
                  <h2
                    id={panel.subtitleId}
                    className="font-serif-display text-xl md:text-2xl font-light italic text-ochre-pale mb-6"
                  >
                    {panel.subtitle}
                  </h2>
                  <p className="font-serif-display text-base md:text-lg text-savanna-warm/80 leading-relaxed max-w-xl">
                    {panel.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-savanna-cream/30 bg-earth-dark/40 backdrop-blur-sm flex items-center justify-center text-savanna-cream hover:bg-burnt-orange/60 hover:border-burnt-orange transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Previous panel"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          disabled={activeIndex === panels.length - 1}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-savanna-cream/30 bg-earth-dark/40 backdrop-blur-sm flex items-center justify-center text-savanna-cream hover:bg-burnt-orange/60 hover:border-burnt-orange transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          aria-label="Next panel"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {panels.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPanel(i)}
              className={`transition-all duration-400 rounded-full ${
                i === activeIndex
                  ? 'w-8 h-2 bg-burnt-orange'
                  : 'w-2 h-2 bg-savanna-cream/40 hover:bg-savanna-cream/70'
              }`}
              aria-label={`Go to panel ${i + 1}`}
            />
          ))}
        </div>

        {/* Panel counter */}
        <div className="absolute top-24 right-6 md:right-12 z-20 font-sans text-xs text-savanna-warm/60 tracking-widest">
          {String(activeIndex + 1).padStart(2, '0')} / {String(panels.length).padStart(2, '0')}
        </div>
      </div>

      {/* Intro section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-burnt-orange mb-6">
              About the Migration
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-savanna-cream leading-tight mb-8">
              The Greatest Show<br />
              <span className="italic text-ochre-pale">on Earth</span>
            </h2>
            <p className="font-serif-display text-lg text-savanna-warm leading-relaxed mb-6">
              Each year, over 1.5 million wildebeest, 200,000 zebra, and 350,000 gazelle
              complete a circular journey of nearly 1,800 miles across the Serengeti-Mara
              ecosystem — driven by rainfall, grass, and ancient memory.
            </p>
            <p className="font-serif-display text-base text-savanna-warm/70 leading-relaxed">
              This is not merely an animal migration. It is the heartbeat of an entire
              ecosystem — predators, scavengers, and the land itself shaped by the
              relentless rhythm of two million hooves.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[3x4] md:aspect-[4/5] rounded-sm overflow-hidden">
              <img
                data-strk-img-id="intro-migration-p7q8r9"
                data-strk-img="[intro-migration-caption] wildebeest migration aerial view Serengeti"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Aerial view of the wildebeest migration"
                className="w-full h-full object-cover"
                id="intro-migration-caption"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-burnt-orange/40 rounded-sm" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-burnt-orange/10 rounded-sm" />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-t border-b border-burnt-orange/20 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '1.5M+', label: 'Wildebeest' },
            { value: '1,800', label: 'Miles Traveled' },
            { value: '12', label: 'Months Cycle' },
            { value: '2', label: 'Countries Crossed' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="font-serif text-4xl md:text-5xl font-bold text-burnt-orange">
                {value}
              </span>
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-savanna-warm/70">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Explore more */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-burnt-orange mb-3">
              Explore Further
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-savanna-cream">
              Discover the Serengeti
            </h2>
          </div>
          <NavLink
            to="/species"
            className="flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-savanna-warm hover:text-burnt-orange-light transition-colors duration-300 group"
          >
            View Species Archive
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              imgId: 'explore-lion-s1t2u3',
              titleId: 'explore-lion-title',
              captionId: 'explore-lion-caption',
              title: 'The Lion Kingdom',
              caption: 'Apex predators of the open plain',
              link: '/species',
            },
            {
              imgId: 'explore-elephant-v4w5x6',
              titleId: 'explore-elephant-title',
              captionId: 'explore-elephant-caption',
              title: 'Elephant Families',
              caption: 'Ancient matriarchs of the savanna',
              link: '/species',
            },
            {
              imgId: 'explore-texture-y7z8a9',
              titleId: 'explore-texture-title',
              captionId: 'explore-texture-caption',
              title: 'Dust & Light',
              caption: 'The textures of the prairie',
              link: '/dust-and-light',
            },
          ].map((item) => (
            <NavLink
              key={item.imgId}
              to={item.link}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm block"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] [${item.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={item.titleId} className="font-serif text-xl font-bold text-savanna-cream mb-1">
                  {item.title}
                </h3>
                <p id={item.captionId} className="font-serif-display text-sm italic text-ochre-pale">
                  {item.caption}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-burnt-orange/20 py-12 px-6 md:px-12 text-center">
        <p className="font-serif text-2xl font-bold text-savanna-cream mb-2">Serengeti Pulse</p>
        <p className="font-serif-display text-sm italic text-savanna-warm/60">
          Documenting the heartbeat of the wild
        </p>
      </footer>
    </div>
  );
}
