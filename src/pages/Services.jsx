import React from 'react';
import { Search, ShieldCheck, PenTool, Ship, Building2, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'supplier-sourcing',
      title: 'Supplier Sourcing & Verification',
      icon: <Search className="w-8 h-8 text-blue-600" />,
      description: 'We match your product requirements with qualified factories from our extensive network. We don’t just use Alibaba; we leverage local industry clusters and databases.',
      details: [
        'Identify 3-5 potential factories',
        'Verify business licenses and export qualifications',
        'Compare quotations (Bill of Materials breakdown)',
        'Sample arrangement and consolidation'
      ],
      imgQuery: 'factory sourcing meeting raw materials'
    },
    {
      id: 'factory-audit',
      title: 'Factory Audits',
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      description: 'Before you place a large order, our team physically visits the factory to ensure they are a real manufacturer, not a trading company.',
      details: [
        'On-site facility inspection',
        'Production capacity assessment',
        'Quality Management System (QMS) evaluation',
        'Detailed audit report with photos and videos'
      ],
      imgQuery: 'inspector checking factory production machinery'
    },
    {
      id: 'oem-odm',
      title: 'OEM/ODM & Product Development',
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      description: 'Bring your custom product ideas to life. We help communicate technical specifications clearly to Chinese engineers to avoid costly misunderstandings.',
      details: [
        'Tooling and mold development assistance',
        'Packaging design coordination',
        'Prototyping supervision',
        'IP protection guidance (NNN agreements)'
      ],
      imgQuery: 'engineers discussing product blueprint prototype'
    },
    {
      id: 'quality-control',
      title: 'Quality Control (QC)',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      description: 'We perform strict quality control checks according to internationally recognized AQL standards before the goods are shipped.',
      details: [
        'Pre-Production Inspection (PPI)',
        'During Production Inspection (DPI)',
        'Pre-Shipment Inspection (PSI)',
        '100% Defect Sorting (for high-value items)'
      ],
      imgQuery: 'quality control inspector measuring product'
    },
    {
      id: 'compliance',
      title: 'Compliance & Lab Testing',
      icon: <FileCheck className="w-8 h-8 text-blue-600" />,
      description: 'Ensure your products meet the regulatory standards of your target market (CE, RoHS, FDA, FCC, etc.).',
      details: [
        'Coordinating with certified local labs (SGS, TUV, Intertek)',
        'Sample preparation for testing',
        'Reviewing test reports for accuracy'
      ],
      imgQuery: 'laboratory testing product compliance'
    },
    {
      id: 'shipping',
      title: 'Shipping & Logistics Management',
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      description: 'From the factory door to your warehouse, we handle the complex logistics of international shipping.',
      details: [
        'Sea Freight (FCL/LCL) and Air Freight',
        'Amazon FBA Prep and Shipping',
        'Export customs clearance in China',
        'Warehouse consolidation for multiple suppliers'
      ],
      imgQuery: 'cargo ship loaded with containers port'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sourcing Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive supply chain solutions tailored for international buyers. 
            We act as your dedicated procurement team in China.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id} 
                className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-slate-100 relative">
                    <img 
                      data-strk-img-id={`service-detail-${service.id}`}
                      data-strk-img={service.imgQuery}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-4 border-t border-slate-100">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                          <CheckCircle2 className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a custom sourcing plan?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Whether you need end-to-end service or just a one-time factory audit, we can customize a solution for your business.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
            >
              Contact Us Today
            </Link>
         </div>
      </section>
    </div>
  );
};

// Re-import missing icon for the map above
import { CheckCircle2 } from 'lucide-react';

export default Services;