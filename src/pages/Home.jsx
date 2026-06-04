import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Leaf, Dna } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background – B&W micrograph */}
        <div className="absolute inset-0">
          <img
            data-strk-img-id="hero-micrograph-bw-8a3f1c"
            data-strk-img="[hero-hidden-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.95)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-parchment/40 via-transparent to-parchment/90" />
          <span id="hero-hidden-title" className="sr-only">Radiolarian diatom microscopic skeleton black and white high contrast</span>
        </div>

        {/* Glassmorphism Card */}
        <div className="relative z-10 px-6 text-center max-w-2xl mx-auto">
          <div className="glass-strong rounded-2xl px-10 py-14 md:px-16 md:py-16 shadow-2xl shadow-black/5">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-charcoal-muted mb-4">
              An Educational Platform
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink mb-6 leading-none">
              MicroCosmos
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-charcoal mb-3">
              The Microscopic World
            </p>
            <p className="font-sans text-sm text-charcoal-muted leading-relaxed max-w-md mx-auto mb-10">
              Explore the hidden architecture of life through the lens of
              vintage microscopy. A curated collection of digital specimens,
              laboratory observations, and scientific inquiry.
            </p>
            <Link
              to="/specimens"
              className="inline-flex items-center gap-2 px-8 py-3 glass rounded-full font-sans text-sm font-medium text-ink hover:bg-white/40 transition-all duration-300 group"
            >
              <span>Start Observation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-5 h-8 rounded-full border border-charcoal/30 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-charcoal/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 parchment-texture">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-ink mb-16">
            The Art of Observation
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Microscope,
                title: 'Digital Specimens',
                desc: 'High-resolution micrographs captured at varying magnifications, presented as archival-quality digital slides.',
              },
              {
                icon: Leaf,
                title: 'Histological Studies',
                desc: 'Comprehensive breakdowns of plant histology, protist diversity, and human cytology from our curated collection.',
              },
              {
                icon: Dna,
                title: 'Scientific Rigour',
                desc: 'Every specimen catalogued with taxonomic precision, magnification data, and collector\'s field notes.',
              },
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full glass flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-ink" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 bg-parchment-dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-ink mb-4">
            Ready to Begin Your Exploration?
          </h2>
          <p className="font-sans text-sm text-charcoal-muted mb-8">
            Step into the laboratory and discover a universe invisible to the
            naked eye.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 glass rounded-full font-sans text-sm font-medium text-ink hover:bg-white/40 transition-all duration-300 group"
          >
            <span>Browse the Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}