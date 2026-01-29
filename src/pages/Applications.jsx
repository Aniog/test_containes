import React from 'react'
import { 
  Car, 
  Heart, 
  ShoppingCart, 
  Shield, 
  Gamepad2, 
  Camera, 
  MessageSquare, 
  Music, 
  MapPin,
  Briefcase,
  GraduationCap,
  Plane
} from 'lucide-react'

const Applications = () => {
  const applications = [
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: "Autonomous Vehicles",
      description: "Self-driving cars use AI to navigate roads, detect obstacles, and make real-time driving decisions.",
      examples: ["Tesla Autopilot", "Waymo", "Uber Self-Driving"],
      category: "Transportation"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Healthcare & Medicine",
      description: "AI assists in medical diagnosis, drug discovery, and personalized treatment plans.",
      examples: ["Medical imaging analysis", "Drug discovery", "Robotic surgery"],
      category: "Healthcare"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-green-600" />,
      title: "E-commerce & Retail",
      description: "Personalized recommendations, inventory management, and customer service automation.",
      examples: ["Amazon recommendations", "Chatbots", "Price optimization"],
      category: "Commerce"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Cybersecurity",
      description: "AI detects threats, prevents fraud, and protects digital infrastructure in real-time.",
      examples: ["Fraud detection", "Malware analysis", "Network security"],
      category: "Security"
    },
    {
      icon: <Camera className="h-8 w-8 text-yellow-600" />,
      title: "Computer Vision",
      description: "Image recognition, facial detection, and visual content analysis across industries.",
      examples: ["Photo tagging", "Quality control", "Medical imaging"],
      category: "Vision"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
      title: "Natural Language Processing",
      description: "Language translation, sentiment analysis, and conversational AI systems.",
      examples: ["Google Translate", "ChatGPT", "Voice assistants"],
      category: "Language"
    },
    {
      icon: <Music className="h-8 w-8 text-pink-600" />,
      title: "Entertainment & Media",
      description: "Content creation, music generation, and personalized entertainment experiences.",
      examples: ["Spotify recommendations", "AI-generated art", "Video editing"],
      category: "Entertainment"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-orange-600" />,
      title: "Business & Finance",
      description: "Algorithmic trading, risk assessment, and automated financial planning.",
      examples: ["Trading algorithms", "Credit scoring", "Robo-advisors"],
      category: "Finance"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-teal-600" />,
      title: "Education",
      description: "Personalized learning, automated grading, and intelligent tutoring systems.",
      examples: ["Adaptive learning", "Language learning apps", "Plagiarism detection"],
      category: "Education"
    }
  ]

  const industries = [
    {
      name: "Manufacturing",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Predictive maintenance, quality control, and supply chain optimization",
      impact: "30% reduction in downtime"
    },
    {
      name: "Agriculture",
      icon: <MapPin className="h-6 w-6" />,
      description: "Crop monitoring, precision farming, and yield prediction",
      impact: "20% increase in crop yields"
    },
    {
      name: "Transportation",
      icon: <Plane className="h-6 w-6" />,
      description: "Route optimization, traffic management, and logistics",
      impact: "25% reduction in fuel costs"
    },
    {
      name: "Energy",
      icon: <Shield className="h-6 w-6" />,
      description: "Smart grid management, renewable energy optimization",
      impact: "15% improvement in efficiency"
    }
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI <span className="text-blue-600">Applications</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover how artificial intelligence is transforming industries and revolutionizing 
            the way we work, live, and interact with technology across every sector of society.
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mr-4">
                  {app.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{app.title}</h3>
                  <span className="text-sm text-gray-500">{app.category}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{app.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h4>
                <ul className="space-y-1">
                  {app.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Impact Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AI is driving measurable improvements across traditional industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{industry.description}</p>
                <div className="text-blue-600 font-semibold text-sm">{industry.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Examples Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI in Your Daily Life</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You probably interact with AI more than you realize
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Morning Routine</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Voice assistant sets your alarm and reads the news
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Email filters sort your inbox automatically
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Navigation app finds the fastest route to work
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Music streaming suggests your daily playlist
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Throughout the Day</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Social media curates your personalized feed
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Online shopping shows relevant product recommendations
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Banking apps detect fraudulent transactions
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Video streaming platforms suggest what to watch
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Applications Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Emerging Applications</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            The next wave of AI applications is already being developed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-2">Quantum AI</h3>
              <p className="text-purple-100 text-sm">
                Combining quantum computing with AI for unprecedented problem-solving capabilities
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-2">Brain-Computer Interfaces</h3>
              <p className="text-purple-100 text-sm">
                Direct neural connections enabling thought-controlled AI systems
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-white mb-2">AI Companions</h3>
              <p className="text-purple-100 text-sm">
                Emotionally intelligent AI that provides personalized support and companionship
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Applications