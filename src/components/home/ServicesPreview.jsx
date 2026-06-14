import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ClipboardCheck, ShieldCheck, TrendingUp, Truck, Package, ArrowRight } from 'lucide-react';
import { services } from '../../data/content';

const iconMap = {
  Search,
  ClipboardCheck,
  ShieldCheck,
  TrendingUp,
  Truck,
  Package,
};

const ServicesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Sourcing Solutions
          </h2>
          <p className="text-lg text-[#6B7280]">
            From supplier identification to final delivery, we handle every step of your China sourcing journey with professional expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Package;
            return (
              <div
                key={service.id}
                className="group bg-[#F8FAFC] hover:bg-white rounded-xl p-6 border border-transparent hover:border-[#E5E7EB] hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-[#E67E22]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E67E22] transition-colors duration-300">
                  <IconComponent className="w-7 h-7 text-[#E67E22] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#E67E22] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#E67E22] font-semibold hover:text-[#D35400] transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;