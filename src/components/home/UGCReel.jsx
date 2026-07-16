const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=600&fit=crop',
    caption: 'Everyday glow',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=600&fit=crop',
    caption: 'Statement huggies',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=600&fit=crop',
    caption: 'Layered & loved',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop',
    caption: 'Golden hour ready',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&h=600&fit=crop',
    caption: 'Stack & style',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=600&fit=crop',
    caption: 'Self-gifting queen',
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 bg-charcoal-50">
      <div className="container-narrow mb-10">
        <div className="text-center">
          <p className="text-label text-gold-500 mb-4">@velmora</p>
          <h2 className="heading-section text-charcoal-800">As Seen On You</h2>
          <div className="divider-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 md:px-12 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="relative w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-serif text-lg text-cream-50 italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
