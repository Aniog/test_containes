import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Target, Eye, Heart, ArrowRight, Users, Globe, Award } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    icon: Target,
    title: 'Precision First',
    desc: 'Every machine is engineered to the highest tolerances, ensuring consistent, repeatable results that meet the most demanding specifications.',
  },
  {
    icon: Eye,
    title: 'Continuous Innovation',
    desc: 'We invest in research and development to bring the latest folding technologies to our customers, keeping their operations ahead of the curve.',
  },
  {
    icon: Heart,
    title: 'Customer Partnership',
    desc: 'We view every client as a long-term partner, providing ongoing support, training, and service throughout the life of their equipment.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    desc: 'Our machines are built to international quality and safety standards, serving customers across North America, Europe, and Asia-Pacific.',
  },
  {
    icon: Award,
    title: 'Craftsmanship',
    desc: 'With over 15 years of specialized experience, our team brings unmatched expertise to every machine we design and manufacture.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Our engineers, technicians, and support staff are industry veterans dedicated to delivering excellence at every touchpoint.',
  },
]

const milestones = [
  { year: '2009', event: 'ARTITECT MACHINERY founded with a vision to revolutionize metal folding technology.' },
  { year: '2013', event: 'Launched the first DF-3000 Double Folding Machine, establishing our reputation for quality.' },
  { year: '2017', event: 'Expanded manufacturing facility to 50,000 sq ft to meet growing global demand.' },
  { year: '2020', event: 'Introduced smart CNC controls across the entire product line.' },
  { year: '2024', event: 'Achieved ISO 9001:2024 certification for quality management systems.' },
]

export default function About() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      return ImageHelper.loadImages(strkImgConfig, heroRef.current)
    }
  }, [])

  useEffect(() => {
    if (storyRef.current) {
      return ImageHelper.loadImages(strkImgConfig, storyRef.current)
    }
  }, [])

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative py-20 md:py-28 bg-brand-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="about-hero-3e5b7a"
          data-strk-bg="[about-title] [about-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 to-brand-navy/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">
            Our Story
          </span>
          <h1
            id="about-title"
            className="font-serif text-3xl md:text-5xl font-bold text-white"
          >
            About ARTITECT MACHINERY
          </h1>
          <p
            id="about-subtitle"
            className="mt-4 text-white/70 max-w-2xl mx-auto"
          >
            Over 15 years of precision engineering, innovation, and commitment to the metal fabrication industry.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/3] bg-brand-cream-dark overflow-hidden">
                <img
                  alt="ARTITECT MACHINERY manufacturing facility"
                  data-strk-img-id="about-story-9f2b4c"
                  data-strk-img="[about-title] [about-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="inline-block text-brand-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">
                Our Beginning
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                A Legacy of Precision Engineering
              </h2>
              <div className="space-y-4 text-brand-slate leading-relaxed">
                <p>
                  Founded in 2009, ARTITECT MACHINERY began with a simple mission: to build metal folding machines that combine exceptional precision with lasting durability. What started as a small workshop has grown into a globally recognized manufacturer serving industries from aerospace to architecture.
                </p>
                <p>
                  Our team of experienced engineers and technicians designs every machine with a focus on real-world performance. We understand that in metal fabrication, accuracy is not just a goal — it is a requirement. That is why every ARTITECT machine undergoes rigorous testing before it leaves our facility.
                </p>
                <p>
                  Today, our product line includes double folding machines, sheet metal folders, and metal folding machines trusted by manufacturers in over 30 countries. We continue to innovate, integrating smart controls and automation to help our customers achieve new levels of productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow" />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-brand-cream-dark" />
                  )}
                </div>
                <div className={`pb-12 ${index === milestones.length - 1 ? 'pb-0' : ''}`}>
                  <span className="text-brand-gold font-bold font-serif text-xl">{milestone.year}</span>
                  <p className="text-brand-slate mt-1">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-brand-gold text-xs uppercase tracking-[0.3em] font-medium mb-3">
              What We Stand For
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="border border-brand-cream-dark p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-navy flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Get in touch with our team to discuss your project requirements and discover how ARTITECT MACHINERY can support your operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-white font-medium uppercase tracking-wider text-sm hover:bg-brand-gold-dark transition-colors duration-200"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}