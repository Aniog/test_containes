export default function SectionHeader({ overline, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {overline && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-brand-sky' : 'text-brand-blue'}`}>
          {overline}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'} ${light ? 'text-white/70' : 'text-neutral-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
