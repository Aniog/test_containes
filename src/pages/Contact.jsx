import { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productInfo: '',
    serviceNeeded: 'Full Sourcing Service'
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) return "Valid email is required";
    if (!formData.productInfo.trim()) return "Please provide some product information";
    return null;
  };

  const getErrorMessages = (response, error) => {
    if (Array.isArray(response?.errors) && response.errors.length > 0) {
      return response.errors.join(', ');
    }
    return error?.message || 'Submission failed. Please try again.';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    
    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const { data: response, error } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            productInfo: formData.productInfo,
            serviceNeeded: formData.serviceNeeded,
            status: 'New'
          }
        });

      if (error || response?.success === false) {
        setErrorMessage(getErrorMessages(response, error));
        setStatus('error');
        return;
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        productInfo: '',
        serviceNeeded: 'Full Sourcing Service'
      });
      
    } catch (err) {
      setErrorMessage(err.message || 'An unexpected error occurred');
      setStatus('error');
    }
  };

  return (
    <div className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Information Side */}
          <div className="lg:w-1/3 bg-slate-900 text-white p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-slate-300 mb-12">
                Ready to start your sourcing journey? Send us your requirements and our team will get back to you with a customized quote within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                    <p className="text-slate-300">Tianhe District<br />Guangzhou, Guangdong<br />China 510000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-slate-300">info@ssourcingchina.com<br />quotes@ssourcingchina.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-slate-300">+86 123 4567 8900<br />Mon-Fri 9am-6pm (CST)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <p className="text-sm text-slate-400">All information is kept strictly confidential under our standard NDA policy.</p>
            </div>
          </div>
          
          {/* Contact Form Side */}
          <div className="lg:w-2/3 p-10 md:p-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Request a Sourcing Quote</h2>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Inquiry Sent Successfully!</h3>
                <p className="text-green-700 max-w-md">
                  Thank you for reaching out. A sourcing specialist will review your requirements and contact you at the email provided within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 bg-white text-green-700 border border-green-300 px-6 py-2 rounded-md hover:bg-green-50 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-md flex items-center mb-6">
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-slate-900 bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-slate-900 bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company Name (Optional)</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-slate-900 bg-white"
                      placeholder="Your Business LLC"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceNeeded" className="block text-sm font-medium text-slate-700 mb-2">Primary Service Needed *</label>
                    <select 
                      id="serviceNeeded" 
                      name="serviceNeeded" 
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-slate-900 bg-white"
                    >
                      <option value="Full Sourcing Service">Full Sourcing Service (A-Z)</option>
                      <option value="Supplier Sourcing">Supplier Sourcing Only</option>
                      <option value="Factory Audit">Factory Audit</option>
                      <option value="Quality Inspection">Quality Inspection</option>
                      <option value="Logistics & Shipping">Logistics & Shipping</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="productInfo" className="block text-sm font-medium text-slate-700 mb-2">Product Requirements *</label>
                  <textarea 
                    id="productInfo" 
                    name="productInfo" 
                    required
                    rows="5"
                    value={formData.productInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-slate-900 bg-white resize-none"
                    placeholder="Please describe the product you are looking for, target quantities, materials, and any specific requirements..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-md transition flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Inquiry <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
                
              </form>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;