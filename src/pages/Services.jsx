import React, { useEffect, useRef } from 'react';
import { Search, Compass, CheckSquare, Package, Building, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const services = [
    {
      id: 'supplier-sourcing',
      title: 'Supplier Sourcing & Verification',
      icon: <Search className="w-8 h-8" />,
      description: 'We find the best factories for your product, negotiate prices, and conduct thorough background checks to ensure legitimacy and capability.',
      features: ['Factory background checks', 'Price negotiation', 'Capability assessment', 'Business license verification']
    },
    {
      id: 'sample-consolidation',
      title: 'Sample Consolidation & Check',
      icon: <Package className="w-8 h-8" />,
      description: 'Instead of paying high DHL/FedEx fees for multiple samples from different factories, we receive them locally, check quality, and send them to you in one box.',
      features: ['Local sample receiving', 'Basic quality check', 'Photo/video documentation', 'Consolidated shipping']
    },
    {
      id: 'production-follow-up',
      title: 'Production Follow-up',
      icon: <Compass className="w-8 h-8" />,
      description: 'We act as your project managers on the ground, keeping in constant contact with the factory to avoid delays and solve issues before they become problems.',
      features: ['Weekly progress reports', 'Milestone tracking', 'Issue resolution', 'Timeline management']
    },
    {
      id: 'quality-inspection',
      title: 'Pre-shipment Inspection',
      icon: <CheckSquare className="w-8 h-8" />,
      description: 'Before you pay the final balance, our inspectors visit the factory to check the goods against your specifications using AQL standards.',
      features: ['AQL standard inspection', 'Detailed photo reports', 'Defect identification', 'Packaging check']
    },
    {
      id: 'shipping-logistics',
      title: 'Shipping & Logistics',
      icon: <Building className="w-8 h-8" />,
      description: 'We handle the complex export process, customs clearance, and find the most cost-effective shipping method (Sea, Air, or Rail) to your destination.',
      features: ['Freight forwarding', 'Customs clearance', 'LCL/FCL consolidation', 'Amazon FBA prep']
    },
    {
      id: 'after-sales',
      title: 'After-Sales Support',
      icon: <Headphones className="w-8 h-8" />,
      description: 'Our relationship doesn\'t end when the goods ship. We help negotiate with factories if there are any issues after you receive the products.',
      features: ['Defect claims', 'Replacement negotiation', 'Future order planning', 'Continuous improvement']
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive sourcing solutions tailored to your business needs. Choose end-to-end service or specific modules.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-8">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 id={`service-title-${service.id}`} className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p id={`service-desc-${service.id}`} className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

      {/* Image break */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              data-strk-bg-id="services-bg-inspection"
              data-strk-bg="warehouse worker factory inspection quality control checking products container"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
                We are your eyes and ears on the factory floor in China.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Not sure which service you need?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for a free consultation. We'll analyze your current sourcing situation and recommend the best approach.
          </p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors text-lg">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;