import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl">Get in touch to discuss your sourcing requirements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-semibold text-2xl mb-6">Get a Free Sourcing Quote</h2>
              <p className="text-slate-600 mb-8">Submit your inquiry and our team will respond within one business day.</p>

              {submitted ? (
                <div className="card text-center py-12">
                  <div className="text-emerald-600 mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-2">Thank you for your inquiry.</h3>
                  <p className="text-slate-600">Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} required className="form-input" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Product Category</label>
                    <input type="text" name="product" value={formData.product} onChange={handleChange} required className="form-input" placeholder="e.g., Electronics, Textiles" />
                  </div>
                  <div>
                    <label className="form-label">Project Details</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required className="form-textarea" placeholder="Describe your sourcing requirements, quantities, timeline, and specifications." />
                  </div>
                  <button type="submit" className="btn-primary w-full">Submit Inquiry</button>
                  <p className="text-xs text-center text-slate-500">Your information is kept confidential.</p>
                </form>
              )}
            </div>

            <div>
              <div className="card mb-6">
                <h3 className="font-semibold mb-4">Shanghai Office</h3>
                <div className="space-y-3 text-slate-600">
                  <div className="flex gap-3"><MapPin size={20} className="flex-shrink-0 mt-0.5" /> Room 1208, Tower B, 88 Century Avenue, Pudong, Shanghai 200120</div>
                  <div className="flex gap-3"><Phone size={20} className="flex-shrink-0 mt-0.5" /> +86 21 5888 1234</div>
                  <div className="flex gap-3"><Mail size={20} className="flex-shrink-0 mt-0.5" /> info@ssourcingchina.com</div>
                  <div className="flex gap-3"><Clock size={20} className="flex-shrink-0 mt-0.5" /> Mon-Fri: 9:00 - 18:00 (CST)</div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-4">Ningbo Office</h3>
                <div className="space-y-3 text-slate-600">
                  <div className="flex gap-3"><MapPin size={20} className="flex-shrink-0 mt-0.5" /> Building 5, 1688 Jiangnan Road, Ningbo 315040</div>
                  <div className="flex gap-3"><Phone size={20} className="flex-shrink-0 mt-0.5" /> +86 574 8765 4321</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;