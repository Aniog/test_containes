import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1998', title: 'Company Founded', description: 'Started as a small workshop specializing in sheet metal fabrication equipment.' },
    { year: '2003', title: 'First Export', description: 'Expanded to international markets, beginning with European distribution.' },
    { year: '2008', title: 'Manufacturing Expansion', description: 'Opened new production facility with increased capacity and advanced machinery.' },
    { year: '2012', title: 'ISO Certification', description: 'Achieved ISO 9001 certification for quality management excellence.' },
    { year: '2016', title: 'CNC Innovation', description: 'Launched next-generation CNC-controlled folding machines with advanced features.' },
    { year: '2020', title: 'Global Network', description: 'Established presence in 40+ countries with comprehensive service support.' },
    { year: '2024', title: 'Industry Leadership', description: 'Recognized as a leading manufacturer of precision sheet metal folding equipment.' },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Precision',
      description: 'Every machine is engineered with meticulous attention to accuracy, ensuring consistent, high-quality results.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Reliability',
      description: 'Built to last with premium components and robust construction that withstands demanding production environments.',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Continuously advancing our technology to meet evolving industry needs and customer requirements.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Partnership',
      description: 'Viewing each customer as a long-term partner, providing comprehensive support throughout the machine lifecycle.',
    },
  ];

  const team = [
    {
      name: 'Richard Chen',
      role: 'Chief Executive Officer',
      image: 'RC',
      bio: '25+ years in industrial machinery manufacturing',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Director of Engineering',
      image: 'SM',
      bio: 'Former aerospace engineer specializing in precision systems',
    },
    {
      name: 'Marcus Weber',
      role: 'Head of Global Sales',
      image: 'MW',
      bio: 'International trade expert with 15+ years experience',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Quality Assurance Manager',
      image: 'ER',
      bio: 'ISO-certified quality professional',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6">
              Engineering Excellence Since 1998
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              For over two decades, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology, delivering precision-engineered machines to industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mt-3 mb-6">
                From Workshop to World Leader
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Founded in 1998, ARTITECT MACHINERY began as a small family-owned workshop with a simple mission: to build folding machines that set new standards for precision and reliability.
                </p>
                <p>
                  What started as a passion for engineering excellence has grown into a global enterprise, with over 500 machines delivered to customers across 40+ countries. Our commitment to quality has never wavered.
                </p>
                <p>
                  Today, we combine traditional craftsmanship with cutting-edge technology. Every machine that leaves our facility represents our dedication to helping businesses achieve their fabrication goals with confidence.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">25+</p>
                  <p className="text-sm text-neutral-500">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-neutral-500">Machines Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">40+</p>
                  <p className="text-sm text-neutral-500">Countries Served</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-neutral-50 rounded-2xl p-8">
                <svg viewBox="0 0 400 300" className="w-full">
                  {/* Factory Illustration */}
                  <rect x="50" y="150" width="300" height="100" rx="4" fill="#1E3A5F" />
                  <rect x="70" y="170" width="60" height="80" fill="#2A4A73" />
                  <rect x="150" y="120" width="100" height="130" fill="#2A4A73" />
                  <rect x="270" y="180" width="60" height="70" fill="#2A4A73" />
                  
                  {/* Windows */}
                  <rect x="80" y="180" width="40" height="30" fill="#C9A962" opacity="0.8" />
                  <rect x="80" y="220" width="40" height="30" fill="#C9A962" opacity="0.6" />
                  <rect x="170" y="140" width="60" height="40" fill="#C9A962" opacity="0.8" />
                  <rect x="170" y="190" width="60" height="40" fill="#C9A962" opacity="0.6" />
                  
                  {/* Door */}
                  <rect x="185" y="200" width="30" height="50" fill="#152C4A" />
                  
                  {/* Smokestack */}
                  <rect x="300" y="100" width="20" height="50" fill="#2A4A73" />
                  <ellipse cx="310" cy="95" rx="15" ry="10" fill="#D4D4D4" opacity="0.5" />
                  <ellipse cx="310" cy="85" rx="12" ry="8" fill="#D4D4D4" opacity="0.3" />
                  
                  {/* Ground */}
                  <line x1="20" y1="250" x2="380" y2="250" stroke="#D4D4D4" strokeWidth="2" />
                  
                  {/* Accent */}
                  <circle cx="200" cy="80" r="30" fill="#C9A962" opacity="0.2" />
                  <text x="200" y="85" textAnchor="middle" fill="#1E3A5F" fontSize="14" fontWeight="bold">EST. 1998</text>
                </svg>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-primary rounded-xl p-6 shadow-lg">
                <Award className="w-8 h-8 mb-2" />
                <p className="font-bold">ISO 9001</p>
                <p className="text-sm">Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mt-3">
              Principles That Drive Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="font-sans font-semibold text-lg text-neutral-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mt-3">
              Milestones of Excellence
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-neutral-50 rounded-xl p-6 inline-block">
                      <span className="text-accent font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-sans font-semibold text-lg text-neutral-800 mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-2">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-4 h-4 bg-primary rounded-full border-4 border-white shadow z-10 shrink-0" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-800 mt-3">
              Meet Our Team
            </h2>
            <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
              Experienced professionals dedicated to delivering excellence in every machine we produce.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.image}</span>
                </div>
                <h3 className="font-sans font-semibold text-lg text-neutral-800">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-medium">{member.role}</p>
                <p className="text-neutral-500 text-sm mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Whether you're looking for a single machine or planning a large-scale deployment, we're here to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-dark transition-colors shadow-lg"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;