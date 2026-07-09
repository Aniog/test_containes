import { worlds } from './data';

export default function Worlds() {
  return (
    <section id="worlds" className="relative bg-ink-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
            Four micro worlds
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-slate-50 md:text-5xl">
            Landscapes of the infinitely small
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Each world is a complete ecosystem, invisible until the lens reveals
            it. Here are four of the most astonishing.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20">
          {worlds.map((w, i) => (
            <article
              key={w.id}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              {/* Image */}
              <div
                className={`overflow-hidden rounded-3xl border border-white/10 shadow-2xl ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  alt={w.title}
                  className="aspect-[4x3] h-full w-full object-cover transition duration-700 hover:scale-105"
                  data-strk-img-id={w.imgId}
                  data-strk-img={`[${w.descId}] [${w.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-4">
                  <span className="font-serif text-5xl font-bold text-emerald-300/30">
                    0{i + 1}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                    {w.statLabel}
                  </span>
                </div>
                <h3
                  id={w.titleId}
                  className="mt-3 font-serif text-3xl font-bold text-slate-50 md:text-4xl"
                >
                  {w.title}
                </h3>
                <p
                  id={w.descId}
                  className="mt-4 text-lg leading-relaxed text-emerald-200/90"
                >
                  {w.desc}
                </p>
                <p className="mt-3 text-base leading-relaxed text-slate-400">
                  {w.detail}
                </p>
                <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2">
                  <span className="font-serif text-xl font-bold text-emerald-300">
                    {w.stat}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-slate-400">
                    {w.statLabel}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
