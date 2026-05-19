import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ContactSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="contact" ref={containerRef} className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Full-width image with text overlay */}
        <div className="relative overflow-hidden mb-24">
          <img
            alt="Microscopic world contact"
            id="contact-bg-title"
            className="w-full aspect-[16/7] object-cover"
            data-strk-img-id="contact-mc022"
            data-strk-img="[contact-bg-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <span id="contact-bg-title" className="sr-only">Colorful microscopic organisms abstract background</span>
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-6">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
              Join the Exploration
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 max-w-2xl">
              Dive Deeper Into the<br />
              <span className="italic font-normal">MicroCosmos</span>
            </h2>
            <p className="font-body text-white/50 max-w-md leading-relaxed mb-10">
              Subscribe to receive new discoveries, stunning imagery, and the latest research from the world of microscopy.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-0 w-full max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/30 px-6 py-4 font-body text-sm focus:outline-none focus:border-white/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black font-body text-xs tracking-widest uppercase px-8 py-4 hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-xl font-bold tracking-widest uppercase text-white">
            MicroCosmos
          </p>
          <p className="font-body text-xs text-white/30 tracking-widest uppercase">
            Exploring the Invisible World
          </p>
          <p className="font-body text-xs text-white/20">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
