export default function SectionHeader({ label, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block text-brand-red text-xs font-bold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
