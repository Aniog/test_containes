import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Users } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    icon: Target,
    title: 'Precision First',
    description: 'Every component is machined to exacting tolerances. We believe accuracy is the foundation of quality manufacturing.',
  },
  {
    icon: Eye,
    title: 'Innovation Driven',
    description: 'We continuously refine our designs, incorporating the latest engineering advances to deliver better folding solutions.',
  },
  {
    icon: Heart,
    title: 'Customer Focused',
    description: 'Your production goals are our priority. We provide comprehensive support from selection through installation and beyond.',
  },
  {
    icon: Users,
    title: 'Skilled Craftsmanship',
    description: 'Our team combines decades of industry experience with a passion for building machines that last for generations.',
  },
]

const timeline = [
  { year: '1998', event: 'ARTITECT MACHINERY founded in Chicago, IL with a mission to build the finest sheet metal folding machines.' },
  { year: '2005', event: 'Launched our first CNC-controlled double folding machine, revolutionizing the industry.' },
  { year: '2012', event: 'Expanded manufacturing facility to 50,000 sq ft to meet growing global demand.' },
  { year: '2019', event: 'Introduced the next-generation servo-electric folding series with 40% faster cycle times.' },
  { year: '2024', event: 'Celebrated 25+ years of innovation with installations in over 40 countries worldwide.' },
]

export default function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              About <span className="text-accent-500">ARTITECT</span>
            </h1>
            <p className="text-brand-300 text-lg leading-relaxed">
              For over 25 years, we have designed and built precision sheet metal folding machines that manufacturers trust worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-brand-100 to-brand-50 border border-slate-200 flex items-center justify-center">
                <div
                  data-strk-bg-id="about-story-img-1a2b"
                  data-strk-bg="industrial manufacturing factory precision engineering workshop"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                  className="w-full h-full bg-brand-200 flex items-center justify-center"
                >
                  <span className="text-brand-400 text-sm font-medium">Company Image</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-900 tracking-tight mb-5">
                Our Story
              </h2>
              <div className="space-y-4 text-brand-600 leading-relaxed">
                <p>
                  ARTITECT MACHINERY was founded in 1998 by a team of engineers who saw a gap in the market: sheet metal folding machines were either imprecise or unaffordable. There was no middle ground for workshops that demanded quality without compromise.
                </p>
                <p>
                  Starting from a small workshop in Chicago, we set out to design machines that combined precision engineering with practical usability. Word spread quickly, and within a few years, ARTITECT machines were being installed in fabrication shops across North America.
                </p>
                <p>
                  Today, we operate from a state-of-the-art manufacturing facility and serve customers in over 40 countries. Despite our growth, our core mission remains unchanged: build the most reliable, accurate sheet metal folding machines in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-tight mb-3">
              What We Stand For
            </h2>
            <p className="text-brand-600 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every machine we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <Icon className="w-8 h-8 text-accent-500 mb-4" />
                  <h3 className="text-lg font-semibold text-brand-900 mb-2">{value.title}</h3>
                  <p className="text-brand-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-tight mb-3">
              Our Journey
            </h2>
            <p className="text-brand-600 text-lg">
              Key milestones in the ARTITECT story.
            </p>
          </div>

          <div className="space-y-0">
            {timeline.map((item, idx) => (
              <div key={item.year} className="flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent-500 shrink-0 mt-1.5" />
                  {idx < timeline.length - 1 && <div className="w-0.5 flex-1 bg-slate-200 mt-2" />}
                </div>
                <div className="pb-2">
                  <span className="text-sm font-bold text-accent-500">{item.year}</span>
                  <p className="text-brand-600 mt-1 leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-brand-600 text-lg max-w-2xl mx-auto mb-8">
            Partner with ARTITECT MACHINERY and equip your production line with folding machines that deliver precision and reliability every day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
