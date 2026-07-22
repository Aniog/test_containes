import React from "react"

const reels = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1599643478518-a86e5802f1d3?w=600&q=80",
    caption: "Golden hour glow ✨",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80",
    caption: "New huggies obsession",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80",
    caption: "Layering season",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa33?w=600&q=80",
    caption: "Details that matter",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
    caption: "Gift-ready packaging",
  },
]

const UgcReels = () => {
  return (
    <section className="py-16 bg-stone-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center tracking-wide">As Seen On</h2>
        <p className="mt-2 text-stone-500 text-sm text-center">Follow @velmora on Instagram</p>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide snap-x snap-mandatory">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[160px] sm:w-[200px] aspect-[9/16] rounded-sm overflow-hidden snap-start group cursor-pointer"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-xs text-white/90 leading-snug">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UgcReels
