import { reels } from '@/data/products';

const ReelsStrip = () => (
  <section className="bg-velmora-ink text-velmora-cream py-24 md:py-32 overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-4">@velmora</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
            Worn in the world.
          </h2>
        </div>
        <a
          href="#"
          className="text-xs uppercase tracking-[0.3em] border-b border-velmora-cream/60 pb-1 self-start hover:text-velmora-gold hover:border-velmora-gold transition-colors"
        >
          Follow on Instagram
        </a>
      </div>
    </div>

    <div className="max-w-[1400px] mx-auto pl-6 md:pl-10 lg:pl-16">
      <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pr-6 md:pr-10 lg:pr-16 snap-x snap-mandatory">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="snap-start relative flex-shrink-0 w-[64vw] sm:w-[40vw] md:w-[260px] lg:w-[280px] aspect-[9/16] bg-velmora-ink/50 overflow-hidden group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={`reel-${reel.id}`}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-velmora-ink/10 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-serif text-xl md:text-2xl text-velmora-cream font-light leading-tight">
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ReelsStrip;
