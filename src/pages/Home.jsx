import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    id: 'letterpress',
    title: 'Letterpress',
    desc: 'Deep impression printing on cotton and handmade papers.',
    imgId: 'home-svc-letterpress-a1b2c3',
    titleId: 'home-svc-letterpress-title',
    descId: 'home-svc-letterpress-desc',
  },
  {
    id: 'foil',
    title: 'Foil Stamping',
    desc: 'Gold, silver, and copper foil applied under heat and pressure.',
    imgId: 'home-svc-foil-d4e5f6',
    titleId: 'home-svc-foil-title',
    descId: 'home-svc-foil-desc',
  },
  {
    id: 'emboss',
    title: 'Embossing',
    desc: 'Blind and registered embossing for tactile dimension.',
    imgId: 'home-svc-emboss-g7h8i9',
    titleId: 'home-svc-emboss-title',
    descId: 'home-svc-emboss-desc',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-paper">
      {/* Hero */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="home-hero-bg-x1y2z3"
          data-strk-bg="[home-hero-subtitle] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p
            id="home-hero-eyebrow"
            className="font-mono text-xs tracking-[0.4em] text-ink-faint uppercase mb-8"
          >
            Fine Stationery & Print Studio
          </p>
          <h1
            id="home-hero-title"
            className="font-display text-7xl md:text-9xl font-light text-ink leading-none tracking-tight mb-6"
          >
            PULP
          </h1>
          <p
            id="home-hero-subtitle"
            className="font-display text-xl md:text-2xl font-light italic text-ink-muted max-w-xl mx-auto leading-relaxed mb-12"
          >
            Where paper becomes an experience. Handcrafted print for those who believe in the permanence of beautiful things.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/archive"
              className="px-8 py-3.5 rounded-2xl bg-paper shadow-neu text-ink text-xs font-mono tracking-widest uppercase hover:shadow-neu-pressed transition-all duration-200 active:shadow-neu-pressed"
            >
              View Archive
            </Link>
            <Link
              to="/process"
              className="px-8 py-3.5 rounded-2xl bg-paper shadow-neu-sm text-ink-muted text-xs font-mono tracking-widest uppercase hover:text-ink hover:shadow-neu transition-all duration-200"
            >
              Our Process
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-xs tracking-widest text-ink-faint uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-ink-faint to-transparent" />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
      </div>

      {/* Services */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-3">
                Craft
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-light text-ink leading-tight">
                The Art of<br />
                <em>Impression</em>
              </h2>
            </div>
            <p className="text-sm text-ink-muted max-w-xs leading-relaxed font-light">
              Every piece we produce is a collaboration between artisan skill and the finest materials sourced from mills across Europe and Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                className="rounded-2xl bg-paper shadow-neu overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    alt={svc.title}
                    data-strk-img-id={svc.imgId}
                    data-strk-img={`[${svc.descId}] [${svc.titleId}] [home-hero-eyebrow]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={svc.titleId}
                    className="font-display text-2xl font-light text-ink mb-2"
                  >
                    {svc.title}
                  </h3>
                  <p
                    id={svc.descId}
                    className="text-sm text-ink-muted leading-relaxed"
                  >
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-ink/15 to-transparent" />
      </div>

      {/* Philosophy */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-8">
            Philosophy
          </p>
          <blockquote className="font-display text-3xl md:text-4xl font-light italic text-ink leading-relaxed mb-8">
            "Paper is not a medium. It is a message — one that says: this was worth making by hand."
          </blockquote>
          <p className="text-sm font-mono text-ink-faint tracking-widest">
            — PULP Studio Manifesto
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-paper shadow-neu-lg p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-ink mb-3">
                Begin a Commission
              </h2>
              <p className="text-sm text-ink-muted max-w-sm leading-relaxed">
                Every project starts with a conversation. Tell us about your vision.
              </p>
            </div>
            <a
              href="mailto:hello@pulpstudio.com"
              className="flex-shrink-0 px-10 py-4 rounded-2xl bg-paper shadow-neu text-ink text-xs font-mono tracking-widest uppercase hover:shadow-neu-pressed transition-all duration-200 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
