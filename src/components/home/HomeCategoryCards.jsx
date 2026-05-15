import { Link } from 'react-router-dom';
import { Leaf, Zap, Activity, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'plant',
    icon: Leaf,
    accentColor: 'bio-green',
    accentHex: '#10B981',
    label: '01 — Plant Sciences',
    title: 'Plant Anatomy & Histology',
    description:
      'Traverse the geometric precision of vascular bundles, the crystalline order of cellulose microfibrils, and the photosynthetic machinery embedded within chloroplast grana.',
    tags: ['Xylem', 'Phloem', 'Epidermis', 'Parenchyma'],
    image:
      'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80&fit=crop',
    path: '/specimens#plant',
  },
  {
    id: 'protists',
    icon: Zap,
    accentColor: 'bio-cyan',
    accentHex: '#06B6D4',
    label: '02 — Microbiology',
    title: 'Protists & Single-Celled Organisms',
    description:
      'Observe the elegant locomotion of cilia-driven Paramecia, the fluid dynamics of amoeboid pseudopodia, and the cryptobiotic resilience of tardigrades in extreme environments.',
    tags: ['Paramecium', 'Amoeba', 'Tardigrade', 'Euglena'],
    image:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80&fit=crop',
    path: '/specimens#protists',
  },
  {
    id: 'human',
    icon: Activity,
    accentColor: 'bio-orange',
    accentHex: '#F97316',
    label: '03 — Human Biology',
    title: 'Human Tissues & Pathology',
    description:
      'Examine the biconcave morphology of erythrocytes, the multi-lobed nuclei of neutrophils, and the diagnostic power of haematoxylin-eosin staining in clinical pathology.',
    tags: ['Erythrocytes', 'Neutrophils', 'H&E Stain', 'Cytology'],
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80&fit=crop',
    path: '/specimens#human',
  },
];

export default function HomeCategoryCards() {
  return (
    <section className="bg-charcoal py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-bio-cyan" />
              <span className="font-mono-lab text-bio-cyan text-xs tracking-widest uppercase">
                Specimen Domains
              </span>
            </div>
            <h2 className="font-grotesk font-bold text-primary-text text-3xl md:text-4xl">
              Three Kingdoms of<br />
              <span className="text-secondary-text font-light">Microscopic Life</span>
            </h2>
          </div>
          <Link
            to="/specimens"
            className="group flex items-center gap-2 text-secondary-text hover:text-bio-green text-sm font-inter transition-colors"
          >
            View All Specimens
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                to={cat.path}
                className="group relative bg-card-dark border border-subtle rounded-sm overflow-hidden hover:border-opacity-60 transition-all duration-500 slide-card"
                style={{ '--accent': cat.accentHex }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-card-dark/40 to-transparent" />
                  {/* Index */}
                  <span className="absolute top-4 right-4 font-mono-lab text-xs text-muted-text tracking-widest">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon
                      className="w-4 h-4 transition-colors duration-300"
                      style={{ color: cat.accentHex }}
                      strokeWidth={1.5}
                    />
                    <span
                      className="font-mono-lab text-xs tracking-widest uppercase"
                      style={{ color: cat.accentHex }}
                    >
                      {cat.label}
                    </span>
                  </div>

                  <h3 className="font-grotesk font-semibold text-primary-text text-lg mb-3 leading-snug">
                    {cat.title}
                  </h3>

                  <p className="font-inter text-secondary-text text-sm leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-lab text-xs px-2 py-1 border border-subtle text-muted-text rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 text-sm font-inter transition-colors duration-300"
                    style={{ color: cat.accentHex }}
                  >
                    Explore Section
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: cat.accentHex }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
