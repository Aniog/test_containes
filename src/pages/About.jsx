import { useEffect, useRef } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '5000+', label: 'Machines Sold' },
    { number: '50+', label: 'Countries Served' },
    { number: '99%', label: 'Customer Satisfaction' },
  ]

  const values = [
    {
      title: 'Precision',
      description: 'We engineer every machine to deliver exact, repeatable results.',
    },
    {
      title: 'Durability',
      description: 'Our machines are built to withstand the toughest production environments.',
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our technology to meet industry demands.',
    },
    {
      title: 'Support',
      description: 'Our global service network ensures you\'re never alone.',
    },
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">About ARTITECT</h1>
          <p className="text-xl text-slate-300">
            Engineering excellence since 2001
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2001, ARTITECT MACHINERY has grown from a small workshop to a global
                leader in sheet metal folding technology. Our journey began with a simple mission:
                to build the most precise and reliable folding machines in the industry.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Today, we serve customers in over 50 countries, from small job shops to major
                automotive manufacturers. Our commitment to quality and innovation has made us the
                trusted choice for businesses that demand the best.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Every ARTITECT machine is a testament to our engineering expertise and dedication
                to customer success. We don't just build machines – we build partnerships that last.
              </p>
            </div>
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden">
              <div
                className="w-full h-full"
                data-strk-bg-id="about-factory"
                data-strk-bg="industrial machinery factory manufacturing"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl font-bold text-blue-400 mb-2">{stat.number}</p>
                <p className="text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Expertise */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden">
              <div
                className="w-full h-full"
                data-strk-bg-id="about-team"
                data-strk-bg="engineering team technical experts"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Engineering Expertise</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our team of over 200 engineers and technicians brings decades of combined experience
                to every machine we build. From initial design to final testing, we maintain the
                highest standards of quality control.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We invest heavily in R&D to stay ahead of industry trends and continuously improve
                our machines. Our state-of-the-art testing facility ensures that every machine meets
                our exacting standards before it ships to your facility.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">CE Certified Products</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-slate-700">Global Service Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with ARTITECT</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers worldwide. Let us help you find the perfect
            folding solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition inline-block"
            >
              Contact Our Team
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition inline-block"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}