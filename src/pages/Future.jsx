import React from 'react'
import { 
  Rocket, 
  Globe, 
  Zap, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Brain,
  Atom,
  Microscope,
  Satellite
} from 'lucide-react'

const Future = () => {
  const futureTrends = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial General Intelligence (AGI)",
      description: "AI systems with human-level cognitive abilities across all domains",
      timeline: "2030-2040",
      impact: "Revolutionary"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "AI in Scientific Discovery",
      description: "Accelerated research in physics, chemistry, and biology through AI",
      timeline: "2025-2030",
      impact: "Transformative"
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Autonomous Everything",
      description: "Self-driving vehicles, drones, and robots in everyday life",
      timeline: "2025-2035",
      impact: "Disruptive"
    },
    {
      icon: <Atom className="w-8 h-8" />,
      title: "Quantum-AI Hybrid Systems",
      description: "Combining quantum computing with AI for unprecedented capabilities",
      timeline: "2030-2040",
      impact: "Revolutionary"
    }
  ]

  const opportunities = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Enhanced Healthcare",
      description: "Personalized medicine, early disease detection, and AI-assisted surgery"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Climate Solutions",
      description: "AI-optimized renewable energy, carbon capture, and environmental monitoring"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Education Revolution",
      description: "Personalized learning experiences and AI tutors for every student"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Scientific Breakthroughs",
      description: "Accelerated discovery in materials science, drug development, and physics"
    }
  ]

  const challenges = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      title: "Job Displacement",
      description: "Need for workforce retraining and new economic models"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      title: "Privacy & Security",
      description: "Protecting personal data and preventing AI misuse"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      title: "Ethical AI",
      description: "Ensuring fairness, transparency, and accountability in AI systems"
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      title: "AI Safety",
      description: "Controlling advanced AI systems and preventing unintended consequences"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of AI
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore the exciting possibilities and challenges that lie ahead as artificial 
            intelligence continues to evolve and reshape our world.
          </p>
        </div>
      </section>

      {/* Future Trends */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Emerging Trends
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {futureTrends.map((trend, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-indigo-600 flex-shrink-0">
                    {trend.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {trend.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {trend.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-indigo-600 font-medium">
                        Timeline: {trend.timeline}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        trend.impact === 'Revolutionary' 
                          ? 'bg-red-100 text-red-800'
                          : trend.impact === 'Transformative'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {trend.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities vs Challenges */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Opportunities & Challenges
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Opportunities */}
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-6 flex items-center gap-3">
                <CheckCircle className="w-8 h-8" />
                Opportunities
              </h3>
              <div className="space-y-6">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-green-50 rounded-lg">
                    {opportunity.icon}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {opportunity.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-600 mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                Challenges
              </h3>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-amber-50 rounded-lg">
                    {challenge.icon}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {challenge.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            AI Development Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200"></div>
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-lg font-semibold text-gray-900">2025-2027</h3>
                  <p className="text-gray-600">Advanced AI assistants, improved autonomous vehicles</p>
                </div>
                <div className="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-lg font-semibold text-gray-900">2028-2030</h3>
                  <p className="text-gray-600">AI in scientific research, personalized medicine breakthroughs</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-lg font-semibold text-gray-900">2031-2035</h3>
                  <p className="text-gray-600">Widespread automation, AI-human collaboration</p>
                </div>
                <div className="w-4 h-4 bg-indigo-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-purple-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8">
                  <h3 className="text-lg font-semibold text-gray-900">2036-2040</h3>
                  <p className="text-gray-600">Potential AGI development, quantum-AI systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Globe className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Shape the Future of AI
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            The future of AI depends on how we develop, deploy, and govern these technologies today. 
            Everyone has a role to play in ensuring AI benefits humanity.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <Shield className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Stay Informed</h3>
              <p className="text-sm text-indigo-100">
                Keep learning about AI developments and their implications
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Zap className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Get Involved</h3>
              <p className="text-sm text-indigo-100">
                Participate in discussions about AI ethics and governance
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Brain className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Learn Skills</h3>
              <p className="text-sm text-indigo-100">
                Develop AI literacy and technical skills for the future
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Future