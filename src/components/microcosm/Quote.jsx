import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Quote = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="quote-bg-mc030"
        data-strk-bg="[quote-text] [quote-section-label]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050a14]/85" />

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <p id="quote-section-label" className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-8">
          Microscopic Universe
        </p>
        <svg className="w-12 h-12 text-cyan-400/40 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote id="quote-text" className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8 italic">
          "To see a World in a Grain of Sand, and a Heaven in a Wild Flower, hold Infinity in the
          palm of your hand, and Eternity in an hour."
        </blockquote>
        <cite className="text-slate-400 text-lg not-italic">— William Blake, <em>Auguries of Innocence</em></cite>
      </div>
    </section>
  );
};

export default Quote;
