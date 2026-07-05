const ugcItems = [
  {
    id: 1,
    caption: 'Perfect everyday earrings',
    handle: '@sarah_style',
  },
  {
    id: 2,
    caption: 'Obsessed with this set',
    handle: '@emma_jewels',
  },
  {
    id: 3,
    caption: 'My new favorite necklace',
    handle: '@jessica.fashion',
  },
  {
    id: 4,
    caption: 'Gift she loved',
    handle: '@lisa_gifts',
  },
  {
    id: 5,
    caption: 'Golden hour glow',
    handle: '@maya_style',
  },
  {
    id: 6,
    caption: 'Stacking goals',
    handle: '@olivia.jewelry',
  },
];

export default function UGCReel() {
  return (
    <section className="py-12 lg:py-16 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-sm tracking-ultra-wide uppercase text-gold-400 mb-2">
              Community
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-700">
              Styled by You
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-sm tracking-wider uppercase text-charcoal-500 hover:text-charcoal-700 transition-colors hidden sm:block"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 px-4 sm:px-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 sm:-mx-6">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] sm:w-[240px]"
          >
            <div className="relative aspect-[9/16] bg-cream-300 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-cream-400 text-sm">UGC Image</span>
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-800/80 to-transparent">
                <p className="font-serif text-base text-cream-50 italic">
                  "{item.caption}"
                </p>
                <p className="font-sans text-xs text-cream-200 mt-1">
                  {item.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
