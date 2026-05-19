import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const QuoteSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Background image */}
      <span id="quote-bg-title" className="sr-only">Abstract microscopic biology cells colorful</span>
      <div
        className="absolute inset-0"
        data-strk-bg-id="quote-bg-9a1c3f"
        data-strk-bg="[quote-bg-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-5xl md:text-6xl font-black text-white leading-tight mb-8">
          "The universe is not only stranger than we suppose, but stranger than we can suppose."
        </p>
        <p className="text-neutral-400 text-lg">— J.B.S. Haldane</p>
      </div>
    </section>
  );
};

export default QuoteSection;
