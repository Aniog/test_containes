import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { createContactFormResponse, upsertUser } from '@/api/contact';

export default function Contact() {
  const containerRef = useRef(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    serviceRequired: 'Product Sourcing & Manufacturing',
    productDetails: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      // 1. Upsert User (CRM Record)
      const userRecord = await upsertUser({
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        role: 'guest',
      });

      if (!userRecord || !userRecord.id) {
        throw new Error('Failed to retrieve user profile.');
      }

      // 2. Insert Form Response
      const response = await createContactFormResponse({
        user_id: userRecord.id,
        first_name: formData.firstName,
        last_name: formData.lastName,
        company_name: formData.companyName,
        email: formData.email,
        service_required: formData.serviceRequired,
        product_details: formData.productDetails
      });

      if (response.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          serviceRequired: 'Product Sourcing & Manufacturing',
          productDetails: ''
        });
      } else {
        throw new Error(response.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      setSubmitStatus('error');
    }
  };

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20 relative">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="contact-header-bg"
          data-strk-bg="[contact-header-title] business meeting handshake"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 id="contact-header-title" className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            Tell us about your sourcing needs. Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Free Sourcing Quote</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="John" 
                      required 
                      disabled={submitStatus === 'submitting'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="Doe" 
                      required 
                      disabled={submitStatus === 'submitting'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Your Company Ltd" 
                    disabled={submitStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="john@example.com" 
                    required 
                    disabled={submitStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select 
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    disabled={submitStatus === 'submitting'}
                  >
                    <option>Product Sourcing & Manufacturing</option>
                    <option>Quality Control Inspection only</option>
                    <option>Logistics & Shipping only</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Details & Requirements</label>
                  <textarea 
                    name="productDetails"
                    value={formData.productDetails}
                    onChange={handleInputChange}
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" 
                    placeholder="Please provide product links, specifications, estimated order quantities, and any other relevant details..."
                    required
                    disabled={submitStatus === 'submitting'}
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                    Thank you! Your quote request has been sent successfully. We will get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 text-white py-6 text-lg" 
                  type="submit"
                  disabled={submitStatus === 'submitting'}
                >
                  {submitStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-100 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our China Headquarters</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-gray-200">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Office Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Suite 801, Global Trade Center<br />
                      Tianhe District, Guangzhou<br />
                      Guangdong Province, China 510000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-gray-200">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      Inquiries: <a href="mailto:hello@ssourcingchina.com" className="text-blue-600 hover:underline">hello@ssourcingchina.com</a><br/>
                      Support: <a href="mailto:support@ssourcingchina.com" className="text-blue-600 hover:underline">support@ssourcingchina.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-gray-200">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Call Us</h4>
                    <p className="text-gray-600">
                      Global: +86 138-0000-0000<br/>
                      US/CA: +1 (800) 555-0100
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-gray-200">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST/UTC+8)<br/>
                      *We align with your timezone for critical meetings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
