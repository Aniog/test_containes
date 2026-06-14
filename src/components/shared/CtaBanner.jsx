import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="bg-brand-red py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        <Link
          to={buttonLink || '/contact'}
          className="inline-flex items-center gap-2 bg-white text-brand-red font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg"
        >
          {buttonText || 'Get a Free Sourcing Quote'}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
