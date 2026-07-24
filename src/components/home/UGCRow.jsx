import { ugcContent } from '../../data/products';

export default function UGCRow() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="section-title">As Seen on You</h2>
        <p className="section-subtitle">
          Real styles from our community. Tag @velmorajewelry to be featured.
        </p>
      </div>

      <div className="overflow-x-auto ugc-scroll">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pb-4" style={{ width: 'max-content' }}>
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-warm-100 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-xs italic leading-relaxed font-serif">
                    &ldquo;{item.caption}&rdquo;
                  </p>
                  <p className="text-white/60 text-[10px] uppercase tracking-wider mt-1.5 font-sans">
                    {item.handle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}