import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Ready to streamline your China sourcing operations? Send us your requirements for a free, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-md border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get a Free Sourcing Quote</h2>
              <p className="text-slate-600 mb-8">Please provide as much detail as possible about your product, target price, and volume so we can assist you better.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-900">Full Name *</label>
                    <Input id="name" placeholder="John Doe" required className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-900">Company Name</label>
                    <Input id="company" placeholder="Example Inc." className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">Email Address *</label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="country" className="text-sm font-medium text-slate-900">Country</label>
                    <Input id="country" placeholder="United States" className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-900">Service Required *</label>
                  <select id="service" className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="" disabled selected>Select a service...</option>
                    <option value="sourcing">Product Sourcing</option>
                    <option value="verification">Factory Verification</option>
                    <option value="quality">Quality Control / Inspection</option>
                    <option value="shipping">Logistics & Shipping</option>
                    <option value="other">Other / Custom Request</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium text-slate-900">Project Details *</label>
                  <Textarea 
                    id="details" 
                    placeholder="Tell us about the product you want to source, specifications, estimated order quantity, and target price..." 
                    className="min-h-[150px] bg-slate-50 border-slate-200 focus-visible:ring-blue-600 resize-y" 
                    required 
                  />
                  <p className="text-xs text-slate-500">Provide links to similar products on Alibaba or Amazon if available.</p>
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg">
                  Submit Inquiry
                </Button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  We aim to respond to all inquiries within 24 working hours.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Office</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Headquarters (Shenzhen)</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Futian District, Shenzhen, <br />
                        Guangdong Province, China
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email Us</h4>
                      <a href="mailto:info@ssourcingchina.com" className="text-blue-600 hover:underline">info@ssourcingchina.com</a>
                      <p className="text-sm text-slate-500 mt-1">For general inquiries and quote requests</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">WeChat / WhatsApp</h4>
                      <p className="text-slate-600">+86 123 4567 8900</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-50 p-3 rounded-full mr-4">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                      <p className="text-slate-600">Monday - Friday</p>
                      <p className="text-slate-600">9:00 AM - 6:00 PM (Beijing Time GMT+8)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200 mt-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Have quick questions?</h3>
                <p className="text-slate-600 mb-4 text-sm">Check our FAQ section for immediate answers about our pricing structure, minimum order quantities, and shipping methods.</p>
                <Button variant="outline" className="w-full bg-white text-slate-900 hover:bg-slate-50">
                  Read FAQs
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;