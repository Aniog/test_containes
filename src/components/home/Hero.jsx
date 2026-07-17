import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1600&q=80)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-velmora-text/30" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white">
        <span className="mb-5 font-sans text-xs uppercase tracking-[0.3em] text-white/90">
          Demi-Fine Gold Jewelry
        </span>
        <h1 className="max-w-4xl font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 max-w-lg text-base md:text-lg font-light leading-relaxed text-white/90">
          Timeless pieces for everyday rituals — designed in 18K gold-plated
          finishes you will reach for again and again.
        </p>
        <div className="mt-10">
          <Link to="/shop">
            <Button className="px-8 py-4 text-xs tracking-[0.2em]">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
