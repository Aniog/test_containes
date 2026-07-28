import React from 'react';
import PageHeader from '@/components/common/PageHeader.jsx';
import InquiryForm from '@/components/common/InquiryForm.jsx';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our sourcing experts today. Your supply chain starts here."
        imageId="contact-header"
        searchTerms="China office customer support business meeting help desk"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Offices</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-secondary mt-1 mr-4 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-primary">Headquarters (China)</h4>
                      <p className="text-gray-600">Room 801, Haichuang Tower, Haizhu District, Guangzhou, China</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-secondary mt-1 mr-4 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-primary">Phone & WhatsApp</h4>
                      <p className="text-gray-600">+86 123 4567 8901</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-secondary mt-1 mr-4 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-primary">Email</h4>
                      <p className="text-gray-600">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-secondary mt-1 mr-4 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-primary">Working Hours</h4>
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM (GMT+8)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-primary mb-4">Fast Response Policy</h4>
                <p className="text-sm text-gray-600">
                  We value your time. All inquiries are assigned to a dedicated sourcing manager and responded to within 12-24 business hours.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <InquiryForm title="Send Us a Message" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative overflow-hidden">
        {/* Placeholder for real map */}
        <div 
          className="absolute inset-0 z-0 grayscale"
          data-strk-bg-id="map-placeholder"
          data-strk-bg="Guangzhou city map aerial view"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/20 flex items-center">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mr-3"></div>
            <span className="font-bold text-primary">Our Guangzhou Office</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
