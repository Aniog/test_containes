import { Link } from 'react-router-dom';

export default function SectionHeader({ eyebrow, title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="text-sm font-semibold text-brand-blue uppercase tracking-widest">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-slate-600 mt-4 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
