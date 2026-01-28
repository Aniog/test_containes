import React from 'react'
import { 
  Zap, 
  Rocket, 
  Globe, 
  Brain, 
  Eye, 
  Cpu, 
  Shield, 
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react'

const Future = () => {
  const emergingTrends = [
    {
      icon: Brain,
      title: 'Artificial General Intelligence (AGI)',
      description: 'AI systems that can understand, learn, and apply intelligence across a wide range of tasks like humans.',
      timeline: '2030-2040',
      impact: 'Revolutionary'
    },
    {
      icon: Eye,
      title: 'Computer Vision Advancement',
      description: 'AI that can see and understand the world with superhuman accuracy and speed.',
      timeline: '2025-2030',
      impact: 'High'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration of AI assistants in workplace and daily life activities.',
      timeline: '2024-2028',
      impact: 'High'
    },
    {
      icon: Globe,
      title: 'AI-Powered Climate Solutions',
      description: 'Using AI to optimize energy consumption, predict climate patterns, and develop sustainable technologies.',
      timeline: '2025-2035',
      impact: 'Critical'
    }
  ]

  const futureApplications = [
    {
      icon: Rocket,
      title: 'Space Exploration',
      description: 'AI will enable autonomous spacecraft navigation, planetary exploration, and space habitat management.',
      examples: ['Mars colony management', 'Asteroid mining operations', 'Deep space communication']
    },
    {
      icon: Cpu,
      title: 'Quantum-AI Hybrid',
      description: 'Combining quantum computing with AI to solve previously impossible computational problems.',
      examples: ['Drug discovery acceleration', 'Climate modeling', 'Financial optimization']
    },
    {
      icon: Shield,
      title: 'Predictive Healthcare',
      description: 'AI will predict diseases before symptoms appear and provide personalized prevention strategies.',
      examples: ['Early cancer detection', 'Mental health monitoring', 'Genetic therapy optimization']
    },
    {
      icon: TrendingUp,
      title: 'Smart Cities',
      description: 'AI will manage entire city infrastructures, optimizing traffic, energy, and resource allocation.',
      examples: ['Traffic flow optimization', 'Energy grid management', 'Waste reduction systems']
    }
  ]

  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Ethical Concerns',
      description: 'Ensuring AI systems are fair, transparent, and respect human rights and privacy.',
      solutions: ['AI ethics frameworks', 'Regulatory compliance', 'Bias detection tools']
    },
    {
      icon: Users,
      title: 'Job Displacement',
      description: 'Managing the transition as AI automates various jobs and creates new opportunities.',
      solutions: ['Reskilling programs', 'Universal basic income', 'New job creation']
    },
    {
      icon: Shield,
      title: 'Security Risks',
      description: 'Protecting AI systems from malicious attacks and ensuring safe deployment.',
      solutions: ['AI security standards', 'Robust testing', 'Fail-safe mechanisms']
    }
  ]

  const timeline = [
    {
      year: '2024-2025',
      title: 'AI Integration',
      description: 'Widespread adoption of AI in business processes and consumer applications.',
      color: 'bg-blue-500'
    },
    {
      year: '2026-2028',
      title: 'Advanced Automation',
      description: 'AI begins to handle complex decision-making in various industries.',
      color: 'bg-green-500'
    },
    {
      year: '2029-2032',
      title: 'Human-AI Symbiosis',
      description: 'Seamless collaboration between humans and AI in most professional fields.',
      color: 'bg-purple-500'
    },
    {
      year: '2033-2040',
      title: 'AGI Emergence',
      description: 'Development of artificial general intelligence with human-level capabilities.',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Zap className="h-16 w-16 text-blue-600" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Future of Artificial Intelligence
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore the exciting possibilities, emerging trends, and transformative potential 
            of AI technology in the coming decades.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Development Timeline</h2>
        
        <div className="space-y-8">
          {timeline.map(({ year, title, description, color }, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-4 h-4 ${color} rounded-full mt-2`}></div>
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-sm font-semibold text-gray-500">{year}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emerging Trends Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Emerging AI Trends</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key developments that will shape the future of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {emergingTrends.map(({ icon: Icon, title, description, timeline, impact }, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{timeline}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {description}
              </p>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Impact:</span>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  impact === 'Revolutionary' ? 'bg-red-100 text-red-700' :
                  impact === 'Critical' ? 'bg-orange-100 text-orange-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Future Applications Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Future AI Applications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Revolutionary applications that will transform how we live, work, and explore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {futureApplications.map(({ icon: Icon, title, description, examples }, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {description}
              </p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                <ul className="space-y-1">
                  {examples.map((example, idx) => (
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

      {/* Challenges Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenges & Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key challenges we must address to ensure AI benefits humanity.
          </p>
        </div>

        <div className="space-y-8">
          {challenges.map(({ icon: Icon, title, description, solutions }, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg flex-shrink-0">
                  <Icon className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      Potential Solutions:
                    </h4>
                    <ul className="space-y-1">
                      {solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Predictions Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Predictions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What leading AI researchers and industry experts predict for the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
            <div className="text-2xl font-bold text-blue-600 mb-2">2027</div>
            <div className="text-sm text-gray-600">AI will match human performance in most cognitive tasks</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-600">
            <div className="text-2xl font-bold text-green-600 mb-2">2030</div>
            <div className="text-sm text-gray-600">Fully autonomous vehicles will be mainstream</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
            <div className="text-2xl font-bold text-purple-600 mb-2">2035</div>
            <div className="text-sm text-gray-600">AI will discover new scientific breakthroughs independently</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-orange-600">
            <div className="text-2xl font-bold text-orange-600 mb-2">2040</div>
            <div className="text-sm text-gray-600">Human-level artificial general intelligence achieved</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-600">
            <div className="text-2xl font-bold text-red-600 mb-2">2045</div>
            <div className="text-sm text-gray-600">AI surpasses human intelligence in all domains</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-indigo-600">
            <div className="text-2xl font-bold text-indigo-600 mb-2">2050</div>
            <div className="text-sm text-gray-600">AI-human hybrid intelligence becomes common</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Shape the Future of AI</h2>
        <p className="text-xl mb-6 opacity-90">
          The future of AI depends on how we develop, deploy, and govern these technologies today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Learn More About AI Ethics
          </button>
          <button className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border border-blue-400">
            Join the AI Community
          </button>
        </div>
      </section>
    </div>
  )
}

export default Future