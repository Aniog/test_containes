import React, { useState } from 'react'
import { 
  Sparkles, 
  Zap, 
  Globe, 
  Palette, 
  Code, 
  Smartphone, 
  ArrowRight, 
  Check, 
  Star,
  Play,
  Users,
  Clock,
  Shield
} from 'lucide-react'

const AISiteBuilderLanding = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Design",
      description: "Our advanced AI creates stunning, professional websites tailored to your brand and industry in seconds."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Generate complete websites in under 30 seconds. No coding, no design skills required."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Smart Customization",
      description: "AI understands your preferences and automatically applies consistent branding across all pages."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First",
      description: "Every website is automatically optimized for all devices with responsive design built-in."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Export clean, semantic HTML/CSS code that's SEO-optimized and performance-ready."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global CDN",
      description: "Your sites are hosted on our lightning-fast global network for optimal performance worldwide."
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Describe Your Vision",
      description: "Tell our AI about your business, style preferences, and goals in plain English."
    },
    {
      number: "02", 
      title: "AI Creates Your Site",
      description: "Watch as our AI generates a complete, professional website tailored to your needs."
    },
    {
      number: "03",
      title: "Customize & Launch",
      description: "Make any adjustments with our intuitive editor, then publish with one click."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Small Business Owner",
      content: "I had my restaurant website up and running in 5 minutes. The AI perfectly captured my brand aesthetic!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Designer",
      content: "This tool has revolutionized how I work with clients. I can create initial concepts in seconds.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Startup Founder",
      content: "We launched our MVP landing page the same day we had the idea. Incredible speed and quality.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for trying out AI site building",
      features: [
        "1 AI-generated website",
        "Basic templates",
        "Mobile responsive",
        "Community support"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For professionals and growing businesses",
      features: [
        "Unlimited AI websites",
        "Premium templates",
        "Custom domain",
        "Advanced customization",
        "Priority support",
        "Analytics dashboard"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For agencies and large organizations",
      features: [
        "Everything in Pro",
        "White-label solution",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "Team collaboration"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">AI SiteBuilder</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build Stunning Websites
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              in Seconds with AI
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into professional websites instantly. Our AI understands your vision and creates 
            pixel-perfect designs that convert visitors into customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center">
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Websites Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">30s</div>
              <div className="text-gray-400">Average Build Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Next-Gen AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our artificial intelligence doesn't just build websites—it understands design principles, 
              user experience, and your unique brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to launch in three simple steps. No technical knowledge required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Loved by Creators Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who've transformed their online presence with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI website building technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500 bg-gradient-to-b from-purple-500/20 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of creators who've already transformed their online presence with AI. 
            Start building your professional website today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center">
              Start Building for Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <div className="flex items-center text-gray-300">
              <Shield className="w-5 h-5 mr-2" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">AI SiteBuilder</span>
            </div>
            
            <div className="flex items-center space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>50,000+ happy users</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2024 AI SiteBuilder. All rights reserved. Built with AI, designed for humans.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AISiteBuilderLanding