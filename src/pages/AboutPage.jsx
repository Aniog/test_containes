import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Users, Globe, Award } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every machine we build meets the highest standards of accuracy and repeatability.',
  },
  {
    icon: Heart,
    title: 'Craftsmanship',
    description: 'We take pride in the art of metalworking, combining tradition with innovation.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work closely with our clients to understand and solve their unique challenges.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving manufacturers in over 40 countries with local support and service.',
  },
]

const milestones = [
  { year: '1998', event: 'ARTITECT MACHINERY founded in industrial heartland' },
  { year: '2005', event: 'First international export to European markets' },
  { year: '2010', event: 'ISO 9001 certification achieved' },
  { year: '2015', event: 'Launched CNC-controlled folding machine line' },
  { year: '2020', event: 'Expanded to 40+ countries with global service network' },
  { year: '2024', event: '500th machine delivered worldwide' },
]

export default function AboutPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#0f1f33] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#e8956a] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="mt-3 text-3xl lg:text-5xl font-bold text-white">
              Engineering Excellence Since 1998
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology, 
              delivering precision equipment that powers manufacturing operations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#c87941] font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="mt-3 text-3xl font-bold text-[#1e3a5f]">
                From Workshop to World Leader
              </h2>
              <div className="mt-6 space-y-4 text-[#6b7280] leading-relaxed">
                <p>
                  ARTITECT MACHINERY began as a small workshop with a big vision: to build folding machines 
                  that could compete with the best in the world. Our founders, veteran engineers with decades 
                  of experience in metal fabrication, saw an opportunity to combine traditional craftsmanship 
                  with modern engineering.
                </p>
                <p>
                  Today, we operate from a state-of-the-art manufacturing facility equipped with the latest 
                  CNC machinery and quality control systems. Every machine that leaves our factory undergoes 
                  rigorous testing to ensure it meets our exacting standards.
                </p>
                <p>
                  Our commitment to innovation has led to numerous patents and industry-first features, 
                  making ARTITECT the preferred choice for manufacturers who demand precision, reliability, 
                  and value.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#c87941]/10 rounded-2xl blur-xl" />
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                className="relative rounded-2xl shadow-lg w-full"
                data-strk-img-id="about-facility-img"
                data-strk-img="[about-facility-desc] [about-story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[#1e3a5f]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f]">Our Vision</h3>
              <p className="mt-4 text-[#6b7280] leading-relaxed">
                To be the global benchmark in sheet metal folding technology, recognized for innovation, 
                quality, and the lasting partnerships we build with our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-[#c87941]/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#c87941]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f]">Our Mission</h3>
              <p className="mt-4 text-[#6b7280] leading-relaxed">
                To engineer and deliver folding machines that exceed expectations in precision, 
                durability, and value, while continuously advancing the art and science of metal fabrication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#c87941] font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e3a5f]">What Drives Us Forward</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center mx-auto">
                  <value.icon className="w-7 h-7 text-[#1e3a5f]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1e3a5f]">{value.title}</h3>
                <p className="mt-2 text-[#6b7280] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-[#f5f7fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#c87941] font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="mt-3 text-3xl font-bold text-[#1e3a5f]">Key Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1e3a5f]/20" />
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-6 md:gap-0 mb-8 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-12 md:pl-0`}>
                    <span className="text-[#c87941] font-bold text-lg">{milestone.year}</span>
                    <p className="mt-1 text-[#374151]">{milestone.event}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#c87941] rounded-full -translate-x-1/2 ring-4 ring-[#f5f7fa]" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-12 h-12 text-[#e8956a] mx-auto" />
          <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-white">
            Join Our Growing Network of Partners
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you are a small workshop or a large manufacturing operation, we have the expertise 
            and equipment to help you succeed.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-[#c87941] text-white rounded-lg font-semibold hover:bg-[#a05d2e] transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
