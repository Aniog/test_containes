import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Leaf, Droplets } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HIGHLIGHTS = [
  {
    icon: Microscope,
    title: 'Plant Histology',
    desc: 'Explore the intricate cellular architecture of plant tissues — from meristematic zones to vascular bundles.',
  },
  {
    icon: Droplets,
    title: 'Protist Kingdom',
    desc: 'Observe the astonishing diversity of single-celled eukaryotes: amoebae, ciliates, and flagellates.',
  },
  {
    icon: Leaf,
    title: 'Human Cytology',
    desc: 'Examine the building blocks of human life — epithelial layers, neurons, and circulating blood cells.',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-radiolarian-bg-a1b2c3"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-parchment/30 via-parchment/50 to-parchment" />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="glass-card px-10 py-12 md:px-16 md:py-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-ink-faint mb-4">
              Department of Microscopy &bull; Vol. I
            </p>
            <h1 id="hero-title" className="font-serif text-5xl md:text-7xl font-bold text-ink leading-tight mb-4">
              MicroCosmos
            </h1>
            <p
              id="hero-subtitle"
              className="font-serif italic text-lg md:text-xl text-ink-muted mb-2"
            >
              The Microscopic World
            </p>
            <div className="w-16 h-px bg-ink/20 mx-auto my-6" />
            <p className="font-sans text-sm md:text-base text-ink-light max-w-xl mx-auto leading-relaxed mb-8">
              A curated archive of micrographs, histological plates, and
              cytological observations. Step beyond the limits of unaided vision
              into a cosmos invisible to the naked eye.
            </p>
            <Link
              to="/specimens"
              className="glass-btn inline-flex items-center gap-2 text-ink group"
            >
              <span>Start Observation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-ink-faint mb-3">
            Disciplines of Study
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
            Three Kingdoms Under the Lens
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 group hover:bg-white/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5 text-parchment" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="border-t border-b border-ink/10 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-ink-light leading-relaxed">
            &ldquo;The whole of nature is but a single magnified cell, and the
            microscope is the window through which we may observe its
            architecture.&rdquo;
          </p>
          <p className="font-mono text-xs tracking-wider text-ink-faint mt-6">
            &mdash; ANONYMOUS NATURALIST, 1892
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="glass-card p-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
            Ready to Explore?
          </h2>
          <p className="font-sans text-sm text-ink-muted mb-8 max-w-md mx-auto">
            Browse our curated gallery of digital slides, each annotated with
            specimen data and collector&rsquo;s observations.
          </p>
          <Link
            to="/gallery"
            className="glass-btn inline-flex items-center gap-2 text-ink group"
          >
            <span>Enter the Gallery</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}