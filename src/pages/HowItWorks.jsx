import React from 'react';
import PageHeader from '@/components/common/PageHeader.jsx';
import Process from '@/components/home/Process.jsx';
import InquiryForm from '@/components/common/InquiryForm.jsx';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div>
      <PageHeader 
        title="Our Sourcing Process" 
        subtitle="A step-by-step guide to how we manage your China supply chain."
        imageId="how-it-works-header"
        searchTerms="China business process workflow office meeting"
      />
      
      <Process />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Why Our Process Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine local expertise with international standards to eliminate the risks of distance and language.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Local Presence</h3>
              <p className="text-gray-600">Our team is based in major manufacturing hubs like Guangzhou, Shenzhen, and Ningbo. We can reach any factory within hours.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Direct Communication</h3>
              <p className="text-gray-600">We speak the language of the factories. We understand the nuances of Chinese business culture and use it to your advantage.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">No Confilct of Interest</h3>
              <p className="text-gray-600">We work for YOU, not the factory. We never take kickbacks, ensuring our recommendations are always in your best interest.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your First Sourcing Project?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            The first step is a consultation to understand your needs. It's free, no-obligation, and could save you thousands in production errors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-gray-300 overflow-hidden">
                  <img 
                    data-strk-img-id={`team-${i}`}
                    data-strk-img="business professional headshot"
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold">Contact our team</div>
              <div className="text-secondary text-sm">Response within 24 hours</div>
            </div>
          </div>
          <div className="mt-12">
             <InquiryForm title="Inquire Now" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
