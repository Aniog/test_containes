import { ugcItems } from "../../data/products";

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            Worn by You
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4 mb-4" />
          <p className="text-muted text-sm md:text-base max-w-md mx-auto">
            Tag <span className="text-gold font-medium">@velmorajewelry</span> to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8" style={{ minWidth: "max-content" }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-sm group cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs md:text-sm font-serif italic leading-relaxed">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}