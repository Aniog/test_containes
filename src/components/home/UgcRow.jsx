import { ugcCards } from "@/data/products";

export default function UgcRow() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="max-w-page mx-auto px-4 md:px-8 mb-8">
        <span className="text-xs tracking-widest uppercase text-accent font-sans">
          As Seen On
        </span>
        <h2 className="section-heading mt-2">Worn by You</h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-4 md:gap-6 w-max">
          {ugcCards.map((card) => (
            <div
              key={card.id}
              className="relative w-48 md:w-56 aspect-[9/16] bg-surface-secondary rounded-sm overflow-hidden flex-shrink-0 group"
            >
              <img
                src={card.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-primary/90 italic leading-snug">
                &ldquo;{card.caption}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}