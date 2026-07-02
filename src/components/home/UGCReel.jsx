import { ugcItems } from '@/data/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function UGCReel() {
  const headerRef = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-ivory-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-10">
          <p className="text-xs tracking-mega-wide uppercase text-gold-500 font-medium mb-3">Styled by You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 font-light">
            #VelmoraOnYou
          </h2>
          <div className="w-16 h-[1px] bg-gold-400 mx-auto mt-5" />
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-4">
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] relative rounded-xl overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            <div
              className="absolute inset-0"
              data-strk-bg-id={`ugc-reel-${item.id}-${i}`}
              data-strk-bg={item.imgSearch}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-lg text-ivory-50 italic leading-tight">
                {item.caption}
              </p>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 ring-2 ring-gold-400/0 group-hover:ring-gold-400/60 rounded-xl transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
