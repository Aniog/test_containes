import React from 'react'
import { 
  Brain, 
  Palette, 
  Code, 
  Zap, 
  Globe, 
  Shield, 
  Smartphone, 
  Search,
  BarChart3,
  Users,
  Clock,
  Sparkles
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Design",
      description: "Our advanced AI analyzes your content and creates stunning, professional designs that match your brand perfectly.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Smart Color Schemes",
      description: "Automatically generates harmonious color palettes based on your industry, preferences, and brand guidelines.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Clean Code Generation",
      description: "Produces optimized, semantic HTML, CSS, and JavaScript that follows best practices and web standards.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Build complete websites in minutes, not weeks. Our AI works at superhuman speed without compromising quality.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Every website is automatically optimized for mobile devices with responsive layouts that look great everywhere.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built-in SEO best practices ensure your website ranks well in search engines from day one.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Your websites are served from our global content delivery network for blazing-fast loading times worldwide.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SSL certificates, DDoS protection, and regular security updates included.",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: BarChart3,
      title: "Analytics Integration",
      description: "Built-in analytics and performance monitoring to track your website's success and user engagement.",
      color: "from-violet-500 to-purple-500"
    }
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Build
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing Websites
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with intuitive design to give you 
            professional results without the complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join 50,000+ Happy Users
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Trusted by entrepreneurs, small businesses, and enterprises worldwide to create 
              stunning websites that convert visitors into customers.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features