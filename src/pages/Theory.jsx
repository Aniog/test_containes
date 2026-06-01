import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { BookOpen, Clock, ChevronRight } from 'lucide-react';

const sections = [
  {
    id: 'wave-particle',
    number: '01',
    heading: 'Wave-Particle Duality',
    subheading: 'The Foundational Paradox',
    body: [
      'At the heart of quantum mechanics lies a profound paradox: matter and energy exhibit properties of both waves and particles simultaneously. This duality, first articulated through the double-slit experiment, reveals that quantum objects do not possess definite properties until the moment of measurement.',
      'The de Broglie hypothesis extended this notion, proposing that all matter — not merely photons — carries an associated wavelength inversely proportional to its momentum. For macroscopic objects, this wavelength is vanishingly small. For electrons, it becomes experimentally significant.',
    ],
    pullQuote: 'The electron is not a thing. It is a tendency — a probability amplitude propagating through possibility space.',
    pullQuoteAttrib: '— Richard Feynman, QED Lectures',
    imgId: 'theory-img-wave-particle-a1b2c3',
    imgTitleId: 'theory-img-title-wave-particle',
    imgDescId: 'theory-img-desc-wave-particle',
    imgTitle: 'Double-slit interference pattern',
    imgDesc: 'Electron diffraction through a double-slit apparatus showing wave interference',
  },
  {
    id: 'uncertainty',
    number: '02',
    heading: 'The Uncertainty Principle',
    subheading: 'Heisenberg\'s Fundamental Limit',
    body: [
      'Werner Heisenberg\'s uncertainty principle establishes a fundamental limit on the precision with which conjugate variables — such as position and momentum — can be simultaneously known. This is not a limitation of measurement technology; it is an intrinsic feature of quantum reality.',
      'Mathematically expressed as ΔxΔp ≥ ℏ/2, the principle implies that the more precisely we determine a particle\'s position, the less precisely we can know its momentum, and vice versa. This relationship emerges directly from the wave nature of quantum states.',
    ],
    pullQuote: 'Not only is the universe stranger than we think, it is stranger than we can think.',
    pullQuoteAttrib: '— Werner Heisenberg',
    imgId: 'theory-img-uncertainty-d4e5f6',
    imgTitleId: 'theory-img-title-uncertainty',
    imgDescId: 'theory-img-desc-uncertainty',
    imgTitle: 'Quantum measurement apparatus',
    imgDesc: 'Precision optical measurement equipment for quantum state determination',
  },
  {
    id: 'entanglement',
    number: '03',
    heading: 'Quantum Entanglement',
    subheading: 'Spooky Action at a Distance',
    body: [
      'Quantum entanglement describes a phenomenon where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently of the others, regardless of the distance separating them.',
      'Einstein famously dismissed this as "spooky action at a distance," believing it implied an incompleteness in quantum theory. Bell\'s theorem and subsequent experiments by Aspect et al. conclusively demonstrated that entanglement is a genuine feature of nature, not a hidden-variable artifact.',
    ],
    pullQuote: 'Entanglement is not a trick of the mathematics. It is the fabric from which spacetime itself may be woven.',
    pullQuoteAttrib: '— Juan Maldacena, ER=EPR Conjecture',
    imgId: 'theory-img-entanglement-g7h8i9',
    imgTitleId: 'theory-img-title-entanglement',
    imgDescId: 'theory-img-desc-entanglement',
    imgTitle: 'Entangled photon source',
    imgDesc: 'Parametric down-conversion crystal generating entangled photon pairs in laboratory',
  },
];

function FullWidthImageBreak({ section }) {
  return (
    <figure className="my-16 -mx-6 md:-mx-10 lg:-mx-20">
      {/* Aspect-ratio box: 16:9 */}
      <div className="img-box w-full" style={{ paddingBottom: '42%' }}>
        <img
          data-strk-img-id={section.imgId}
          data-strk-img={`[${section.imgDescId}] [${section.imgTitleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={section.imgTitle}
          className="transition-transform duration-700"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F9F9F9]/30" />
      </div>
      <figcaption className="px-6 md:px-10 lg:px-20 mt-3 flex items-center gap-2">
        <span
          className="text-xs text-slate-400 italic"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span id={section.imgTitleId} className="font-medium text-slate-500 not-italic">
            {section.imgTitle}
          </span>
          {' — '}
          <span id={section.imgDescId}>{section.imgDesc}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function TheorySection({ section, isLast }) {
  return (
    <section id={section.id} className="mb-20">
      {/* Section number + heading */}
      <div className="flex items-baseline gap-4 mb-6">
        <span
          className="text-xs font-medium text-blue-500 tracking-widest"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          §{section.number}
        </span>
        <div>
          <p
            className="text-sm text-slate-400 uppercase tracking-widest mb-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {section.subheading}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {section.heading}
          </h2>
        </div>
      </div>

      {/* Body paragraphs */}
      <div className="space-y-5 mb-10">
        {section.body.map((para, i) => (
          <p
            key={i}
            className="text-slate-600 text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Pull quote */}
      <blockquote className="my-10 pl-6 border-l-2 border-blue-400">
        <p
          className="text-xl md:text-2xl text-slate-700 leading-relaxed italic mb-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          "{section.pullQuote}"
        </p>
        <cite
          className="text-sm text-slate-400 not-italic"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {section.pullQuoteAttrib}
        </cite>
      </blockquote>

      {/* Full-width image break */}
      <FullWidthImageBreak section={section} />

      {/* Divider */}
      {!isLast && (
        <div className="flex items-center gap-4 mt-4">
          <div className="flex-1 h-px bg-slate-200" />
          <span
            className="text-xs text-slate-300 tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ···
          </span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>
      )}
    </section>
  );
}

export default function Theory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto px-6 md:px-10 py-12 md:py-20">
      {/* Page header */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-12 bg-blue-300" />
          <span
            className="text-xs text-blue-600 tracking-widest uppercase font-medium"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Theory / Reading
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold text-slate-800 leading-none mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Foundations of
          <br />
          <em className="text-blue-600">Quantum</em>
          <br />
          Mechanics
        </h1>

        <p
          className="text-slate-500 text-xl leading-relaxed max-w-xl mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A rigorous introduction to the principles governing matter and energy at the subatomic scale.
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 text-slate-400">
            <BookOpen className="w-4 h-4" />
            <span
              className="text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Dr. Elena Vasquez
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4" />
            <span
              className="text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              18 min read
            </span>
          </div>
          <div className="flex items-center gap-2">
            {['Quantum Mechanics', 'Wave Theory', 'Entanglement'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-slate-100 text-slate-500 text-xs rounded-full border border-slate-200"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Table of contents */}
        <nav className="mt-8 p-5 bg-white rounded-xl border border-slate-200 shadow-sm">
          <p
            className="text-xs text-slate-400 uppercase tracking-widest mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Contents
          </p>
          <ol className="space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span
                    className="text-xs text-slate-300 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    §{s.number}
                  </span>
                  <span className="text-sm font-medium">{s.heading}</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </header>

      {/* Article body */}
      <article>
        {sections.map((section, i) => (
          <TheorySection
            key={section.id}
            section={section}
            isLast={i === sections.length - 1}
          />
        ))}
      </article>

      {/* End matter */}
      <footer className="mt-16 pt-10 border-t border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-xs text-slate-400 uppercase tracking-widest mb-1"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Next in Series
            </p>
            <p
              className="text-lg font-semibold text-slate-700"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Quantum Field Theory & Renormalization
            </p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </footer>
    </div>
  );
}
