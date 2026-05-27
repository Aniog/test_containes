import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-[#050d1a] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] rounded-full bg-[#00d4ff]/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Begin Your Journey</span>
        <h2 className="text-3xl md:text-5xl font-black text-[#e8f4f8] mt-4 mb-6 leading-tight">
          The Invisible World<br />Awaits Your Discovery
        </h2>
        <p className="text-[#8ab4c8] text-lg leading-relaxed mb-10">
          Explore hundreds of microorganisms, read cutting-edge science, and uncover the hidden forces that shape all life on Earth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-[#00d4ff] text-[#050d1a] font-bold rounded-full px-8 py-3.5 hover:bg-[#00ffcc] transition-colors shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            Explore Organisms <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/science"
            className="inline-flex items-center gap-2 border border-[rgba(0,212,255,0.4)] text-[#8ab4c8] rounded-full px-8 py-3.5 hover:text-[#00d4ff] hover:border-[#00d4ff] transition-colors"
          >
            Read the Science
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
