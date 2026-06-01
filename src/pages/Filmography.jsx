import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const FALLBACK_SRC = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 9'%3E%3Crect width='21' height='9' fill='%231a1a1a'/%3E%3C/svg%3E";
const handleImgError = (e) => { e.currentTarget.src = FALLBACK_SRC; };

const films = [
  {
    id: 'nocturne-city',
    year: '2024',
    title: 'Nocturne City',
    director: 'Elena Vasquez',
    role: 'Director of Photography',
    genre: 'Neo-Noir',
    description: 'A rain-soaked urban thriller shot entirely on anamorphic lenses, exploring the fractured identity of a city at night.',
    awards: 'Best Cinematography — Venice Film Festival',
    titleId: 'film-nocturne-city-title',
    descId: 'film-nocturne-city-desc',
    imgId: 'film-nocturne-city-img-8f2a9c',
  },
  {
    id: 'the-last-meridian',
    year: '2023',
    title: 'The Last Meridian',
    director: 'James Okafor',
    role: 'Director of Photography',
    genre: 'Epic Drama',
    description: 'Sweeping landscapes of the Mongolian steppe captured in natural light, following a nomadic family across three generations.',
    awards: 'Nominated — Academy Award for Best Cinematography',
    titleId: 'film-the-last-meridian-title',
    descId: 'film-the-last-meridian-desc',
    imgId: 'film-the-last-meridian-img-3b7d1e',
  },
  {
    id: 'pale-architecture',
    year: '2023',
    title: 'Pale Architecture',
    director: 'Mia Fontaine',
    role: 'Director of Photography',
    genre: 'Psychological Thriller',
    description: 'Brutalist interiors and clinical whites create a suffocating visual language for this psychological study of obsession.',
    awards: 'Best Cinematography — Cannes Un Certain Regard',
    titleId: 'film-pale-architecture-title',
    descId: 'film-pale-architecture-desc',
    imgId: 'film-pale-architecture-img-9c4f2a',
  },
  {
    id: 'salt-and-silence',
    year: '2022',
    title: 'Salt & Silence',
    director: 'Ryo Tanaka',
    role: 'Director of Photography',
    genre: 'Drama',
    description: 'A meditative portrait of coastal Japan, where the sea becomes a character — shot on 16mm film for a tactile, intimate quality.',
    awards: 'BAFTA Award — Outstanding British Film',
    titleId: 'film-salt-and-silence-title',
    descId: 'film-salt-and-silence-desc',
    imgId: 'film-salt-and-silence-img-5e8b3c',
  },
  {
    id: 'golden-hour-protocol',
    year: '2022',
    title: 'Golden Hour Protocol',
    director: 'Sofia Reyes',
    role: 'Director of Photography',
    genre: 'Sci-Fi',
    description: 'Warm amber tones and long shadows define this near-future dystopia, where the sun never fully rises.',
    awards: 'Saturn Award — Best Cinematography',
    titleId: 'film-golden-hour-protocol-title',
    descId: 'film-golden-hour-protocol-desc',
    imgId: 'film-golden-hour-protocol-img-2d6a7f',
  },
  {
    id: 'the-weight-of-water',
    year: '2021',
    title: 'The Weight of Water',
    director: 'Amara Diallo',
    role: 'Director of Photography',
    genre: 'Documentary',
    description: 'An immersive documentary following deep-sea researchers, blending underwater cinematography with intimate human portraits.',
    awards: 'Sundance Grand Jury Prize — Documentary',
    titleId: 'film-the-weight-of-water-title',
    descId: 'film-the-weight-of-water-desc',
    imgId: 'film-the-weight-of-water-img-7a1c9d',
  },
];

