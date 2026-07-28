import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.productType.trim()) newErrors.productType = 'Product type is required';
    if (!formData.message.trim()) newErrors.message = 'Please describe your sourcing needs';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    const { data: response, error: createError } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          productType: formData.productType,
          quantity: formData.quantity,
          message: formData.message,
          status: 'new',
          createdAt: new Date().toISOString(),
        },
      })
      .select()
      .single();

    if (createError || response?.success === false) {
      setSubmitError(getErrorMessage(response, createError));
      setSubmitting(false);
      return;
    }

    const createdInquiry = getEntity(response);
    if (createdInquiry) {
      setSubmitted(true);
    } else {
      setSubmitError('Failed to submit inquiry. Please try again.');
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="heading-2 text-slate-900 mb-4">Thank You!</h2>
          <p className="text-lg text-slate-600 mb-6">
            Your sourcing inquiry has been received. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', company: '', phone: '', productType: '', quantity: '', message: '' });
            }}
            className="btn-primary"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Tell us about your sourcing needs and we will get back to you within 24 hours with a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="heading-2 text-slate-900 mb-2">Get a Free Sourcing Quote</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and our team will review your requirements.</p>

              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-300'} px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-300'} px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="productType" className="block text-sm font-medium text-slate-700 mb-1">
                      Product Type <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="productType"
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className={`w-full rounded-lg border ${errors.productType ? 'border-red-500' : 'border-slate-300'} px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent`}
                      placeholder="e.g., Electronics, Textiles"
                    />
                    {errors.productType && <p className="text-red-500 text-sm mt-1">{errors.productType}</p>}
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
                      placeholder="e.g., 1000 units"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Describe Your Sourcing Needs <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-300'} px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-none`}
                    placeholder="Please describe the products you need, your quality requirements, target price, timeline, and any other relevant details."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-accent w-full sm:w-auto" disabled={submitting}>
                  <Send className="w-5 h-5 mr-2" />
                  {submitting ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 sticky top-24">
                <h3 className="heading-3 text-slate-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-blue-700 hover:underline">info@ssourcingchina.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Phone / WhatsApp</p>
                      <p className="text-slate-600">+86 755 8888 9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Office</p>
                      <p className="text-slate-600">Shenzhen, Guangdong, China</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Business Hours</p>
                      <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                      <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM (CST)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-3">What Happens Next?</h4>
                  <ol className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      <span>We review your inquiry within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span>We schedule a free consultation call</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span>We provide a tailored sourcing plan and quote</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
