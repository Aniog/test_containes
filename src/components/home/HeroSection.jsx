import { useStrkImages } from '@/hooks/useStrkImages';
import { StrkBg } from '@/components/ui/StrkImg';

export function HeroSection() {
  const containerRef = useStrkImages();

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <StrkBg
        id="hero-bg-velmora"
        query="[hero-headline] [hero-subheadline] gold jewelry on model warm light editorial"
        ratio="9x16"
        width={1600}
        className="absolute inset-0 h-full w-full bg-velmora-charcoal"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/30 via-transparent to-velmora-espresso/60" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-4 font-display text-xs font-medium uppercase tracking-superwide text-velmora-gold-light">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.1] md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subheadline"
          className="mx-auto mt-6 max-w-lg font-display text-base font-light leading-relaxed text-white/85 md:text-lg"
        >
          Elegant earrings, necklaces, and huggies designed for everyday luxury and moments worth remembering.
        </p>
        <a
          href="/shop"
          className="mt-10 bg-velmora-gold px-10 py-4 font-display text-xs font-semibold uppercase tracking-widest text-velmora-espresso transition-all duration-300 hover:bg-velmora-gold-light hover:shadow-lg"
        >
          Shop the Collection
        </a>
      </div>
    </section>
  );
}
