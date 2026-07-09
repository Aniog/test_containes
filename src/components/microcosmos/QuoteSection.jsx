import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const QuoteSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="quote-bg-mc027"
        data-strk-bg="[quote-text] microscopic world bacteria cells"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-cosmos-bg/85" />

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <div className="text-cosmos-cyan text-6xl font-grotesk leading-none mb-6 opacity-40">"</div>
        <blockquote id="quote-text" className="font-grotesk text-2xl md:text-4xl font-light text-cosmos-text leading-relaxed mb-8">
          If you could see the microbial world, you would realize that we live in a world of microbes. They are everywhere — in the air, in the water, in the soil, and in us.
        </blockquote>
        <cite className="font-inter text-cosmos-muted text-base not-italic">
          — Carl Woese, Microbiologist & Pioneer of Phylogenetics
        </cite>
      </div>
    </section>
  );
};

export default QuoteSection;
