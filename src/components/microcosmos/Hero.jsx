import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end overflow-hidden pt-16"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="microcosmos-hero-bg-9c4f2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos-bg/80 via-cosmos-bg/40 to-cosmos-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-cosmos-bg/70 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 w-full">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-cosmos-accent" />
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-cosmos-accent">
            A Visual Journey · Volume 01
          </span>
        </div>

        <h1
          id="hero-title"
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-cosmos-text max-w-5xl leading-[1.05]"
        >
          MicroCosmos
          <span className="block text-cosmos-muted italic font-normal text-3xl md:text-5xl lg:text-6xl mt-4">
            the universe hidden inside a single drop.
          </span>
        </h1>

        <p
          id="hero-subtitle"
          className="mt-8 max-w-2xl text-base md:text-lg text-cosmos-muted leading-relaxed"
        >
          A photographic exhibition exploring the unseen world: living cells,
          luminous microbes, breathing crystals, and the architecture of pollen,
          insects, and mineral life — captured under the microscope.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cosmos-accent text-cosmos-bg font-medium hover:bg-cosmos-accent/90 transition-colors duration-300"
          >
            Enter the Gallery
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#stories"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cosmos-line text-cosmos-text hover:border-cosmos-accent transition-colors duration-300"
          >
            Read the Stories
          </a>
        </div>

        {/* Stats strip */}
        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            { value: "240+", label: "Specimens" },
            { value: "18", label: "Microscopes" },
            { value: "12", label: "Countries" },
            { value: "1µm", label: "Smallest Detail" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-l border-cosmos-line pl-4"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.2em] text-cosmos-muted">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-2xl md:text-3xl text-cosmos-text">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
