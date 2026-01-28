import React from 'react'
import { 
  Heart, 
  Car, 
  ShoppingCart, 
  Shield, 
  Briefcase, 
  GraduationCap, 
  Music, 
  Camera,
  MessageSquare,
  TrendingUp,
  MapPin,
  Smartphone
} from 'lucide-react'

const Applications = () => {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'AI is revolutionizing medical diagnosis, drug discovery, and patient care.',
      applications: [
        'Medical image analysis for early disease detection',
        'Drug discovery and development acceleration',
        'Personalized treatment recommendations',
        'Robotic surgery assistance'
      ],
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'From autonomous vehicles to traffic optimization, AI is transforming mobility.',
      applications: [
        'Self-driving cars and trucks',
        'Traffic flow optimization',
        'Predictive maintenance for vehicles',
        'Route planning and navigation'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'AI enhances shopping experiences through personalization and automation.',
      applications: [
        'Product recommendations',
        'Dynamic pricing strategies',
        'Inventory management',
        'Customer service chatbots'
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'AI helps detect and prevent cyber threats in real-time.',
      applications: [
        'Threat detection and prevention',
        'Fraud detection in financial transactions',
        'Network security monitoring',
        'Behavioral analysis for anomaly detection'
      ],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Briefcase,
      title: 'Finance',
      description: 'AI transforms banking, trading, and financial services.',
      applications: [
        'Algorithmic trading',
        'Credit scoring and risk assessment',
        'Fraud prevention',
        'Robo-advisors for investment'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'AI personalizes learning and enhances educational outcomes.',
      applications: [
        'Personalized learning paths',
        'Automated grading and feedback',
        'Intelligent tutoring systems',
        'Language learning applications'
      ],
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

  const dailyApplications = [
    {
      icon: MessageSquare,
      title: 'Virtual Assistants',
      description: 'Siri, Alexa, and Google Assistant help with daily tasks'
    },
    {
      icon: TrendingUp,
      title: 'Social Media',
      description: 'Content recommendation and targeted advertising'
    },
    {
      icon: MapPin,
      title: 'Navigation',
      description: 'Real-time traffic updates and optimal route planning'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Automatic photo enhancement and object recognition'
    },
    {
      icon: Music,
      title: 'Entertainment',
      description: 'Music and video streaming recommendations'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Predictive text, face unlock, and app suggestions'
    }
  ]

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="grid grid-cols-3 gap-2">
              <Heart className="h-8 w-8 text-red-500" />
              <Car className="h-8 w-8 text-green-500" />
              <ShoppingCart className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Applications in the Real World
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how artificial intelligence is transforming industries and improving 
            our daily lives across various sectors and applications.
          </p>
        </div>
      </section>

      {/* Industries Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Across Industries</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From healthcare to finance, AI is revolutionizing how businesses operate and serve their customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map(({ icon: Icon, title, description, applications, color }, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 ${color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {description}
              </p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Key Applications:</h4>
                <ul className="space-y-2">
                  {applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Life Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI in Your Daily Life</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            You probably interact with AI more than you realize. Here are common applications you use every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dailyApplications.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <Icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
        
        <div className="space-y-8">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Netflix Recommendations</h3>
            <p className="text-gray-600 mb-2">
              Netflix uses AI to analyze viewing patterns and recommend content, resulting in 80% of watched content 
              coming from their recommendation system.
            </p>
            <div className="text-sm text-blue-600 font-medium">Impact: Increased user engagement and retention</div>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tesla Autopilot</h3>
            <p className="text-gray-600 mb-2">
              Tesla's AI-powered Autopilot system has driven over 3 billion miles, continuously learning and 
              improving safety features through real-world data.
            </p>
            <div className="text-sm text-green-600 font-medium">Impact: Enhanced road safety and driving convenience</div>
          </div>
          
          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-xl font-semibent text-gray-900 mb-2">Google Translate</h3>
            <p className="text-gray-600 mb-2">
              Google Translate supports over 100 languages and processes billions of translations daily, 
              breaking down language barriers worldwide.
            </p>
            <div className="text-sm text-purple-600 font-medium">Impact: Global communication and accessibility</div>
          </div>
          
          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">IBM Watson for Oncology</h3>
            <p className="text-gray-600 mb-2">
              IBM Watson analyzes patient data and medical literature to assist oncologists in making 
              treatment decisions, improving cancer care outcomes.
            </p>
            <div className="text-sm text-red-600 font-medium">Impact: Better patient outcomes and treatment precision</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of AI Applications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI brings numerous advantages across different sectors and use cases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Continuous operation without breaks</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-sm text-gray-600">Accuracy in pattern recognition</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-purple-600 mb-2">10x</div>
            <div className="text-sm text-gray-600">Faster data processing speed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="text-3xl font-bold text-orange-600 mb-2">50%</div>
            <div className="text-sm text-gray-600">Cost reduction potential</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Applications