import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=80)`,
          backgroundPosition: 'center 30%',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/40 to-ink/20" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="max-w-lg animate-fadeIn">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight tracking-wide">
            Crafted to be
            <br />
            <span className="italic font-light">Treasured</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base mt-6 max-w-md leading-relaxed font-light">
            Discover demi-fine gold jewelry that bridges heirloom quality and everyday accessibility. Each piece, a quiet statement.
          </p>
          <div className="mt-10">
            <Button size="lg" className="text-sm" asChild>
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-8 bg-white/30" />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}