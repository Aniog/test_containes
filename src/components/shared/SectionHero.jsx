import { Link } from 'react-router-dom';

export default function SectionHero({ badge, title, subtitle, cta, ctaPath = '/contact', bgClass = 'bg-light-blue' }) {
  return (
    <section className={`${bgClass} py-16 md:py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block bg-white text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4 shadow-sm">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-primary-dark mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">{subtitle}</p>
        )}
        {cta && (
          <Link
            to={ctaPath}
            className="inline-block bg-accent hover:bg-[#a93226] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {cta}
          </Link>
        )}
      </div>
    </section>
  );
}
