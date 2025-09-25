import React from 'react'
import { Brain, Palette, Smartphone, Zap, Shield, Code, Globe, Sparkles } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Design",
      description: "Our advanced AI understands your requirements and creates pixel-perfect designs that match your brand and vision.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate complete websites in under 2 minutes. No more waiting weeks for developers or designers.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Every website is automatically optimized for all devices - desktop, tablet, and mobile. Perfect on every screen.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Seamlessly integrate your brand colors, fonts, and style. Make it uniquely yours with intelligent customization.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Export clean, semantic HTML/CSS code that's SEO-friendly and follows modern web standards.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security in mind. SSL certificates, secure hosting, and regular backups included.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Every website comes with built-in SEO optimization to help you rank higher in search results.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Sparkles,
      title: "Smart Content",
      description: "AI generates relevant, engaging content for your industry. Professional copy that converts visitors.",
      color: "from-violet-500 to-purple-500"
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Built for Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create professional websites that drive results. 
            Our AI handles the complexity while you focus on your business.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Future of Web Design?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses who've already transformed their online presence with AI-powered websites.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features