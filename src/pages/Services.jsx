import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ShieldCheck, Search, ClipboardList, Ship, Target, Building2,
  ArrowRight, CheckCircle, Send,
} from 'lucide-react';
import { siteData } from '@/data/content';

const iconMap = {
  ShieldCheck, Search, ClipboardList, Ship, Target, Building2,
};

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-blue py-20 md:py-24">
        <div className="container-custom text-center">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Comprehensive Sourcing Services</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            End-to-end solutions for importing products from China. We handle every step 
            so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {siteData.services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                      <img
                        data-strk-img-id={`service-${service.id}`}
                        data-strk-img={`[service-${service.id}-desc] [service-${service.id}-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="w-14 h-14 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary-blue" />
                    </div>
                    <h2 id={`service-${service.id}-title`} className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p id={`service-${service.id}-desc`} className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-accent-orange-hover transition-colors"
                    >
                      Get a Quote for This Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Every project is unique. Contact us to discuss your specific requirements 
            and get a tailored sourcing plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-orange-hover transition-colors text-lg"
          >
            <Send className="w-5 h-5 mr-2" />
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
