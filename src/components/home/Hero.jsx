import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';

export function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (containerRef.current) {
        ImageHelper.disconnect(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/20 to-espresso/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.3em] text-white/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-playfair text-5xl font-medium leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mx-auto mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-white/85 sm:text-lg"
        >
          Elegant, wearable pieces made for everyday luxury — designed for the
          woman who buys her own gold.
        </p>
        <Button
          asChild
          className="mt-10 h-12 rounded-none bg-gold px-10 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold-hover"
        >
          <Link to="/shop">Shop the Collection</Link>
        </Button>
      </div>
    </section>
  );
}
