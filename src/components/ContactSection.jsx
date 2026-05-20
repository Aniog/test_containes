import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ContactSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="contact" ref={containerRef} className="bg-[#0a1628] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: CTA */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#00d4c8] mb-4">
              Join the Community
            </p>
            <h2
              id="contact-title"
              className="text-3xl md:text-5xl font-bold text-slate-50 mb-6 leading-tight"
            >
              Explore the Invisible World With Us
            </h2>
            <p
              id="contact-desc"
              className="text-slate-400 text-lg leading-relaxed mb-8"
            >
              Subscribe to receive the latest discoveries, stunning microscopy images, and scientific insights from the world of the very small.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-[#0d1f3c] border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00d4c8] transition-colors duration-200 text-sm"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-[#00d4c8] text-[#050d1a] font-bold text-sm hover:bg-[#00d4c8]/90 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right: image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              alt="Microscope laboratory scientific research"
              className="w-full h-full object-cover"
              data-strk-img-id="contact-img-mc050"
              data-strk-img="[contact-desc] [contact-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0a1628]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
