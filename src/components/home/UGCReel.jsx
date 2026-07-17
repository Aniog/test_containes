import { ugcItems } from '../../data/products';

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-10 px-4">
        <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">Styled by You</h2>
        <div className="w-12 h-px bg-[#C5A572] mx-auto mt-4" />
        <p className="font-sans text-sm text-[#6B6560] mt-3">@velmorajewelry</p>
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 lg:px-16 w-max">
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-[200px] md:w-[240px] h-[320px] md:h-[380px] flex-shrink-0 overflow-hidden rounded-lg group cursor-pointer">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-base text-[#FAF8F5] drop-shadow-lg">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
