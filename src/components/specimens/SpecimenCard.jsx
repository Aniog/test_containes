import { motion } from 'framer-motion';
import { Calendar, User, Microscope } from 'lucide-react';
import GlossaryTooltip from './GlossaryTooltip';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Replaces glossary terms in description text with tooltip components
function AnnotatedText({ text, terms }) {
  if (!terms || terms.length === 0) return <span>{text}</span>;

  let parts = [text];

  terms.forEach(({ word, definition }) => {
    const newParts = [];
    parts.forEach((part) => {
      if (typeof part !== 'string') {
        newParts.push(part);
        return;
      }
      const idx = part.toLowerCase().indexOf(word.toLowerCase());
      if (idx === -1) {
        newParts.push(part);
        return;
      }
      newParts.push(part.slice(0, idx));
      newParts.push(
        <GlossaryTooltip key={word} word={part.slice(idx, idx + word.length)} definition={definition} />
      );
      newParts.push(part.slice(idx + word.length));
    });
    parts = newParts;
  });

  return <>{parts}</>;
}

export default function SpecimenCard({ specimen, reverse = false }) {
  const {
    id, category, name, commonName, description,
    magnification, stain, imageUrl, terms, collector, date,
  } = specimen;

  return (
    <motion.article
      variants={itemVariants}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
        <img
          src={imageUrl}
          alt={commonName}
          className="w-full h-full object-cover img-bw transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

        {/* Specimen ID badge */}
        <div className="absolute top-4 left-4">
          <span className="font-mono-data text-white/90 text-xs bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
            {id}
          </span>
        </div>

        {/* Magnification badge */}
        <div className="absolute bottom-4 right-4">
          <span className="font-mono-data text-white/90 text-xs bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
            <Microscope className="w-3 h-3" strokeWidth={1.5} />
            {magnification}
          </span>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="font-mono-data text-ash mb-3">{category}</p>
        <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-ink mb-1 leading-tight">
          {commonName.split('—')[0].trim()}
        </h3>
        {commonName.includes('—') && (
          <p className="font-playfair text-lg text-ash italic mb-4">
            — {commonName.split('—')[1].trim()}
          </p>
        )}
        <p className="font-playfair text-base text-charcoal italic mb-6">{name}</p>

        <p className="text-charcoal text-sm leading-relaxed mb-6">
          <AnnotatedText text={description} terms={terms} />
        </p>

        {/* Metadata grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-ink/4 rounded-xl p-3">
            <p className="font-mono-data text-ash mb-1">Magnification</p>
            <p className="text-ink text-sm font-medium">{magnification}</p>
          </div>
          <div className="bg-ink/4 rounded-xl p-3">
            <p className="font-mono-data text-ash mb-1">Staining Method</p>
            <p className="text-ink text-sm font-medium">{stain}</p>
          </div>
        </div>

        {/* Collector info */}
        <div className="flex items-center gap-4 pt-4 border-t border-silver/30">
          <div className="flex items-center gap-1.5 text-ash text-xs">
            <User className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{collector}</span>
          </div>
          <div className="flex items-center gap-1.5 text-ash text-xs">
            <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>{new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
