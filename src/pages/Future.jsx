import React from 'react'
import { 
  TrendingUp, 
  Zap, 
  Globe, 
  Users, 
  Brain, 
  Rocket, 
  Shield, 
  Heart,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react'

const Future = () => {
  const trends = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Artificial General Intelligence (AGI)",
      description: "AI systems that match or exceed human cognitive abilities across all domains.",
      timeline: "2030-2040",
      probability: "Medium"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "AI-Powered Climate Solutions",
      description: "Advanced AI systems optimizing renewable energy and carbon capture technologies.",
      timeline: "2025-2030",
      probability: "High"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Personalized Medicine",
      description: "AI creating individualized treatments based on genetic and lifestyle data.",
      timeline: "2025-2035",
      probability: "High"
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "AI in Space Exploration",
      description: "Autonomous AI systems managing long-term space missions and colonization.",
      timeline: "2030-2050",
      probability: "Medium"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Human-AI Collaboration",
      description: "Seamless integration of AI assistants in every aspect of human work and life.",
      timeline: "2025-2030",
      probability: "Very High"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Quantum-AI Hybrid Systems",
      description: "Quantum computing accelerating AI capabilities for complex problem solving.",
      timeline: "2030-2040",
      probability: "Medium"
    }
  ]

  const challenges = [
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "AI Safety & Alignment",
      description: "Ensuring AI systems remain beneficial and aligned with human values as they become more powerful."
    },
    {
      icon: <Users className="h-6 w-6 text-orange-600" />,
      title: "Job Displacement",
      description: "Managing the transition as AI automates various jobs and creates new employment opportunities."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
      title: "Bias & Fairness",
      description: "Eliminating algorithmic bias and ensuring AI systems treat all people fairly and equitably."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Global AI Governance",
      description: "Developing international frameworks for responsible AI development and deployment."
    }
  ]

  const opportunities = [
    {
      icon: <Heart className="h-6 w-6 text-green-600" />,
      title: "Healthcare Revolution",
      description: "AI could help cure diseases, extend human lifespan, and make healthcare accessible globally."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Climate Change Solutions",
      description: "AI optimization could accelerate the transition to sustainable energy and reduce emissions."
    },
    {
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      title: "Enhanced Human Intelligence",
      description: "AI tools could augment human cognitive abilities and accelerate scientific discovery."
    },
    {
      icon: <Target className="h-6 w-6 text-indigo-600" />,
      title: "Personalized Education",
      description: "AI tutors could provide customized learning experiences for every individual."
    }
  ]

  const predictions = [
    {
      year: "2025",
      events: [
        "AI assistants become ubiquitous in workplaces",
        "Autonomous vehicles reach mainstream adoption",
        "AI-powered drug discovery accelerates"
      ]
    },
    {
      year: "2030",
      events: [
        "AI systems pass most professional exams",
        "Fully autonomous smart cities emerge",
        "AI teachers provide personalized education"
      ]
    },
    {
      year: "2035",
      events: [
        "Human-level AI in specific domains",
        "AI-designed materials revolutionize manufacturing",
        "Brain-computer interfaces become common"
      ]
    },
    {
      year: "2040",
      events: [
        "Artificial General Intelligence achieved",
        "AI systems design better AI systems",
        "Space exploration led by AI"
      ]
    }
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-blue-600">Future</span> of AI
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore the emerging trends, challenges, and opportunities that will shape 
            the next decade of artificial intelligence development and its impact on humanity.
          </p>
        </div>
      </section>

      {/* Trends Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Emerging Trends</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key developments that will define the future of artificial intelligence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mr-4">
                  {trend.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{trend.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{trend.timeline}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{trend.description}</p>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Probability:</span>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  trend.probability === 'Very High' ? 'bg-green-100 text-green-800' :
                  trend.probability === 'High' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {trend.probability}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Timeline Predictions</h2>
            <p className="text-lg text-gray-600">Potential milestones in AI development over the next two decades</p>
          </div>
          <div className="space-y-8">
            {predictions.map((prediction, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{prediction.year}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {prediction.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{event}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Challenges Ahead</h2>
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-red-50 rounded-lg p-6 border border-red-100">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg mr-4 flex-shrink-0">
                        {challenge.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Opportunities</h2>
              <div className="space-y-6">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-6 border border-green-100">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg mr-4 flex-shrink-0">
                        {opportunity.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{opportunity.title}</h3>
                        <p className="text-gray-600">{opportunity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Projected AI Impact by 2030</h2>
            <p className="text-xl text-blue-100">Expected transformations across key sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$13T</div>
              <div className="text-blue-100">Global economic contribution</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">375M</div>
              <div className="text-blue-100">Jobs transformed or created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">40%</div>
              <div className="text-blue-100">Reduction in carbon emissions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10x</div>
              <div className="text-blue-100">Faster drug discovery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Preparing for the AI Future</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The future of AI is not predetermined. It will be shaped by the choices we make today 
            about how we develop, deploy, and govern these powerful technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Informed</h3>
              <p className="text-gray-600">Keep learning about AI developments and their implications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Involved</h3>
              <p className="text-gray-600">Participate in discussions about AI ethics and governance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adapt & Prepare</h3>
              <p className="text-gray-600">Develop skills that complement AI capabilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Future