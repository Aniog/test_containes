import { reels } from "@/data/products";
import StockImage from "@/components/ui/StockImage";

const REEL_QUERIES = [
  "woman wearing layered gold huggies warm natural light editorial portrait",
  "gold jewelry on neck close up soft morning light",
  "stack of gold rings on hand warm dark background editorial",
  "woman wearing gold floral necklace soft linen backdrop",
  "close up of gold huggie on ear warm golden hour",
  "gold pendant on chain draped on linen editorial",
];

export default function ReelsStrip() {
  return (
    <section id="reels" className="bg-ivory py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow eyebrow-gold">@velmora</p>
            <h2 className="section-title mt-3">
              Worn by <span className="section-title-italic">you</span>
            </h2>
          </div>
          <p className="text-[13px] tracking-wide text-charcoal max-w-sm">
            Tag <span className="text-gold">@velmora</span> to be featured. A
            slow scroll of how our community wears Velmora, every day.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-none">
        <ul className="flex gap-4 md:gap-6 px-6 md:px-10 pb-4 snap-x snap-mandatory">
          {reels.map((reel, i) => (
            <li
              key={reel.id}
              className="snap-start shrink-0 w-[200px] md:w-[260px] relative overflow-hidden bg-espresso group"
              id={`reel-${reel.id}`}
            >
              <div className="relative w-full h-[355px] md:h-[460px] stock-skeleton">
                <StockImage
                  query={`[reel-${reel.id}-caption] gold jewelry worn on neck or ear editorial portrait warm light`}
                  imageId={reel.id}
                  ratio="9x16"
                  width={520}
                  alt={reel.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/85" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-ivory">
                  <p className="font-display text-lg leading-tight">
                    {reel.caption}
                  </p>
                  <p
                    id={`reel-${reel.id}-caption`}
                    className="mt-1 text-[10px] tracking-widest3 uppercase text-ivory/70"
                  >
                    {reel.handle}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}