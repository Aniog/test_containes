import React from 'react';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success('Inquiry received. We will respond within 24 hours.');
    
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      productCategory: '',
      quantity: '',
      timeline: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: 'Room 1208, Building 3, 388 Ruiping Road, Shanghai 200120, China' },
    { icon: Phone, label: 'Phone', value: '+86 21 5888 1234' },
    { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com' },
    { icon: Clock, label: 'Hours', value: 'Monday - Friday, 9:00 - 18:00 (GMT+8)' },
  ];

  return (
    <div>
      <Toaster position="top-center" />
      
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold text-[#0F172A] mb-4">Contact Us</h1>
          <p className="text-xl text-[#475569]">Tell us about your sourcing requirements.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-[#0F172A] mb-6">Get in Touch</h2>
            <p className="text-[#475569] mb-8">
              Submit your inquiry and our sourcing team will respond within one business day with initial guidance and next steps.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#EFF6FF] rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-[#1E40AF]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#64748B]">{info.label}</div>
                    <div className="text-[#0F172A] mt-0.5">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#475569] mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:border-[#1E40AF] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#475569] mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:border-[#1E40AF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#475569] mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:border-[#1E40AF] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#475569] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:border-[#1E40AF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="productCategory" className="block text-sm font-medium text-[#475569] mb-2">Product Category *</label>
                  <input
                    type="text"
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Electronics, Home Goods"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:border-[#1E40AF] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-[#475569] mb-2">Estimated Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="e.g., 500-1000 units"
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:border-[#1E40AF] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-[#475569] mb-2">Target Timeline</label>
                <input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., First shipment in 8 weeks"
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:border-[#1E40AF] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#475569] mb-2">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Describe your product requirements, specifications, and any other relevant details..."
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:border-[#1E40AF] focus:outline-none resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#1E3A8A] transition-colors disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="text-sm text-[#64748B]">We typically respond within 24 business hours.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
