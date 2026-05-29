import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({ title, subtitle, ctaText = 'Get a Free Sourcing Quote', ctaPath = '/contact' }) {
  return (
    <section className="bg-amber-600 py-14 md:py-16">
      <div className="container-xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        <Link
          to={ctaPath}
          className="inline-flex items-center gap-2 bg-white text-amber-700 hover:bg-amber-50 font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg"
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
