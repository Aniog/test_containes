import { ugcContent } from '@/data/products';

export default function UGCSection() {
  return (
    <section className="py-section-mobile lg:py-section bg-velmora-black overflow-hidden">
      <div className="container mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream text-center">
          Styled by You
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 md:px-0 md:overflow-visible md:flex-nowrap md:justify-start md:animate-scroll">
          {ugcContent.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-56 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-velmora-gray/10">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-cream italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for continuous scroll animation */}
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