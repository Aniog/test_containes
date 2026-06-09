import { Link } from 'react-router-dom';

export default function SectionHeader({ badge, title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-blue mb-3 bg-blue-50 px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-lg text-gray-500 leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
