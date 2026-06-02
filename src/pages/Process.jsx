import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    id: 'consultation',
    number: '01',
    title: 'Consultation & Design',
    subtitle: 'The conversation that begins everything',
    body: 'Every commission begins with a dialogue. We explore your vision, the occasion, the recipient, and the feeling you want to leave behind. Our designers translate these conversations into typographic compositions that honour the weight of the moment.',
    detail: 'Pencil sketches. Tracing paper. Iterations until the design breathes.',
    imgId: 'process-consult-a1b2c3',
    titleId: 'process-consult-title',
    descId: 'process-consult-desc',
    ratio: '16x9',
    width: '1200',
    layout: 'wide',
  },
  {
    id: 'paper',
    number: '02',
    title: 'Paper Selection',
    subtitle: 'The foundation of every impression',
    body: 'We source papers from mills in Fabriano, Arjowiggins, and Awagami. Each sheet is chosen for its weight, texture, and how it will receive ink. Cotton rag papers for letterpress. Smooth coated stocks for offset. Washi for the extraordinary.',
    detail: 'Weights from 90gsm to 700gsm. Textures from silk to rough laid.',
    imgId: 'process-paper-d4e5f6',
    titleId: 'process-paper-title',
    descId: 'process-paper-desc',
    ratio: '3x4',
    width: '600',
    layout: 'portrait',
  },
  {
    id: 'letterpress',
    number: '03',
    title: 'Letterpress Printing',
    subtitle: 'Ink pressed deep into cotton',
    body: 'Our Heidelberg platen press dates to 1962. Each pass lays ink with a depth and richness that no digital process can replicate. The impression — that slight deboss where type meets paper — is the signature of genuine letterpress.',
    detail: 'Up to 4 colour passes. Impression depth calibrated by hand.',
    imgId: 'process-letterpress-g7h8i9',
    titleId: 'process-letterpress-title',
    descId: 'process-letterpress-desc',
    ratio: '4x3',
    width: '900',
    layout: 'landscape',
  },
  {
    id: 'foil',
    number: '04',
    title: 'Foil Stamping',
    subtitle: 'Gold, silver, copper — applied under heat',
    body: 'A metal die, heated to precise temperature, presses metallic foil onto the paper surface. The result is a mirror-bright finish that catches light differently at every angle. We stock over 40 foil colours including matte, holographic, and pigment foils.',
    detail: 'Temperature: 90–130°C. Dwell time: 0.3–0.8 seconds.',
    imgId: 'process-foil-j1k2l3',
    titleId: 'process-foil-title',
    descId: 'process-foil-desc',
    ratio: '3x2',
    width: '900',
    layout: 'landscape',
  },
  {
    id: 'emboss',
    number: '05',
    title: 'Embossing & Debossing',
    subtitle: 'Dimension without colour',
    body: 'Blind embossing creates relief without ink — pure form emerging from the paper plane. Registered embossing aligns with printed elements for a three-dimensional effect. Each die is custom-machined from brass for longevity and precision.',
    detail: 'Brass dies. Registered to ±0.1mm. Depth up to 2mm.',
    imgId: 'process-emboss-m4n5o6',
    titleId: 'process-emboss-title',
    descId: 'process-emboss-desc',
    ratio: '3x4',
    width: '600',
    layout: 'portrait',
  },
  {
    id: 'finishing',
    number: '06',
    title: 'Finishing & Binding',
    subtitle: 'The final act of making',
    body: 'Edge gilding, hand-deckled edges, Japanese stab binding, Smyth sewing — finishing transforms printed sheets into objects. Each piece is inspected by hand before leaving the studio. We reject anything that does not meet our standard.',
    detail: 'Every piece inspected. Imperfect sheets returned to the press.',
    imgId: 'process-finish-p7q8r9',
    titleId: 'process-finish-title',
    descId: 'process-finish-desc',
    ratio: '16x9',
    width: '1200',
    layout: 'wide',
  },
];

