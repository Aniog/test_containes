import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BackgroundImage from "@/components/BackgroundImage";

const Hero = () => (
  <section className="relative h-[100svh] w-full overflow-hidden">
    <BackgroundImage
      imgId="hero-bg-velmora"
      query="[hero-subtitle] [hero-title] velmora fine jewelry gold on model"
      ratio="9x16"
      width={1600}
      className="absolute inset-0 h-full w-full bg-stone-900"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/20 to-stone-900/60" />

    <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white md:px-8">
      <p
        id="hero-subtitle"
        className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/80"
      >
        Demi-Fine Gold Jewelry
      </p>
      <h1
        id="hero-title"
        className="max-w-3xl font-serif text-5xl font-light leading-[0.95] tracking-wide md:text-7xl lg:text-8xl"
      >
        Crafted to be Treasured
      </h1>
      <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-white/85 md:text-base">
        Elevated essentials for everyday luxury. Designed for the women who buy
        jewelry for themselves — and the ones they love.
      </p>
      <Link to="/shop" className="mt-10">
        <Button size="lg" className="min-w-[220px] text-xs uppercase tracking-[0.2em]">
          Shop the Collection
        </Button>
      </Link>
    </div>
  </section>
);

export default Hero;
