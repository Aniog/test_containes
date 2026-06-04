import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const facts = [
  { value: '1.5M km²', label: 'Ecosystem Area' },
  { value: '500+', label: 'Bird Species' },
  { value: '70+', label: 'Large Mammal Species' },
  { value: '3,000+', label: 'Lion Population' },
];

export default function HomeIntro() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-charcoal-earth py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro text */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-burnt-orange" />
              <span className="font-sans text-xs tracking-widest uppercase text-burnt-orange">
                East Africa's Heartbeat
              </span>
            </div>
            <h2
              id="intro-title"
              className="font-serif text-4xl md:text-5xl font-bold text-ash leading-tight mb-6"
            >
              Where the Earth Still Breathes Wild
            </h2>
            <p
              id="intro-desc"
              className="font-sans text-savanna-sand/80 text-lg leading-relaxed mb-8"
            >
              The Serengeti is not merely a place — it is a pulse. A rhythm of predator and prey,
              of drought and flood, of life endlessly renewing itself across an ocean of golden grass.
              Here, the ancient drama of survival plays out under skies that have witnessed it all.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/species"
                className="inline-flex items-center gap-2 bg-burnt-orange hover:bg-ember text-ash font-sans text-sm tracking-wider uppercase px-6 py-3 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(194,84,26,0.4)]"
              >
                Explore Species <ArrowRight size={16} />
              </Link>
              <Link
                to="/dust-and-light"
                className="inline-flex items-center gap-2 border border-savanna-sand/40 text-savanna-sand hover:border-burnt-orange hover:text-ember font-sans text-sm tracking-wider uppercase px-6 py-3 transition-all duration-300"
              >
                View Gallery <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Feature image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="intro-feature-img-9f3c7a"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Serengeti landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-burnt-orange/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-burnt-orange via-deep-ochre to-acacia-green" />
          </div>
        </div>

        {/* Stats row */}
        <div className="border-t border-savanna-sand/10 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facts.map((fact, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-ember mb-2">
                  {fact.value}
                </div>
                <div className="font-sans text-xs tracking-widest uppercase text-savanna-sand/60">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
