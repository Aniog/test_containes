import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CraftsmanshipPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      id: 'craft-step-1',
      title: 'The Wax Model',
      desc: 'Every piece begins as a wax model, carved by hand. This is where the form is decided — where the weight, the curve, the proportion are all worked out before a single gram of gold is used.',
      imgId: 'craft-step1-img-a1b2',
      titleId: 'craft-step1-title',
      descId: 'craft-step1-desc',
    },
    {
      id: 'craft-step-2',
      title: 'Lost-Wax Casting',
      desc: 'The wax model is encased in plaster and heated until the wax burns away, leaving a perfect mold. Molten recycled gold is then poured in. The result is a raw casting that carries the exact form of the original model.',
      imgId: 'craft-step2-img-c3d4',
      titleId: 'craft-step2-title',
      descId: 'craft-step2-desc',
    },
    {
      id: 'craft-step-3',
      title: 'Finishing by Hand',
      desc: 'Each casting is filed, sanded, and polished by hand. This is the most time-consuming part of the process — and the most important. It is where the piece becomes itself.',
      imgId: 'craft-step3-img-e5f6',
      titleId: 'craft-step3-title',
      descId: 'craft-step3-desc',
    },
    {
      id: 'craft-step-4',
      title: 'Stone Setting',
      desc: 'Where stones are used, they are set by hand, one at a time. We work only with conflict-free diamonds and ethically sourced gemstones. Each stone is chosen for its character, not its perfection.',
      imgId: 'craft-step4-img-g7h8',
      titleId: 'craft-step4-title',
      descId: 'craft-step4-desc',
    },
  ];

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20" ref={containerRef}>
      {/* Header */}
      <div className="py-20 md:py-28 px-6 md:px-10 text-center border-b border-cream-dark">
        <p className="label-caps text-gold mb-4">Our Process</p>
        <h1
          className="font-serif text-5xl md:text-7xl text-ink font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Craftsmanship
        </h1>
        <p className="text-muted text-sm font-light mt-6 max-w-md mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          Made slowly. Every piece takes three to four weeks from first sketch to finished form.
        </p>
      </div>

      {/* Process steps */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="space-y-20 md:space-y-28">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <span className="label-caps text-gold/60 mb-3 block" style={{ fontSize: '9px' }}>
                  0{idx + 1}
                </span>
                <h2
                  id={step.titleId}
                  className="font-serif text-3xl md:text-4xl text-ink font-light mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  {step.title}
                </h2>
                <p
                  id={step.descId}
                  className="text-muted text-sm font-light leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {step.desc}
                </p>
              </div>
              <div className={`overflow-hidden bg-cream-dark aspect-[4/3] ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <img
                  data-strk-img-id={step.imgId}
                  data-strk-img={`[${step.descId}] [${step.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={step.title}
                  className="w-full h-full object-cover img-hover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Artisan quote */}
      <div className="py-20 md:py-28 px-6 bg-ink text-cream text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-8 h-px bg-gold mx-auto mb-10" />
          <blockquote
            className="font-serif text-2xl md:text-4xl font-light leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            "We make things slowly because the people who wear them deserve that."
          </blockquote>
          <div className="w-8 h-px bg-gold mx-auto mt-10" />
        </div>
      </div>
    </div>
  );
}
