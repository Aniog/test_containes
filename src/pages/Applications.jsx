import React from 'react'
import { 
  Heart, 
  Car, 
  ShoppingCart, 
  Shield, 
  Gamepad2, 
  Camera, 
  MessageSquare, 
  TrendingUp,
  Stethoscope,
  Plane,
  Factory,
  GraduationCap
} from 'lucide-react'

const Applications = () => {
  const applications = [
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: "Healthcare",
      description: "AI is revolutionizing medical diagnosis, drug discovery, and personalized treatment plans.",
      examples: [
        "Medical image analysis for cancer detection",
        "Drug discovery and development acceleration",
        "Personalized treatment recommendations",
        "Robotic surgery assistance"
      ],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Car className="h-12 w-12 text-blue-500" />,
      title: "Transportation",
      description: "Autonomous vehicles and smart traffic systems are transforming how we move.",
      examples: [
        "Self-driving cars and trucks",
        "Traffic optimization systems",
        "Predictive maintenance for vehicles",
        "Route planning and navigation"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-green-500" />,
      title: "E-commerce",
      description: "Personalized shopping experiences and intelligent recommendation systems.",
      examples: [
        "Product recommendation engines",
        "Dynamic pricing optimization",
        "Fraud detection and prevention",
        "Customer service chatbots"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-500" />,
      title: "Cybersecurity",
      description: "AI-powered threat detection and automated security response systems.",
      examples: [
        "Malware detection and analysis",
        "Network intrusion detection",
        "Behavioral anomaly detection",
        "Automated incident response"
      ],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-yellow-500" />,
      title: "Finance",
      description: "Algorithmic trading, risk assessment, and fraud prevention in financial services.",
      examples: [
        "Algorithmic trading systems",
        "Credit risk assessment",
        "Fraud detection algorithms",
        "Robo-advisors for investment"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-indigo-500" />,
      title: "Education",
      description: "Personalized learning experiences and intelligent tutoring systems.",
      examples: [
        "Adaptive learning platforms",
        "Automated essay grading",
        "Intelligent tutoring systems",
        "Educational content recommendation"
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ]

  const emergingApps = [
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual analysis applications."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Natural Language Processing",
      description: "Language translation, sentiment analysis, and conversational AI."
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-purple-600" />,
      title: "Gaming & Entertainment",
      description: "AI-powered game mechanics, content generation, and player behavior analysis."
    },
    {
      icon: <Factory className="h-8 w-8 text-orange-600" />,
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization."
    },
    {
      icon: <Plane className="h-8 w-8 text-cyan-600" />,
      title: "Aerospace",
      description: "Flight optimization, satellite imagery analysis, and space exploration."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-red-600" />,
      title: "Mental Health",
      description: "AI-powered therapy assistants and mental health monitoring systems."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="grid grid-cols-3 gap-2">
                <Heart className="h-8 w-8 text-red-300" />
                <Car className="h-8 w-8 text-blue-300" />
                <ShoppingCart className="h-8 w-8 text-green-300" />
                <Shield className="h-8 w-8 text-purple-300" />
                <TrendingUp className="h-8 w-8 text-yellow-300" />
                <GraduationCap className="h-8 w-8 text-indigo-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Applications in the Real World
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Discover how artificial intelligence is transforming industries and improving lives across every sector of society.
            </p>
          </div>
        </div>
      </section>

      {/* Main Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Major Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore how AI is making a significant impact across different industries and sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-2 bg-gradient-to-r ${app.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {app.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">
                      {app.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {app.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Applications:</h4>
                    <ul className="space-y-2">
                      {app.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emerging AI Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge AI applications that are shaping the future of technology and society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingApps.map((app, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  {app.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {app.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Impact by Numbers
            </h2>
            <p className="text-xl text-gray-600">
              The measurable impact of AI across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-red-500 mb-2">90%</div>
              <p className="text-gray-700 font-medium">Accuracy in medical image analysis</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-500 mb-2">40%</div>
              <p className="text-gray-700 font-medium">Reduction in traffic accidents with AI</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-500 mb-2">35%</div>
              <p className="text-gray-700 font-medium">Increase in e-commerce conversion rates</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-500 mb-2">99.9%</div>
              <p className="text-gray-700 font-medium">Fraud detection accuracy in finance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Applications Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Future of AI Applications
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
              As AI technology continues to advance, we can expect to see even more innovative applications that will transform how we live, work, and interact with the world around us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-purple-200" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Augmented Reality</h3>
                <p className="text-purple-100">AI-powered AR experiences that blend digital and physical worlds seamlessly.</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-purple-200" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Universal Translation</h3>
                <p className="text-purple-100">Real-time language translation breaking down communication barriers globally.</p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-purple-200" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Preventive Healthcare</h3>
                <p className="text-purple-100">AI systems that predict and prevent health issues before they occur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Applications