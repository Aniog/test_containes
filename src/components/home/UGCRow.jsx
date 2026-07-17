const ugcItems = [
  { id: 1, caption: 'Everyday glow with the Golden Sphere Huggies ✨', tone: 'from-espresso-100 to-espresso' },
  { id: 2, caption: 'Date night stack — Vivid Aura + Amber Lace', tone: 'from-espresso-50 to-espresso-200' },
  { id: 3, caption: 'Majestic Flora Nectar in golden hour light 🌸', tone: 'from-espresso-200 to-gold-600' },
  { id: 4, caption: 'The Royal Heirloom Set — gifted & adored', tone: 'from-gold-600 to-espresso-100' },
  { id: 5, caption: 'Dome huggies, zero effort, maximum polish', tone: 'from-espresso-50 to-gold-500' },
  { id: 6, caption: 'Layered gold — our signature look 👑', tone: 'from-gold-500 to-espresso-200' },
];

export default function UGCRow() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl tracking-widest uppercase text-espresso">
              Worn by You
            </h2>
            <div className="mt-3 w-12 h-px bg-gold" />
          </div>
          <span className="hidden md:inline text-xs uppercase tracking-super text-warm">
            Tag @velmorajewelry
          </span>
        </div>
      </div>

      <div className="flex gap-4 px-6 lg:px-10 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] snap-start relative group cursor-pointer overflow-hidden"
          >
            <div className={`w-full h-full bg-gradient-to-br ${item.tone} flex items-center justify-center`}>
              <div className="text-center opacity-40">
                <div className="w-10 h-10 mx-auto rounded-full bg-cream/20 flex items-center justify-center">
                  <span className="text-cream/60 text-lg font-serif">♡</span>
                </div>
              </div>
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif italic text-cream text-sm leading-snug">
                {item.caption}
              </p>
              <p className="text-cream-200 text-xs mt-2 tracking-wider uppercase">
                @velmorajewelry
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center md:hidden">
        <span className="text-xs uppercase tracking-super text-warm">Tag @velmorajewelry</span>
      </div>
    </section>
  );
}
