import React, { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, CheckCircle } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading.jsx';
import { submitSourcingInquiry } from '@/api/inquiries.js';

const Contact = () => {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    full_name: '',
    email: '',
    company_name: '',
    phone: '',
    country: '',
    product_description: '',
    estimated_quantity: '',
    target_budget: '',
    timeline: '',
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required';
    if (!values.email.trim()) return 'Email address is required';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address';
    if (!values.product_description.trim()) return 'Product description is required';
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
    try {
      await submitSourcingInquiry({
        ...values,
        source_page: 'contact',
      });
      setStatus('success');
      setValues({
        full_name: '',
        email: '',
        company_name: '',
        phone: '',
        country: '',
        product_description: '',
        estimated_quantity: '',
        target_budget: '',
        timeline: '',
      });
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Tell us about your sourcing needs and our team will respond within 24 hours with a tailored proposal.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Inquiry Submitted!</h2>
                  <p className="text-neutral-600 mb-4">
                    Thank you for your interest. Our sourcing team will review your requirements and get back to you within 24 hours with a tailored proposal.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-primary font-medium text-sm hover:underline cursor-pointer bg-transparent border-none"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Submit Your Inquiry</h2>
                  <p className="text-neutral-500 mb-8">
                    Fill out the form below with as much detail as possible. The more information you provide, the more accurate our proposal will be.
                  </p>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-5">
                      {error}
                    </div>
                  )}

                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={onChange}
                          placeholder="John Smith"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="john@company.com"
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company_name"
                          value={values.company_name}
                          onChange={onChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="United States"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Timeline</label>
                        <input
                          type="text"
                          name="timeline"
                          value={values.timeline}
                          onChange={onChange}
                          placeholder="e.g. Need delivery by Q4 2026"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                        <input
                          type="text"
                          name="estimated_quantity"
                          value={values.estimated_quantity}
                          onChange={onChange}
                          placeholder="e.g. 1,000 - 5,000 units"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1.5">Target Budget</label>
                        <input
                          type="text"
                          name="target_budget"
                          value={values.target_budget}
                          onChange={onChange}
                          placeholder="e.g. $2-5 per unit"
                          className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product Description *</label>
                      <textarea
                        name="product_description"
                        value={values.product_description}
                        onChange={onChange}
                        rows={5}
                        required
                        placeholder="Please describe the product you want to source. Include details such as:&#10;- Product type and specifications&#10;- Quality standards or certifications needed&#10;- Any specific supplier requirements"
                        className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none bg-white"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full md:w-auto bg-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors text-sm border-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? 'Submitting...' : 'Get a Free Sourcing Quote'}
                      </button>
                      <p className="text-xs text-neutral-500 mt-3">
                        We typically respond within 24 hours. Your information is kept strictly confidential.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6 md:p-8 mb-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Email</p>
                      <p className="text-sm text-neutral-500">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Phone</p>
                      <p className="text-sm text-neutral-500">+86 755 8888 6666</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">WeChat / WhatsApp</p>
                      <p className="text-sm text-neutral-500">+86 138 0000 8888</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Office Address</p>
                      <p className="text-sm text-neutral-500">Floor 12, Tower B, Nanshan Business Center, Shenzhen, Guangdong, China 518000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Business Hours</p>
                      <p className="text-sm text-neutral-500">Mon-Fri: 9:00 AM - 6:00 PM (CST)</p>
                      <p className="text-sm text-neutral-500">We respond to emails within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Languages</p>
                      <p className="text-sm text-neutral-500">English, Mandarin Chinese</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-light rounded-xl border border-primary/10 p-6">
                <h3 className="text-base font-semibold text-neutral-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">1</span>
                    <span className="text-sm text-neutral-700">We review your inquiry and research your product category</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">2</span>
                    <span className="text-sm text-neutral-700">Within 24 hours, we send you a detailed proposal with pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">3</span>
                    <span className="text-sm text-neutral-700">We schedule a call to discuss your requirements in detail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">4</span>
                    <span className="text-sm text-neutral-700">Once approved, we begin supplier research immediately</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
