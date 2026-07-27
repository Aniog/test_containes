import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function HomeCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productDescription: '',
    quantity: '',
    targetPrice: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="inquiry-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Get a Free Sourcing Quote
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Tell us what you need. We will respond within 24 hours with a preliminary assessment
              and sourcing plan — no obligation, no cost.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Free initial consultation and project assessment',
                'Detailed sourcing plan with timeline and cost estimate',
                'No commitment required — you decide after seeing our plan',
                'Your information is kept strictly confidential',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Prefer to talk?</span> Call us at{' '}
                <a href="tel:+8613812345678" className="text-brand-navy font-semibold hover:underline">
                  +86 138 1234 5678
                </a>{' '}
                or email{' '}
                <a href="mailto:info@ssourcingchina.com" className="text-brand-navy font-semibold hover:underline">
                  info@ssourcingchina.com
                </a>
              </p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-green-50 rounded-lg border border-green-100 p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Your Inquiry!</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We have received your sourcing request. One of our project managers will review your
                  requirements and get back to you within 24 hours with a preliminary assessment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg border border-gray-100 p-6 md:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cta-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="cta-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      id="cta-company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="cta-product" className="block text-sm font-medium text-gray-700 mb-1">
                    Product Description *
                  </label>
                  <textarea
                    id="cta-product"
                    name="productDescription"
                    required
                    rows={3}
                    value={form.productDescription}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                    placeholder="Describe the product you want to source (materials, dimensions, features, etc.)"
                  />
                </div>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cta-quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      Estimated Order Quantity
                    </label>
                    <input
                      id="cta-quantity"
                      name="quantity"
                      type="text"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-price" className="block text-sm font-medium text-gray-700 mb-1">
                      Target Unit Price (USD)
                    </label>
                    <input
                      id="cta-price"
                      name="targetPrice"
                      type="text"
                      value={form.targetPrice}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                      placeholder="e.g., $5-10/unit"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-base font-semibold bg-brand-red text-white hover:bg-brand-red-light transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </button>

                <p className="mt-3 text-xs text-gray-500 text-center">
                  By submitting, you agree to our Privacy Policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
