import { ugcContent } from '../data/products';

export default function UGCSection() {
  return (
    <section className="py-12 md:py-16 bg-velmora-ivory overflow-hidden">
      <div className="container-main mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center">
          Worn by You
        </h2>
      </div>

      {/* Reel-style horizontal scroll */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-4 md:px-0">
        <div className="flex gap-4 md:gap-6 animate-scroll">
          {[...ugcContent, ...ugcContent].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-40 md:w-56"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-velmora-dark group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-lg text-velmora-cream italic">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}