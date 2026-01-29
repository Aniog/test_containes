import React from 'react'
import { 
  Heart, 
  Car, 
  ShoppingCart, 
  Briefcase, 
  GraduationCap, 
  Shield, 
  Music, 
  Camera,
  Stethoscope,
  Plane,
  CreditCard,
  MessageSquare,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Applications = () => {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Revolutionizing diagnosis, treatment, and patient care',
      applications: [
        'Medical image analysis and diagnosis',
        'Drug discovery and development',
        'Personalized treatment plans',
        'Robotic surgery assistance'
      ],
      color: 'red'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Making travel safer, smarter, and more efficient',
      applications: [
        'Autonomous vehicles',
        'Traffic optimization',
        'Route planning and navigation',
        'Predictive maintenance'
      ],
      color: 'blue'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Personalizing shopping experiences and operations',
      applications: [
        'Product recommendations',
        'Price optimization',
        'Inventory management',
        'Customer service chatbots'
      ],
      color: 'green'
    },
    {
      icon: Briefcase,
      title: 'Finance',
      description: 'Enhancing security, analysis, and decision-making',
      applications: [
        'Fraud detection',
        'Algorithmic trading',
        'Credit scoring',
        'Risk assessment'
      ],
      color: 'yellow'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Personalizing learning and improving outcomes',
      applications: [
        'Adaptive learning platforms',
        'Automated grading',
        'Language learning apps',
        'Educational content creation'
      ],
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protecting digital assets and privacy',
      applications: [
        'Threat detection',
        'Behavioral analysis',
        'Automated response systems',
        'Vulnerability assessment'
      ],
      color: 'indigo'
    }
  ]

  const dailyApplications = [
    {
      icon: MessageSquare,
      title: 'Virtual Assistants',
      description: 'Siri, Alexa, Google Assistant helping with daily tasks',
      usage: '4.2B users worldwide'
    },
    {
      icon: Camera,
      title: 'Photo Recognition',
      description: 'Automatic tagging and organization of photos',
      usage: 'Used in 95% of smartphones'
    },
    {
      icon: Music,
      title: 'Music Streaming',
      description: 'Personalized playlists and music recommendations',
      usage: '500M+ active users'
    },
    {
      icon: CreditCard,
      title: 'Fraud Prevention',
      description: 'Real-time transaction monitoring and protection',
      usage: 'Prevents $25B in fraud annually'
    }
  ]

  const caseStudies = [
    {
      company: 'Netflix',
      application: 'Content Recommendation',
      impact: '80% of watched content comes from AI recommendations',
      description: 'Netflix uses machine learning to analyze viewing patterns and suggest personalized content.'
    },
    {
      company: 'Tesla',
      application: 'Autopilot System',
      impact: '10x reduction in accident rates',
      description: 'Advanced computer vision and neural networks enable semi-autonomous driving capabilities.'
    },
    {
      company: 'DeepMind',
      application: 'Protein Folding',
      impact: 'Solved 50-year-old scientific challenge',
      description: 'AlphaFold predicts protein structures, accelerating drug discovery and biological research.'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      red: 'bg-red-50 text-red-600 border-red-200',
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full">
                <Briefcase className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Applications in the Real World
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-green-100">
              Discover how artificial intelligence is transforming industries and improving lives across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Life Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI in Your Daily Life
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You interact with AI more than you might realize. Here are some common applications you use every day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dailyApplications.map((app, index) => {
              const Icon = app.icon
              return (
                <div key={index} className="text-center">
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-green-50 rounded-xl mb-4">
                    <Icon className="h-12 w-12 text-teal-600 mx-auto" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {app.description}
                  </p>
                  <div className="text-sm font-medium text-teal-600">
                    {app.usage}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI is revolutionizing how businesses operate and deliver value across various sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className={`p-6 ${getColorClasses(industry.color)} border-b`}>
                    <Icon className="h-10 w-10 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm opacity-80">
                      {industry.description}
                    </p>
                  </div>
                  <div className="p-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Applications:</h4>
                    <ul className="space-y-2">
                      {industry.applications.map((app, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world examples of how AI is creating significant impact and value.
            </p>
          </div>
          
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.company}
                    </h3>
                    <div className="text-lg font-medium text-teal-600 mb-4">
                      {study.application}
                    </div>
                    <p className="text-gray-600">
                      {study.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-green-100 rounded-full">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-500">IMPACT</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {study.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">85%</div>
              <div className="text-teal-100">of companies use AI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$13T</div>
              <div className="text-teal-100">economic impact by 2030</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2.9B</div>
              <div className="text-teal-100">people use AI daily</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">40%</div>
              <div className="text-teal-100">productivity increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            What's Next for AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore the future trends and emerging possibilities in artificial intelligence.
          </p>
          <a
            href="/future"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
          >
            Explore the Future
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Applications