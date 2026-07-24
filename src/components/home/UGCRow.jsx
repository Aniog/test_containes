const ugcItems = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  caption: [
    'Everyday gold',
    'Stacked & layered',
    'Golden hour glow',
    'New favorite piece',
    'Day to night',
    'Minimal elegance',
    'Weekend vibes',
    'Golden touch',
  ][i],
}));

export default function UGCRow() {
  return (
    <section className="py-20 md:py-28 bg-velmora-surface">
      <div className="mb-12 md:mb-16 section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-subtle mb-4">
            As Seen On You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-dark tracking-wide">
            #VelmoraIRL
          </h2>
          <div className="w-10 h-[1px] bg-velmora-accent mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] snap-start relative overflow-hidden group cursor-pointer"
          >
            {/* Placeholder with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-velmora-muted via-velmora-accent-light/30 to-velmora-accent/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-velmora-accent/10" />
              </div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Caption */}
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic tracking-wide">
              {item.caption}
            </p>

            {/* Hover shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-accent/10 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