function ProcessStep({ step, index }) {
  const isEven = index % 2 === 0;

  if (step.layout === 'wide') {
    return (
      <div className="mb-24">
        <div className="relative rounded-3xl overflow-hidden aspect-[16/7]">
          <img
            alt={step.title}
            data-strk-img-id={step.imgId}
            data-strk-img={`[${step.descId}] [${step.titleId}] [process-page-title]`}
            data-strk-img-ratio={step.ratio}
            data-strk-img-width={step.width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="font-mono text-xs tracking-[0.4em] text-gold/80 uppercase">
                  {step.number}
                </span>
                <h2
                  id={step.titleId}
                  className="font-display text-4xl md:text-5xl font-light text-paper-light mt-1"
                >
                  {step.title}
                </h2>
                <p className="font-display italic text-lg text-paper-light/70 mt-1">
                  {step.subtitle}
                </p>
              </div>
              <p
                id={step.descId}
                className="hidden md:block text-sm text-paper-light/60 max-w-xs leading-relaxed font-light"
              >
                {step.detail}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 max-w-2xl">
          <p className="text-base text-ink-muted leading-relaxed font-light">
            {step.body}
          </p>
          <p className="mt-4 font-mono text-xs text-ink-faint tracking-widest">
            {step.detail}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${isEven ? '' : 'md:[&>*:first-child]:order-2'}`}>
      <div className={`rounded-2xl overflow-hidden shadow-neu ${step.layout === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
        <img
          alt={step.title}
          data-strk-img-id={step.imgId}
          data-strk-img={`[${step.descId}] [${step.titleId}] [process-page-title]`}
          data-strk-img-ratio={step.ratio}
          data-strk-img-width={step.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-4">
        <span className="font-mono text-xs tracking-[0.4em] text-gold uppercase">
          {step.number}
        </span>
        <h2
          id={step.titleId}
          className="font-display text-4xl md:text-5xl font-light text-ink mt-2 leading-tight"
        >
          {step.title}
        </h2>
        <p className="font-display italic text-lg text-ink-muted mt-1 mb-6">
          {step.subtitle}
        </p>
        <p
          id={step.descId}
          className="text-base text-ink-muted leading-relaxed font-light mb-6"
        >
          {step.body}
        </p>
        <div className="pt-6 border-t border-ink/10">
          <p className="font-mono text-xs text-ink-faint tracking-widest">
            {step.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-paper min-h-screen">
      {/* Header */}
      <section className="pt-16 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-4">
            Craft
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1
              id="process-page-title"
              className="font-display text-6xl md:text-7xl font-light text-ink leading-none"
            >
              The Process
            </h1>
            <p className="text-sm text-ink-muted max-w-xs leading-relaxed font-light">
              Six stages. Each one essential. None of them rushed.
            </p>
          </div>
        </div>
      </section>

      {/* Step navigator */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(i)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono tracking-widest uppercase transition-all duration-200 ${
                  activeStep === i
                    ? 'bg-paper shadow-neu-pressed text-ink'
                    : 'bg-paper shadow-neu-sm text-ink-muted hover:text-ink'
                }`}
              >
                <span className="text-gold">{step.number}</span>
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All steps */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <ProcessStep key={step.id} step={step} index={i} />
          ))}
        </div>
      </section>

      {/* Materials note */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-paper shadow-neu-lg p-10 md:p-14">
            <p className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-6">
              Materials
            </p>
            <h2 className="font-display text-4xl font-light text-ink mb-6">
              Sourced with intention
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Papers', value: 'Fabriano, Arjowiggins, Awagami, Crane & Co.' },
                { label: 'Inks', value: 'Van Son rubber-based, Pantone-matched, custom mixed.' },
                { label: 'Foils', value: 'Crown Roll Leaf, Kurz Luxor, Infinity foils.' },
              ].map(({ label, value }) => (
                <div key={label} className="border-t border-ink/10 pt-5">
                  <p className="font-mono text-xs tracking-widest text-gold uppercase mb-2">{label}</p>
                  <p className="text-sm text-ink-muted leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
