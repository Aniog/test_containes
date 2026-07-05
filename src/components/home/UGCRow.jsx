import { useRef, useEffect } from "react";

const reels = [
  {
    id: 1,
    caption: "Everyday gold",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    caption: "Layered moments",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    caption: "Gift-worthy",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3ddc1d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    caption: "Quiet luxury",
    image:
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    caption: "Soft gold glow",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    caption: "Made to treasure",
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=600&q=80",
  },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf;
    const step = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 0.5;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-accent mb-3">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl md:text-5xl tracking-tight">
          Styled by You
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-6 md:px-10 lg:px-16 pb-2"
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] overflow-hidden group"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif italic text-cream text-lg md:text-xl">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
