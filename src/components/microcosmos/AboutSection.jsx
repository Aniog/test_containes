import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Twitter, Instagram, Youtube } from 'lucide-react';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* About content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Mission
            </p>
            <h2
              id="about-title"
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Bringing the Invisible World to Life
            </h2>
            <p id="about-desc" className="text-gray-400 text-lg leading-relaxed mb-6">
              MicroCosmos is a science communication project dedicated to making the microscopic world accessible, beautiful, and awe-inspiring for everyone. We collaborate with researchers, photographers, and educators worldwide.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Every image, every story, every discovery we share is a reminder that the universe's greatest wonders are often too small to see — but never too small to matter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold px-6 py-3 rounded-full transition-colors text-sm">
                Our Research
              </a>
              <a href="#" className="border border-gray-700 hover:border-teal-500 text-gray-300 hover:text-teal-400 px-6 py-3 rounded-full transition-colors text-sm">
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              data-strk-img-id="about-img-mc001"
              data-strk-img="[about-desc] [about-title] scientist microscope laboratory"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Scientist at microscope"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Microscope className="w-6 h-6 text-teal-400" />
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Micro<span className="text-teal-400">Cosmos</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center">
              © 2026 MicroCosmos. Exploring the invisible universe.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-400 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
