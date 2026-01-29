import React from 'react'
import { 
  Car, 
  Heart, 
  ShoppingCart, 
  Shield, 
  Gamepad2, 
  Camera, 
  MessageSquare, 
  TrendingUp,
  Stethoscope,
  CreditCard,
  Music,
  MapPin
} from 'lucide-react'

const Applications = () => {
  const applications = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Autonomous Vehicles",
      description: "Self-driving cars use AI to navigate roads, detect obstacles, and make real-time driving decisions.",
      examples: ["Tesla Autopilot", "Waymo", "Uber Self-Driving"],
      color: "blue"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "AI assists in medical diagnosis, drug discovery, and personalized treatment plans.",
      examples: ["Medical imaging", "Drug discovery", "Robotic surgery"],
      color: "red"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Recommendation systems, price optimization, and customer service chatbots enhance shopping experiences.",
      examples: ["Amazon recommendations", "Dynamic pricing", "Virtual assistants"],
      color: "green"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "AI detects threats, prevents fraud, and protects digital infrastructure from cyber attacks.",
      examples: ["Fraud detection", "Malware analysis", "Network security"],
      color: "purple"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Image and video analysis for facial recognition, object detection, and quality control.",
      examples: ["Face recognition", "Medical imaging", "Quality inspection"],
      color: "orange"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Language translation, sentiment analysis, and conversational AI for human-computer interaction.",
      examples: ["Google Translate", "ChatGPT", "Voice assistants"],
      color: "indigo"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      red: "bg-red-100 text-red-600 border-red-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200"
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-green-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Applications</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Discover how artificial intelligence is revolutionizing industries and transforming 
            the way we live, work, and interact with technology.
          </p>
        </div>
      </section>

      {/* Main Applications Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Key AI Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(app.color)}`}>
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{app.title}</h3>
                <p className="text-gray-600 mb-6">{app.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 text-sm">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.examples.map((example, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specific Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Industry Applications
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Healthcare & Medicine</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Stethoscope className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Medical Diagnosis</h4>
                    <p className="text-gray-600">AI analyzes medical images, lab results, and patient data to assist doctors in accurate diagnosis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Drug Discovery</h4>
                    <p className="text-gray-600">Machine learning accelerates the identification of potential drug compounds and treatment options.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Predictive Analytics</h4>
                    <p className="text-gray-600">AI predicts patient outcomes, disease progression, and optimal treatment plans.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Finance & Banking</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Fraud Detection</h4>
                    <p className="text-gray-600">AI monitors transactions in real-time to identify and prevent fraudulent activities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Algorithmic Trading</h4>
                    <p className="text-gray-600">AI algorithms analyze market data and execute trades at optimal times for maximum returns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Risk Assessment</h4>
                    <p className="text-gray-600">Machine learning models evaluate credit risk and loan approval decisions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Emerging Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Creative AI</h3>
              <p className="text-gray-600 text-sm">AI generates music, art, and creative content</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Smart Cities</h3>
              <p className="text-gray-600 text-sm">AI optimizes traffic, energy, and urban planning</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Gaming</h3>
              <p className="text-gray-600 text-sm">AI creates intelligent NPCs and procedural content</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">AR/VR</h3>
              <p className="text-gray-600 text-sm">AI enhances immersive virtual experiences</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Applications