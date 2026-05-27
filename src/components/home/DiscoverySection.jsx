import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const DiscoverySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-3xl blur-xl" />
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 aspect-[4/3]">
            <img
              alt="Microscopic discovery"
              className="w-full h-full object-cover"
              data-strk-img-id="discovery-img-mc005"
              data-strk-img="[discovery-desc] [discovery-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 rounded-xl p-4 shadow-xl">
            <div className="text-2xl font-grotesk font-bold text-cyan-400">99.9%</div>
            <div className="text-slate-400 text-xs mt-0.5">of life is microscopic</div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">The Science</span>
          <h2 id="discovery-title" className="font-grotesk font-bold text-3xl md:text-4xl text-white mt-3 mb-6 leading-tight">
            A Universe Hidden in Plain Sight
          </h2>
          <p id="discovery-desc" className="text-slate-400 leading-relaxed mb-6">
            For most of human history, we were unaware of the vast microscopic world surrounding us. It wasn't until the 17th century that Antonie van Leeuwenhoek first peered through a lens and discovered "animalcules" — tiny living creatures invisible to the naked eye.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            Today, we know that microorganisms outnumber all other life forms combined. They inhabit every corner of Earth — from boiling hydrothermal vents to frozen Antarctic ice — and are essential to every ecosystem on the planet.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
          >
            Our Mission
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
