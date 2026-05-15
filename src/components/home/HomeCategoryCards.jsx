import { Link } from 'react-router-dom';
import { Leaf, Zap, Activity, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'plant',
    icon: Leaf,
    accentColor: 'bio-green',
    accentHex: '#10B981',
    label: 'Domain I',
    title: 'Plant Anatomy & Histology',
    description:
      'Investigate the geometric precision of plant cell architecture — from the lignified walls of xylem vessels to the delicate parenchyma of leaf mesophyll. Understand how structural biology enables fluid transport and photosynthetic efficiency.',
    tags: ['Xylem', 'Phloem', 'Epidermis', 'Parenchyma'],
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80&fit=crop',
    to: '/specimens#plant',
  },
  {
    id: 'protists',
    icon: Zap,
    accentColor: 'bio-cyan',
    accentHex: '#06B6D4',
    label: 'Domain II',
    title: 'Protists & Single-Celled Organisms',
    description:
      'Enter the micro-zoo — a realm where single cells exhibit complex behaviors. Observe Paramecia navigating via cilia, Amoebae reshaping their bodies through pseudopodial extension, and the extraordinary survival mechanisms of Tardigrades.',
    tags: ['Paramecium', 'Amoeba', 'Tardigrade', 'Volvox'],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop',
    to: '/specimens#protists',
  },
  {
    id: 'cytology',
    icon: Activity,
    accentColor: 'bio-orange',
    accentHex: '#F97316',
    label: 'Domain III',
    title: 'Human Tissues & Pathology',
    description:
      'Examine the cellular canvas of human biology through the lens of clinical pathology. Analyze stained blood smears, identify erythrocyte morphology, and understand how differential staining techniques reveal diagnostic anomalies.',
    tags: ['Erythrocytes', 'Neutrophils', 'H&E Stain', 'Blood Smear'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80&fit=crop',
    to: '/specimens#cytology',
  },
];

const CategoryCard = ({ category }) => {
  const Icon = category.icon;
  return (
    <Link
      to={category.to}
      className="group relative flex flex-col bg-charcoal border border-border-dim rounded-2xl overflow-hidden hover:border-opacity-50 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
      style={{ '--accent': category.accentHex }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        {/* Icon badge */}
        <div
          className="absolute top-4 left-4 w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${category.accentHex}18`, border: `1px solid ${category.accentHex}30` }}
        >
          <Icon className="w-4 h-4" style={{ color: category.accentHex }} />
        </div>
        {/* Label */}
        <div className="absolute top-4 right-4">
          <span
            className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full"
            style={{ color: category.accentHex, backgroundColor: `${category.accentHex}15` }}
          >
            {category.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-text-primary font-semibold text-lg mb-3 leading-snug group-hover:text-white transition-colors">
          {category.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
          {category.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {category.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border"
              style={{ color: `${category.accentHex}CC`, borderColor: `${category.accentHex}25`, backgroundColor: `${category.accentHex}08` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-sm font-medium transition-all duration-200"
          style={{ color: category.accentHex }}
        >
          Explore Domain
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: category.accentHex }}
      />
    </Link>
  );
};

const HomeCategoryCards = () => {
  return (
    <section className="py-24 md:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-bio-green" />
              <span className="font-mono text-[11px] text-bio-green tracking-widest uppercase">
                Biological Domains
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
              Three Kingdoms,<br />
              <span className="text-text-secondary font-light">One Microscope</span>
            </h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
            Navigate through curated specimen collections organized by biological domain. Each section offers annotated micrographs, technical analysis, and interactive data.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategoryCards;
