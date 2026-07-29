import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { MapPin, Mail, Clock, CheckCircle, ArrowRight, Globe } from 'lucide-react';
import { Button, PageHero } from '@/components/ui/index.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  { value: 'full_service', label: 'Full Sourcing Service (End-to-End)' },
  { value: 'supplier_sourcing', label: 'Supplier Sourcing Only' },
  { value: 'factory_audit', label: 'Factory Verification / Audit' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_followup', label: 'Production Follow-up' },
  { value: 'shipping', label: 'Shipping Coordination' },
  { value: 'not_sure', label: 'Not Sure — Need Advice' },
];

const timelineOptions = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '1_month', label: 'Within 1 month' },
  { value: '1_3_months', label: '1–3 months' },
  { value: '3_6_months', label: '3–6 months' },
  { value: 'flexible', label: 'Flexible / Not urgent' },
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_description: '',
  target_price: '',
  quantity: '',
  service_needed: '',
  timeline: '',
  additional_notes: '',
};

function InputField({ label, required, children, hint }) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const inputClass = 'w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-steel focus:border-transparent transition-colors bg-white';

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim()) return 'Email address is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim()) return 'Product description is required.';
    if (values.product_description.trim().length < 10) return 'Please provide more detail about your product (at least 10 characters).';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');
    console.log('Submitting sourcing inquiry:', values);

    try {
      const payload = {
        data: {
          full_name: values.full_name,
          email: values.email,
          company: values.company || undefined,
          country: values.country || undefined,
          phone: values.phone || undefined,
          product_description: values.product_description,
          target_price: values.target_price || undefined,
          quantity: values.quantity || undefined,
          service_needed: values.service_needed || undefined,
          timeline: values.timeline || undefined,
          additional_notes: values.additional_notes || undefined,
          status: 'new',
        },
      };

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert(payload)
        .select()
        .single();

      console.log('Insert response:', response, insertError);

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
      console.error('Submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact Us"
        title="Get a Free Sourcing Quote"
        subtitle="Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan."
      />

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-surface-alt rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <div className="font-medium text-navy text-sm">Location</div>
                    <div className="text-gray-500 text-sm">Guangzhou, China<br />Operations across all major manufacturing hubs</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-surface-alt rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <div className="font-medium text-navy text-sm">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-steel text-sm hover:text-navy transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-surface-alt rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <div className="font-medium text-navy text-sm">Response Time</div>
                    <div className="text-gray-500 text-sm">Within 24 hours on business days<br />(China Standard Time, UTC+8)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-surface-alt rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-steel" />
                  </div>
                  <div>
                    <div className="font-medium text-navy text-sm">Languages</div>
                    <div className="text-gray-500 text-sm">English · Français · Español · Deutsch</div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-surface-alt rounded-xl p-6">
                <h3 className="font-semibold text-navy mb-4 text-sm">What Happens After You Submit?</h3>
                <div className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We provide a free sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-gray-600 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">Inquiry Received!</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for reaching out. A member of our sourcing team will review your inquiry
                    and get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setStatus('idle')} variant="secondary">
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
                  <h3 className="text-xl font-bold text-navy mb-6">Sourcing Inquiry Form</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <InputField label="Full Name" required>
                      <input
                        type="text"
                        name="full_name"
                        value={values.full_name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className={inputClass}
                        required
                      />
                    </InputField>
                    <InputField label="Business Email" required>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@company.com"
                        className={inputClass}
                        required
                      />
                    </InputField>
                    <InputField label="Company Name">
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company or brand"
                        className={inputClass}
                      />
                    </InputField>
                    <InputField label="Country">
                      <input
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={onChange}
                        placeholder="e.g. United States"
                        className={inputClass}
                      />
                    </InputField>
                    <InputField label="Phone / WhatsApp" hint="Optional — for faster communication">
                      <input
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 555 000 0000"
                        className={inputClass}
                      />
                    </InputField>
                    <InputField label="Service Needed">
                      <select
                        name="service_needed"
                        value={values.service_needed}
                        onChange={onChange}
                        className={inputClass}
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </InputField>
                  </div>

                  <div className="mb-5">
                    <InputField label="Product Description" required hint="Include product name, materials, dimensions, certifications needed, and any other relevant details.">
                      <textarea
                        name="product_description"
                        value={values.product_description}
                        onChange={onChange}
                        rows={5}
                        placeholder="Describe the product you want to source from China. Include as much detail as possible — product type, materials, specifications, certifications required, etc."
                        className={inputClass}
                        required
                      />
                    </InputField>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    <InputField label="Target Unit Price" hint="e.g. $5–$8 USD">
                      <input
                        type="text"
                        name="target_price"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. $5–$8 USD"
                        className={inputClass}
                      />
                    </InputField>
                    <InputField label="Order Quantity" hint="e.g. 500 units">
                      <input
                        type="text"
                        name="quantity"
                        value={values.quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units"
                        className={inputClass}
                      />
                    </InputField>
                    <InputField label="Timeline">
                      <select
                        name="timeline"
                        value={values.timeline}
                        onChange={onChange}
                        className={inputClass}
                      >
                        <option value="">Select timeline...</option>
                        {timelineOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </InputField>
                  </div>

                  <div className="mb-6">
                    <InputField label="Additional Notes">
                      <textarea
                        name="additional_notes"
                        value={values.additional_notes}
                        onChange={onChange}
                        rows={3}
                        placeholder="Any other information that would help us understand your needs..."
                        className={inputClass}
                      />
                    </InputField>
                  </div>

                  {error && (
                    <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      'Submitting...'
                    ) : (
                      <>
                        Submit Sourcing Inquiry
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    No commitment required. We'll review your inquiry and respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
