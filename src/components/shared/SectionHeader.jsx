import { Link } from 'react-router-dom';

export default function SectionHeader({ eyebrow, title, subtitle, centered = true, className = '' }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-slate-500 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
