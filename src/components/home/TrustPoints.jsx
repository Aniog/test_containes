import React, { useEffect, useRef } from 'react';
import { Shield, Award, Users, Globe, FileCheck, Headphones } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustItems = [
  {
    icon: Shield,
    title: 'Verified Suppliers Only',
    desc: 'Every supplier in our network has passed a rigorous on-site audit covering financials, production capacity, certifications, and export history.',
  },
  {
    icon: Award,
    title: '15+ Years Experience',
    desc: 'Our team has deep expertise across electronics, textiles, hardware, plastics, and more. We know the China manufacturing landscape inside out.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Manager',
    desc: 'Every client gets a bilingual project manager who serves as your single point of contact from sourcing through delivery.',
  },
  {
    icon: Globe,
    title: 'Global Clientele',
    desc: 'We serve buyers from North America, Europe, Australia, the Middle East, and Southeast Asia across diverse industries.',
  },
  {
    icon: FileCheck,
    title: 'Full Transparency',
    desc: 'You receive detailed audit reports, inspection photos, production updates, and transparent pricing with no hidden fees.',
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    desc: 'Our relationship does not end at delivery. We provide after-sales support, reorder management, and continuous supplier monitoring.',
  },
];

const TrustPoints = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-navy/10 to-gold/20 rounded-2xl blur-lg" />
              <img
                alt="Professional Chinese factory audit and quality inspection"
                className="relative rounded-xl shadow-lg border border-gray-100 w-full"
                data-strk-img-id="trust-factory-audit-9p0q1r"
                data-strk-img="[trust-heading] factory audit china quality inspection"
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          {/* Right: trust items */}
          <div>
            <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
              Why Choose SSourcing China
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We are not just a sourcing agent — we are your dedicated partner on the ground in China, 
              committed to protecting your interests at every stage.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {trustItems.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
