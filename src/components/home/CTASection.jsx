import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import InquiryForm from './InquiryForm';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: CTA text */}
          <div>
            <span className="inline-block bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Source from China?
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              Tell us what you need and we'll get back to you within one business day with a
              tailored sourcing plan and cost estimate — at no obligation.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Free initial consultation',
                'Supplier shortlist within 3–5 days',
                'No commitment until you approve',
                'Transparent pricing, no hidden fees',
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-blue-100 text-sm">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <Mail className="w-4 h-4" />
              <span>Or email us directly: </span>
              <a href="mailto:info@ssourcingchina.com" className="text-white font-medium hover:underline">
                info@ssourcingchina.com
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Get a Free Sourcing Quote</h3>
            <p className="text-sm text-slate-500 mb-6">Fill in your requirements and we'll respond within 24 hours.</p>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
