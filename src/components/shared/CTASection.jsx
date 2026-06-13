import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection({ 
  title = 'Ready to Source from China?',
  subtitle = 'Get a free sourcing quote and let our team find the right suppliers for your business.',
  buttonText = 'Get a Free Sourcing Quote',
  linkTo = '/contact'
}) {
  return (
    <section className="bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">{subtitle}</p>
        <Link
          to={linkTo}
          className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-3.5 rounded-lg text-base font-semibold transition-colors shadow-lg"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
