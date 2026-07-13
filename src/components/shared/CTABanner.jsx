import { Link } from 'react-router-dom';

export default function CTABanner({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="bg-brand-navy py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-blue-200 text-lg mt-4 max-w-xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-8">
          <Link
            to={buttonLink || '/contact'}
            className="inline-block bg-brand-gold hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors shadow-lg"
          >
            {buttonText || 'Get a Free Sourcing Quote'}
          </Link>
        </div>
      </div>
    </section>
  );
}
