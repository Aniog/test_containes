import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Clock } from 'lucide-react';

export default function InquiryCTA() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Source Smarter from China?
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Tell us what you need. We will provide a free, no-obligation
              sourcing quote with supplier options and next steps within 48
              hours.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand" />
                </div>
                <span className="text-sm">Response within 48 hours</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <span className="text-sm">Detailed supplier brief included</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <span className="text-sm">Optional video call to discuss your needs</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-base font-semibold rounded-lg hover:bg-brand-dark transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Quick Inquiry Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-navy mb-1">
              Request a Free Quote
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Fill out the form below and we will get back to you shortly.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Product Description
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the product you want to source, target quantity, and any requirements..."
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors text-sm"
              >
                Submit Inquiry
              </button>
              <p className="text-xs text-slate-400 text-center">
                We respect your privacy. Your information will not be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
