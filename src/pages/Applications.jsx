import React from 'react'
import { 
  Heart, 
  Car, 
  ShoppingCart, 
  Shield, 
  Briefcase, 
  GraduationCap,
  Camera,
  MessageSquare,
  Music,
  Gamepad2,
  Stethoscope,
  Factory
} from 'lucide-react'

const Applications = () => {
  const applications = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Healthcare",
      description: "AI assists in medical diagnosis, drug discovery, and personalized treatment plans.",
      examples: ["Medical imaging analysis", "Drug discovery", "Robotic surgery", "Health monitoring"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transportation",
      description: "Autonomous vehicles and smart traffic management systems powered by AI.",
      examples: ["Self-driving cars", "Traffic optimization", "Route planning", "Predictive maintenance"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Personalized shopping experiences and intelligent recommendation systems.",
      examples: ["Product recommendations", "Price optimization", "Fraud detection", "Chatbots"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "AI-powered threat detection and automated security response systems.",
      examples: ["Malware detection", "Network monitoring", "Behavioral analysis", "Incident response"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Finance",
      description: "Algorithmic trading, risk assessment, and fraud prevention in financial services.",
      examples: ["Algorithmic trading", "Credit scoring", "Fraud prevention", "Robo-advisors"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Personalized learning experiences and intelligent tutoring systems.",
      examples: ["Adaptive learning", "Automated grading", "Language learning", "Virtual tutors"],
      color: "from-indigo-500 to-blue-500"
    }
  ]

  const entertainmentApps = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Image & Video",
      description: "AI-powered photo editing, video generation, and content creation tools."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Conversational AI",
      description: "Chatbots and virtual assistants that understand and respond naturally."
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music & Audio",
      description: "AI composers, voice synthesis, and personalized music recommendations."
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Gaming",
      description: "Intelligent NPCs, procedural content generation, and adaptive gameplay."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Factory className="w-12 h-12 text-cyan-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            AI Applications
          </h1>
          <p className="text-xl text-center text-cyan-100 max-w-3xl mx-auto">
            Discover how artificial intelligence is transforming industries and 
            creating new possibilities across every sector of our economy.
          </p>
        </div>
      </section>

      {/* Main Applications Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Industry Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className={`bg-gradient-to-r ${app.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-3">
                    {app.icon}
                    <h3 className="text-xl font-bold">{app.title}</h3>
                  </div>
                  <p className="text-white/90">{app.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Applications:</h4>
                  <ul className="space-y-2">
                    {app.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
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

      {/* Entertainment & Creative Applications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Entertainment & Creative AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entertainmentApps.map((app, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-purple-600">
                    {app.icon}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-800">{app.title}</h3>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-world Impact */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Real-World Impact
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Healthcare Breakthrough</h3>
                <p className="text-gray-600">
                  AI systems can now detect certain cancers more accurately than human doctors, 
                  leading to earlier diagnosis and better patient outcomes.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Environmental Protection</h3>
                <p className="text-gray-600">
                  AI helps monitor deforestation, predict climate patterns, and optimize 
                  energy consumption in smart cities worldwide.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="font-bold text-lg mb-2 text-gray-800">Accessibility</h3>
                <p className="text-gray-600">
                  AI-powered tools help people with disabilities through voice recognition, 
                  text-to-speech, and computer vision technologies.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">By the Numbers</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-1">90%</div>
                  <div className="text-gray-300">Accuracy in medical image analysis</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-1">30%</div>
                  <div className="text-gray-300">Reduction in energy consumption</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-1">50%</div>
                  <div className="text-gray-300">Faster drug discovery process</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
                  <div className="text-gray-300">Continuous monitoring capabilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Applications