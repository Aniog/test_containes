import { Link } from 'react-router-dom';

export default function SectionCTA({ title, subtitle, buttonLabel = 'Get a Free Sourcing Quote', buttonPath = '/contact' }) {
  return (
    <section className="bg-brand-blue py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && (
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <Link
          to={buttonPath}
          className="inline-block bg-white text-brand-blue hover:bg-blue-50 font-bold px-8 py-4 rounded-lg text-base transition-colors shadow-md"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
