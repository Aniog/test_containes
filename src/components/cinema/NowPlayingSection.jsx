import { useEffect, useRef } from 'react';
import { Star, Clock, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const movies = [
  {
    id: 'movie-1',
    titleId: 'np-title-1',
    genreId: 'np-genre-1',
    title: 'The Maltese Falcon',
    genre: 'Noir Thriller',
    year: '1941',
    duration: '1h 40m',
    rating: '9.1',
    director: 'John Huston',
    badge: 'Classic',
  },
  {
    id: 'movie-2',
    titleId: 'np-title-2',
    genreId: 'np-genre-2',
    title: 'Double Indemnity',
    genre: 'Crime Drama',
    year: '1944',
    duration: '1h 47m',
    rating: '8.7',
    director: 'Billy Wilder',
    badge: 'Restored',
  },
  {
    id: 'movie-3',
    titleId: 'np-title-3',
    genreId: 'np-genre-3',
    title: 'Sunset Boulevard',
    genre: 'Noir Drama',
    year: '1950',
    duration: '1h 50m',
    rating: '8.9',
    director: 'Billy Wilder',
    badge: 'Featured',
  },
  {
    id: 'movie-4',
    titleId: 'np-title-4',
    genreId: 'np-genre-4',
    title: 'Laura',
    genre: 'Mystery',
    year: '1944',
    duration: '1h 28m',
    rating: '8.2',
    director: 'Otto Preminger',
    badge: null,
  },
  {
    id: 'movie-5',
    titleId: 'np-title-5',
    genreId: 'np-genre-5',
    title: 'The Third Man',
    genre: 'Thriller',
    year: '1949',
    duration: '1h 44m',
    rating: '8.8',
    director: 'Carol Reed',
    badge: 'Sold Out',
  },
  {
    id: 'movie-6',
    titleId: 'np-title-6',
    genreId: 'np-genre-6',
    title: 'Notorious',
    genre: 'Spy Thriller',
    year: '1946',
    duration: '1h 41m',
    rating: '8.4',
    director: 'Alfred Hitchcock',
    badge: null,
  },
  {
    id: 'movie-7',
    titleId: 'np-title-7',
    genreId: 'np-genre-7',
    title: 'Out of the Past',
    genre: 'Noir',
    year: '1947',
    duration: '1h 37m',
    rating: '8.1',
    director: 'Jacques Tourneur',
    badge: null,
  },
  {
    id: 'movie-8',
    titleId: 'np-title-8',
    genreId: 'np-genre-8',
    title: 'Touch of Evil',
    genre: 'Crime Noir',
    year: '1958',
    duration: '1h 35m',
    rating: '8.6',
    director: 'Orson Welles',
    badge: 'Director\'s Cut',
  },
];

function MovieCard({ movie }) {
  return (
    <article className="group cursor-pointer">
      {/* Poster */}
      <div className="relative overflow-hidden aspect-[2/3] bg-cinema-charcoal mb-4">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
          alt={movie.title}
          className="w-full h-full object-cover cinema-img group-hover:scale-105 transition-transform duration-700"
          data-strk-img-id={`poster-${movie.id}-9f3k`}
          data-strk-img={`[${movie.genreId}] [${movie.titleId}] classic noir film poster`}
          data-strk-img-ratio="2x3"
          data-strk-img-width="400"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-cinema-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
          <button className="border border-cinema-white text-cinema-white text-[9px] font-sans font-medium tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-cinema-white hover:text-cinema-black transition-colors duration-200">
            Book Now
          </button>
          <button className="text-cinema-smoke text-[9px] font-sans tracking-[0.15em] uppercase hover:text-cinema-white transition-colors duration-200">
            More Info
          </button>
        </div>

        {/* Badge */}
        {movie.badge && (
          <div className={`absolute top-3 left-3 text-[8px] font-sans font-semibold tracking-[0.15em] uppercase px-2.5 py-1 ${
            movie.badge === 'Sold Out'
              ? 'bg-cinema-ash text-cinema-smoke'
              : movie.badge === 'Featured'
              ? 'bg-cinema-white text-cinema-black'
              : 'bg-cinema-gold text-cinema-black'
          }`}>
            {movie.badge}
          </div>
        )}

        {/* Rating */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-cinema-black/80 px-2 py-1">
          <Star className="w-2.5 h-2.5 text-cinema-gold fill-cinema-gold" />
          <span className="text-[9px] font-sans font-medium text-cinema-white">{movie.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span id={movie.genreId} className="text-[9px] font-sans font-medium tracking-[0.15em] uppercase text-cinema-silver">
            {movie.genre}
          </span>
          <div className="flex items-center gap-1 text-cinema-silver">
            <Clock className="w-2.5 h-2.5" />
            <span className="text-[9px] font-sans">{movie.duration}</span>
          </div>
        </div>
        <h3 id={movie.titleId} className="font-display text-lg font-light tracking-wide text-cinema-white group-hover:text-cinema-pearl transition-colors duration-200 leading-tight mb-1">
          {movie.title}
        </h3>
        <p className="text-[10px] font-sans text-cinema-silver tracking-wide">
          {movie.director} · {movie.year}
        </p>
      </div>
    </article>
  );
}

export default function NowPlayingSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="now-playing" ref={containerRef} className="bg-cinema-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-cinema-gold" />
              <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-cinema-gold">
                On Screen
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-light tracking-wider text-cinema-white">
              Now Playing
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-cinema-silver hover:text-cinema-white transition-colors duration-300 group"
          >
            Full Programme
            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-white/5" />
      </div>
    </section>
  );
}
