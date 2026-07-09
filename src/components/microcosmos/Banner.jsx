export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="banner-bg-9e2f4a"
        data-strk-bg="[banner-title] [banner-desc]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-ink/75" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
          Look closer
        </span>
        <h2
          id="banner-title"
          className="mt-5 font-serif text-4xl font-bold leading-tight text-slate-50 md:text-6xl"
        >
          The most ordinary surface hides an ocean
        </h2>
        <p
          id="banner-desc"
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
        >
          A leaf, a feather, a flake of snow — magnified a thousand times, each
          becomes a landscape as vast and strange as any galaxy. The micro world
          is not small. It is endless.
        </p>
      </div>
    </section>
  );
}
