import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ugcItems = [
  { caption: "Everyday elegance", img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
  { caption: "Layered in gold", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
  { caption: "Minimal & bold", img: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80" },
  { caption: "Statement pieces", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80" },
  { caption: "Gift-worthy", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80" },
  { caption: "Delicate details", img: "https://images.unsplash.com/photo-1602751584552-8ba420552259?w=400&q=80" },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-2">@velmorajewelry</p>
          <h2 className="serif text-2xl md:text-3xl font-light">Styled by You</h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => scroll("left")} className="p-2 border border-divider rounded-full hover:bg-cream transition-colors">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => scroll("right")} className="p-2 border border-divider rounded-full hover:bg-cream transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-2 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden snap-start group cursor-pointer"
          >
            <img src={item.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 serif text-sm text-cream font-medium leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
