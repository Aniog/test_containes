import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Award, Clock, Globe, Users } from 'lucide-react'

const stats = [
  { icon: Clock, value: '25+', label: 'Years Experience' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Users, value: '5000+', label: 'Happy Customers' },
  { icon: Award, value: '100%', label: 'Quality Guaranteed' },
]

const values = [
  {
    title: 'Innovation',
    description: 'We continuously invest in research and development to bring the latest technology to our machines.',
  },
  {
    title: 'Quality',
    description: 'Every machine undergoes rigorous testing and quality control before leaving our facility.',
  },
  {
    title: 'Service',
    description: 'Our commitment to customer success extends far beyond the initial sale.',
  },
]

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main ref={containerRef}>
        {/* Page Header */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
          <div
            className="absolute inset-0"
            data-strk-bg-id="about-hero-bg-m4n5o6"
            data-strk-bg="[about-hero-title] [about-hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="about-hero-title" className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white mb-4">
              About ARTITECT
            </h1>
            <p id="about-hero-subtitle" className="text-lg text-white/80 max-w-2xl">
              Building precision metal folding machines since 1995.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="section-title mb-6">Our Story</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    ARTITECT Machinery was founded with a clear vision: to deliver metal folding solutions 
                    that combine precision engineering with practical usability. What started as a small 
                    workshop has grown into a globally recognized manufacturer.
                  </p>
                  <p>
                    Over the decades, we have expanded our product line to include double folding machines, 
                    sheet metal folders, and heavy-duty metal folding equipment. Each machine reflects our 
                    commitment to quality, innovation, and customer satisfaction.
                  </p>
                  <p>
                    Today, our machines are used in fabrication shops, manufacturing plants, and industrial 
                    facilities across more than 40 countries. We continue to invest in research and 
                    development, ensuring our products stay at the forefront of metal folding technology.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] bg-slate-100">
                <img
                  alt="ARTITECT Manufacturing Facility"
                  data-strk-img-id="about-facility-img-p7q8r9"
                  data-strk-img="[about-story-title] [about-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-amber-600 flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={28} className="text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="about-story-title" className="section-title mb-4">Our Values</h2>
              <p className="section-subtitle mx-auto">
                The principles that guide everything we do at ARTITECT Machinery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 md:p-8 border border-slate-200">
                  <div className="w-10 h-1 bg-amber-600 mb-4" />
                  <h3 className="text-lg font-semibold uppercase tracking-wide text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
