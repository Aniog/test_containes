const reels = [
  { id: 1, caption: "Stacked in gold" },
  { id: 2, caption: "Date night hoops" },
  { id: 3, caption: "Layered chains" },
  { id: 4, caption: "Tiny huggies" },
  { id: 5, caption: "Gifting made easy" },
  { id: 6, caption: "Everyday luxe" },
]

export function UGCStrip() {
  return (
    <section className="bg-velmora-cream pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.25em] text-velmora-taupe">
          @velmorafinejewelry
        </p>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:gap-6 lg:px-8 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="group relative aspect-[9/16] w-[160px] flex-shrink-0 overflow-hidden bg-velmora-stone sm:w-[200px] lg:w-[240px]"
          >
            <div className="h-full w-full bg-gradient-to-b from-velmora-stone/40 to-velmora-espresso/60 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-serif text-lg italic text-white">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
