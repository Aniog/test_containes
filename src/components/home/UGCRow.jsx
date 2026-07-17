import { ugcReels } from "@/data/products";

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <h2 className="section-title">As Seen On You</h2>
          <p className="mt-3 text-sm text-clay-500 font-sans">
            Tag <span className="text-clay-700 font-medium">@velmora</span> to
            be featured.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-2" style={{ width: "max-content" }}>
          {ugcReels.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[180px] sm:w-[220px] aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                src={reel.image}
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clay-900/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-3 right-3 font-serif text-sm text-cream-50 leading-snug">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}