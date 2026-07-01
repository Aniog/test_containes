import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Star } from 'lucide-react'

function App() {
  const features = [
    'Beautiful, responsive design',
    'Fast and reliable performance',
    'Easy to customize and extend',
    'Built with modern technologies',
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-lg">Acme</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm text-slate-600 hover:text-slate-900">Features</a>
            <a href="#pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</a>
            <Button variant="outline" size="sm">Log in</Button>
            <Button size="sm">Get started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600 mb-6">
          <Star className="w-4 h-4" />
          Now with improved performance
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Build better products,<br />faster than ever.
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          A modern platform designed to help teams ship high-quality software with confidence and speed.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            Start free trial <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg">
            Watch demo
          </Button>
        </div>
        <p className="text-sm text-slate-500 mt-4">No credit card required. 14-day free trial.</p>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white border-y py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Everything you need</h2>
            <p className="text-slate-600">Powerful features to help you build and scale.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-slate-50">
                <div className="mt-0.5">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Simple pricing</h2>
            <p className="text-slate-600">Choose the plan that works best for you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="border rounded-xl p-8 bg-white">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">Starter</h3>
                <p className="text-slate-600 text-sm">Perfect for individuals</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Up to 5 projects</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Basic analytics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Email support</li>
              </ul>
              <Button variant="outline" className="w-full">Get started</Button>
            </div>
            <div className="border-2 border-slate-900 rounded-xl p-8 bg-white relative">
              <div className="absolute -top-3 right-6 bg-slate-900 text-white text-xs px-3 py-1 rounded-full">Popular</div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">Pro</h3>
                <p className="text-slate-600 text-sm">For growing teams</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-slate-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Unlimited projects</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Advanced analytics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Priority support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Team collaboration</li>
              </ul>
              <Button className="w-full">Get started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
          © 2026 Acme Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App

