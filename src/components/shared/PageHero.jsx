import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, breadcrumb, bgClass = 'bg-brand-blue' }) {
  return (
    <section className={`${bgClass} text-white py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="flex items-center gap-1 text-blue-300 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{breadcrumb}</span>
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
