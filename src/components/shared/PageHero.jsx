import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumb }) {
  return (
    <section className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300">{breadcrumb}</span>
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-slate-300 max-w-3xl">{subtitle}</p>}
      </div>
    </section>
  );
}
