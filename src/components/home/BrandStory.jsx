import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { JewelryImage } from "@/components/ui/JewelryImage";

export function BrandStory() {
  return (
    <section className="bg-canvas">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <JewelryImage
                art="story"
                palette="amber"
                ratio="4/5"
                className="h-full w-full"
                alt="Velmora — a handcrafting story"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-5xl lg:text-[56px]">
              Designed in Brooklyn.
              <br />
              <span className="italic font-light">Made slowly.</span>
            </h2>
            <p className="mt-7 max-w-lg text-ink-secondary leading-relaxed">
              Velmora began at a kitchen table, with a single brass ear cuff and
              a question: why should beautiful jewelry cost a small fortune? We
              work with a small family atelier in Jaipur, hand-finishing every
              piece in 18K gold plating over a hypoallergenic base. The result
              is jewelry that looks — and feels — like a keepsake, at a price
              that lets you wear it on a Wednesday.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-wider2 text-ink-secondary">
              <span>Slow Made</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>Family Atelier</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>Carbon-Neutral Shipping</span>
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 link-underline text-ink"
            >
              Our Story <ArrowRight size={14} strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