function FilmItem({ film, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Full-screen overlay on hover */}
      <div
        className={`fixed inset-0 z-30 transition-all duration-700 ${
          hovered ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      >
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          data-strk-img-id={`${film.imgId}-fullscreen`}
          data-strk-img={`[${film.descId}] [${film.titleId}]`}
          data-strk-img-ratio="21/9"
          data-strk-img-width="1920"
          className="w-full h-full object-cover"
          loading="eager"
          onError={handleImgError}
        />
        <div className="absolute inset-0 bg-cinema-black/60" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="font-body text-gold text-xs tracking-[0.3em] uppercase mb-2">{film.genre}</p>
          <h2 className="font-display text-6xl lg:text-8xl font-light text-cinema-white leading-none">
            {film.title}
          </h2>
        </div>
      </div>

      {/* Film list item */}
      <article
        className="group relative border-b border-cinema-surface last:border-b-0 cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setExpanded((v) => !v)}
      >
        {/* Index + meta row */}
        <div className="flex items-start gap-6 lg:gap-10 py-8 lg:py-10 px-0">
          <span className="font-body text-cinema-muted text-xs tracking-[0.3em] pt-1 w-8 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="flex-1 min-w-0">
            {/* Title row */}
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-2 lg:gap-6 mb-4">
              <h2
                id={film.titleId}
                className="font-display text-3xl lg:text-5xl font-light text-cinema-white group-hover:text-gold transition-colors duration-500 leading-tight"
              >
                {film.title}
              </h2>
              <div className="flex items-center gap-6 shrink-0">
                <span className="font-body text-cinema-muted text-xs tracking-[0.25em] uppercase">{film.year}</span>
                <span className="font-body text-cinema-grey text-xs tracking-[0.2em] uppercase hidden lg:block">{film.genre}</span>
              </div>
            </div>

            {/* 21:9 image container */}
            <div className="relative aspect-[21/9] overflow-hidden bg-cinema-dark mb-4">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={film.title}
                data-strk-img-id={film.imgId}
                data-strk-img={`[${film.descId}] [${film.titleId}]`}
                data-strk-img-ratio="21/9"
                data-strk-img-width="1400"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading={index < 2 ? 'eager' : 'lazy'}
                onError={handleImgError}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cinema-black/50 via-transparent to-transparent" />
              {/* Gold border on hover */}
              <div className={`absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-700`} />
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <div>
                <span className="font-body text-cinema-muted text-[10px] tracking-[0.3em] uppercase block mb-0.5">Director</span>
                <span className="font-body text-cinema-grey text-sm">{film.director}</span>
              </div>
              <div>
                <span className="font-body text-cinema-muted text-[10px] tracking-[0.3em] uppercase block mb-0.5">Role</span>
                <span className="font-body text-cinema-grey text-sm">{film.role}</span>
              </div>
              <div className="hidden lg:block">
                <span className="font-body text-cinema-muted text-[10px] tracking-[0.3em] uppercase block mb-0.5">Recognition</span>
                <span className="font-body text-gold-muted text-sm">{film.awards}</span>
              </div>
            </div>

            {/* Expandable description */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded ? 'max-h-40 mt-4 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p
                id={film.descId}
                className="font-body text-cinema-grey text-sm leading-relaxed border-l-2 border-gold/40 pl-4"
              >
                {film.description}
              </p>
              <p className="font-body text-gold-muted text-xs tracking-[0.2em] uppercase mt-3 lg:hidden">
                {film.awards}
              </p>
            </div>
            {/* Hidden desc for image query even when collapsed */}
            <span id={film.descId} className="sr-only">{film.description}</span>
          </div>
        </div>
      </article>
    </>
  );
}

export default function Filmography() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-cinema-black">
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="font-body text-gold text-xs tracking-[0.4em] uppercase mb-4">
              Selected Works
            </p>
            <h1 className="font-display text-7xl lg:text-[10rem] font-light text-cinema-white leading-none tracking-tight">
              Filmography
            </h1>
          </div>
          <p className="font-body text-cinema-grey text-sm leading-relaxed max-w-xs lg:max-w-sm lg:text-right">
            A curated selection of feature films, documentaries, and short works spanning over a decade of visual storytelling.
          </p>
        </div>
        {/* Gold divider */}
        <div className="mt-12 h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />
      </section>

      {/* Film list */}
      <section className="px-6 lg:px-12 max-w-screen-2xl mx-auto pb-24">
        {films.map((film, index) => (
          <FilmItem key={film.id} film={film} index={index} />
        ))}
      </section>
    </div>
  );
}
