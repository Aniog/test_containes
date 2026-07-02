import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StrkImage } from "@/components/ui/StrkImage";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[620px] w-full">
      <StrkImage
        id="hero-bg-velmora"
        query="[hero-title] [hero-subtitle] gold jewelry on model warm light editorial"
        ratio="16x9"
        width={1600}
        asBackground
        className="absolute inset-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-velmora-fg/60 via-velmora-fg/30 to-transparent" />
      </StrkImage>

      <div className="container-velmora relative z-10 flex h-full flex-col justify-center">
        <div className="max-w-xl text-white">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-velmora-gold">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-5xl leading-[1.05] md:text-7xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-md text-base leading-relaxed text-white/85 md:text-lg"
          >
            Timeless pieces for everyday elegance. Designed for women who believe
            luxury should feel personal, not precious.
          </p>
          <div className="mt-9">
            <Button className="min-w-[220px]" asChild>
              <Link to="/shop">Shop the Collection</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
