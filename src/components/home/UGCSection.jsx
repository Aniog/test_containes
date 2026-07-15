import { useRef, useEffect } from "react";
import { ugcPosts } from "@/data/products";

export default function UGCSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let isDown = false;
    let startX;
    let scrollLeft;

    const onDown = (e) => {
      isDown = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onLeave = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };
    const onUp = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };
    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="section-padding mb-8">
        <p className="text-xs tracking-widester uppercase text-velmora-muted mb-2">@velmorajewelry</p>
        <h2 className="font-heading text-3xl md:text-4xl">Styled by You</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-5 md:px-10 lg:px-16 xl:px-24 cursor-grab select-none pb-2"
      >
        {ugcPosts.map((post) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] bg-velmora-sand overflow-hidden group"
          >
            <img
              src={`https://placehold.co/520x925/2D2D2D/D4B896?text=UGC+${post.id}`}
              alt={`Styled by customer ${post.id}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-heading text-white text-sm italic leading-snug">
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
