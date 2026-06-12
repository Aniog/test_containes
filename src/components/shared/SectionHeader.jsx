export default function SectionHeader({ label, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-navy-100' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
