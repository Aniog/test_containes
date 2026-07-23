import { ugcContent } from '../../data/products';

const UGCRow = () => {
  return (
    <section className="py-12 md:py-16 bg-velmora-sand overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-charcoal text-center">
          Worn by You
        </h2>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-4 md:px-6 pb-4">
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-velmora-charcoal overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-3 left-3 right-3 font-serif text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;