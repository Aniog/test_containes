const GRID_ITEMS = [
  {
    id: 'ancient-oak',
    imgId: 'home-grid-ancient-oak-f7a2b1',
    title: 'The Sentinel Oak',
    desc: 'Rooted deep in loam and memory, standing watch for four centuries.',
    titleId: 'home-oak-title',
    descId: 'home-oak-desc',
    span: 'md:row-span-2',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'moss-floor',
    imgId: 'home-grid-moss-floor-c3d8e4',
    title: 'Emerald Carpet',
    desc: 'A living floor of moss, soft as velvet, ancient as stone.',
    titleId: 'home-moss-title',
    descId: 'home-moss-desc',
    span: '',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'fallen-giant',
    imgId: 'home-grid-fallen-giant-j0k1l2',
    title: 'The Fallen Giant',
    desc: 'Even in decay, it nourishes a hundred new lives.',
    titleId: 'home-fallen-title',
    descId: 'home-fallen-desc',
    span: '',
    ratio: '3x2',
    width: 600,
  },
  {
    id: 'twisted-roots',
    imgId: 'home-grid-twisted-roots-a1b9c2',
    title: 'Tangled Foundation',
    desc: 'Roots intertwine beneath the soil in a slow, unbreakable embrace.',
    titleId: 'home-roots-title',
    descId: 'home-roots-desc',
    span: 'md:row-span-2',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'bark-texture',
    imgId: 'home-grid-bark-texture-d4e5f6',
    title: 'Elder Bark',
    desc: 'Each furrow tells a decade; each ridge, a storm endured.',
    titleId: 'home-bark-title',
    descId: 'home-bark-desc',
    span: '',
    ratio: '1x1',
    width: 600,
  },
  {
    id: 'fern-grove',
    imgId: 'home-grid-fern-grove-g7h8i9',
    title: 'Fern Cathedral',
    desc: 'Sunlight fractures through the canopy, illuminating a hidden sanctuary.',
    titleId: 'home-fern-title',
    descId: 'home-fern-desc',
    span: '',
    ratio: '4x3',
    width: 600,
  },
  {
    id: 'morning-mist',
    imgId: 'home-grid-morning-mist-m3n4o5',
    title: 'Morning Veil',
    desc: 'Dawn mist clings to the understory, blurring the line between dream and earth.',
    titleId: 'home-mist-title',
    descId: 'home-mist-desc',
    span: 'md:row-span-2',
    ratio: '3x4',
    width: 600,
  },
  {
    id: 'stream-bed',
    imgId: 'home-grid-stream-bed-n6p7q8',
    title: 'Forest Stream',
    desc: 'Black water moving slow between roots and stone.',
    titleId: 'home-stream-title',
    descId: 'home-stream-desc',
    span: '',
    ratio: '3x2',
    width: 600,
  },
  {
    id: 'lichen-spread',
    imgId: 'home-grid-lichen-spread-r9s0t1',
    title: 'Lichen Kingdom',
    desc: 'Silver-green empires spreading across ancient bark.',
    titleId: 'home-lichen-title',
    descId: 'home-lichen-desc',
    span: '',
    ratio: '4x3',
    width: 600,
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Hero section */}
      <section className="mb-16 md:mb-24">
        <h1
          id="roots-hero-title"
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-mist-pale tracking-wide leading-none"
        >
          The Roots
        </h1>
        <div className="mt-6 max-w-2xl">
          <p
            id="roots-hero-desc"
            className="text-lg md:text-xl text-mist leading-relaxed italic"
          >
            Step beneath the canopy. Here, time is measured in rings, not years.
            Each trunk a pillar of living history, each patch of moss a world
            unto itself.
          </p>
        </div>
        <div className="mt-8 h-px bg-gradient-to-r from-mist-heavy/40 via-mist/20 to-transparent" />
      </section>

      {/* Masonry grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 auto-rows-[280px]">
        {GRID_ITEMS.map((item) => (
          <article
            key={item.id}
            className={`masonry-img-wrapper relative group overflow-hidden rounded-rugged border border-canopy-moss/30 bg-canopy-shadow ${item.span}`}
          >
            {/* Stock image */}
            <img
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}] [roots-hero-title]`}
              data-strk-img-ratio={item.ratio}
              data-strk-img-width={item.width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />

            {/* Fog overlay — clears on hover */}
            <div className="fog-overlay-img absolute inset-0 bg-[#C4CFC9] z-10" style={{ opacity: 0.85 }} />

            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-canopy-deep/90 via-canopy-deep/20 to-transparent z-20 opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

            {/* Text content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-30">
              <h2
                id={item.titleId}
                className="font-heading text-xl md:text-2xl font-semibold text-mist-pale mb-1"
              >
                {item.title}
              </h2>
              <p
                id={item.descId}
                className="text-sm text-mist-light/80 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 max-w-xs"
              >
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Closing text */}
      <section className="max-w-3xl mx-auto mt-24 mb-12 text-center">
        <p className="font-body text-mist-heavy italic leading-relaxed">
          The forest does not hurry. Its roots reach deeper than memory, and its
          silence is older than words. Stand still long enough, and you may hear
          the slow thrum of the earth.
        </p>
      </section>
    </div>
  );
}