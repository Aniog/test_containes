const ugcItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80",
    caption: "Golden hour with my favorite hoops",
    handle: "@sophie_m",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
    caption: "Everyday elegance. Never taking these off.",
    handle: "@elena.r",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    caption: "The necklace that started a conversation",
    handle: "@claire_d",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    caption: "Gift for myself. No regrets.",
    handle: "@julia.c",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80",
    caption: "Huggies that actually stay comfortable all day",
    handle: "@maya_k",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80",
    caption: "Stacked and styled. Obsessed.",
    handle: "@tara_w",
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-velmora-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-velmora-gold text-xs tracking-widest uppercase mb-2">
            As Seen On
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-light tracking-wide">
            Worn by You
          </h2>
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-4 md:gap-6 w-max">
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="relative w-48 md:w-56 aspect-[9/16] shrink-0 overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.handle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-xs text-velmora-light/90 font-serif italic leading-relaxed">
                    "{item.caption}"
                  </p>
                  <p className="text-xs text-velmora-gold mt-1 tracking-wider">
                    {item.handle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}