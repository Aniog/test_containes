import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Clock, Shield, Target } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            About Artitect Machinery
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Over 25 years of engineering excellence in sheet metal folding technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Founded in 1998, Artitect Machinery began as a small workshop with a big vision: to create the most precise and reliable sheet metal folding machines in the industry.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Today, we operate from a state-of-the-art 15,000 square meter manufacturing facility, serving customers in over 50 countries. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in metal fabrication worldwide.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Every machine that leaves our facility undergoes rigorous testing and quality control, ensuring it meets the highest standards of precision and durability.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
              <img
                alt="Artitect Machinery facility"
                data-strk-img-id="about-facility-img"
                data-strk-img="[about-facility-title] [about-facility-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Shield, title: 'Quality First', desc: 'Every machine is built to exceed industry standards with rigorous quality control.' },
              { icon: Target, title: 'Precision Engineering', desc: 'Micron-level accuracy in design and manufacturing for consistent results.' },
              { icon: Users, title: 'Customer Focus', desc: 'Dedicated support and custom solutions tailored to your specific needs.' },
              { icon: Globe, title: 'Global Reach', desc: 'Serving customers in over 50 countries with local support networks.' },
              { icon: Clock, title: 'Reliability', desc: 'Machines built to last with minimal maintenance and maximum uptime.' },
              { icon: Award, title: 'Innovation', desc: 'Continuous R&D investment to stay at the forefront of folding technology.' },
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{value.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25+', label: 'Years in Business' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '50+', label: 'Countries Served' },
              { value: '98%', label: 'Customer Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="mt-2 text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Want to Learn More?
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Contact us to discuss your folding machine requirements or schedule a facility tour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-border hover:border-accent text-primary font-medium px-8 py-3 rounded-lg transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
