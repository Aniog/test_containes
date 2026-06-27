const reels = [
  { id: 1, handle: '@sophia.m', caption: 'My new everyday essential ✨', product: 'Golden Sphere Huggies' },
  { id: 2, handle: '@emma.rose', caption: 'Gift goals unlocked 🎁', product: 'Royal Heirloom Set' },
  { id: 3, handle: '@olivia.k', caption: 'Obsessed with this texture', product: 'Amber Lace Earrings' },
  { id: 4, handle: '@lily.j', caption: 'Date night ready 💛', product: 'Majestic Flora Nectar' },
  { id: 5, handle: '@chloe.r', caption: 'The cuff that started it all', product: 'Vivid Aura Jewels' },
];

export default function UGCReels() {
  return (
    <section className="py-12 sm:py-16 bg-velmora-pearl overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-velmora-gold text-xs font-medium tracking-editorial uppercase mb-2">As Seen On</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-velmora-charcoal tracking-wide">
              @WornByYou
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium tracking-editorial uppercase text-velmora-ink hover:text-velmora-gold transition-colors"
          >
            Follow Us
            <span className="text-velmora-gold">→</span>
          </a>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-5 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-36 sm:w-44 md:w-48 snap-start"
          >
            <div className="relative aspect-[9/16] rounded-sm overflow-hidden bg-velmora-sand shadow-sm">
              <img
                src={`https://placehold.co/360x640/1a1a1a/c9a96e?text=${encodeURIComponent(reel.product)}`}
                alt={`${reel.product} worn by ${reel.handle}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-serif text-xs sm:text-sm text-velmora-white italic leading-snug">
                  "{reel.caption}"
                </p>
                <p className="text-[10px] sm:text-xs text-velmora-sand/80 mt-1">{reel.handle}</p>
              </div>
              {/* Play indicator */}
              <div className="absolute top-3 right-3">
                <div className="h-8 w-8 rounded-full bg-velmora-white/20 backdrop-blur-sm flex items-center justify-center">
                  <div className="h-0 w-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-velmora-white border-b-[5px] border-b-transparent ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
