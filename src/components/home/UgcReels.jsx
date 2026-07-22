import EditorialVisual from '@/components/common/EditorialVisual.jsx'

const reels = [
  { id: 'reel-ear-stack', type: 'earrings', caption: 'A quiet stack for candlelit dinners' },
  { id: 'reel-necklace', type: 'necklace', caption: 'Soft gold at the collarbone' },
  { id: 'reel-huggies', type: 'huggies', caption: 'Everyday huggies, elevated' },
  { id: 'reel-gift', type: 'gift', caption: 'A little box with lasting shine' },
  { id: 'reel-morning', type: 'earrings', caption: 'Morning light, polished details' },
]

export default function UgcReels() {
  return (
    <section id="journal" className="border-y border-velmora-mist bg-velmora-espresso py-16 text-velmora-ivory md:py-20">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">Seen on you</p>
            <h2 id="reels-title" className="mt-3 font-serif text-4xl font-medium text-velmora-ivory md:text-6xl">Real moments, refined shine</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-ivory/75">A reel-style look at the way Velmora moves through everyday rituals and special evenings.</p>
        </div>
        <div className="no-scrollbar flex snap-x gap-5 overflow-x-auto pb-2">
          {reels.map((reel) => (
            <article key={reel.id} className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden bg-velmora-cacao md:w-64">
              <EditorialVisual type={reel.type} palette="dark" label={reel.caption} className="absolute inset-0 transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-velmora-espresso/10 to-transparent" />
              <p id={`${reel.id}-caption`} className="absolute inset-x-5 bottom-5 font-serif text-2xl leading-tight text-velmora-ivory">{reel.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
