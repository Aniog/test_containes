import React from 'react';
import PageHeader from '@/components/common/PageHeader.jsx';
import InquiryForm from '@/components/common/InquiryForm.jsx';
import { CheckCircle } from 'lucide-react';

const serviceDetails = [
  {
    title: 'Comprehensive Supplier Sourcing',
    description: 'We don’t just find suppliers on Alibaba. We use our private database and local network to find reliable manufacturers that don’t even have an online English presence.',
    features: ['Custom supplier matching', 'Price negotiation', 'Sample consolidation', 'Material auditing'],
    imageId: 'service-sourcing-detail'
  },
  {
    title: 'Rigorous Factory Audits',
    description: 'Protect your investment with on-site verifications. We check their business licenses, ISO certifications, social compliance, and technical capabilities.',
    features: ['On-site verification', 'Financial background checks', 'Machinery inspection', 'Management auditing'],
    imageId: 'service-audit-detail'
  },
  {
    title: 'Professional Quality Control',
    description: 'Our QC inspectors act as your eyes and ears in the factory. We catch issues at the source, saving you the nightmare of receiving a container of defective goods.',
    features: ['Process monitoring', 'AQL inspections', 'Laboratory testing', 'Loading supervision'],
    imageId: 'service-qc-detail'
  },
  {
    title: 'Door-to-Door Logistics',
    description: 'From factory to your warehouse. We handle the complex documentation and regulations so you can focus on selling.',
    features: ['Freight forwarding', 'Customs clearance', 'FBA prep', 'Cargo insurance'],
    imageId: 'service-logistics-detail'
  }
];

const Services = () => {
  return (
    <div>
      <PageHeader 
        title="Our Sourcing Services" 
        subtitle="End-to-end supply chain management tailored to your business needs."
        imageId="services-header"
        searchTerms="China factory production quality control shipping logistics"
      />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceDetails.map((service, index) => (
              <div key={index} className={`flex flex-col lg:items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-gray-200">
                    <img 
                      data-strk-img-id={service.imageId}
                      data-strk-img={`${service.title} factory inspection manufacturing China`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-primary mb-6">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="text-secondary mr-2 shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Need a Custom Solution?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you are a startup looking for your first product or a multinational corporation streamlining your supply chain, we have the flexibility to adapt to your requirements.
              </p>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm inline-block">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Our Promise</div>
                <div className="text-xl italic text-primary">"Reliable sourcing, transparent operations, and zero hidden costs."</div>
              </div>
            </div>
            <InquiryForm title="Request a Service Proposal" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
