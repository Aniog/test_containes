import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToForm = () => {
    document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-24 px-4">
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          We'd love to hear from you
        </span>
        <h1 id="hero-title" className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Let's Start a Conversation
        </h1>
        <p id="hero-subtitle" className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
          Have a question, idea, or project in mind? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          Get in Touch
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
