import { placeholderImage, ugcMoments } from '@/data/storeData'

function UGCReel() {
  return (
    <section className="border-y border-mist/70 bg-sand/35 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-3">
          <p className="text-xs uppercase tracking-luxe text-champagne">Worn in real life</p>
          <h2 id="ugc-title" className="text-4xl sm:text-5xl">
            A reel of soft gold moments
          </h2>
        </div>

        <div className="flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {ugcMoments.map((moment) => (
            <article
              key={moment.id}
              className="group relative min-w-[240px] snap-start overflow-hidden rounded-[2rem] border border-mist/60 bg-obsidian shadow-card sm:min-w-[270px]"
            >
              <img
                src={placeholderImage}
                alt={moment.title}
                className="aspect-[9/16] w-full object-cover transition duration-500 group-hover:scale-105"
                data-strk-img-id={`ugc-${moment.id}-img-73bf1a`}
                data-strk-img={`[ugc-${moment.id}-caption] [ugc-${moment.id}-title] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-ivory">
                <h3 id={`ugc-${moment.id}-title`} className="text-3xl text-ivory">
                  {moment.title}
                </h3>
                <p id={`ugc-${moment.id}-caption`} className="text-sm leading-7 text-ivory/80">
                  {moment.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UGCReel
