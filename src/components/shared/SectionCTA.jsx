import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionCTA({ title, subtitle, buttonLabel, buttonPath }) {
  return (
    <section className="bg-brand-blue py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && (
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <Link
          to={buttonPath || '/contact'}
          className="inline-flex items-center gap-2 bg-white text-brand-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors no-underline text-base"
        >
          {buttonLabel || 'Get a Free Sourcing Quote'}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
