import { Link } from 'react-router-dom';

export default function CtaBanner({ title, subtitle, cta = 'Get a Free Sourcing Quote', ctaPath = '/contact' }) {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && <p className="text-blue-100 text-lg mb-8">{subtitle}</p>}
        <Link
          to={ctaPath}
          className="inline-block bg-accent hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
