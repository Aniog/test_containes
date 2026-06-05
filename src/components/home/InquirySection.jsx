import InquiryForm from './InquiryForm'

const InquirySection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:py-4">
            <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Get a Free Sourcing Quote
            </h2>
            <p className="mt-4 text-lg text-brand-200 leading-relaxed">
              Tell us what products you need and our sourcing team will prepare a
              detailed proposal within 24 hours. No commitment required.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Free sourcing consultation and quote',
                'Supplier shortlist within 3-5 business days',
                'Transparent pricing with no hidden fees',
                'Dedicated bilingual sourcing manager',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-brand-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Request a Free Quote
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Fill in your details and we will get back to you shortly.
            </p>
            <InquiryForm compact />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InquirySection
