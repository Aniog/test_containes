import { Link } from "react-router-dom"
import { ProductImage } from "@/lib/imagery"

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-cocoa text-bone">
      {/* Background image */}
      <div className="absolute inset-0">
        <ProductImage id="hero" name="Hero" className="w-full h-full" />
      </div>

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-cocoa/70 via-cocoa/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/30 via-transparent to-cocoa/40" />

      {/* Content */}
      <div className="relative z-10 max-w-editorial mx-auto h-full flex items-end pb-24 md:pb-32 px-6 md:px-10 lg:px-14">
        <div className="max-w-2xl flex flex-col gap-6 animate-fadeIn">
          <span className="eyebrow text-gold-100">Velmora · New Collection</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[88px] leading-[0.95] text-bone">
            Crafted to be<br />
            <em className="font-light italic text-gold-50">treasured</em>
          </h1>
          <p className="text-bone/80 max-w-md text-base md:text-lg leading-relaxed">
            Demi-fine gold jewelry in small, considered batches — made for everyday wear
            and the moments worth keeping.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              to="/shop"
              className="btn-accent"
            >
              Shop the Collection
            </Link>
            <Link
              to="/shop?cat=sets"
              className="btn-outline border-bone text-bone hover:bg-bone hover:text-cocoa"
            >
              Gift Sets
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone/60">
        <span className="eyebrow">Scroll</span>
        <span className="block w-px h-8 bg-bone/40" />
      </div>
    </section>
  )
}
