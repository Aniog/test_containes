import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productImage } from "@/lib/placeholder";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-espresso-200 text-ivory-50">
      {/* Backdrop image (warm-lit jewelry on model) */}
      <div className="absolute inset-0">
        <img
          src={productImage({ scene: "hero", palette: "noir", w: 1600, h: 1100 })}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-300/30 via-espresso-300/15 to-espresso-300/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-300/55 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-8xl h-full px-5 sm:px-8 lg:px-12 flex flex-col justify-end pb-20 sm:pb-28">
        <div className="max-w-xl animate-fadeUp">
          <div className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-300 mb-5">
            Velmora · Fine Jewelry
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight text-ivory-50">
            Crafted to be
            <br />
            <span className="italic text-gold-200">Treasured.</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-ivory-100/85 leading-relaxed max-w-md">
            Demi-fine jewelry, considered and made to last. Quiet pieces for the everyday,
            finished in 18K gold plate — designed to be worn on repeat, and passed on.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/shop" className="btn-gold-outline">
              Shop the Collection
              <ArrowRight className="w-3.5 h-3.5 ml-3" strokeWidth={1.4} />
            </Link>
            <Link
              to="/shop?category=necklaces"
              className="text-[11px] tracking-wider2 uppercase text-ivory-100/80 hover:text-ivory-50 link-underline"
            >
              Discover necklaces
            </Link>
          </div>
        </div>
      </div>

      {/* Hairline scroll indicator */}
      <div className="absolute bottom-6 right-6 sm:right-10 hidden sm:flex flex-col items-center gap-3 text-[10px] tracking-widest2 uppercase text-ivory-100/60 z-10">
        <span>Scroll</span>
        <span className="block w-px h-12 bg-ivory-100/40" />
      </div>
    </section>
  );
}
