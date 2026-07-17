import { ugcImages } from '../../data/products';

export default function UGCSection() {
  return (
    <section className="py-section-mobile md:py-section bg-velmora-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-section text-velmora-text-primary text-center">
          Styled by You
        </h2>
      </div>
      
      {/* Horizontal scroll container */}
      <div className="flex overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
        <div className="flex gap-4">
          {ugcImages.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-48 relative group"
            >
              <div className="aspect-[9/16] bg-velmora-bg-primary overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-serif text-sm text-white italic opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* View more card */}
          <div className="flex-shrink-0 w-40 md:w-48">
            <div className="aspect-[9/16] bg-velmora-bg-primary border border-velmora-border flex items-center justify-center cursor-pointer hover:bg-velmora-accent hover:border-velmora-accent hover:text-white transition-colors duration-300 group">
              <span className="font-serif text-sm text-center px-4 group-hover:text-white">
                View All<br />Looks
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}