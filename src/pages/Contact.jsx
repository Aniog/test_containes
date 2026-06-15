import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: '',
    order_quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await client.from('SourcingInquiry').insert({
        data: {
          ...formData,
          created_at: new Date().toISOString()
        }
      }).select().single();

      if (error) throw error;

      toast.success('Your inquiry has been sent! We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_interest: '',
        order_quantity: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error('Failed to send inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact SSourcing China</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">Get expert sourcing advice or request a free quote. Our team in Guangzhou is ready to assist you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold mb-6">Office Details</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-900">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600 text-sm">Unit 1205, North Tower, World Trade Center, Guangzhou, China</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-900">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600 text-sm">+86 20 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-900">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600 text-sm">contact@ssourcing-china.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Working Hours</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM (GMT+8)</span>
                </li>
                <li className="flex justify-between">
                  <span>Sat:</span>
                  <span>10:00 AM - 2:00 PM (GMT+8)</span>
                </li>
                <li className="flex justify-between font-semibold text-amber-500">
                  <span>Sun:</span>
                  <span>Closed</span>
                </li>
              </ul>
              <p className="mt-6 text-xs text-blue-200">
                Note: Guangzhou is GMT+8. Typical response time is under 12 hours.
              </p>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Free Sourcing Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 outline-none"
                      placeholder="Your Company LLC"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="order_quantity" className="text-sm font-medium text-slate-700">Estimated Order Quantity</label>
                    <input
                      type="text"
                      id="order_quantity"
                      name="order_quantity"
                      value={formData.order_quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 outline-none"
                      placeholder="e.g. 500 units"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="product_interest" className="text-sm font-medium text-slate-700">What Product are you Sourcing? *</label>
                  <input
                    type="text"
                    id="product_interest"
                    name="product_interest"
                    required
                    value={formData.product_interest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 outline-none"
                    placeholder="e.g. Wireless headphones, Silicon molds"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message / Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 outline-none resize-none"
                    placeholder="Tell us about your sourcing needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-12 rounded-md transition-all flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
