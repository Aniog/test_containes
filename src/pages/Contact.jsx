import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';

const STRK_PROJECT_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
const STRK_PROJECT_ANON_KEY = import.meta.env.VITE_ANON_KEY || 'dummy';
// normally these would come from config, bypassing here for simplicity given env limit
const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_category: 'Consumer Electronics',
    estimated_budget: 'Under $10,000',
    target_destination: '',
    service_needed: [],
    details: ''
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const currentServices = [...prev.service_needed];
      if (currentServices.includes(service)) {
        return {
          ...prev,
          service_needed: currentServices.filter(s => s !== service)
        };
      } else {
        return {
          ...prev,
          service_needed: [...currentServices, service]
        };
      }
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) return 'Valid email is required';
    if (!formData.details.trim()) return 'Please provide some details about your sourcing needs';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');

    try {
      // Step 2: Insert Inquiry Data (no User UPSERT since it's a restricted agent export) //
      const { error: responseError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            product_category: formData.product_category,
            estimated_budget: formData.estimated_budget,
            target_destination: formData.target_destination,
            service_needed: formData.service_needed,
            details: formData.details,
            status: "New"
          }
        });

      if (responseError) throw responseError;

      setStatus('success');
      setFormData({
        name: '', email: '', company: '', product_category: 'Consumer Electronics', 
        estimated_budget: 'Under $10,000', target_destination: '', service_needed: [], details: ''
      });

    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage(err.message || 'An error occurred while submitting your inquiry. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-80px)]">
      {/* Page Header */}
      <div className="bg-slate-900 py-12 lg:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Discuss Your Sourcing Needs</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Fill out the form below, and one of our sourcing experts will get back to you within 24 hours with a free consultation and quote.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Contact Information Side */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Email Us</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Call Us</h3>
                    <p className="text-slate-600">+86 20 8123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Headquarters</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Tianhe District,<br />
                      Guangzhou, Guangdong,<br />
                      China 510000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Business Hours</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM (GMT+8)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-100">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Submitted Successfully!</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out. A member of our sourcing team will review your requirements and contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-blue-600 font-medium hover:text-blue-700"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company / Brand Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_destination" className="block text-sm font-medium text-slate-700 mb-2">Target Destination Country</label>
                      <input
                        type="text"
                        id="target_destination"
                        name="target_destination"
                        value={formData.target_destination}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-2">Product Category *</label>
                      <select
                        id="product_category"
                        name="product_category"
                        value={formData.product_category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
                      >
                        <option value="Consumer Electronics">Consumer Electronics</option>
                        <option value="Home & Garden">Home & Garden</option>
                        <option value="Apparel & Textiles">Apparel & Textiles</option>
                        <option value="Toys & Hobbies">Toys & Hobbies</option>
                        <option value="Packaging & Print">Packaging & Print</option>
                        <option value="Industrial & Hardware">Industrial & Hardware</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="estimated_budget" className="block text-sm font-medium text-slate-700 mb-2">Estimated Sourcing Budget</label>
                      <select
                        id="estimated_budget"
                        name="estimated_budget"
                        value={formData.estimated_budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-white"
                      >
                        <option value="Under $10,000">Under $10,000</option>
                        <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="Over $100,000">Over $100,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">Which services do you need? (Select all that apply)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {['Supplier Sourcing', 'Factory Audit', 'Quality Inspection', 'Logistics & Shipping'].map((service) => (
                        <label key={service} className="flex items-center p-3 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                            checked={formData.service_needed.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                          />
                          <span className="ml-3 text-sm text-slate-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-2">Product Details & Requirements *</label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Please describe the product you want to source, desired quantities, specific certifications needed, target timeline, etc."
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-y"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-md transition-colors flex justify-center items-center ${status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {status === 'submitting' ? 'Submitting Inquiry...' : 'Get Free Sourcing Quote'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
