import { stats } from './data';

export default function Intro() {
  return (
    <section className="relative bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
              The hidden frontier
            </span>
            <h2
              id="intro-title"
              className="mt-4 font-serif text-4xl font-bold leading-tight text-slate-50 md:text-5xl"
            >
              A whole cosmos, smaller than a grain of sand
            </h2>
            <p
              id="intro-desc"
              className="mt-6 text-lg leading-relaxed text-slate-300"
            >
              The microscope is a portal. Through it, the ordinary becomes
              extraordinary — a fleck of dust turns into a cathedral, a puddle
              becomes an ocean teeming with life. MicroCosmos is a visual
              expedition through this unseen realm, where every frame rewrites
              what we thought we knew about scale, beauty and survival.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              From the crystalline skeletons of diatoms to the armored eyes of
              insects, these are the landscapes that shape our world — quietly,
              invisibly, all around us.
            </p>
          </div>

          {/* Feature image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                alt="Microscopic life"
                className="h-full w-full object-cover"
                data-strk-img-id="intro-img-2b8c1d"
                data-strk-img="[intro-desc] [intro-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-ink-soft/90 px-6 py-4 backdrop-blur-sm md:block">
              <p className="font-serif text-2xl font-bold text-emerald-300">1665</p>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                first glimpse of a cell
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-4xl font-bold text-slate-50 md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
