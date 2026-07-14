import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Now in public beta
          </span>
          <h1 id="hero-title" className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Build something <span className="text-indigo-600">remarkable</span>
          </h1>
          <p id="hero-sub" className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            The all-in-one platform that helps teams ship faster, collaborate better, and grow with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3.5 rounded-lg transition-colors"
            >
              See features
            </a>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg md:max-w-none">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              alt="Platform dashboard preview"
              data-strk-img-id="hero-main-img-x9y8z7"
              data-strk-img="[hero-sub] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
