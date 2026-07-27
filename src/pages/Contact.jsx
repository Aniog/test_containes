import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. Our sourcing expert will contact you within 24 hours.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productType: '',
      message: ''
    });
  };

  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get a Free Sourcing Quote</h1>
          <p className="text-xl text-slate-600">
            Tell us about the products you need, and our team will get back to you within 24 hours with an initial assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
           {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
                  <p className="text-slate-600 text-sm">Suite 1205, Business Tower<br/>Yuexiu District<br/>Guangzhou, Guangdong<br/>China 510000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-600 text-sm">info@ssourcingchina.com<br/>quotes@ssourcingchina.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-600 text-sm">+86 138-xxxx-xxxx<br/>(WhatsApp / WeChat)</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                  <p className="text-slate-600 text-sm">Monday - Friday: 9am - 6pm (CST)<br/>Saturday - Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-slate-200 shadow-xl">
              <CardContent className="p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Inquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="John Doe"
                        className="bg-slate-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange} 
                        placeholder="Your Company LLC"
                        className="bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="john@example.com"
                        className="bg-slate-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone / WhatsApp</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="+1 (555) 000-0000"
                        className="bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productType">What type of product are you looking for? *</Label>
                    <Input 
                      id="productType" 
                      name="productType" 
                      value={formData.productType} 
                      onChange={handleChange} 
                      required 
                      placeholder="e.g., Smart Home Plugs, Yoga Mats, Custom Packaging"
                      className="bg-slate-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Detailed Requirements *</Label>
                    <p className="text-xs text-slate-500 mb-2">Please include target quantity, budget, materials, and any specific certifications needed.</p>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      rows={6}
                      placeholder="I am looking to source..."
                      className="bg-slate-50 resize-y"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-14 text-lg">
                    <Send className="w-5 h-5 mr-2" /> Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
