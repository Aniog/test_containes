import React from 'react';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'woman wearing gold huggie earrings close up ear warm lighting editorial' },
  { id: 'ugc-2', caption: 'Stack & layer', query: 'layered gold necklaces on woman neck collarbone close up warm skin tones' },
  { id: 'ugc-3', caption: 'Everyday luxury', query: 'gold ear cuff crystal accent on woman ear profile editorial beauty' },
  { id: 'ugc-4', caption: 'The perfect pair', query: 'gold filigree drop earrings on model close up warm lighting portrait' },
  { id: 'ugc-5', caption: 'Gift-worthy', query: 'gold jewelry gift box velvet luxury unboxing flat lay warm tones' },
  { id: 'ugc-6', caption: 'Quiet confidence', query: 'minimal gold jewelry on woman elegant editorial warm tones portrait' },
];

export default function UgcReel() {
  return (
    <section className="py-14 md:py-20 bg-velmora-charcoal overflow-hidden">
      <div className="text-center mb-8 px-5">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-cream mb-2">
          As Worn by You
        </h2>
        <p className="text-sm text-velmora-muted font-sans">
          Tag @velmora to be featured
        </p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-lg overflow-hidden snap-start group"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={item.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-3 right-3 font-serif text-sm text-velmora-cream/90 italic leading-tight">
              {item.caption}
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
