const reels = [
  { id: 1, caption: 'Everyday gold', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
  { id: 2, caption: 'Stacked & styled', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80' },
  { id: 3, caption: 'Date night ready', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80' },
  { id: 4, caption: 'Gift-worthy', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80' },
  { id: 5, caption: 'Minimal luxe', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { id: 6, caption: 'Golden hour', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80' },
];

export default function UGCReels() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal text-center">
          As Worn by You
        </h2>
        <p className="mt-3 text-sm text-brand-muted font-sans text-center">
          @velmora on Instagram
        </p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden relative group cursor-pointer"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
