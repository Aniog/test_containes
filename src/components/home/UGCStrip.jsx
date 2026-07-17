import ImageSlot from '../common/ImageSlot.jsx?probe=velmora17'
import { ugcStories } from '@/data/products.js'
export default function UGCStrip() {
  return (
    <section id="journal" className="bg-velmora-espresso py-16 text-velmora-ivory md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Worn in the light</p><h2 id="ugc-title" className="mt-3 font-serif text-5xl text-velmora-ivory md:text-6xl">Velmora Moments</h2></div><p id="ugc-subtitle" className="max-w-sm text-sm leading-7 text-velmora-ivory/70">A reel-inspired strip of ear stacks, neck layers, and golden gift moments.</p></div>
        <div className="flex snap-x gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{ugcStories.map((story) => { const captionId = `ugc-${story.id}-caption`; return <article key={story.id} className="group relative h-[30rem] min-w-[16.5rem] snap-start overflow-hidden bg-velmora-blush shadow-soft sm:min-w-[19rem]"><ImageSlot id={`ugc-${story.id}-img`} query={`[${captionId}] [ugc-subtitle] [ugc-title]`} ratio="9x16" width="600" alt={story.caption} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/78 via-transparent to-transparent" /><p id={captionId} className="absolute bottom-5 left-5 right-5 font-serif text-3xl leading-none text-velmora-ivory">{story.caption}</p></article> })}</div>
      </div>
    </section>
  )
}
