import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white px-6 py-20">
        <p 
          className="label-uppercase text-xs tracking-[0.3em] mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]"
          style={{ color: 'rgba(255, 255, 255, 0.8)' }}
        >
          Premium Demi-Fine Jewelry
        </p>
        
        <h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards]"
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl max-w-xl mx-auto mb-10 font-light opacity-90 opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]"
          style={{ color: 'rgba(255, 255, 255, 0.9)' }}
        >
          Timeless 18K gold-plated pieces designed for the modern woman. 
          Effortless elegance for every occasion.
        </p>
        
        <div className="opacity-0 animate-[fadeUp_0.8s_ease-out_0.8s_forwards]">
          <Link 
            to="/shop" 
            className="btn btn-primary inline-block"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-8 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-[scrollLine_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
