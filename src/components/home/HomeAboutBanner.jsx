import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeAboutBanner() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-brand-navy py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="about-banner-bg-m1n2o3"
        data-strk-bg="[about-banner-subtitle] [about-banner-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-steel/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">About Artitect</span>
            </div>
            <h2 id="about-banner-title" className="text-4xl font-bold text-brand-white mb-5 leading-tight">
              Two Decades of Sheet Metal Mastery
            </h2>
            <p id="about-banner-subtitle" className="text-brand-gray leading-relaxed mb-6">
              Founded on a passion for precision manufacturing, Artitect Machinery has grown into a trusted global supplier of sheet metal folding equipment. Our machines are found in workshops and factories across 40+ countries.
            </p>
            <p className="text-brand-gray leading-relaxed mb-8">
              We don't just build machines — we engineer solutions. Every product is designed in close collaboration with industry professionals to meet the real demands of modern metal fabrication.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold font-semibold px-8 py-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-200"
            >
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-brand-steel/40">
              <img
                alt="Artitect Machinery factory"
                data-strk-img-id="about-banner-img-p4q5r6"
                data-strk-img="[about-banner-subtitle] [about-banner-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Gold accent corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold rounded-br-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
