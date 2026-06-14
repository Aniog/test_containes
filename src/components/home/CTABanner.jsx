import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#E67E22] to-[#D35400]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get started with a free consultation. Tell us about your product needs, and we will help you find the right suppliers.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              'Free supplier matching',
              'No upfront costs',
              'Professional QC inspections',
              'End-to-end support',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#E67E22] font-semibold rounded-lg hover:bg-[#F8FAFC] transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              Contact Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;