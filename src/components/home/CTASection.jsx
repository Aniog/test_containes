import InquiryForm from './InquiryForm';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Copy */}
          <div>
            <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">Get Started</p>
            <h2 className="text-neutral-900 text-3xl md:text-4xl font-bold mb-4">
              Ready to Source from China?
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-6">
              Tell us what you need. We'll review your requirements and send you a free sourcing plan with qualified supplier options — no commitment required.
            </p>
            <div className="space-y-3">
              {[
                'Free initial consultation',
                'Supplier shortlist within 5–10 days',
                'Transparent fees, agreed upfront',
                'Dedicated sourcing manager',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-neutral-700 text-sm">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 lg:p-8">
            <h3 className="text-neutral-900 font-bold text-xl mb-6">Submit Your Sourcing Inquiry</h3>
            <InquiryForm compact />
          </div>
        </div>
      </div>
    </section>
  );
}
