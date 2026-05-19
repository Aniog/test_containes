import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CallToAction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="cta-bg-q7r8s9"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
      />
      <div className="absolute inset-0 bg-green-forest/80" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p id="cta-subtitle" className="text-green-leaf font-sans font-semibold tracking-widest uppercase text-sm mb-4">
          Your adventure begins here
        </p>
        <h2 id="cta-title" className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Explore the Natural World?
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Join thousands of nature lovers who have discovered the transformative power of
          spending time in the wild. Your journey starts with a single step.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="bg-white text-green-forest hover:bg-cream font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Explore the Gallery
          </a>
          <a
            href="#contact"
            className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-colors text-base"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
