import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setValues((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!values.name || !values.email || !values.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    try {
      const { error: responseError } = await client
        .from('ContactInquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            inquiry_type: values.inquiryType,
            message: values.message,
            status: 'new'
          }
        });

      if (responseError) throw responseError;

      setStatus('success');
      setValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: ''
      });
      
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'There was an error submitting your inquiry. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to enhance our production capabilities? Reach out to our machinery experts for pricing, technical specifications, or custom requests.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team of dedicated engineers and sales representatives are available to assist you finding the perfect double folder or metal folding machine for your needs.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Sales & Support</h3>
                  <p className="mt-1 text-gray-600">+1 (555) 123-4567<br/>Mon-Fri, 8:00 AM - 5:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="mt-1 text-gray-600">sales@artitectmachinery.com<br/>support@artitectmachinery.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Headquarters & Manufacturing</h3>
                  <p className="mt-1 text-gray-600">100 Industrial Parkway<br/>Machining District<br/>Chicago, IL 60601</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
              
              {status === 'success' ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center">
                  <p className="font-semibold text-lg mb-2">Message Sent Successfully!</p>
                  <p>Thank you for reaching out to Artitect Machinery. A representative will get back to you shortly.</p>
                  <Button 
                    className="mt-6 w-full"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm">
                      {errorMessage}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={values.name} 
                        onChange={handleInputChange} 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={values.email} 
                        onChange={handleInputChange} 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={values.phone} 
                        onChange={handleInputChange} 
                        placeholder="(555) 123-4567" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">Company Name</label>
                      <Input 
                        id="company" 
                        name="company" 
                        value={values.company} 
                        onChange={handleInputChange} 
                        placeholder="Acme Manufacturing" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="text-sm font-medium text-gray-700">Inquiry Type</label>
                    <Select onValueChange={handleSelectChange} value={values.inquiryType}>
                      <SelectTrigger id="inquiryType">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales & Pricing</SelectItem>
                        <SelectItem value="technical">Technical Specifications</SelectItem>
                        <SelectItem value="custom">Custom Machinery Request</SelectItem>
                        <SelectItem value="support">Service & Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message *</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={values.message} 
                      onChange={handleInputChange} 
                      placeholder="Please tell us about your requirements..." 
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                  </Button>
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