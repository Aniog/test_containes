import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <footer ref={containerRef} className="bg-[#0a0a0c] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Microscope className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold text-slate-50 tracking-tighter">MicroCosmos</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Dedicated to exploring and documenting the breathtaking beauty of the microscopic world. Our mission is to inspire curiosity about the invisible life that surrounds us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Origins</a></li>
              <li><a href="#intro" className="hover:text-cyan-400 transition-colors">Microscopic Life</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">High-Res Gallery</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Future Horizons</a></li>
            </ul>
          </div>

          <div>
             <div className="w-full h-40 rounded-xl overflow-hidden border border-white/5">
                <img 
                  id="footer-img"
                  data-strk-img-id="footer-micro-closing"
                  data-strk-img="microscopic petri dish life"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Microscopic View"
                  className="w-full h-full object-cover"
                />
             </div>
             <p className="mt-4 text-xs text-slate-500 italic">"The universe is as much within us as it is around us."</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-xs">
          <p>© 2026 MicroCosmos Visual Exploration. All rights rights of the small reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
