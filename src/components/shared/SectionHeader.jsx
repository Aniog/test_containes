const SectionHeader = ({ eyebrow, title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${light ? 'text-brand-sky' : 'text-brand-sky'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'} ${light ? 'text-white/75' : 'text-neutral-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
