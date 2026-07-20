import { ugcContent } from '../../data/products';

export default function UGCSection() {
  return (
    <section className="py-16 bg-velmora-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-3xl text-velmora-cream text-center">Styled by You</h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory scrollbar-hide">
        {ugcContent.map((item) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-velmora-cream text-sm italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}