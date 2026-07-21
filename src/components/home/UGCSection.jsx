import { ugcContent } from '../../data/products';

export default function UGCSection() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center">As Seen On You</h2>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-0">
        <div className="flex gap-4 mx-auto" style={{ minWidth: 'max-content' }}>
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="relative w-48 md:w-64 flex-shrink-0 aspect-[2/3] group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-serif text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}