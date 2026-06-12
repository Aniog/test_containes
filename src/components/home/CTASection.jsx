import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import InquiryForm from './InquiryForm';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-widest">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Tell us what you need and we'll send you a sourcing plan, supplier shortlist, and cost estimate — at no charge.
            </p>

            <div className="space-y-4">
              {[
                'Response within 24 business hours',
                'No commitment required',
                'Covers supplier options, estimated pricing, and timeline',
                'Confidential — we sign NDAs on request',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                  </div>
                  <span className="text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
