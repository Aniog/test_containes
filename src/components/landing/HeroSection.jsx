import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-32 pb-24 px-4"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-100 rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            Simple &amp; Powerful
          </span>
          <h1
            id="hero-title"
            className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            Connect with us,{' '}
            <span className="text-indigo-600">we'd love to hear from you</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-xl text-slate-600 mb-8 leading-relaxed"
          >
            Whether you have a question, a project idea, or just want to say
            hello — drop us a message and we'll get back to you promptly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Get in Touch
            </a>
            <Link
              to="/contacts"
              className="border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View Contacts
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl">
          <img
            data-strk-img-id="hero-main-img-a1b2c3"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
