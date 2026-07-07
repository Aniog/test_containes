import { ugcImages } from '../../data/products';

export default function UGCScroll() {
  return (
    <section className="py-16 bg-velmora-ivory overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-2xl lg:text-3xl text-velmora-charcoal">
          As Seen On You
        </h2>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-8">
        {/* Duplicate for infinite scroll effect */}
        {[...ugcImages, ...ugcImages].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-40 sm:w-48 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative aspect-[9/16] overflow-hidden group">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Caption */}
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-ivory opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}