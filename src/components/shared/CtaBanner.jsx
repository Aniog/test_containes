import { Link } from 'react-router-dom';

export default function CtaBanner({ title, subtitle, btnLabel = 'Get a Free Sourcing Quote', btnPath = '/contact' }) {
  return (
    <section className="bg-brand-red py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        <Link
          to={btnPath}
          className="bg-white text-brand-red px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
        >
          {btnLabel}
        </Link>
      </div>
    </section>
  );
}
