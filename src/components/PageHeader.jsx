import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ eyebrow, title, description, breadcrumb }) => {
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {breadcrumb && (
          <nav className="flex items-center text-sm text-slate-500 mb-4">
            <Link to="/" className="hover:text-slate-700">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-slate-700">{breadcrumb}</span>
          </nav>
        )}
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-slate-600 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
