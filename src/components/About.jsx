const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-cosmos-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cosmos-teal/20 to-cosmos-cyan/10 blur-sm group-hover:blur-md transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                data-strk-img-id="about-img-mc3c4d"
                data-strk-img="[about-desc-mc3c4d] [about-title-mc3c4d]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic view of cells and microorganisms"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black/50 to-transparent" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-4 -right-4 bg-cosmos-card border border-cosmos-border rounded-xl p-4 shadow-glow">
              <p className="text-cosmos-teal font-display font-bold text-3xl">10<sup>30</sup></p>
              <p className="text-cosmos-secondary text-xs mt-1">Microbes on Earth</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-cosmos-teal text-sm font-sans font-medium tracking-[0.3em] uppercase mb-4">
              About MicroCosmos
            </p>
            <h2
              id="about-title-mc3c4d"
              className="font-display font-bold text-4xl md:text-5xl text-cosmos-text leading-tight mb-6"
            >
              A Universe Hidden in Plain Sight
            </h2>
            <p
              id="about-desc-mc3c4d"
              className="text-cosmos-secondary text-lg leading-relaxed mb-6"
            >
              Beneath the surface of every drop of water, every grain of soil, and every breath of air
              lies an entire universe teeming with life. Microorganisms — bacteria, archaea, fungi,
              protozoa, and viruses — have shaped our planet for over 3.5 billion years.
            </p>
            <p className="text-cosmos-secondary leading-relaxed mb-8">
              MicroCosmos is a visual celebration of this invisible world, bringing the stunning
              beauty of microscopic life into focus through the art of scientific photography.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '3.5B', label: 'Years of Life' },
                { value: '1T+', label: 'Species Estimated' },
                { value: '60%', label: 'Earth\'s Biomass' },
                { value: '37T', label: 'Cells in Human Body' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-cosmos-teal pl-4">
                  <p className="text-cosmos-teal font-display font-bold text-2xl">{stat.value}</p>
                  <p className="text-cosmos-muted text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
