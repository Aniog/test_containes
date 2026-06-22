const IntroSection = () => {
  return (
    <section id="intro" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cosmos-violet uppercase tracking-widest text-xs font-semibold mb-3">
              The Unseen World
            </p>
            <h2
              id="intro-title"
              className="font-heading text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Life Beyond the Naked Eye
            </h2>
            <p
              id="intro-desc"
              className="text-gray-300 text-lg leading-relaxed mb-6"
            >
              Beneath every surface, within every drop of water, and inside every living being exists a universe of microscopic wonders. The microcosmos is home to trillions of organisms that shape our world in ways we are only beginning to understand.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From the intricate architecture of diatoms to the pulsing rhythm of paramecia, the microscopic world reveals patterns of extraordinary beauty and complexity that rival anything visible to the naked eye.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/30">
              <img
                alt="Microscopic organisms in water"
                data-strk-img-id="intro-img-a3f8b2"
                data-strk-img="[intro-desc] [intro-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cosmos-accent/10 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cosmos-violet/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
