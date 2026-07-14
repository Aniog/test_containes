import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Simple &amp; Effective
            </span>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Connect with us,{' '}
              <span className="text-indigo-600">we'd love to hear</span> from you
            </h1>
            <p
              id="hero-subheading"
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Whether you have a question, a project idea, or just want to say hello —
              drop us a message and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send a Message
              </a>
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                View Contacts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-xl">
            <img
              alt="Team collaboration"
              data-strk-img-id="hero-main-img-a3f9b2"
              data-strk-img="[hero-subheading] [hero-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
