import { useEffect, useRef } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const upcoming = [
  {
    id: 'cs-1',
    titleId: 'cs-title-1',
    genreId: 'cs-genre-1',
    title: 'Chinatown',
    genre: 'Neo-Noir',
    director: 'Roman Polanski',
    year: '1974',
    opens: 'June 14',
    description: 'A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption, and murder.',
    featured: true,
  },
  {
    id: 'cs-2',
    titleId: 'cs-title-2',
    genreId: 'cs-genre-2',
    title: 'Blade Runner',
    genre: 'Sci-Fi Noir',
    director: 'Ridley Scott',
    year: '1982',
    opens: 'June 21',
    description: 'A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth.',
    featured: false,
  },
  {
    id: 'cs-3',
    titleId: 'cs-title-3',
    genreId: 'cs-genre-3',
    title: 'L.A. Confidential',
    genre: 'Crime Noir',
    director: 'Curtis Hanson',
    year: '1997',
    opens: 'June 28',
    description: 'As corruption grows in 1950s Los Angeles, three policemen investigate a series of murders.',
    featured: false,
  },
];

export default function ComingSoonSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const [featured, ...rest] = upcoming;

  return (
    <section id="coming-soon" ref={containerRef} className="bg-cinema-void py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-cinema-white/30" />
              <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-cinema-mist">
                Upcoming
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light tracking-wider text-cinema-white">
              Coming Soon
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-cinema-silver hover:text-cinema-white transition-colors duration-300 group"
          >
            Full Calendar
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Featured Film */}
        <div className="grid lg:grid-cols-2 gap-0 mb-16 group cursor-pointer">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[16/9] lg:aspect-auto lg:min-h-[480px] bg-cinema-charcoal">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt={featured.title}
              className="w-full h-full object-cover cinema-img group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id={`featured-${featured.id}-7x2m`}
              data-strk-img={`[${featured.genreId}] [${featured.titleId}] cinematic film still dramatic`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cinema-void/60 hidden lg:block" />
            <div className="absolute top-4 left-4">
              <span className="bg-cinema-white text-cinema-black text-[8px] font-sans font-semibold tracking-[0.15em] uppercase px-3 py-1.5">
                Featured
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="bg-cinema-charcoal p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-3.5 h-3.5 text-cinema-gold" />
              <span className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-cinema-gold">
                Opens {featured.opens}
              </span>
            </div>
            <span id={featured.genreId} className="text-[9px] font-sans font-medium tracking-[0.2em] uppercase text-cinema-silver mb-3 block">
              {featured.genre}
            </span>
            <h3 id={featured.titleId} className="font-display text-4xl lg:text-5xl font-light tracking-wide text-cinema-white mb-4 leading-tight">
              {featured.title}
            </h3>
            <p className="text-[10px] font-sans text-cinema-silver tracking-wide mb-6">
              {featured.director} · {featured.year}
            </p>
            <p className="text-sm font-sans font-light text-cinema-smoke leading-relaxed mb-8 max-w-sm">
              {featured.description}
            </p>
            <div className="flex gap-4">
              <button className="border border-cinema-white text-cinema-white text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-6 py-3 hover:bg-cinema-white hover:text-cinema-black transition-all duration-300">
                Pre-Book
              </button>
              <button className="text-cinema-silver text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-6 py-3 hover:text-cinema-white transition-colors duration-300">
                Trailer
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming List */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((film) => (
            <article key={film.id} className="group flex gap-5 cursor-pointer p-5 border border-white/5 hover:border-white/15 transition-colors duration-300">
              {/* Poster thumbnail */}
              <div className="relative flex-shrink-0 w-20 overflow-hidden bg-cinema-ash aspect-[2/3]">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                  alt={film.title}
                  className="w-full h-full object-cover cinema-img group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`upcoming-${film.id}-4p8q`}
                  data-strk-img={`[${film.genreId}] [${film.titleId}] film poster noir`}
                  data-strk-img-ratio="2x3"
                  data-strk-img-width="200"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-3 h-3 text-cinema-silver flex-shrink-0" />
                  <span className="text-[9px] font-sans tracking-[0.15em] uppercase text-cinema-silver">
                    Opens {film.opens}
                  </span>
                </div>
                <span id={film.genreId} className="text-[9px] font-sans font-medium tracking-[0.15em] uppercase text-cinema-mist mb-1.5 block">
                  {film.genre}
                </span>
                <h4 id={film.titleId} className="font-display text-xl font-light tracking-wide text-cinema-white group-hover:text-cinema-pearl transition-colors duration-200 leading-tight mb-1 truncate">
                  {film.title}
                </h4>
                <p className="text-[10px] font-sans text-cinema-silver">
                  {film.director} · {film.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
