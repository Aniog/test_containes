import './App.css'
import { useState } from 'react'
import { Mail, Globe, Zap, Shield, BarChart2, Users, ArrowRight, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    title: 'Lightning Fast',
    desc: 'Optimized performance out of the box so your users never wait.',
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    title: 'Secure by Default',
    desc: 'Enterprise-grade security baked in at every layer of the stack.',
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-indigo-500" />,
    title: 'Powerful Analytics',
    desc: 'Real-time insights to help you make smarter decisions faster.',
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: 'Team Collaboration',
    desc: 'Built for teams of any size with seamless collaboration tools.',
  },
  {
    icon: <Globe className="w-6 h-6 text-indigo-500" />,
    title: 'Global Scale',
    desc: 'Deploy worldwide with edge infrastructure in 30+ regions.',
  },
  {
    icon: <Mail className="w-6 h-6 text-indigo-500" />,
    title: '24/7 Support',
    desc: 'Our team is always here to help you succeed at every step.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    desc: 'Perfect for individuals and small projects.',
    features: ['Up to 3 projects', '5 GB storage', 'Basic analytics', 'Email support'],
    cta: 'Get started free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    desc: 'For growing teams that need more power.',
    features: ['Unlimited projects', '50 GB storage', 'Advanced analytics', 'Priority support', 'Custom domains'],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    desc: 'For large organisations with advanced needs.',
    features: ['Everything in Pro', '500 GB storage', 'Dedicated manager', 'SLA guarantee', 'SSO & SAML'],
    cta: 'Contact sales',
    highlight: false,
  },
]

export default function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600 tracking-tight">Launchpad</span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
          <a
            href="#contact"
            className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wide uppercase">
          Now in public beta
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Build products<br className="hidden md:block" /> your users will love
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Launchpad gives your team everything you need to ship faster, scale confidently, and delight customers at every touchpoint.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            Start for free <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="border border-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A complete platform designed to help you move fast without breaking things.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No hidden fees. No surprises. Cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border ${
                  plan.highlight
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl scale-105'
                    : 'bg-white border-gray-200 text-gray-900'
                }`}
              >
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-indigo-200' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1 ${plan.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 flex-shrink-0 ${plan.highlight ? 'text-indigo-200' : 'text-indigo-500'}`} />
                      <span className={plan.highlight ? 'text-indigo-100' : 'text-gray-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center font-semibold py-3 rounded-xl transition-colors ${
                    plan.highlight
                      ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-indigo-600 py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-indigo-200 text-lg mb-8">
            Join thousands of teams already building with Launchpad. Enter your email to begin.
          </p>
          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white font-medium">
              Thanks! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors whitespace-nowrap"
              >
                Get early access
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span className="text-white font-bold text-lg">Launchpad</span>
          <p>© {new Date().getFullYear()} Launchpad. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
