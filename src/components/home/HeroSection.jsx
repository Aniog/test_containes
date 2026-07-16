import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div
        className="absolute inset-0 bg-velmora-cocoa bg-cover bg-center opacity-80"
        data-strk-bg-id="velmora-hero-bg-9f2a71"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/50 via-velmora-espresso/30 to-velmora-espresso/75" />
      <div className="velmora-container relative flex min-h-screen items-end pb-20 pt-32 md:items-center md:pb-0">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-nav text-velmora-parchment">
            Demi-fine gold jewelry for the everyday heirloom
          </p>
          <h1 id="hero-title" className="mt-6 font-serifDisplay text-6xl font-medium leading-[0.9] text-velmora-ivory sm:text-7xl md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-parchment md:text-lg">
            Warm-lit gold pieces made to move beautifully between self-purchase,
            gifting, and the rituals you keep close.
          </p>
          <Link to="/shop" className="premium-button mt-9 bg-velmora-gold text-velmora-espresso hover:bg-velmora-ivory">
            Shop the Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
