import { ArrowRight } from 'lucide-react';
import CTAButton from '@/components/shared/CTAButton';

export default function CTABannerSection() {
  return (
    <section className="py-20 bg-brand-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Submit your sourcing inquiry today and receive a free consultation and supplier shortlist within 24–48 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton to="/contact" variant="accent" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </CTAButton>
          <CTAButton to="/how-it-works" variant="white-outline" className="text-base px-8 py-4">
            Learn How It Works
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
