import { ugcContent } from '@/data/products';

const UGCStrip = () => {
  return (
    <section className="py-12 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <span className="text-velmora-gold text-sm tracking-ultrawide uppercase">
            @velmorajewelry
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal mt-2">
            Styled by You
          </h2>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div className="hide-scrollbar flex gap-3 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4">
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-44 sm:w-56 md:w-64 relative rounded-lg overflow-hidden group"
          >
            <div className="aspect-[9/16] bg-velmora-sand/50">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <p className="font-serif text-velmora-cream text-sm italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCStrip;
