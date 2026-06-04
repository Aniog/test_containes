import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const migrationPanels = [
  {
    id: 'panel-1',
    titleId: 'panel-1-title',
    subtitleId: 'panel-1-subtitle',
    imgId: 'migration-hero-1-a3f9b2',
    title: 'The Endless Plains',
    subtitle: 'Two million wildebeest move as one — a living river across the Serengeti.',
    stat: '2,000,000',
    statLabel: 'Wildebeest in motion',
  },
  {
    id: 'panel-2',
    titleId: 'panel-2-title',
    subtitleId: 'panel-2-subtitle',
    imgId: 'migration-hero-2-c7d4e1',
    title: 'The Mara Crossing',
    subtitle: 'At the Mara River, survival is measured in seconds. Crocodiles wait. The herd leaps.',
    stat: '800 km',
    statLabel: 'Annual migration route',
  },
  {
    id: 'panel-3',
    titleId: 'panel-3-title',
    subtitleId: 'panel-3-subtitle',
    imgId: 'migration-hero-3-e2a8f5',
    title: 'Golden Hour',
    subtitle: 'As the sun descends, the savanna ignites. Silhouettes of acacia trees pierce the amber sky.',
    stat: '1.5M km²',
    statLabel: 'Serengeti ecosystem',
  },
  {
    id: 'panel-4',
    titleId: 'panel-4-title',
    subtitleId: 'panel-4-subtitle',
    imgId: 'migration-hero-4-b6c3d9',
    title: 'Dust & Thunder',
    subtitle: 'The ground trembles. Dust clouds rise like smoke signals. The migration is ancient, unstoppable.',
    stat: '500,000',
    statLabel: 'Calves born each year',
  },
];

export default function MigrationScroll() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [activePanel, setActivePanel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    setIsVisible(true);
    return cleanup;
  }, []);

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const panelWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: index * panelWidth, behavior: 'smooth' });
    setActivePanel(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const panelWidth = scrollRef.current.offsetWidth;
    const index = Math.round(scrollRef.current.scrollLeft / panelWidth);
    setActivePanel(index);
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Horizontal scroll track */}
      <div
        ref={scrollRef}
        className="horizontal-scroll-container"
        onScroll={handleScroll}
        style={{ height: '100vh' }}
      >
        {migrationPanels.map((panel, i) => (
          <div
            key={panel.id}
            className={`scroll-panel overflow-hidden ${isVisible ? 'dissolve-enter' : 'opacity-0'}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Parallax background image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                data-strk-img-id={panel.imgId}
                data-strk-img={`[${panel.subtitleId}] [${panel.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={panel.title}
                className="parallax-hero w-full h-full object-cover"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-earth/85 via-charcoal-earth/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-earth/70 via-transparent to-charcoal-earth/20" />
              {/* Heat haze overlay */}
              <div className="heat-haze-overlay" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-10 md:px-20 max-w-3xl">
              {/* Panel number */}
              <div className="mb-6 flex items-center gap-3">
                <span className="text-burnt-orange font-sans text-xs tracking-widest uppercase">
                  {String(i + 1).padStart(2, '0')} / {String(migrationPanels.length).padStart(2, '0')}
                </span>
                <div className="h-px w-12 bg-burnt-orange/60" />
              </div>

              <h1
                id={panel.titleId}
                className="font-serif text-5xl md:text-7xl font-bold text-ash leading-tight mb-4"
              >
                {panel.title}
              </h1>

              <p
                id={panel.subtitleId}
                className="font-sans text-lg text-savanna-sand/90 leading-relaxed mb-8 max-w-xl"
              >
                {panel.subtitle}
              </p>

              {/* Stat */}
              <div className="flex items-end gap-4">
                <div>
                  <div className="font-serif text-4xl font-bold text-ember">{panel.stat}</div>
                  <div className="font-sans text-xs tracking-widest uppercase text-savanna-sand/70 mt-1">
                    {panel.statLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => scrollTo(Math.max(0, activePanel - 1))}
        disabled={activePanel === 0}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-savanna-sand/30 bg-charcoal-earth/50 backdrop-blur-sm flex items-center justify-center text-savanna-sand hover:bg-burnt-orange/80 hover:border-burnt-orange transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
        aria-label="Previous panel"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => scrollTo(Math.min(migrationPanels.length - 1, activePanel + 1))}
        disabled={activePanel === migrationPanels.length - 1}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-savanna-sand/30 bg-charcoal-earth/50 backdrop-blur-sm flex items-center justify-center text-savanna-sand hover:bg-burnt-orange/80 hover:border-burnt-orange transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed scroll-indicator"
        aria-label="Next panel"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {migrationPanels.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === activePanel
                ? 'w-8 h-2 bg-burnt-orange'
                : 'w-2 h-2 bg-savanna-sand/40 hover:bg-savanna-sand/70'
            }`}
            aria-label={`Go to panel ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
