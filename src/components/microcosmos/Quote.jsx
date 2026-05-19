import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Quote = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-28 md:py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="quote-bg-7g8h9i"
        data-strk-bg="[quote-text] microscopic world nature"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050d1a]/75" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="text-5xl text-cyan-400/40 font-black mb-6 leading-none">"</div>
        <blockquote
          id="quote-text"
          className="text-2xl md:text-4xl font-light text-sky-50 leading-relaxed mb-8 italic"
        >
          The world is full of magical things patiently waiting for our wits to grow sharper.
        </blockquote>
        <cite className="text-cyan-400 font-semibold text-sm tracking-widest uppercase not-italic">
          — Bertrand Russell
        </cite>
      </div>
    </section>
  );
};

export default Quote;
