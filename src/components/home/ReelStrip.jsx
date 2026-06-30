const reels = [
  {
    id: 1,
    caption: 'Everyday golden hour',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop',
  },
  {
    id: 2,
    caption: 'Stacked & layered',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
  },
  {
    id: 3,
    caption: 'Gift her something special',
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d89d5432?w=400&h=700&fit=crop',
  },
  {
    id: 4,
    caption: 'Ear candy goals',
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=700&fit=crop',
  },
  {
    id: 5,
    caption: 'Flora at golden hour',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
  },
  {
    id: 6,
    caption: 'The Royal Heirloom',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=700&fit=crop',
  },
];

export default function ReelStrip() {
  return (
    <section className="py-16 lg:py-20 bg-charcoal-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 section-padding">
          <p className="text-label text-brand mb-3">As Seen On</p>
          <h2 className="heading-serif text-3xl lg:text-4xl text-charcoal-800">
            #VelmoraStyle
          </h2>
          <div className="w-12 h-[1px] bg-brand mx-auto mt-5" />
        </div>

        {/* Scroll strip */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 px-5 md:px-8" style={{ paddingLeft: 'max(1.25rem, calc((100vw - 1440px) / 2 + 2rem))' }}>
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative flex-shrink-0 w-[180px] md:w-[200px] lg:w-[220px] aspect-[9/16] overflow-hidden group cursor-pointer"
              >
                <img
                  src={reel.image}
                  alt={reel.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
                {/* Caption */}
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm lg:text-base text-white/90 italic leading-snug">
                  {reel.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
