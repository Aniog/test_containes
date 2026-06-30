import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1920&q=80')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal/60" />
      
      {/* Content */}
      <div className="relative z-10 container-narrow text-center text-white px-4">
        <p className="text-sm tracking-widest mb-6 text-white/80 animate-fade-up">
          PREMIUM DEMI-FINE JEWELRY
        </p>
        
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-up stagger-1">
          Crafted to be<br />Treasured
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10 animate-fade-up stagger-2">
          Timeless 18K gold plated pieces designed for everyday luxury. 
          Hypoallergenic, sustainable, and made to last.
        </p>
        
        <Link 
          to="/shop"
          className="btn-outline border-white text-white hover:bg-white hover:text-charcoal animate-fade-up stagger-3"
        >
          Shop the Collection
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
