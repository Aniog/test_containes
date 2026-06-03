import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ContactForm from '@/components/contact/ContactForm';

function ContactHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="contact-hero-bg-5e9f2a"
        data-strk-bg="[contact-hero-desc] [contact-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-[#0B0F19]/88" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0B0F19]" />

      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-amber-400">Contact & Feedback</span>
        <h1 id="contact-hero-title" className="text-5xl md:text-6xl font-light text-white mt-4 mb-6 leading-tight">
          Reach Across
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-amber-400">
            the Cosmos
          </span>
        </h1>
        <p id="contact-hero-desc" className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          Every great discovery begins with a question. Send yours — 
          your curiosity is the most powerful telescope of all.
        </p>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
