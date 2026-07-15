import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const imgs = container.querySelectorAll("[data-strk-img-id]");
    if (imgs.length > 0) {
      // Placeholder: images will load via strk system
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-warm-950"
        data-strk-bg-id="hero-bg"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-warm-950/80 via-warm-950/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <div className="animate-fade-in">
              <h1
                id="hero-title"
                className="font-serif text-4xl sm:text-5xl md:text-7xl text-cream-100 leading-tight font-light"
              >
                Crafted to be
                <br />
                <span className="italic font-light">Treasured</span>
              </h1>
              <p
                id="hero-subtitle"
                className="mt-4 text-sm md:text-base text-cream-300 font-sans font-light max-w-md leading-relaxed"
              >
                Discover demi-fine jewelry designed for everyday elegance. Each
                piece is a quiet statement of enduring beauty.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gold-600 hover:bg-gold-700 text-white border-gold-600"
                  >
                    Shop the Collection
                  </Button>
                </Link>
                <Link to="/collections">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-cream-300/50 text-cream-200 hover:bg-cream-100/10 hover:border-cream-200"
                  >
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}