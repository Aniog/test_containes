const ugcItems = [
  { id: 1, caption: 'Golden hour with my new hoops ✨', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&auto=format&fit=crop' },
  { id: 2, caption: 'Obsessed with this necklace 💫', image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=400&auto=format&fit=crop' },
  { id: 3, caption: 'Everyday elegance 🌿', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&auto=format&fit=crop' },
  { id: 4, caption: 'Gift wrapped and ready 🎀', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&auto=format&fit=crop' },
  { id: 5, caption: 'Stacking my favorites 🥇', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&auto=format&fit=crop' },
  { id: 6, caption: 'Date night look 💎', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop' },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">As Seen On</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
            Worn by You
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-6 lg:px-8 pb-2" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-3 right-3 text-white text-xs leading-relaxed font-serif italic">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}