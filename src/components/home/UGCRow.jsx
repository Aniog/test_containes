import { ugcItems } from "@/data/products";

function UGCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 snap-start">
      <div className="aspect-[9/16] bg-light-accent rounded-lg overflow-hidden relative group">
        <img
          src={item.image}
          alt={item.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <p className="absolute bottom-4 left-3 right-3 text-white text-xs md:text-sm font-serif italic leading-snug">
          {item.caption}
        </p>
      </div>
    </div>
  );
}

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-content mx-auto px-4 md:px-8 mb-8 md:mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-primary">
              As Seen On You
            </h2>
            <p className="text-secondary text-sm mt-1">
              Real styles from our community
            </p>
          </div>
          <span className="text-[11px] text-secondary uppercase tracking-[0.1em] hidden md:block">
            &#8592; Scroll &#8594;
          </span>
        </div>
      </div>
      <div className="overflow-x-auto pb-4 -mx-4 px-4 md:px-8 scrollbar-hide">
        <div className="flex gap-4 md:gap-5 snap-x snap-mandatory min-w-max">
          {ugcItems.map((item) => (
            <UGCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}