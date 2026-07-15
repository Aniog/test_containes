import { useRef } from "react"
import { ugcPosts } from "@/data/products"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function UGCReels() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 280
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-[#1C1C1C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A96E] mb-3 font-medium">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Styled by You
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {ugcPosts.map((post, i) => (
          <div
            key={post.id}
            className="relative flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] rounded-lg overflow-hidden bg-[#2a2520] group"
          >
            {/* Placeholder image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] text-[#8A7E72] uppercase tracking-widest text-center px-4">
                UGC {i + 1}
              </span>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-white text-lg italic leading-tight">
                {post.caption}
              </p>
            </div>

            {/* Hover ring */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C9A96E]/50 transition-colors rounded-lg pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  )
}
