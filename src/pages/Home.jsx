import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { projects } from '@/data/projects';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = projects.slice(0, 3);

  return (
    <div ref={containerRef} className="bg-ma-white">
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="home-hero-bg-a1b2c3"
          data-strk-bg="[home-hero-sub] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-ma-ink/60" />
        {/* Extra gradient at bottom to anchor text */}
        <div className="absolute inset-0 bg-gradient-to-t from-ma-ink/80 via-ma-ink/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28 w-full">
          <p
            id="home-hero-sub"
            className="text-xs tracking-ultra uppercase text-white/60 mb-6 font-light"
          >
            Architectural Studio — Tokyo
          </p>
          <h1
            id="home-hero-title"
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-wide max-w-3xl"
          >
            Space as<br />
            <span className="italic">silence.</span>
          </h1>
        </div>
      </section>

      {/* Intro statement */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-36">
        <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-ma-ink leading-relaxed tracking-wide">
          We design spaces that hold their breath —
          where material, light, and emptiness
          are given equal weight.
        </p>
        <div className="mt-12 w-12 h-px bg-ma-wood" />
      </section>

      {/* Featured projects */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-36">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <h2 className="text-xs tracking-ultra uppercase text-ma-ash font-light">
            Selected Work
          </h2>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-ma-concrete hover:text-ma-ink transition-colors duration-400"
          >
            All Projects <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {featured.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block"
            >
              <div className="overflow-hidden aspect-[3/4] bg-ma-paper mb-5">
                <img
                  data-strk-img-id={project.imgId}
                  data-strk-img={`[home-feat-desc-${project.id}] [home-feat-title-${project.id}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
              </div>
              <p
                id={`home-feat-title-${project.id}`}
                className="font-display text-xl font-light text-ma-ink tracking-wide mb-1"
              >
                {project.title}
              </p>
              <p
                id={`home-feat-desc-${project.id}`}
                className="text-xs text-ma-ash tracking-widest uppercase"
              >
                {project.location} — {project.year}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider quote */}
      <section className="border-t border-ma-stone py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="font-display text-xl md:text-2xl font-light italic text-ma-concrete leading-relaxed tracking-wide">
            "Ma is not merely an empty space. It is the pause between notes
            that gives music its meaning."
          </p>
          <p className="mt-6 text-xs tracking-ultra uppercase text-ma-stone">
            — Japanese Aesthetic Principle
          </p>
        </div>
      </section>

      {/* CTA row */}
      <section className="border-t border-ma-stone">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row gap-6 md:gap-0">
          {[
            { to: '/projects', label: 'View Projects', sub: 'Six completed works' },
            { to: '/materials', label: 'Explore Materials', sub: 'Texture & craft' },
            { to: '/philosophy', label: 'Our Philosophy', sub: 'The thinking behind the work' },
          ].map(({ to, label, sub }, i) => (
            <Link
              key={to}
              to={to}
              className={`flex-1 group flex flex-col gap-2 py-6 md:py-0
                ${i > 0 ? 'md:border-l md:border-ma-stone md:pl-10' : ''}
              `}
            >
              <span className="flex items-center gap-3 text-sm font-light text-ma-ink tracking-wide group-hover:text-ma-wood transition-colors duration-400">
                {label}
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </span>
              <span className="text-xs text-ma-ash tracking-wide">{sub}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
