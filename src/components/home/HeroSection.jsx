import { Link } from 'react-router-dom';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=85"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <h1 className="font-serif text-hero-mobile md:text-hero text-white leading-tight animate-fade-in">
              Crafted to be
              <br />
              <span className="text-[#E8D48B]">Treasured</span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-md animate-slide-up">
              Demi-fine gold jewelry, handcrafted for everyday elegance. Pieces that outshine trends and last a lifetime.
            </p>
            <div className="mt-8 md:mt-10 animate-slide-up">
              <Link to="/shop">
                <Button variant="primary" size="lg" className="bg-accent hover:bg-[#B8943B] text-white">
                  Shop the Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}