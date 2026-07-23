import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ugcPosts } from "@/data/products";

export default function UGCReelRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
              Styled by You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">
              @velmorajewelry
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-taupe/30 hover:border-espresso transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-taupe/30 hover:border-espresso transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-8 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {ugcPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex-shrink-0 w-[200px] md:w-[240px] group cursor-pointer"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-espresso mb-3">
              <img
                src={`https://placehold.co/480x854/2C2416/C9A96E?text=UGC+${post.id}`}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-espresso/80 to-transparent">
                <p className="font-serif text-sm text-white italic mb-1">
                  {post.caption}
                </p>
                <p className="text-[11px] text-white/70">{post.handle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
