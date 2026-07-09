import { gallery } from './data';

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
              The gallery
            </span>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-slate-50 md:text-5xl">
              Eight windows into the unseen
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-400">
            A curated set of close-ups — each one a complete world compressed
            into a fraction of a millimeter.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <figure
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-soft shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={item.title}
                  className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80" />
              </div>
              <figcaption className="p-5">
                <h3
                  id={item.titleId}
                  className="font-serif text-lg font-bold text-slate-50"
                >
                  {item.title}
                </h3>
                <p
                  id={item.descId}
                  className="mt-1 text-sm leading-snug text-slate-400"
                >
                  {item.desc}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
