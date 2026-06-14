export default function SectionHeader({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`text-sm font-semibold uppercase tracking-widest ${light ? 'text-red-300' : 'text-brand-red'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mt-2 mb-4 ${light ? 'text-white' : 'text-brand-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-blue-200' : 'text-brand-slate'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
