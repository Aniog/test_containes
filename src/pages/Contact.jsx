import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageSquare, Headphones, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Shenzhen, Guangdong, China'],
      description: 'Visit our office for face-to-face meetings',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 755 8123 4567', '+86 755 8123 4568'],
      description: 'Mon-Fri, 9AM-6PM CST',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcing-china.com', 'support@ssourcing-china.com'],
      description: 'We respond within 24 hours',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 9AM - 1PM'],
      description: 'China Standard Time (CST)',
    },
  ];

  const services = [
    {
      icon: MessageSquare,
      title: 'General Inquiry',
      description: 'Questions about our services',
    },
    {
      icon: Headphones,
      title: 'Support',
      description: 'Existing client support',
    },
    {
      icon: Zap,
      title: 'Quick Quote',
      description: 'Fast pricing response',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Get in touch for a free consultation and sourcing quote. 
            We're here to help you succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <h3 className="font-semibold text-[#1E3A5F] mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-[#64748B]">{detail}</p>
                ))}
                <p className="text-xs text-[#94A3B8] mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                Send Us a Message
              </h2>
              <p className="text-[#64748B] mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-[#F8FAFC] rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-[#64748B] mb-6">
                    Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="product">Product Interest *</Label>
                      <Input
                        id="product"
                        placeholder="What products do you need?"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="quantity">Estimated Quantity</Label>
                      <Input
                        id="quantity"
                        placeholder="e.g., 1000 units"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, timeline, and any specific needs..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="mt-1.5"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Inquiry
                    <Send className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-xs text-[#94A3B8] text-center">
                    By submitting this form, you agree to our Privacy Policy. 
                    We'll use your information to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                How Can We Help?
              </h2>
              <p className="text-[#64748B] mb-8">
                Choose the best way to reach us based on your needs.
              </p>

              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[#F8FAFC] rounded-xl"
                  >
                    <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E3A5F]">
                        {service.title}
                      </h4>
                      <p className="text-sm text-[#64748B]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-[#F8FAFC] rounded-xl p-8 text-center">
                <MapPin className="w-12 h-12 text-[#1E3A5F] mx-auto mb-4" />
                <h4 className="font-semibold text-[#1E3A5F] mb-2">
                  Visit Our Office
                </h4>
                <p className="text-sm text-[#64748B] mb-4">
                  We welcome visitors by appointment. 
                  Schedule a meeting to discuss your sourcing needs in person.
                </p>
                <Link to="/how-it-works">
                  <Button variant="outline" size="sm">
                    Learn About Our Process
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">
            Have Questions?
          </h2>
          <p className="text-[#64748B] mb-8">
            Check our FAQ section for answers to common questions about our services.
          </p>
          <Link to="/#faq">
            <Button variant="outline" size="lg">
              View FAQ
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;