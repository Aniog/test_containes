import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productOptions = [
  { value: '', label: 'Select a product...' },
  { value: 'double-folding-machine', label: 'Double Folding Machine' },
  { value: 'double-folder', label: 'Double Folder' },
  { value: 'sheet-metal-folder', label: 'Sheet Metal Folder' },
  { value: 'metal-folder-machine', label: 'Metal Folder Machine' },
  { value: 'metal-folding-machine', label: 'Metal Folding Machine' },
  { value: 'metal-folder', label: 'Metal Folder' },
  { value: 'other', label: 'Other / Not Sure' },
];

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (800) 278-4832' },
  { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com' },
  { icon: MapPin, label: 'Address', value: 'Industrial Park, Machinery District, USA' },
];

const ContactSection = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_interest: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.';
    if (!values.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.message.trim()) return 'Message is required.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }

    setStatus('submitting');

    try {
      const payload = {
        data: {
          name: values.name,
          email: values.email,
          message: values.message,
          status: 'new',
          ...(values.company && { company: values.company }),
          ...(values.phone && { phone: values.phone }),
          ...(values.product_interest && { product_interest: values.product_interest }),
        },
      };

      const { data: response, error: insertError } = await client
        .from('Quote Requests')
        .insert(payload)
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : (insertError?.message || 'Submission failed.');
        throw new Error(msg);
      }

      setStatus('success');
      setValues({ name: '', email: '', company: '', phone: '', product_interest: '', message: '' });
    } catch (err) {
      console.error('Quote request error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const inputClass = 'w-full bg-steel-900 border border-steel-700 rounded-xl px-4 py-3 text-steel-100 placeholder-steel-600 font-inter text-sm focus:outline-none focus:border-gold-500 transition-colors duration-200';
  const labelClass = 'block font-inter text-sm font-medium text-steel-300 mb-1.5';

  return (
    <section id="contact" className="bg-steel-800 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-inter font-semibold uppercase tracking-widest mb-3 block">
            Get in Touch
          </span>
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-steel-100 tracking-tight mb-4">
            Request a Quote
          </h2>
          <p className="font-inter text-steel-400 text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our engineers will get back to you with the right solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-steel-900/60 border border-steel-700 rounded-2xl p-7">
              <h3 className="font-barlow font-bold text-xl text-steel-100 mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-gold-500" />
                    </div>
                    <div>
                      <div className="font-inter text-xs text-steel-400 uppercase tracking-widest mb-0.5">{label}</div>
                      <div className="font-inter text-steel-200 text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 rounded-2xl p-7">
              <h4 className="font-barlow font-bold text-lg text-steel-100 mb-2">Fast Response Guarantee</h4>
              <p className="font-inter text-steel-400 text-sm leading-relaxed">
                Our engineering team responds to all quote requests within 24 business hours. For urgent inquiries, call us directly.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-steel-900/60 border border-gold-500/30 rounded-2xl p-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-gold-500" />
                </div>
                <h3 className="font-barlow font-bold text-2xl text-steel-100">Quote Request Sent!</h3>
                <p className="font-inter text-steel-400 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. Our engineering team will review your request and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 border border-gold-500/40 hover:border-gold-500 text-gold-500 font-inter font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-steel-900/60 border border-steel-700 rounded-2xl p-7 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={onChange}
                      placeholder="John Smith"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={onChange}
                      placeholder="john@company.com"
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={values.company}
                      onChange={onChange}
                      placeholder="Your company name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={onChange}
                      placeholder="+1 (555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className={labelClass}>Product Interest</label>
                  <select
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    {productOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-steel-900 text-steel-100">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className={labelClass}>Message / Requirements *</label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="Describe your project, material thickness, production volume, or any specific requirements..."
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>

                {error && (
                  <div className="mb-5 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                    <p className="font-inter text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-steel-900 font-inter font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-gold-500/20 text-base"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-steel-900/30 border-t-steel-900 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Quote Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
