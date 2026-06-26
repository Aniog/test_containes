import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to the database via API/SDK
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. A representative will contact you shortly.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Contact Artitect</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to enhance your fabrication capabilities? Reach out to our engineering and sales team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          
          {/* Contact Info Sidebar */}
          <div className="bg-primary text-white p-10 lg:p-12">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <p className="text-gray-300 mb-10">
              Whether you need specifications for our double folding machines or a completely custom setup, we're here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-secondary mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Headquarters</h4>
                  <p className="text-gray-300">100 Precision Way<br />Industrial Park<br />Manufacturing City, 10101</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-secondary mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">+1 (555) 123-4567<br />Mon-Fri, 8am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-secondary mr-4 mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">sales@artitectmachinery.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 p-10 lg:p-12">
            <h3 className="text-2xl font-bold text-primary mb-8">Send an Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none"
                    placeholder="Acme Fabrication"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your production requirements..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-primary hover:bg-slate-800 text-white font-medium py-4 px-8 rounded-lg transition-all flex items-center justify-center w-full md:w-auto"
                >
                  Submit Inquiry <Send className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;