import StockImage from '../common/StockImage.jsx'

const UgcReels = ({ reels }) => (
  <section id="journal" className="bg-velmora-forest px-5 py-16 text-velmora-cream lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagne">Worn by Velmora</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-cream md:text-6xl">Quiet moments, golden details</h2>
        </div>
        <p className="max-w-sm text-sm leading-7 text-velmora-ivory/75">A reel-style glimpse of the pieces in natural light, evening plans, and everyday rituals.</p>
      </div>
      <div className="flex snap-x gap-4 overflow-x-auto pb-4 velmora-scrollbar" aria-label="Social video inspired jewelry cards">
        {reels.map((reel) => (
          <article key={reel.id} className="group relative h-[27rem] w-[15.2rem] shrink-0 snap-start overflow-hidden rounded-[1.6rem] border border-velmora-champagne/30 bg-velmora-ink shadow-soft sm:h-[32rem] sm:w-[18rem]">
            <StockImage
              id={reel.imageId}
              query={`[${reel.titleId}] [ugc-section-title]`}
              ratio="9x16"
              width="600"
              alt={reel.caption}
              className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/80 via-transparent to-transparent" />
            <p id={reel.titleId} className="absolute bottom-5 left-5 right-5 font-serif text-3xl italic leading-none text-velmora-cream">
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
      <p id="ugc-section-title" className="sr-only">Gold jewelry worn on ear and neck in warm editorial social reels</p>
    </div>
  </section>
)

export default UgcReels
