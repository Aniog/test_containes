const photoStrip = [
  {
    src: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=500&q=80&fit=crop',
    label: 'Pollen',
  },
  {
    src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&q=80&fit=crop',
    label: 'Neurons',
  },
  {
    src: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=500&q=80&fit=crop',
    label: 'Crystals',
  },
  {
    src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&q=80&fit=crop',
    label: 'Scales',
  },
  {
    src: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=500&q=80&fit=crop',
    label: 'Atoms',
  },
  {
    src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=500&q=80&fit=crop',
    label: 'Diatoms',
  },
];

export default function PhotoStrip() {
  return (
    <section className="py-20 bg-[#080810] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p
          className="text-violet-400 text-sm font-medium tracking-[0.3em] uppercase mb-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Specimen Archive
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          A Glimpse of the Collection
        </h2>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-5 px-6 overflow-x-auto pb-4 scrollbar-hide">
        {photoStrip.map((photo, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative overflow-hidden rounded-2xl group cursor-pointer"
            style={{ width: '260px', height: '340px' }}
          >
            <img
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span
                className="text-white font-semibold text-lg"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
