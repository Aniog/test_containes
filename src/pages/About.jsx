import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StockImage from "@/components/ui/StockImage";
import useImageLoader from "@/lib/useImageLoader";

export default function About() {
  const ref = useRef(null);
  useImageLoader(ref);

  return (
    <section ref={ref} className="pt-24 md:pt-28 bg-cream-100">
      <div className="container-wide">
        <div className="max-w-3xl py-16 md:py-24">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl text-espresso-300 leading-[1.05] tracking-tight">
            Quiet jewelry, made to <em className="italic text-gold-500">last</em>.
          </h1>
          <p className="mt-6 text-muted text-base md:text-lg leading-relaxed">
            Velmora is a small, women-led studio designing demi-fine gold
            jewelry for the everyday. We work in small batches, source
            responsibly, and design pieces that feel as right on a Tuesday
            morning as they do at a wedding.
          </p>
          <p className="mt-4 text-muted text-base md:text-lg leading-relaxed">
            Every piece is hand-finished in 18K gold over brass, with
            hypoallergenic posts and tarnish-resistant coating. We don't do
            loud. We don't do fast. We do quiet, considered, and made to be
            worn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-16 md:pb-24">
          <div className="relative aspect-[4/5] overflow-hidden bg-espresso-300">
            <StockImage
              imgId="about-studio-9c1a"
              query="[about-studio-cap] [about-page-title] artisan jeweler studio"
              refTitle="about-page-title"
              refDesc="about-studio-cap"
              ratio="3x4"
              width="1200"
              alt="The Velmora studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center max-w-md">
            <p className="eyebrow">Made in California</p>
            <h2
              id="about-page-title"
              className="mt-3 font-serif text-3xl md:text-4xl text-espresso-300 leading-tight tracking-tight"
            >
              <span id="about-studio-cap">A studio of two</span>, making pieces for a thousand.
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              We started Velmora at a kitchen table with a small jewelry
              bench, two sketchbooks, and a stubborn belief that fine jewelry
              should be the kind of thing you wear every day — not save for
              someday.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Today, every piece is still hand-finished in our LA studio,
              plated in 18K gold, and packaged in recyclable materials that
              feel like a gift, every time you open them.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-widest2 text-espresso-300 link-underline self-start"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
