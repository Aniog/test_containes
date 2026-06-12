import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner({ title, subtitle, buttonText, buttonPath }) {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title || 'Ready to Start Sourcing from China?'}
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          {subtitle || 'Tell us what you need. We will find the right suppliers, verify quality, and handle the details.'}
        </p>
        <Link
          to={buttonPath || '/contact'}
          className="inline-flex items-center gap-2 bg-accent-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-colors"
        >
          {buttonText || 'Get a Free Sourcing Quote'}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
