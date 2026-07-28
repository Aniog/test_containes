import { Link } from 'react-router-dom';

export default function SectionCTA({ title, subtitle, ctaLabel = 'Get a Free Sourcing Quote', ctaPath = '/contact', secondary, secondaryPath }) {
  return (
    <section className="bg-blue-600 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && (
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ctaPath}
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            {ctaLabel}
          </Link>
          {secondary && (
            <Link
              to={secondaryPath || '/how-it-works'}
              className="border-2 border-white text-white hover:bg-blue-700 font-semibold px-8 py-3 rounded-lg transition-colors text-base"
            >
              {secondary}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
