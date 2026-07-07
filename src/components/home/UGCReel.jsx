import { useRef } from 'react';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday sparkle ✨', product: 'Vivid Aura Jewels' },
  { id: 'ugc-2', caption: 'Date night edit', product: 'Majestic Flora Nectar' },
  { id: 'ugc-3', caption: 'The perfect stack', product: 'Golden Sphere Huggies' },
  { id: 'ugc-4', caption: 'Golden hour glow', product: 'Amber Lace Earrings' },
  { id: 'ugc-5', caption: 'Gift-ready elegance', product: 'Royal Heirloom Set' },
  { id: 'ugc-6', caption: 'Layered & luminous', product: 'Majestic Flora Nectar' },
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  return (
    <section className="bg-velmora-creme/50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl tracking-wide text-velmora-deep mb-4">
            As Worn by You
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto" />
          <p className="mt-4 text-velmora-stone text-sm">Tag <span className="text-velmora-gold">@velmorafine</span> to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={scrollRef}
        className="flex gap-5 px-6 lg:px-10 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
      >
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-velmora-creme rounded-sm overflow-hidden mb-3">
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[ugc-caption-${i}] [ugc-product-${i}] gold jewelry woman wearing`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-deep/60 via-transparent to-transparent" />
              {/* Caption */}
              <p id={`ugc-caption-${i}`} className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic leading-snug">
                {item.caption}
              </p>
            </div>
            <p id={`ugc-product-${i}`} className="text-[10px] tracking-wider uppercase text-velmora-stone text-center">
              {item.product}
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
