import { ugcItems } from '@/lib/data';
import { motion } from 'framer-motion';

const UGCReel = () => {
  return (
    <section className="py-24 bg-velmora-cream/50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 className="serif-heading text-3xl lg:text-4xl mb-2">As Worn By You</h2>
          <p className="text-velmora-taupe italic text-sm font-serif">Tag @velmora to be featured</p>
        </div>
      </div>

      <div className="relative">
        <div className="flex space-x-4 px-4 lg:px-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory lg:snap-none">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-64 aspect-[9/16] overflow-hidden group snap-center"
            >
              <img
                data-strk-img-id={`ugc-img-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] worn necklace earring`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 translate-y-4 lg:group-hover:translate-y-0 text-white flex flex-col items-center">
                <p id={`ugc-caption-${item.id}`} className="font-serif italic text-sm text-center">
                  "{item.caption}"
                </p>
              </div>
              {/* Always visible on mobile */}
              <div className="lg:hidden absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif italic text-xs">"{item.caption}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
