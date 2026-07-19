import { useRef } from "react";
import { ugcItems } from "@/data/products";
import StockImage from "@/components/ui/StockImage";
import useImageLoader from "@/lib/useImageLoader";

function ReelCard({ item }) {
  return (
    <article className="snap-start shrink-0 w-[210px] sm:w-[230px] md:w-[250px]">
      <div className="relative aspect-[9/16] overflow-hidden bg-espresso-300 group">
        <StockImage
          imgId={item.imgId}
          query={`[${item.id}-caption] [home-ugc-title] lifestyle gold jewelry`}
          refTitle={`${item.id}-caption`}
          refSection="home-ugc-title"
          ratio="3x4"
          width="500"
          alt={`${item.handle} wearing Velmora`}
          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-smooth group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso-300/70" />
        <div className="absolute inset-x-0 bottom-0 p-4 text-cream-50">
          <p
            id={`${item.id}-caption`}
            className="font-serif text-2xl leading-tight tracking-tight"
          >
            {item.caption}
          </p>
          <p className="mt-2 font-sans text-[10px] uppercase tracking-widest2 text-cream-100/80">
            {item.handle}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function UGCReels() {
  const ref = useRef(null);
  useImageLoader(ref);

  return (
    <section
      ref={ref}
      className="bg-espresso-300 text-cream-50 py-20 md:py-28"
    >
      <div className="container-wide mb-10 md:mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-gold-200">
              #VelmoraGirls
            </p>
            <h2
              id="home-ugc-title"
              className="mt-3 font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight"
            >
              Worn by you, in the wild.
            </h2>
          </div>
          <p className="text-cream-100/75 text-sm md:text-base max-w-sm leading-relaxed">
            Tag <span className="text-gold-200">@velmora</span> for a chance to
            be featured. Real women, real light, real everyday.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 md:gap-5 px-5 md:px-8 lg:px-12 pb-4 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <ReelCard key={item.id} item={item} />
          ))}
          {/* spacer for right padding after last card */}
          <div className="shrink-0 w-1" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
