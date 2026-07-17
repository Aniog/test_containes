import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Users, Zap, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/landing/ContactForm'

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning fast',
    desc: 'Built on a modern stack that loads instantly and feels snappy on every device.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    desc: 'Every submission is stored safely so you can review contacts anytime.',
  },
  {
    icon: Users,
    title: 'Built for teams',
    desc: 'Collect leads and manage conversations from one simple dashboard.',
  },
]

export default function Landing({ onContactSubmitted }) {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">Nimbus</span>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="#features" className="hidden sm:inline text-sm text-slate-600 hover:text-slate-900">
              Features
            </a>
            <a href="#contact" className="hidden sm:inline text-sm text-slate-600 hover:text-slate-900">
              Contact
            </a>
            <Link to="/contacts">
              <Button variant="outline" size="sm">
                View contacts
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-600">
              <Mail className="w-3.5 h-3.5" /> Capture every lead
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Turn visitors into <span className="text-indigo-600">lasting connections</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              A clean landing page with a contact form that saves every submission.
              Review your contacts anytime in a simple, organized dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact">
                <Button size="lg">
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Link to="/contacts">
                <Button size="lg" variant="outline">
                  See saved contacts
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] rounded-3xl bg-slate-200 bg-cover bg-center shadow-2xl"
              data-strk-bg-id="hero-bg-7f3a2c"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            />
            <span id="hero-title" className="sr-only">Modern business team collaboration</span>
            <span id="hero-subtitle" className="sr-only">People connecting and growing together</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Everything you need to stay connected
            </h2>
            <p className="mt-4 text-slate-600">
              Simple, focused tools that help you collect and manage contacts without the clutter.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow bg-slate-50"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let's talk</h2>
            <p className="mt-4 text-slate-600">
              Fill out the form below and we'll save your details for follow-up.
            </p>
          </div>
          <ContactForm onSubmitted={onContactSubmitted} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate-500">© {new Date().getFullYear()} Nimbus. All rights reserved.</span>
          <Link to="/contacts" className="text-sm text-slate-600 hover:text-slate-900">
            View saved contacts →
          </Link>
        </div>
      </footer>
    </div>
  )
}
