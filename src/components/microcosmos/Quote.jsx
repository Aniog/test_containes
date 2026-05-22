import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Quote = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gray-950"
        data-strk-bg-id="quote-bg-q9r8s7"
        data-strk-bg="[quote-text] [quote-author]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-cyan-400 text-5xl font-black mb-6 leading-none">"</p>
        <blockquote
          id="quote-text"
          className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8 italic"
        >
          The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff — and so are the microbes.
        </blockquote>
        <cite id="quote-author" className="text-gray-400 text-sm uppercase tracking-widest not-italic">
          — Inspired by Carl Sagan
        </cite>
      </div>
    </section>
  );
};

export default Quote;
