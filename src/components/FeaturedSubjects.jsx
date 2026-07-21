import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const subjects = [
  {
    id: 'subj-bacteria', imgId: 'subj-img-mc-bacteria',
    titleId: 'subj-title-bacteria', descId: 'subj-desc-bacteria',
    category: 'Prokaryote',
    title: 'Bacteria',
    desc: 'The most abundant life forms on Earth, bacteria are single-celled organisms found in every environment — from boiling hot springs to frozen tundra.',
    color: 'from-cosmos-teal/20 to-transparent',
    accent: 'text-cosmos-teal',
    border: 'border-cosmos-teal/30',
  },
  {
    id: 'subj-virus', imgId: 'subj-img-mc-virus',
    titleId: 'subj-title-virus', descId: 'subj-desc-virus',
    category: 'Pathogen',
    title: 'Viruses',
    desc: 'Smaller than bacteria, viruses are molecular machines that hijack living cells to replicate. Their geometric protein shells are marvels of natural engineering.',
    color: 'from-cosmos-purple/20 to-transparent',
    accent: 'text-cosmos-purple',
    border: 'border-cosmos-purple/30',
  },
  {
    id: 'subj-fungi', imgId: 'subj-img-mc-fungi',
    titleId: 'subj-title-fungi', descId: 'subj-desc-fungi',
    category: 'Eukaryote',
    title: 'Fungi & Mold',
    desc: 'Microscopic fungi form vast underground networks and produce spores of extraordinary beauty. They are nature\'s recyclers, breaking down organic matter.',
    color: 'from-cosmos-cyan/20 to-transparent',
    accent: 'text-cosmos-cyan',
    border: 'border-cosmos-cyan/30',
  },
  {
    id: 'subj-plankton', imgId: 'subj-img-mc-plankton',
    titleId: 'subj-title-plankton', descId: 'subj-desc-plankton',
    category: 'Marine',
    title: 'Plankton',
    desc: 'Microscopic ocean drifters that form the base of marine food chains. Phytoplankton produce over half of Earth\'s oxygen through photosynthesis.',
    color: 'from-cosmos-teal/20 to-transparent',
    accent: 'text-cosmos-teal',
    border: 'border-cosmos-teal/30',
  },
  {
    id: 'subj-protozoa', imgId: 'subj-img-mc-protozoa',
    titleId: 'subj-title-protozoa', descId: 'subj-desc-protozoa',
    category: 'Protist',
    title: 'Protozoa',
    desc: 'Single-celled eukaryotes with complex behaviors — hunting, swimming, and even forming temporary colonies. Amoeba and paramecia are classic examples.',
    color: 'from-cosmos-purple/20 to-transparent',
    accent: 'text-cosmos-purple',
    border: 'border-cosmos-purple/30',
  },
  {
    id: 'subj-nematode', imgId: 'subj-img-mc-nematode',
    titleId: 'subj-title-nematode', descId: 'subj-desc-nematode',
    category: 'Invertebrate',
    title: 'Nematodes',
    desc: 'Microscopic roundworms that inhabit nearly every ecosystem on Earth. A single handful of soil can contain thousands of these transparent creatures.',
    color: 'from-cosmos-cyan/20 to-transparent',
    accent: 'text-cosmos-cyan',
    border: 'border-cosmos-cyan/30',
  },
];

export default function FeaturedSubjects() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="subjects" ref={containerRef} className="bg-cosmos-dark py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-cosmos-teal mb-4">
            Meet the Inhabitants
          </p>
          <h2
            id="subjects-section-title"
            className="text-4xl md:text-5xl font-bold text-cosmos-light mb-4"
          >
            Creatures of the Micro World
          </h2>
          <p id="subjects-section-desc" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            From ancient bacteria to complex protozoa, the microscopic world is populated by an astonishing diversity of life forms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`group relative rounded-2xl overflow-hidden border ${subject.border} bg-cosmos-card hover:shadow-glow-sm transition-all duration-300`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={subject.title}
                  data-strk-img-id={subject.imgId}
                  data-strk-img={`[${subject.descId}] [${subject.titleId}] [subjects-section-desc] [subjects-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${subject.color}`} />
                <span className={`absolute top-3 left-3 text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-cosmos-dark/70 ${subject.accent}`}>
                  {subject.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 id={subject.titleId} className="text-cosmos-light text-xl font-bold mb-2">
                  {subject.title}
                </h3>
                <p id={subject.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {subject.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
