import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="bg-brand-gold py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-3">
              Ready to Elevate Your Production?
            </h2>
            <p className="text-brand-navy/70 text-lg max-w-xl">
              Talk to our engineering team and find the perfect folding machine solution for your specific requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-navy text-brand-white font-semibold px-8 py-4 rounded-full hover:bg-brand-dark transition-all duration-200 text-sm tracking-wide"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-navy/30 text-brand-navy font-semibold px-8 py-4 rounded-full hover:border-brand-navy hover:bg-brand-navy/10 transition-all duration-200 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
