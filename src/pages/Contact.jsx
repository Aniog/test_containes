import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { toast } from 'sonner';
import Layout from '@/Layout';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            createdAt: new Date().toISOString()
          }
        })
        .select()
        .single();

      if (error || (response && response.success === false)) {
        throw new Error(error?.message || response?.errors?.[0] || 'Failed to submit inquiry');
      }

      setIsSuccess(true);
      toast.success('Inquiry submitted successfully!');
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout>
      <div className="py-24 bg-white min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-extrabold text-primary mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your sourcing inquiry has been received. Our team will analyze your requirements and get back to you with a professional quote within 24 hours.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="text-accent font-bold hover:underline"
          >
            Send another inquiry
          </button>
        </div>
      </div>
      </Layout>
    );
  }

  return (
    <Layout>
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to find your next top-tier supplier? Fill out the form below or reach out directly to our Hangzhou office.
          </p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Our Office</h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Location</h4>
                    <p className="text-gray-600 mt-1">15F, Trade Tower, Binjiang District, Hangzhou, Zhejiang, China 310051</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <a href="mailto:info@ssourcingchina.com" className="text-accent hover:underline block mt-1">info@ssourcingchina.com</a>
                    <a href="mailto:support@ssourcingchina.com" className="text-accent hover:underline block">support@ssourcingchina.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Phone</h4>
                    <p className="text-gray-600 mt-1">+86 571 8888 8888</p>
                    <p className="text-gray-500 text-sm">(Mon-Fri: 9:00 - 18:00 GMT+8)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-lg font-bold text-primary mb-4">Why request a quote?</h3>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Free supplier matching analysis</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Estimated landing cost breakdown</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                  <span>Professional sourcing advice</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-extrabold text-primary mb-8">Get a Free Sourcing Quote</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-primary mb-2">What product are you looking for? *</label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="e.g. Ergonomic Office Chairs"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-primary mb-2">Estimated Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="e.g. 500 units"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">Additional Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Please specify any quality requirements, certifications, or specific questions you have."
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-lg hover:shadow-accent/40 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-6 w-6 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="h-6 w-6" />
                        Submit Sourcing Request
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-6 italic">
                    By submitting this form, you agree to our privacy policy and terms of service. We will use your information solely to respond to your inquiry.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Contact;
