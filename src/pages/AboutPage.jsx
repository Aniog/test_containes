import React, { useEffect, useRef } from 'react'
import { Award, Users, Globe, Clock, Target, Heart, Shield, Zap } from 'lucide-react'

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    const { ImageHelper } = require('@strikingly/sdk')
    const strkImgConfig = require('@/strk-img-config.json')
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const values = [
    {
      icon: Target,
      title: 'Precision First',
      description: 'Every machine we build meets the highest standards of accuracy and repeatability.',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'We listen to our customers and tailor solutions to their unique challenges.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our machines are built to perform consistently, day after day, year after year.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously invest in R&D to bring cutting-edge technology to our customers.',
    },
  ]

  const milestones = [
    { year: '1998', event: 'Company founded with a vision for precision engineering' },
    { year: '2005', event: 'Launched first CNC-controlled folding machine series' },
    { year: '2010', event: 'Expanded to international markets across 30+ countries' },
    { year: '2015', event: 'Introduced Industry 4.0 connectivity features' },
    { year: '2020', event: 'Reached 500+ machines delivered worldwide milestone' },
    { year: '2024', event: 'Launched next-generation AI-assisted folding technology' },
  ]

  return (
    <div ref={containerRef}>
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Engineering Excellence Since 1998
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              For over 25 years, Artitect Machinery has been at the forefront of sheet metal 
              folding technology, delivering precision-engineered solutions to manufacturers worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="section-title mt-3 mb-6">Built on a Foundation of Quality</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Artitect Machinery was founded with a clear mission: to provide manufacturers with 
                  folding machines that combine uncompromising precision with practical usability. 
                  What started as a small workshop has grown into a global enterprise serving 
                  customers in over 50 countries.
                </p>
                <p>
                  Our commitment to quality begins with the selection of premium materials and 
                  components. Every machine undergoes rigorous testing before leaving our facility, 
                  ensuring it meets our exacting standards for accuracy, durability, and performance.
                </p>
                <p>
                  Today, we continue to innovate while staying true to our founding principles. 
                  Our team of experienced engineers works closely with customers to develop 
                  solutions that address real-world production challenges.
                </p>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-background">
              <img
                alt="Artitect Machinery facility"
                data-strk-img-id="about-facility-s4t5u6"
                data-strk-img="[about-facility-title] [about-story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Values</span>
            <h2 className="section-title mt-3">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Journey</span>
            <h2 className="section-title mt-3">Key Milestones</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <span className="text-accent font-bold text-lg">{milestone.year}</span>
                      <p className="text-text-muted mt-1">{milestone.event}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-4 border-white shadow -translate-x-1/2" />

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Award, value: '25+', label: 'Years of Excellence' },
              { icon: Users, value: '500+', label: 'Machines Delivered' },
              { icon: Globe, value: '50+', label: 'Countries Served' },
              { icon: Clock, value: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
