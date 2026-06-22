import { ArrowRight } from 'lucide-react';

const features = [
  {
    id: "plant-cells",
    title: "Plant Architecture",
    desc: "Discover the rigid yet beautiful cell walls that give plants their structure.",
    imgId: "feat-img-1"
  },
  {
    id: "water-bears",
    title: "Tardigrades",
    desc: "Meet the indestructible microorganisms that can survive in outer space.",
    imgId: "feat-img-2"
  },
  {
    id: "crystal-structures",
    title: "Crystal Lattices",
    desc: "Explore the symmetric geometric perfection found in chemical crystals.",
    imgId: "feat-img-3"
  }
];

export default function FeatureSection() {
  return (
    <section id="wonders" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="feature-section-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Hidden <span className="text-emerald-400">Realms</span>
          </h2>
          <p id="feature-section-desc" className="text-neutral-400 max-w-2xl mx-auto">
            Beyond the limits of the human eye lies a universe of staggering complexity and beauty. Here are a few notable subjects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feat) => (
            <article key={feat.id} className="group flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors">
              <div className="relative h-64 overflow-hidden bg-neutral-800">
                <img 
                  data-strk-img-id={feat.imgId}
                  data-strk-img={`[feat-desc-${feat.id}] [feat-title-${feat.id}] [feature-section-title] microscopic`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 id={`feat-title-${feat.id}`} className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                <p id={`feat-desc-${feat.id}`} className="text-neutral-400 mb-6 flex-grow">{feat.desc}</p>
                <div className="flex items-center text-emerald-400 font-medium cursor-pointer group-hover:text-emerald-300">
                  Read more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}