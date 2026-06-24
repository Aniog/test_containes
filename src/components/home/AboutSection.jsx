import { Microscope, Eye, Dna } from 'lucide-react';

const PILLARS = [
  {
    icon: Microscope,
    title: 'Microscopic Scale',
    description:
      'Most microorganisms measure between 0.1 and 100 micrometres — a human hair is roughly 70 micrometres wide. At this scale, physics itself behaves differently.',
  },
  {
    icon: Eye,
    title: 'Invisible Abundance',
    description:
      'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. They are everywhere — in the air, deep ocean trenches, and even inside us.',
  },
  {
    icon: Dna,
    title: 'Foundation of Life',
    description:
      'Microorganisms drive the cycles of carbon, nitrogen, and oxygen that make complex life possible. Without them, ecosystems would collapse within weeks.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 bg-[#080f1f] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#00d4ff]/30" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block text-[#00d4ff] text-sm font-medium tracking-widest uppercase mb-4">
              What is MicroCosmos?
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A universe hidden in plain sight
            </h2>
            <p className="text-[#8ab4c8] text-lg leading-relaxed mb-6">
              MicroCosmos is a journey into the world of microorganisms — bacteria, archaea, fungi,
              algae, protozoa, and viruses. These ancient life forms have inhabited Earth for over
              3.5 billion years, long before plants or animals ever existed.
            </p>
            <p className="text-[#8ab4c8] text-lg leading-relaxed mb-8">
              Modern microscopy and imaging technology have finally allowed us to witness their
              extraordinary complexity, beauty, and diversity. What was once invisible is now
              revealed in stunning detail.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-[#00d4ff]/50" />
              <span className="text-[#4a6a7a] text-sm italic">
                "The invisible world is the real world." — Antonie van Leeuwenhoek
              </span>
            </div>
          </div>

          {/* Right: pillar cards */}
          <div className="flex flex-col gap-5">
            {PILLARS.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 p-6 bg-[#0d1a2e] border border-[#1a2d4a] rounded-2xl hover:border-[#00d4ff]/40 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold text-lg mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[#8ab4c8] text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
