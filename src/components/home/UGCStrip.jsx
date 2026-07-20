import { ugcContent } from '../../data/products';

const UGCStrip = () => {
  return (
    <section className="section bg-[#0D0D0D] overflow-hidden">
      <div className="container mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-[#F5F5F0] text-center">
          As Seen On You
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-0 md:justify-center">
          {ugcContent.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[160px] sm:w-[180px] animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-serif text-sm text-[#F5F5F0] italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Hint (Desktop) */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default UGCStrip;