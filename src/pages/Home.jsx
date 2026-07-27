import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import HomeHero from '../components/home/HomeHero';
import HomeServices from '../components/home/HomeServices';
import HomeProcess from '../components/home/HomeProcess';
import HomeInquiry from '../components/home/HomeInquiry';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <HomeHero />
      <HomeServices />
      <HomeProcess />
      
      {/* Trust Points / Problems We Solve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                data-strk-img-id="trust-points-img-881"
                data-strk-img="[trust-title] QC inspection team in China factory workflow"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                className="rounded-2xl shadow-xl w-full h-auto"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
                alt="Quality Control Meeting"
              />
            </div>
            <div className="mt-12 lg:mt-0 order-1 lg:order-2">
              <h2 id="trust-title" className="text-3xl font-bold text-slate-900 md:text-4xl">Why Overseas Buyers Trust SSourcing China</h2>
              <p className="mt-6 text-slate-600 text-lg">
                Navigating the Chinese market can be challenging. We bridge the gap between you and the manufacturers, ensuring your interests are protected at every step.
              </p>
              
              <div className="mt-8 space-y-6">
                {[
                  { title: 'Local Presence', text: 'Offices in Shenzhen and Ningbo, placing us at the heart of manufacturing hubs.' },
                  { title: 'Risk Mitigation', text: 'We identify scams, quality issues, and delays before they impact your business.' },
                  { title: 'Transparent Fees', text: 'No hidden commissions. We work on a fixed service fee or a clear percentage basis.' },
                  { title: 'Clear Communication', text: 'Fluent in English and Mandarin, we ensure no information is lost in translation.' }
                ].map((point, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-slate-900">{point.title}</h4>
                    <p className="text-slate-600">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How do you charge for your services?', a: 'We offer flexible pricing models including fixed project fees or a commission based on total order value, depending on the scope of work.' },
              { q: 'Can you source any type of product?', a: 'Yes, we source a wide range of categories including electronics, furniture, textiles, industrial parts, and more. Our network spans multiple industries.' },
              { q: 'How do you verify a factor\'s reliability?', a: 'We perform on-site audits, check business licenses, export qualifications, and review past export performance and quality management systems.' },
              { q: 'Do you handle the shipping process?', a: 'Absolutely. We coordinate with freight forwarders to manage sea, air, and rail shipments, including all necessary export documentation.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeInquiry />
    </div>
  );
};

export default Home;
