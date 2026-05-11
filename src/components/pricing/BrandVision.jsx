import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Target, Heart, Globe2, Users } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const values = [
  {
    icon: Target,
    title: 'Radical simplicity',
    description: 'We believe powerful tools should be effortless to use. Every feature we ship must pass the "grandma test" — if it\'s not intuitive, we redesign it.',
  },
  {
    icon: Heart,
    title: 'Customer obsession',
    description: 'Our roadmap is driven entirely by customer feedback. We read every support ticket, every review, and every feature request.',
  },
  {
    icon: Globe2,
    title: 'Open web advocacy',
    description: 'We\'re committed to building on open standards, supporting accessibility, and ensuring the web remains a place for everyone.',
  },
  {
    icon: Users,
    title: 'Diverse by design',
    description: 'Our team spans 14 countries and 6 time zones. We believe diverse perspectives build better products.',
  },
]

const team = [
  { name: 'Sarah Chen', role: 'CEO & Co-founder', imgId: 'team-sarah', imgQuery: 'professional woman CEO portrait minimalist' },
  { name: 'Marcus Webb', role: 'CTO & Co-founder', imgId: 'team-marcus', imgQuery: 'professional man CTO engineer portrait' },
  { name: 'Priya Nair', role: 'Head of Design', imgId: 'team-priya', imgQuery: 'professional woman designer creative portrait' },
  { name: 'James Okafor', role: 'Head of AI', imgId: 'team-james', imgQuery: 'professional man AI researcher scientist portrait' },
]

export default function BrandVision() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 relative overflow-hidden">
      {/* Dashed top border */}
      <div className="absolute top-0 left-0 right-0 border-t-2 border-dashed border-slate-200" />

      {/* Mission statement */}
      <div className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-500 text-xs font-semibold mb-6">
                Our story
              </div>
              <h2 id="vision-title" className="text-4xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                We're on a mission to democratize the web
              </h2>
              <p id="vision-subtitle" className="text-slate-500 text-lg leading-relaxed mb-6">
                NeuralBuild was founded in 2023 with a simple belief: every person and business deserves a beautiful, professional online presence — regardless of technical skill or budget.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Today, we're a team of 40+ engineers, designers, and AI researchers building the future of web creation. We've helped over 50,000 businesses launch their online presence, and we're just getting started.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { value: '2023', label: 'Founded' },
                  { value: '40+', label: 'Team members' },
                  { value: '$12M', label: 'Series A raised' },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  alt="NeuralBuild team and vision"
                  className="w-full object-cover"
                  data-strk-img-id="vision-main-img"
                  data-strk-img="[vision-subtitle] [vision-title] modern tech startup team office"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-dashed border-indigo-200 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">What we stand for</h3>
            <p className="text-slate-500">The principles that guide every decision we make.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">{val.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{val.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16 bg-slate-50 border-t border-dashed border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Meet the leadership</h3>
            <p className="text-slate-500">The people building the future of web creation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square overflow-hidden bg-slate-100">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={member.imgId}
                    data-strk-img={member.imgQuery}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-4">
                  <div className="font-bold text-slate-900 text-sm">{member.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="p-10 rounded-3xl border-2 border-dashed border-indigo-100 bg-indigo-50/30">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Join us on the journey</h3>
            <p className="text-slate-500 mb-6">
              Whether you're a solo creator or a Fortune 500 company, NeuralBuild is built for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/pricing"
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors text-sm"
              >
                Start building free
              </Link>
              <Link
                to="/product"
                className="px-6 py-3 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-sm"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
