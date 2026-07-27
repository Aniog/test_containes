import QuoteForm from "@/components/shared/QuoteForm";

export default function InquirySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 mb-3">
              Get Started
            </p>
            <h2 id="inquiry-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p id="inquiry-desc" className="text-lg text-slate-600 mb-8 leading-relaxed">
              Tell us about your product and sourcing goals. Our team will reply within one business day with next steps.
            </p>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                Submit your product details
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                Receive a tailored sourcing plan
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                Start sourcing with confidence
              </li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
