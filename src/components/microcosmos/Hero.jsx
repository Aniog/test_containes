import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 md:pt-44 pb-24 md:pb-32"
    >
      {/* Background photographic layer */}
      <div
        className="absolute inset-0 -z-20"
        data-strk-bg-id="microcosmos-hero-bg-9c4f1a"
        data-strk-bg="[hero-subtitle] [hero-title] microscopic cell organisms vivid blue"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cosmos-bg/95 via-cosmos-bg/85 to-cosmos-bg" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cosmos-bg via-cosmos-bg/70 to-cosmos-bg/40" />
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-cosmos-accent/20 blur-[140px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-cosmos-accent-2/20 blur-[160px] animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <span
            id="hero-eyebrow"
            className="inline-flex items-center gap-2 rounded-full border border-cosmos-border bg-cosmos-surface/60 backdrop-blur px-3 py-1 text-xs font-mono uppercase tracking-[0.25em] text-cosmos-accent"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Field Journal · Vol. 07
          </span>

          <h1
            id="hero-title"
            className="mt-6 font-display tracking-tight text-5xl md:text-7xl leading-[1.05] text-cosmos-fg"
          >
            The universe lives{" "}
            <span className="bg-cosmos-gradient bg-clip-text text-transparent">
              inside a single drop.
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-cosmos-muted max-w-2xl leading-relaxed"
          >
            MicroCosmos is a research-grade visual atlas of microscopic life — diatoms,
            ciliates, spores, and crystalline waterborne worlds, captured at 400× and beyond.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-full bg-cosmos-gradient text-cosmos-bg font-medium px-6 py-3 hover:opacity-90 transition"
            >
              Enter the gallery
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-cosmos-border text-cosmos-fg px-6 py-3 hover:bg-cosmos-surface-2 transition"
            >
              How we capture it
            </a>
          </div>

          {/* Stats */}
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { v: "1,284", k: "Specimens cataloged" },
              { v: "62", k: "Habitats sampled" },
              { v: "4K", k: "Captures per drop" },
              { v: "1000×", k: "Maximum magnification" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-display text-3xl md:text-4xl bg-cosmos-gradient bg-clip-text text-transparent">
                  {s.v}
                </dt>
                <dd className="mt-1 text-xs font-mono uppercase tracking-[0.18em] text-cosmos-muted">
                  {s.k}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
