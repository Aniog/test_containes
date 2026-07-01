import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productImage } from "@/lib/placeholder";

export default function StorySplit() {
  return (
    <section className="bg-ivory-50">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-espresso-200 order-2 md:order-1">
            <img
              src={productImage({ scene: "lace", palette: "champagne", w: 1000, h: 1250 })}
              alt="Hand-finished details"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 max-w-lg">
            <div className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-400 mb-5">
              Our story
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-espresso-200 leading-[1.05]">
              Quiet pieces,
              <br />
              <span className="italic text-gold-400">made to last.</span>
            </h2>
            <p className="mt-6 text-base text-muted leading-relaxed">
              Velmora began with a single question — what would we keep, and wear on repeat,
              for the next ten years? The answer became a small, considered line of demi-fine
              jewelry, designed in-house and finished by hand in 18K gold plate.
            </p>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Each piece is hypoallergenic, tarnish-resistant, and sized to wear 24/7 —
              the kind of jewelry that quietly becomes part of you.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center mt-8 text-[11px] tracking-widest2 uppercase text-espresso-200 link-underline"
            >
              Read our story
              <ArrowRight className="w-3.5 h-3.5 ml-2" strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
