import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const detailServices = [
    {
      id: 's1',
      title: 'Product Sourcing & Supplier Search',
      desc: 'We identify and evaluate multiple suppliers to find the best fit for your specific product needs, balancing cost, quality, and reliability.',
      img: 'China wholesale market sourcing'
    },
    {
      id: 's2',
      title: 'Supplier Audits & Factory Verification',
      desc: 'Protect your brand and investment by verifying the legitimacy and production capacity of your potential Chinese partners.',
      img: 'China factory audit inspection'
    },
    {
      id: 's3',
      title: 'Detailed Quality Control (QC)',
      desc: 'Our inspectors act as your eyes on the ground, ensuring that every product meets your specifications before it leaves China.',
      img: 'China product quality inspection'
    },
    {
      id: 's4',
      title: 'Logistics & Shipping Coordination',
      desc: 'We handle the complexity of international logistics, ensuring your goods are shipped efficiently and cost-effectively.',
      img: 'China shipping port containers'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-[#002D62] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Sourcing Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            End-to-end solutions designed to eliminate the risks of importing from China.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {detailServices.map((service, idx) => (
              <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                <div className="flex-1">
                  <h2 id={`service-h-${service.id}`} className="text-3xl font-bold mb-6 text-[#002D62]">{service.title}</h2>
                  <p id={`service-p-${service.id}`} className="text-lg text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      data-strk-img-id={`service-img-${service.id}`}
                      data-strk-img={`[service-h-${service.id}] ${service.img}`}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
