import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, showCTA = true, ctaText = "Get a Free Sourcing Quote" }) => {
  return (
    <section className="bg-neutral-50 border-b border-neutral-200 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors no-underline"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default PageHero;
