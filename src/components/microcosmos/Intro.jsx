export default function Intro() {
  return (
    <section id="overview" className="relative py-24 md:py-32 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span
            id="intro-eyebrow"
            className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold"
          >
            What is the MicroCosmos
          </span>
          <h2
            id="intro-title"
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-50"
            style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
          >
            A universe smaller than a grain of sand
          </h2>
          <p
            id="intro-desc"
            className="text-base md:text-lg text-slate-300 leading-relaxed"
          >
            The MicroCosmos is the realm of life invisible to the naked eye — the
            bacteria, archaea, protists, fungi and microscopic animals that
            outnumber every star in the observable universe. They breathe, hunt,
            cooperate and compete, sculpting the chemistry of our planet from
            the deep ocean floor to the soil beneath your feet.
          </p>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Through the lens of a microscope, ordinary droplets reveal a fierce
            and beautiful theatre. This is a quiet ode to that hidden majority.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-6">
            <div>
              <div className="text-3xl font-extrabold text-cyan-400">~10³⁰</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                Microbes on Earth
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-emerald-400">99%</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                Yet undiscovered
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-amber-400">3.5B</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                Years of evolution
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 h-[480px] md:h-[600px]">
          <div className="col-span-4 row-span-4 rounded-2xl overflow-hidden border border-slate-800 group">
            <img
              alt="Single cell organism under microscope"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id="intro-feature-cell-3a91"
              data-strk-img="[intro-desc] [intro-title] single cell organism microscope"
              data-strk-img-ratio="1x1"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden border border-slate-800 group">
            <img
              alt="Vivid stained tissue cells"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id="intro-feature-tissue-2b4c"
              data-strk-img="[intro-title] stained tissue cells microscopy"
              data-strk-img-ratio="2x3"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden border border-slate-800 group">
            <img
              alt="Microscopic algae"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id="intro-feature-algae-c4f7"
              data-strk-img="[intro-title] microscopic algae green"
              data-strk-img-ratio="2x3"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden border border-slate-800 group">
            <img
              alt="Crystallized microscopic structure"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id="intro-feature-crystal-86d2"
              data-strk-img="[intro-title] crystal microscope polarized"
              data-strk-img-ratio="3x2"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden border border-slate-800 group">
            <img
              alt="Microscopic plankton"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              data-strk-img-id="intro-feature-plankton-9e10"
              data-strk-img="[intro-title] plankton microscopy ocean"
              data-strk-img-ratio="3x2"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
