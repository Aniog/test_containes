import { motion } from 'framer-motion';
import { ArrowRight, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecimenCard({ specimen, index, imgRef }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        !isEven ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-fog/40 shadow-xl group">
          <img
            data-strk-img-id={specimen.imgId}
            data-strk-img={`[${specimen.descId}] [${specimen.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={specimen.commonName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'grayscale(100%) contrast(1.1)' }}
          />
        </div>
        {/* Specimen ID badge */}
        <div className="glass-card absolute top-4 right-4 px-3 py-1.5">
          <p className="font-mono text-xs text-ash">{specimen.id}</p>
        </div>
      </div>

      {/* Content */}
      <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="flex items-center gap-2 mb-3">
          <span className="section-label">{specimen.category}</span>
          <span className="w-1 h-1 rounded-full bg-silver" />
          <span className="font-mono text-xs text-silver">{specimen.magnification}</span>
        </div>

        <h3 id={specimen.titleId} className="font-serif text-2xl md:text-3xl font-bold text-ink mb-1">
          {specimen.commonName}
        </h3>
        <p className="font-serif text-base italic text-ash mb-5">{specimen.scientificName}</p>

        <p id={specimen.descId} className="font-sans text-charcoal leading-relaxed mb-6">
          {specimen.description}
        </p>

        {/* Technical specs */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {specimen.specs.map(({ label, value }) => (
            <div key={label} className="glass-card px-4 py-3">
              <p className="font-mono text-xs text-silver mb-0.5">{label}</p>
              <p className="font-sans text-sm font-medium text-ink">{value}</p>
            </div>
          ))}
        </div>

        {/* Terminology */}
        {specimen.terminology && (
          <div className="border-t border-fog/40 pt-4 mb-6">
            <p className="section-label mb-3">Key Terminology</p>
            <div className="flex flex-wrap gap-2">
              {specimen.terminology.map(({ term, definition }) => (
                <span
                  key={term}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-fog/60 text-ash hover:border-ink/30 hover:text-ink transition-colors cursor-default"
                  title={definition}
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink border-b border-ink/30 pb-0.5 hover:border-ink transition-colors"
        >
          <Microscope className="w-3.5 h-3.5" strokeWidth={1.5} />
          View in Gallery
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}
