import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        description="Ready to source from China without the headache? Tell us about your project, and we'll provide a free, no-obligation quote."
        bgImageId="bg-contact-header"
        bgImageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2069"
      />
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
                
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Our team in Shenzhen is ready to assist you. Whether you have a quick question or a detailed sourcing requirement, we're here to help.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg mr-4">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Office Location</h3>
                                <p className="text-slate-600">
                                    Futian District, Shenzhen,<br/>
                                    Guangdong Province, China<br/>
                                    518000
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg mr-4">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Phone / WhatsApp</h3>
                                <p className="text-slate-600">+86 123 4567 8900</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg mr-4">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                                <p className="text-slate-600">info@ssourcingchina.com</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg mr-4">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Business Hours</h3>
                                <p className="text-slate-600">Monday - Friday<br/>9:00 AM - 6:00 PM (CST)</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <ContactForm />
                </div>
                
            </div>
        </div>
      </section>
    </div>
  );
}
