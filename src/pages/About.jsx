import React from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, Users, Award, Clock } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Users size={32} />, value: '500+', label: 'Happy Clients' },
    { icon: <Award size={32} />, value: '25+', label: 'Years Experience' },
    { icon: <Clock size={32} />, value: '10,000+', label: 'Machines Built' },
  ]

  const values = [
    {
      title: 'Quality First',
      description:
        'We never compromise on quality. Every machine undergoes rigorous testing before leaving our facility.',
    },
    {
      title: 'Innovation',
      description:
        'We continuously invest in R&D to bring the latest technology to our sheet metal folding solutions.',
    },
    {
      title: 'Customer Support',
      description:
        'Our relationship doesn\'t end at the sale. We provide ongoing support and maintenance for all our machines.',
    },
    {
      title: 'Reliability',
      description:
        'Built to last, our machines are known for their durability and consistent performance in demanding environments.',
    },
  ]

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1
            id="about-title"
            className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display"
          >
            About ARTITECT MACHINERY
          </h1>
          <p
            id="about-subtitle"
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            A legacy of precision engineering and innovation in sheet metal
            folding technology.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 1999, ARTITECT MACHINERY has grown from a small
              workshop to a leading manufacturer of sheet metal folding machines.
              Our journey began with a simple mission: to build the most reliable
              and precise folding machines in the industry.
            </p>
            <p className="text-gray-700 mb-4">
              Over the years, we have continuously innovated and improved our
              designs, incorporating the latest technology while maintaining the
              durability and precision that our customers expect from us.
            </p>
            <p className="text-gray-700">
              Today, our machines are used by professionals around the world,
              from small workshops to large industrial facilities. We take pride
              in every machine we build, knowing that it will help our customers
              achieve their production goals.
            </p>
          </div>
          <div className="relative">
            <div
              className="rounded-lg overflow-hidden shadow-2xl"
              data-strk-bg-id="about-image-7f8a2b"
              data-strk-bg="sheet metal machinery factory manufacturing"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            >
              <div className="w-full h-96 bg-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-light p-8 rounded-lg text-center shadow-md"
            >
              <div className="text-accent flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center font-display">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center font-display">
            Why Choose ARTITECT MACHINERY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Industry-leading precision and accuracy',
              'Durable construction for long service life',
              'Comprehensive warranty and support',
              'Custom solutions for unique requirements',
              'Competitive pricing without compromising quality',
              'Fast delivery and professional installation',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check size={20} className="text-accent flex-shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 font-display">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how ARTITECT MACHINERY can
            support your sheet metal folding needs.
          </p>
          <Link
            to="/contact"
            className="bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
