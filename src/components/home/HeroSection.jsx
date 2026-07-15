import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const heroImage =
  'https://placehold.co/1600x1000/2A2420/CBAF87?text=Warm+Gold+Jewelry+Editorial';

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Velmora fine gold jewelry editorial"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-velmora-ink/30" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/90 mb-5">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
          Crafted to be Treasured
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/90 max-w-lg font-light">
          Timeless pieces made for everyday rituals and once-in-a-lifetime moments.
        </p>
        <div className="mt-10">
          <Link to="/shop">
            <Button>Shop the Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
