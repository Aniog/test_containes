import React from "react";

const reels = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
    caption: "Golden hour, golden jewelry.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80",
    caption: "Layered necklaces for summer.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    caption: "Huggies that go with everything.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80",
    caption: "From desk to dinner.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
    caption: "Quiet luxury, everyday.",
  },
];

const FALLBACK_REEL_IMAGE = 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80';

const ReelRow = () => {
  return (
    <section className="bg-white border-y border-gray-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-serif text-xl md:text-2xl text-gray-900">Worn by you</h2>
          <span className="text-xs font-medium tracking-widest uppercase text-gray-500">@velmora</span>
        </div>
        <div className="mt-6 -mx-4 overflow-x-auto px-4 pb-2">
          <div className="flex gap-4 md:gap-5">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="relative h-[420px] w-[220px] md:h-[520px] md:w-[260px] flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100"
              >
                <img
                  src={reel.image}
                  alt={reel.caption}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80';
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="font-serif text-sm text-white/90 leading-snug">{reel.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelRow;
