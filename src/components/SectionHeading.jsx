const SectionHeading = ({ eyebrow, title, description, align = 'center', className = '' }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
