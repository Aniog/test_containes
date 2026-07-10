import { Link } from "react-router-dom"
import { scenes } from "../../data/scenery.js"
import { ArrowRightIcon } from "../ui/Icons.jsx"

export default function Hero() {
  return (
    <section className="relative w-full bg-espresso text-ivory overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={scenes.hero}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/55 via-espresso/30 to-espresso/85" />
      </div>
      <div className="relative mx-auto max-w-editorial px-6 md:px-10 lg:px-16 pt-40 md:pt-52 pb-28 md:pb-36 min-h-[88vh] flex items-end">
        <div className="max-w-2xl animate-fadeUp">
          <p className="eyebrow text-ivory/70">The Velmora Atelier</p>
          <h1 className="display-serif mt-5 text-[44px] sm:text-[58px] md:text-[76px] leading-[1.02] text-ivory">
            Crafted to be
            <br />
            <span className="italic font-light text-champagne-soft">treasured</span>.
          </h1>
          <p className="mt-6 text-[15px] md:text-[16px] text-ivory/80 max-w-md font-light leading-relaxed">
            Demi-fine 18K gold-plated jewelry, hand-finished in small batches.
            Quietly made, slowly kept, designed to live in your everyday.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link to="/shop" className="btn-primary !w-auto bg-ivory !text-espresso border-ivory hover:!bg-champagne-soft hover:!text-espresso">
              Shop the Collection
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              to="/shop?category=sets"
              className="link-underline text-ivory/85 hover:text-ivory"
            >
              Discover Gifts
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/60">
        <span className="text-[9px] tracking-eyebrow uppercase">Scroll</span>
        <span className="h-10 w-px bg-ivory/30" />
      </div>
    </section>
  )
}
