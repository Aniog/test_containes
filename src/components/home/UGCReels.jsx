import { useRef, useEffect } from "react";
import { ugcReels } from "@/data/products";

export default function UGCReels() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onMouseLeave = () => (isDown = false);
    const onMouseUp = () => (isDown = false);
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section className="py-12 md:py-20 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#6E6862] mb-2">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide">
          Styled by You
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-8 pb-4 cursor-grab active:cursor-grabbing no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {ugcReels.map((reel, idx) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[180px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              src={`https://images.unsplash.com/photo-${
                [
                  "1515372039744-b8f02a3ae446",
                  "1617038224565-013d889522ad",
                  "1601124668328-6e217656ffe7",
                  "1611591437281-46057d3fe0e9",
                  "1599643478518-17477f983af0",
                  "1602173574767-37ac01994b2a",
                  "1635767798638-3e2523c0188b",
                  "1535632066927-ab7c9ab60908",
                ][idx]
              }?w=500&q=80`}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-xs md:text-sm font-serif italic">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
