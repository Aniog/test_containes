import { ugcContent } from '../../data/products';

export default function UGC() {
  return (
    <section className="py-20 bg-primary overflow-hidden">
      <div className="container mb-8">
        <h2 className="font-serif text-h2 text-secondary text-center">Styled by You</h2>
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcContent.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 snap-center"
          >
            <div className="relative aspect-[9/16] overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-primary text-lg italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}