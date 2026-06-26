import { ChevronRight } from 'lucide-react';
import { forwardRef } from 'react';

const Hero = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center bg-slate-950 overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-cover bg-center"
        data-strk-bg-id="hero-bg-1ab2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Overlay gradient for legibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Next-Generation Sheet Metal Folders
          </div>
          
          <h1 id="hero-title" className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            The Elegant Way to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Shape Metal</span>
          </h1>
          
          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            Precision engineering meets intuitive design. Our advanced double folding machines and sheet metal folders redefine manufacturing efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5"
            >
              Explore Products
            </a>
            <a 
              href="#features" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all hover:-translate-y-0.5 group"
            >
              View Capabilities
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;