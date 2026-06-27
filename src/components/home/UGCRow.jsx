import React from "react"

const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=700&fit=crop&crop=faces",
    caption: "Everyday elegance",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop&crop=faces",
    caption: "Golden hour glow",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop&crop=faces",
    caption: "Stacked & styled",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop&crop=faces",
    caption: "Layered perfection",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=400&h=700&fit=crop&crop=faces",
    caption: "Minimalist luxury",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop&crop=faces",
    caption: "Weekend vibes",
  },
]

export default function UGCRow() {
  return (
    <section className="py-16 sm:py-20 bg-velmora-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <div className="text-center">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-velmora-gold mb-3">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-text font-normal">
            As Worn By You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll row */}
      <div className="flex gap-4 sm:gap-5 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] sm:w-[220px] aspect-[9/16] snap-center overflow-hidden group"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm sm:text-base text-white/90 italic">
              "{item.caption}"
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
