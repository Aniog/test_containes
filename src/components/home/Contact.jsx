import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setStatus(null);
      }, 4000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#F8F6F1]">
            <span className="text-xs tracking-[2px] text-[#C5A46E] font-medium">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-[-1px] text-[#0A1628] mb-4">
            Let's Build Together
          </h2>
          <p className="text-lg text-[#2C3E50]">
            Tell us about your project. Our team will respond within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#2C3E50] mb-2">Full Name</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2C3E50] mb-2">Company</label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#2C3E50] mb-2">Email Address</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2C3E50] mb-2">Phone Number</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#2C3E50] mb-2">Project Details</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements, material types, production volume, or any specific needs..."
              required
            />
          </div>

          <div className="pt-4">
            <Button type="submit" size="lg" className="w-full md:w-auto" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
            </Button>
          </div>

          {status === 'success' && (
            <div className="p-4 bg-[#F8F6F1] border border-[#C5A46E] rounded text-center">
              <p className="text-[#0A1628] font-medium">Thank you for reaching out.</p>
              <p className="text-sm text-[#2C3E50] mt-1">We'll be in touch shortly.</p>
            </div>
          )}
        </form>

        <div className="mt-16 pt-12 border-t border-[#E8E6E1] text-center">
          <div className="text-sm text-[#6B7280] mb-2">DIRECT CONTACT</div>
          <a href="mailto:sales@artitectmachinery.com" className="text-[#0A1628] hover:text-[#C5A46E] transition-colors">
            sales@artitectmachinery.com
          </a>
          <div className="mt-1 text-[#2C3E50]">+1 (800) 555-0192</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;