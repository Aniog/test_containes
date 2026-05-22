import { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Tag } from 'lucide-react';
import ScientificTooltip from './ScientificTooltip';
import { glossary } from '../data/specimens';

export default function SpecimenCard({ specimen, index }) {
  const [expanded, setExpanded] = useState(false);

  const categoryColors = {
    'Plant Histology': 'bg-ink/5 text-ink border-ink/20',
    'Protists': 'bg-charcoal/10 text-charcoal border-charcoal/20',
    'Human Cytology': 'bg-graphite/10 text-graphite border-graphite/20',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-bone border border-ash rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] bg-charcoal/5 overflow-hidden">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={specimen.commonName}
          data-strk-img-id={specimen.imageId}
          data-strk-img={`[spec-name-${specimen.id}] [spec-cat-${specimen.id}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ filter: 'grayscale(100%) contrast(1.1)' }}
        />
        {/* Overlay with ID */}
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[10px] tracking-widest text-white/90 glass-dark px-2 py-1 rounded-md">
            {specimen.id}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="font-mono text-[10px] tracking-widest text-white/90 glass-dark px-2 py-1 rounded-md">
            {specimen.magnification}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span
              id={`spec-cat-${specimen.id}`}
              className={`inline-block text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border mb-2 ${categoryColors[specimen.category] || 'bg-ash text-graphite border-ash'}`}
            >
              {specimen.category}
            </span>
            <h3
              id={`spec-name-${specimen.id}`}
              className="font-serif text-lg font-semibold text-ink leading-tight"
            >
              {specimen.commonName}
            </h3>
            <p className="text-xs font-mono text-graphite italic mt-0.5">{specimen.name}</p>
          </div>
          <FlaskConical className="w-5 h-5 text-silver flex-shrink-0 mt-1" />
        </div>

        <p className="text-sm text-charcoal leading-relaxed line-clamp-3">
          {specimen.description}
        </p>

        {/* Structures */}
        <div className="mt-4">
          <p className="text-[10px] font-mono text-graphite tracking-widest uppercase mb-2 flex items-center gap-1">
            <Tag className="w-3 h-3" /> Key Structures
          </p>
          <div className="flex flex-wrap gap-1.5">
            {specimen.structures.map((s) => (
              <span key={s} className="text-xs px-2 py-0.5 bg-ash/60 rounded-full text-charcoal">
                {glossary[s.toLowerCase()] ? (
                  <ScientificTooltip term={s.toLowerCase()}>{s}</ScientificTooltip>
                ) : s}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-4 pt-4 border-t border-ash grid grid-cols-2 gap-2">
          <div>
            <p className="text-[9px] font-mono text-silver tracking-widest uppercase">Stain</p>
            <p className="text-xs text-charcoal mt-0.5">{specimen.stain}</p>
          </div>
          <div>
            <p className="text-[9px] font-mono text-silver tracking-widest uppercase">Collector</p>
            <p className="text-xs text-charcoal mt-0.5">{specimen.collector}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
