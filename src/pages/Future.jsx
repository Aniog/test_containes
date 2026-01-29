import React from 'react'
import { 
  Rocket, 
  Brain, 
  Zap, 
  Globe, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Lightbulb,
  Shield,
  Heart,
  Cpu
} from 'lucide-react'

const Future = () => {
  const predictions = [
    {
      year: "2025-2030",
      title: "AI Integration Everywhere",
      description: "AI becomes seamlessly integrated into all aspects of daily life, from smart homes to personalized education.",
      icon: <Globe className="w-6 h-6" />,
      color: "blue"
    },
    {
      year: "2030-2035",
      title: "Advanced Robotics",
      description: "Humanoid robots become common in workplaces, providing assistance in healthcare, manufacturing, and services.",
      icon: <Users className="w-6 h-6" />,
      color: "green"
    },
    {
      year: "2035-2040",
      title: "Artificial General Intelligence",
      description: "The first AGI systems emerge, capable of human-level reasoning across multiple domains.",
      icon: <Brain className="w-6 h-6" />,
      color: "purple"
    },
    {
      year: "2040+",
      title: "AI-Human Collaboration",
      description: "Seamless collaboration between humans and AI leads to unprecedented scientific and creative breakthroughs.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "orange"
    }
  ]

  const opportunities = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Healthcare Revolution",
      description: "Personalized medicine, early disease detection, and AI-assisted surgery will dramatically improve health outcomes."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Climate Solutions",
      description: "AI will optimize renewable energy, predict climate patterns, and develop new sustainable technologies."
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-500" />,
      title: "Space Exploration",
      description: "AI will enable autonomous space missions, Mars colonization, and the search for extraterrestrial life."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Economic Growth",
      description: "AI will create new industries, increase productivity, and generate unprecedented economic opportunities."
    }
  ]

  const challenges = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-yellow-600" />,
      title: "Job Displacement",
      description: "Automation may eliminate certain jobs, requiring workforce retraining and new economic models."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-600" />,
      title: "Privacy & Security",
      description: "Protecting personal data and preventing AI misuse will become increasingly critical."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Ethical Concerns",
      description: "Ensuring AI systems are fair, unbiased, and aligned with human values."
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      title: "AI Control",
      description: "Maintaining human oversight and control over increasingly powerful AI systems."
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 border-blue-200",
      green: "bg-green-100 border-green-200",
      purple: "bg-purple-100 border-purple-200",
      orange: "bg-orange-100 border-orange-200"
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Future of AI</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Exploring the possibilities, challenges, and transformative potential of artificial intelligence 
            in shaping our tomorrow.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            AI Development Timeline
          </h2>
          <div className="space-y-8">
            {predictions.map((prediction, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className={`p-4 rounded-xl border-2 ${getColorClasses(prediction.color)}`}>
                  {prediction.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {prediction.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800">{prediction.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{prediction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Opportunities Ahead
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  {opportunity.icon}
                  <h3 className="text-xl font-bold text-gray-800">{opportunity.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Challenges to Address
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border-l-4 border-orange-500">
                <div className="flex items-center gap-4 mb-4">
                  {challenge.icon}
                  <h3 className="text-xl font-bold text-gray-800">{challenge.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparing for the Future */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Preparing for an AI-Powered Future
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-indigo-100">
                Stay updated with AI developments and acquire new skills to remain relevant in an AI-driven world.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Human Skills</h3>
              <p className="text-indigo-100">
                Focus on uniquely human abilities like creativity, empathy, and complex problem-solving.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ethical AI</h3>
              <p className="text-indigo-100">
                Advocate for responsible AI development that benefits humanity and respects human rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Shape the Future of AI</h2>
          <p className="text-xl text-gray-300 mb-8">
            The future of AI isn't predetermined. It's being shaped by the choices we make today. 
            Join the conversation and help build an AI-powered future that benefits everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Involved
            </button>
            <button className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Future