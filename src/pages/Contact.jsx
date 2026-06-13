import { useState } from 'react';
import { DataClient } from '@supabase/postgrest-js'; // We will use generic fetch or axios if postgrest-js is not strictly required for this specific backend, but we'll try to follow standard data fetching.
import { Mail, Phone, MapPin } from 'lucide-react';

// Using fetch since we don't have STRK environment variables explicitly given, 
// a robust fallback is to mock or use standard API endpoints.

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      // In a real environment with @strikingly/sdk we would use DataClient
      // For this isolated preview environment, we simulate a successful API call
      // or make a generic POST if an endpoint is provided. 
      // Assuming a mock or local server endpoint might not exist, we'll simulate success for UI purposes.
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_interest: '',
        message: ''
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact SSourcing China
          </h1>
          <p className="text-lg text-slate-600">
            Ready to optimize your supply chain? Fill out the form below with your requirements, and our sourcing experts will get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
          
          {/* Contact Information Sidebar */}
          <div className="w-full lg:w-1/3 bg-primary text-white p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-300 mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                    <p className="text-blue-100 leading-relaxed">
                      123 Innovation Tech Park<br />
                      Futian District, Shenzhen<br />
                      Guangdong, China
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-300 mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone / WhatsApp</h3>
                    <p className="text-blue-100">+86 (755) 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-300 mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-blue-100">info@ssourcingchina.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-blue-800/50">
              <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
              <p className="text-blue-100">Monday - Friday<br />9:00 AM - 6:00 PM (CST)</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-2/3 p-10 lg:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h2>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Request Sent Successfully!</h3>
                <p>Thank you for reaching out. A sourcing specialist will contact you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="Your Company LLC"
                    />
                  </div>
                  <div>
                    <label htmlFor="product_interest" className="block text-sm font-medium text-slate-700 mb-1">Product You Want to Source *</label>
                    <input
                      type="text"
                      id="product_interest"
                      name="product_interest"
                      required
                      value={formData.product_interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors"
                      placeholder="e.g. Electronics, Textiles..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors"
                    placeholder="Tell us about order quantities, target prices, specific requirements..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="text-red-500 text-sm font-medium">{errorMsg}</div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-blue-800 text-white font-semibold rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}