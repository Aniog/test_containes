import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productOptions = [
  { value: 'general_inquiry', label: 'General Inquiry' },
  { value: 'double_folding_machine', label: 'Double Folding Machine' },
  { value: 'double_folder', label: 'Double Folder' },
  { value: 'sheet_metal_folder', label: 'Sheet Metal Folder' },
  { value: 'sheet_metal_folding_machine', label: 'Sheet Metal Folding Machine' },
  { value: 'metal_folder', label: 'Metal Folder' },
  { value: 'metal_folder_machine', label: 'Metal Folder Machine' },
  { value: 'metal_folding_machine', label: 'Metal Folding Machine' },
];

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: 'general_inquiry',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }

    setStatus('submitting');

    try {
      const { data: response, error: submitError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            product_interest: values.product_interest,
            message: values.message,
          },
        })
        .select()
        .single();

      if (submitError || response?.success === false) {
        const msg =
          response?.errors?.join?.(', ') ||
          submitError?.message ||
          'Submission failed';
        throw new Error(msg);
      }

      setStatus('success');
      setValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        product_interest: 'general_inquiry',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] font-semibold tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Request a Quote
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto">
            Tell us about your project and our team will get back to you with
            tailored recommendations and pricing within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1a3a5c] rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1a1a1a] mb-1">Phone</h4>
                <p className="text-[#6c757d]">+1 (234) 567-8900</p>
                <p className="text-[#6c757d] text-sm">Mon-Fri, 8am-6pm EST</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1a3a5c] rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1a1a1a] mb-1">Email</h4>
                <p className="text-[#6c757d]">sales@artitectmachinery.com</p>
                <p className="text-[#6c757d] text-sm">support@artitectmachinery.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1a3a5c] rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1a1a1a] mb-1">Address</h4>
                <p className="text-[#6c757d]">
                  1200 Industrial Parkway
                  <br />
                  Cleveland, OH 44101
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="bg-white rounded-lg shadow-md border border-gray-100 p-6 md:p-8"
              aria-busy={status === 'submitting'}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1a1a1a] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent text-[#1a1a1a]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#1a1a1a] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent text-[#1a1a1a]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#1a1a1a] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 (234) 567-8900"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent text-[#1a1a1a]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-[#1a1a1a] mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Acme Manufacturing"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent text-[#1a1a1a]"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="product_interest"
                  className="block text-sm font-semibold text-[#1a1a1a] mb-2"
                >
                  Product Interest
                </label>
                <select
                  id="product_interest"
                  name="product_interest"
                  value={values.product_interest}
                  onChange={onChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent text-[#1a1a1a] bg-white"
                >
                  {productOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#1a1a1a] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  placeholder="Tell us about your project, material types, thickness, and any specific requirements..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent text-[#1a1a1a] resize-y"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm mb-4">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 text-sm mb-4">
                  <CheckCircle className="w-4 h-4" />
                  <span>Thank you! We have received your inquiry and will be in touch shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center gap-2 bg-[#c9a84c] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8983e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
