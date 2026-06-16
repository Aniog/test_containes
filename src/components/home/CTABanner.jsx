import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="relative bg-charcoal overflow-hidden">
      {/* Decorative gold corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom py-20 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="gold-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Upgrade Your{' '}
            <span className="text-amber">Folding Capability</span>?
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Our engineering team will help you select the right double folding machine
            for your specific material, thickness, and production requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request a Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href="tel:+497115550123" className="btn-secondary">
              <Phone className="w-4 h-4 mr-2" />
              Call +49 711 555 0123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
