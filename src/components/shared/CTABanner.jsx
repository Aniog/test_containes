import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTABanner = ({ 
  title = "Ready to Source from China?", 
  subtitle = "Tell us what you need and get a free sourcing plan within 24 hours.",
  buttonText = "Get a Free Sourcing Quote"
}) => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors no-underline"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
