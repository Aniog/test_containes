import React, { useEffect, useRef } from 'react';
import { Target, Eye, Heart, Users, Building2, Globe } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.observe-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const milestones = [
    { year: '1998', event: 'Company founded with a vision for precision engineering' },
    { year: '2005', event: 'Launched first CNC-controlled folding machine series' },
    { year: '2012', event: 'Expanded to 30+ countries with global distribution network' },
    { year: '2018', event: 'Introduced Industry 4.0 smart factory solutions' },
    { year: '2024', event: 'Celebrating 25+ years of industrial excellence' },
  ];

  const values = [
    {
      icon: <Target className="w-7 h-7" />,
      title: 'Precision',
      description: 'Every machine we produce meets the highest standards of accuracy and repeatability.',
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: 'Innovation',
      description: 'Continuous R&D investment to stay ahead of industry demands and technologies.',
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: 'Reliability',
      description: 'Built to last with premium materials and rigorous quality control processes.',
    },
  ];

  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '500+', label: 'Machines Delivered' },
    { value: '50+', label: 'Countries Served' },
    { value: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" ref={containerRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="observe-animate opacity-0 inline-block px-4 py-1.5 rounded-full bg-[#E94560]/10 text-[#E94560] text-sm font-semibold tracking-wide mb-4">
            About ARTITECT
          </span>
          <h2 className="observe-animate opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] tracking-tight mb-6">
            Engineering Excellence Since{' '}
            <span className="text-[#E94560]">1998</span>
          </h2>
          <p className="observe-animate opacity-0 text-lg text-gray-600 leading-relaxed">
            ARTITECT MACHINERY stands at the forefront of metal folding technology. 
            For over two decades, we've been dedicated to designing and manufacturing 
            precision folding equipment that empowers fabricators worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="observe-animate opacity-0 grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#1A1A2E] to-[#16213E] border border-[#0F3460]"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#E94560] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image/Visual */}
          <div className="observe-animate opacity-0 relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=500&fit=crop"
                alt="ARTITECT Manufacturing Facility"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" fill="%231A1A2E"%3E%3Crect width="600" height="500" /%3E%3Ctext x="300" y="250" text-anchor="middle" fill="%230F3460" font-size="18"%3EManufacturing Excellence%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-[240px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#E94560]/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#E94560]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1A1A2E]">10,000m²</div>
                  <div className="text-sm text-gray-500">Production Facility</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="observe-animate opacity-0 text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4">
                A Legacy of Precision Engineering
              </h3>
              <p className="observe-animate opacity-0 text-gray-600 leading-relaxed mb-6">
                Founded in 1998, ARTITECT MACHINERY began as a small workshop with a big 
                vision: to create folding machines that set new standards for precision 
                and reliability in the metalworking industry.
              </p>
              <p className="observe-animate opacity-0 text-gray-600 leading-relaxed">
                Today, our state-of-the-art manufacturing facility spans over 10,000 square 
                meters, housing advanced CNC machining centers, assembly lines, and a dedicated 
                R&D center. We serve clients across 50+ countries, from small fabrication shops 
                to major industrial manufacturers.
              </p>
            </div>

            {/* Values */}
            <div className="observe-animate opacity-0 space-y-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-[#F8F9FA] hover:bg-[#1A1A2E] group transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#E94560]/10 flex items-center justify-center text-[#E94560] group-hover:bg-[#E94560] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1A1A2E] group-hover:text-white transition-colors mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="observe-animate opacity-0">
          <h3 className="observe-animate opacity-0 text-2xl sm:text-3xl font-bold text-[#1A1A2E] text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#E94560]/20 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-block px-4 py-2 rounded-full bg-[#E94560]/10 text-[#E94560] text-sm font-bold mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>

                  {/* Dot */}
                  <div className="hidden lg:flex w-4 h-4 rounded-full bg-[#E94560] border-4 border-white shadow-lg flex-shrink-0 relative z-10" />

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global Reach */}
        <div className="observe-animate opacity-0 mt-20 rounded-3xl bg-gradient-to-br from-[#1A1A2E] to-[#16213E] p-8 lg:p-12 text-center">
          <Globe className="w-12 h-12 text-[#E94560] mx-auto mb-6" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Global Presence, Local Support
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With distribution partners in 50+ countries, ARTITECT MACHINERY ensures 
            that expert support is always within reach. Our global network provides 
            rapid response times for sales, service, and spare parts anywhere in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
