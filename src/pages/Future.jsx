import React from 'react'
import { 
  Rocket, 
  Brain, 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Lightbulb,
  Target
} from 'lucide-react'

const Future = () => {
  const predictions = [
    {
      year: "2025-2027",
      title: "AI Integration Everywhere",
      description: "AI becomes seamlessly integrated into everyday devices and workflows",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      year: "2028-2030",
      title: "Autonomous Systems",
      description: "Widespread deployment of autonomous vehicles and smart city infrastructure",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      year: "2030-2035",
      title: "AI-Human Collaboration",
      description: "Advanced AI assistants work alongside humans in complex problem-solving",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      year: "2035+",
      title: "General AI Emergence",
      description: "First steps toward artificial general intelligence with human-level reasoning",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-orange-500"
    }
  ]

  const opportunities = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Economic Growth",
      description: "AI could contribute up to $13 trillion to global economic output by 2030",
      impact: "Positive"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Scientific Discovery",
      description: "Accelerated research in medicine, climate science, and space exploration",
      impact: "Positive"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Services",
      description: "Highly customized education, healthcare, and entertainment experiences",
      impact: "Positive"
    }
  ]

  const challenges = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Job Displacement",
      description: "Automation may eliminate certain jobs while creating new ones",
      impact: "Challenge"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy & Security",
      description: "Protecting personal data and preventing AI misuse becomes critical",
      impact: "Challenge"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ethical Concerns",
      description: "Ensuring AI systems are fair, transparent, and aligned with human values",
      impact: "Challenge"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="w-12 h-12 text-purple-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            The Future of AI
          </h1>
          <p className="text-xl text-center text-purple-100 max-w-3xl mx-auto">
            Exploring the possibilities, challenges, and transformative potential 
            of artificial intelligence in the decades ahead.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">AI Development Timeline</h2>
            <p className="text-lg text-gray-600">Predicted milestones in AI advancement</p>
          </div>
          
          <div className="space-y-8">
            {predictions.map((prediction, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex items-center gap-4 lg:w-1/4">
                  <div className={`${prediction.color} text-white p-3 rounded-lg`}>
                    {prediction.icon}
                  </div>
                  <div className="font-bold text-lg text-gray-800">{prediction.year}</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex-1 border-l-4 border-gray-200 hover:border-purple-400 transition-colors">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{prediction.title}</h3>
                  <p className="text-gray-600">{prediction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities vs Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Opportunities & Challenges
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Opportunities */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-800">Opportunities</h3>
              </div>
              <div className="space-y-6">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-lg text-green-600">
                        {opportunity.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-800">{opportunity.title}</h4>
                        <p className="text-gray-600">{opportunity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-800">Challenges</h3>
              </div>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-400">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                        {challenge.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-800">{challenge.title}</h4>
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing for the Future */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Preparing for an AI-Driven Future
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Continuous Learning</h3>
              <p className="text-gray-600 text-sm">
                Develop skills that complement AI capabilities and stay updated with technological advances.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Human Skills</h3>
              <p className="text-gray-600 text-sm">
                Focus on creativity, emotional intelligence, and complex problem-solving abilities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Ethical Awareness</h3>
              <p className="text-gray-600 text-sm">
                Understand the ethical implications of AI and advocate for responsible development.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-gray-800">Innovation Mindset</h3>
              <p className="text-gray-600 text-sm">
                Embrace change and look for opportunities to leverage AI for positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Brain className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
          <h2 className="text-3xl font-bold mb-6">Shape the Future of AI</h2>
          <p className="text-xl mb-8 text-indigo-100">
            The future of AI isn't predetermined. It's being shaped by the choices we make today. 
            Join the conversation about responsible AI development and help create a future that 
            benefits everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Get Involved
            </button>
            <button className="border border-indigo-300 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Future