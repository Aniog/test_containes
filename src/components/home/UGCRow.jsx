const ugcItems = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop&q=80",
    caption: "Morning light, gold touch.",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=400&auto=format&fit=crop&q=80",
    caption: "The Amber Lace, everyday.",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&auto=format&fit=crop&q=80",
    caption: "Gift from me to me.",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1526045478516-99145907023c?w=400&auto=format&fit=crop&q=80",
    caption: "Golden hour with gold.",
  },
  {
    id: "5",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&auto=format&fit=crop&q=80",
    caption: "New favorite, no contest.",
  },
  {
    id: "6",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&auto=format&fit=crop&q=80",
    caption: "Stacked and styled.",
  },
];

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-white font-medium">
            As Seen On You
          </h2>
          <p className="text-[#A8A29E] mt-3 text-sm tracking-[0.08em] uppercase">
            Tag @velmorajewelry to be featured
          </p>
          <div className="w-12 h-px bg-[#B8943C] mx-auto mt-4" />
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[180px] sm:w-[220px] flex-shrink-0 group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-[#2A2725] rounded-sm overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-sm">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-['Cormorant_Garamond'] text-white text-sm italic leading-snug">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}