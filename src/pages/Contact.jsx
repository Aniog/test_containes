import { useEffect, useState } from 'react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { CheckCircle, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import SectionHero from '@/components/shared/SectionHero';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Compliance & Documentation',
];

const categoryOptions = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery & Tools',
  'Packaging & Printing',
  'Toys & Baby Products',
  'Health & Beauty',
  'Automotive Parts',
  'Sports & Outdoor',
  'Other',
];

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product: '',
  category: '',
  quantity: '',
  budget: '',
  services: [],
  message: '',
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = 'Contact Us | Get a Free Sourcing Quote | SSourcing China';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleServiceToggle = (svc) => {
    setValues((v) => ({
      ...v,
      services: v.services.includes(svc)
        ? v.services.filter((s) => s !== svc)
        : [...v.services, svc],
    }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Full name is required.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email address is required.';
    if (!values.product.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    setStatus('submitting');

    try {
      const userRecord = await User.upsert({
        email: values.email,
        name: values.name,
        role: 'guest',
      });

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            country: values.country,
            phone: values.phone,
            product: values.product,
            category: values.category || undefined,
            quantity: values.quantity,
            budget: values.budget,
            services: values.services,
            message: values.message,
            status: 'new',
            user_id: userRecord?.id,
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed. Please try again.';
        setError(msg);
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div>
        <SectionHero
          badge="Contact Us"
          title="Get a Free Sourcing Quote"
          subtitle="Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan."
        />
        <section className="py-24 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-primary-dark mb-3">Inquiry Received!</h2>
            <p className="text-gray-600 mb-8">
              Thank you for reaching out. Your sourcing manager will review your inquiry and respond within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <SectionHero
        badge="Contact Us"
        title="Get a Free Sourcing Quote"
        subtitle="Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-primary-dark mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Office Location</div>
                    <div className="text-gray-600 text-sm">Guangzhou, Guangdong, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-primary text-sm hover:underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Phone / WhatsApp</div>
                    <a href="tel:+8620XXXXXXXX" className="text-primary text-sm hover:underline">
                      +86 20 XXXX XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Response Time</div>
                    <div className="text-gray-600 text-sm">Within 24 business hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-light-blue rounded-xl p-5">
                <h3 className="font-semibold text-primary-dark mb-2 text-sm">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'Your sourcing manager contacts you to clarify requirements',
                    'We present a sourcing plan and fee proposal',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={values.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      placeholder="Your country"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                    <input
                      type="text"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                    <select
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    >
                      <option value="">Select a category</option>
                      {categoryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Description <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={values.product}
                    onChange={handleChange}
                    placeholder="e.g. LED strip lights, 5050 SMD, IP65, 5m rolls"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={values.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 units, 1000 pcs"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Budget</label>
                    <input
                      type="text"
                      name="budget"
                      value={values.budget}
                      onChange={handleChange}
                      placeholder="e.g. $2–3 per unit, $5,000 total"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Services Needed</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {serviceOptions.map((svc) => (
                      <label
                        key={svc}
                        className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-sm transition-colors ${
                          values.services.includes(svc)
                            ? 'border-primary bg-light-blue text-primary'
                            : 'border-gray-200 text-gray-700 hover:border-primary/40'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={values.services.includes(svc)}
                          onChange={() => handleServiceToggle(svc)}
                        />
                        <span className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
                          values.services.includes(svc) ? 'bg-primary border-primary' : 'border-gray-300'
                        }`}>
                          {values.services.includes(svc) && (
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                              <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </span>
                        {svc}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific requirements, certifications needed, timeline, or questions..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-[#a93226] disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Sourcing Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by SSourcing China regarding your inquiry.
                  We do not share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
