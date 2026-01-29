import React from 'react'
import { 
  Heart, 
  Car, 
  ShoppingCart, 
  Shield, 
  Gamepad2, 
  Music, 
  Camera, 
  MessageSquare,
  TrendingUp,
  Stethoscope,
  Plane,
  Factory
} from 'lucide-react'

const Applications = () => {
  const applications = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Healthcare",
      description: "AI assists in medical diagnosis, drug discovery, and personalized treatment plans.",
      examples: ["Medical imaging analysis", "Drug discovery", "Robotic surgery", "Health monitoring"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transportation",
      description: "Autonomous vehicles and smart traffic management systems revolutionize mobility.",
      examples: ["Self-driving cars", "Traffic optimization", "Route planning", "Predictive maintenance"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Personalized recommendations and intelligent customer service enhance shopping.",
      examples: ["Product recommendations", "Price optimization", "Chatbots", "Fraud detection"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "AI detects threats, prevents attacks, and protects digital infrastructure.",
      examples: ["Threat detection", "Anomaly analysis", "Automated response", "Risk assessment"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Finance",
      description: "Algorithmic trading, risk assessment, and fraud prevention in financial services.",
      examples: ["Algorithmic trading", "Credit scoring", "Fraud prevention", "Robo-advisors"]
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Smart factories with predictive maintenance and quality control systems.",
      examples: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Robotics"]
    }
  ]

  const consumerApps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Virtual Assistants",
      description: "Siri, Alexa, Google Assistant"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Photo Recognition",
      description: "Face detection, object recognition"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Streaming",
      description: "Spotify, Apple Music recommendations"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Gaming",
      description: "AI opponents, procedural generation"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Applications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how artificial intelligence is transforming industries and improving lives 
            across the globe through innovative applications.
          </p>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Industry Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-indigo-600 mb-4">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {app.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm">Key Applications:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {app.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consumer Applications */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everyday AI Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consumerApps.map((app, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 text-center">
                <div className="text-indigo-600 mb-3 flex justify-center">
                  {app.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {app.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            AI Impact by Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">$15.7T</div>
              <p className="text-indigo-100">Expected global AI contribution to economy by 2030</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-indigo-100">Of businesses plan to invest in AI technologies</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2.3M</div>
              <p className="text-indigo-100">New jobs expected to be created by AI by 2025</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <p className="text-indigo-100">Improvement in productivity across industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Success Stories
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Netflix Recommendations</h3>
              <p className="text-gray-600 mb-4">
                Netflix uses AI to analyze viewing patterns and preferences, providing personalized 
                content recommendations that keep users engaged. This system saves the company 
                over $1 billion annually by reducing churn.
              </p>
              <div className="text-sm text-gray-500">
                Impact: 80% of content watched comes from AI recommendations
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">Tesla Autopilot</h3>
              <p className="text-gray-600 mb-4">
                Tesla's AI-powered Autopilot system uses computer vision and neural networks 
                to enable semi-autonomous driving, making roads safer and reducing driver fatigue.
              </p>
              <div className="text-sm text-gray-500">
                Impact: 10x reduction in accident rates when Autopilot is engaged
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">DeepMind's AlphaFold</h3>
              <p className="text-gray-600 mb-4">
                AlphaFold solved the protein folding problem, predicting 3D protein structures 
                with remarkable accuracy. This breakthrough accelerates drug discovery and 
                biological research.
              </p>
              <div className="text-sm text-gray-500">
                Impact: Predicted structures for 200+ million proteins
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Applications