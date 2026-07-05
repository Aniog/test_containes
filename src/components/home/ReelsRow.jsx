const reels = [
  { id: 1, title: "Golden Hour Edit", handle: "@sophia.wears" },
  { id: 2, title: "Office to Dinner", handle: "@emma.looks" },
  { id: 3, title: "Weekend Softness", handle: "@olivia.style" },
  { id: 4, title: "Gift Ready", handle: "@velmora" },
]

export default function ReelsRow() {
  return (
    <section className="bg-white border-y border-brand-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title text-2xl md:text-3xl">From the Community</h2>
          <span className="text-xs font-medium uppercase tracking-widest text-brand-subtle">@velmora</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative min-w-[220px] md:min-w-[260px] h-[360px] md:h-[420px] rounded-xl overflow-hidden snap-center bg-brand-warm"
            >
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
                alt={reel.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                <p className="font-serif text-lg leading-snug">{reel.title}</p>
                <p className="text-xs text-white/80 mt-1">{reel.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
