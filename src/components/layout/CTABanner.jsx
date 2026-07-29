import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTABanner = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-brand-navy py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title || 'Ready to Start Sourcing from China?'}
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          {subtitle || 'Tell us what you need. We will find the right suppliers, verify quality, and handle the details — so you can focus on your business.'}
        </p>
        <Link
          to={buttonLink || '/contact'}
          className="inline-flex items-center gap-2 bg-brand-gold hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          {buttonText || 'Get a Free Sourcing Quote'}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
