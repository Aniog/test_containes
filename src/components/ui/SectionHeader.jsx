export default function SectionHeader({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-brand-sky' : 'text-brand-blue'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-brand-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg leading-relaxed max-w-3xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-brand-gray'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
