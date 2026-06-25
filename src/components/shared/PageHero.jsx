import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, breadcrumb, cta }) => {
  return (
    <section className="bg-[#0d2d52] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-[#94a3b8] text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">{breadcrumb}</span>
          </div>
        )}
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-lg text-[#94a3b8] leading-relaxed mb-6">{subtitle}</p>
          )}
          {cta && (
            <Link
              to="/contact"
              className="inline-block bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {cta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
