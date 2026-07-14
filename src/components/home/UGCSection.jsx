import { ugcImages } from '@/data/products';

function UGCSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="overflow-hidden">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center">
            Styled by You
          </h2>
          <p className="text-text-secondary text-center mt-2">
            Tag @velmorajewelry to be featured
          </p>
        </div>
        
        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
            {ugcImages.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-48 sm:w-56 md:w-64 snap-start"
              >
                <div className="relative aspect-[9/16] overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-serif text-white text-sm italic">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fade Edges */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-secondary to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-secondary to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default UGCSection;
