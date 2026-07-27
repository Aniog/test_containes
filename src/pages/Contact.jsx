import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    toast.success('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      productCategory: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      detail: 'info@ssourcingchina.com',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      detail: '+86 138 0000 0000',
      subtext: 'Mon-Fri, 9am-6pm CST'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      detail: 'Shenzhen, China',
      subtext: 'By appointment only'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      detail: 'Mon - Fri: 9:00 - 18:00',
      subtext: 'China Standard Time (CST)'
    }
  ];

  const offices = [
    {
      city: 'Shenzhen',
      country: 'China',
      address: 'Shenzhen, Guangdong Province, China',
      phone: '+86 138 0000 0000',
      email: 'shenzhen@ssourcingchina.com'
    },
    {
      city: 'Shanghai',
      country: 'China',
      address: 'Shanghai, China',
      phone: '+86 138 0000 0001',
      email: 'shanghai@ssourcingchina.com'
    },
    {
      city: 'Yiwu',
      country: 'China',
      address: 'Yiwu, Zhejiang Province, China',
      phone: '+86 138 0000 0002',
      email: 'yiwu@ssourcingchina.com'
    }
  ];

  return (
    <div>
      <Toaster />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to start your China sourcing project? Get in touch with our team for a free consultation and personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-slate-900 mb-1">{info.detail}</p>
                  <p className="text-sm text-slate-600">{info.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-2">
                      Product Category
                    </label>
                    <Input
                      id="productCategory"
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleInputChange}
                      placeholder="e.g., Electronics, Textiles, Home Goods"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Please describe your product requirements, target quantity, budget range, and any other relevant details..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Offices Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">{office.city}, {office.country}</h4>
                            <p className="text-slate-600 text-sm mt-1">{office.address}</p>
                            <div className="mt-2 space-y-1 text-sm">
                              <p className="flex items-center gap-2 text-slate-600">
                                <Phone className="w-4 h-4" />
                                {office.phone}
                              </p>
                              <p className="flex items-center gap-2 text-slate-600">
                                <Mail className="w-4 h-4" />
                                {office.email}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-md bg-blue-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Why Contact Us?</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Free initial consultation with no obligation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Customized sourcing plan within 48 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>No hidden fees or long-term contracts required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>Dedicated sourcing agent for your project</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Schedule a call with one of our sourcing experts. We are available during business hours to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+8613800000000">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 w-5 h-5" />
                Call +86 138 0000 0000
              </Button>
            </a>
            <a href="mailto:info@ssourcingchina.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
