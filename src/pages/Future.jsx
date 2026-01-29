import React from 'react'
import { 
  TrendingUp, 
  Rocket, 
  Brain, 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  Eye,
  Cpu,
  Heart,
  Car,
  Home,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Calendar,
  Target
} from 'lucide-react'

const Future = () => {
  const trends = [
    {
      icon: Brain,
      title: 'Artificial General Intelligence (AGI)',
      description: 'AI systems that match or exceed human intelligence across all domains',
      timeline: '2030-2040',
      impact: 'Revolutionary',
      color: 'purple'
    },
    {
      icon: Eye,
      title: 'Advanced Computer Vision',
      description: 'AI that can understand and interpret visual information like humans',
      timeline: '2025-2030',
      impact: 'High',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration of AI assistants in workplace and daily life',
      timeline: '2024-2028',
      impact: 'High',
      color: 'green'
    },
    {
      icon: Cpu,
      title: 'Quantum-AI Integration',
      description: 'Quantum computing accelerating AI capabilities exponentially',
      timeline: '2030-2035',
      impact: 'Revolutionary',
      color: 'indigo'
    },
    {
      icon: Globe,
      title: 'AI Democratization',
      description: 'AI tools becoming accessible to everyone, regardless of technical expertise',
      timeline: '2024-2027',
      impact: 'Medium',
      color: 'teal'
    },
    {
      icon: Shield,
      title: 'AI Safety & Ethics',
      description: 'Robust frameworks for responsible AI development and deployment',
      timeline: '2024-2030',
      impact: 'Critical',
      color: 'red'
    }
  ]

  const predictions = [
    {
      year: '2025',
      predictions: [
        'AI assistants become standard in most workplaces',
        'Autonomous vehicles reach Level 4 automation',
        'AI-generated content becomes mainstream',
        'Personalized AI tutors transform education'
      ]
    },
    {
      year: '2030',
      predictions: [
        'AI doctors assist in 80% of medical diagnoses',
        'Smart cities optimize traffic and energy usage',
        'AI creates most digital entertainment content',
        'Universal basic income discussions intensify'
      ]
    },
    {
      year: '2035',
      predictions: [
        'First AGI systems demonstrate human-level reasoning',
        'AI manages most supply chain operations',
        'Brain-computer interfaces become consumer products',
        'AI solves major climate change challenges'
      ]
    }
  ]

  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Job Displacement',
      description: 'AI automation may eliminate certain jobs while creating new ones',
      solution: 'Reskilling programs and education reform'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Protecting personal data in an AI-driven world',
      solution: 'Strong data protection laws and privacy-preserving AI'
    },
    {
      icon: Users,
      title: 'Bias & Fairness',
      description: 'Ensuring AI systems are fair and unbiased for all users',
      solution: 'Diverse development teams and bias detection tools'
    },
    {
      icon: Brain,
      title: 'AI Control',
      description: 'Maintaining human oversight and control over AI systems',
      solution: 'AI alignment research and safety protocols'
    }
  ]

  const opportunities = [
    {
      icon: Heart,
      title: 'Healthcare Revolution',
      description: 'Personalized medicine, early disease detection, and accelerated drug discovery',
      potential: 'Save millions of lives annually'
    },
    {
      icon: Globe,
      title: 'Climate Solutions',
      description: 'Optimize energy usage, develop clean technologies, and monitor environmental changes',
      potential: 'Reduce global emissions by 30%'
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Fully autonomous vehicles, optimized logistics, and reduced traffic accidents',
      potential: 'Prevent 1.3M traffic deaths yearly'
    },
    {
      icon: Home,
      title: 'Smart Living',
      description: 'Intelligent homes, cities, and infrastructure that adapt to human needs',
      potential: 'Improve quality of life for billions'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      purple: 'bg-purple-50 text-purple-600 border-purple-200',
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      green: 'bg-green-50 text-green-600 border-green-200',
      indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      teal: 'bg-teal-50 text-teal-600 border-teal-200',
      red: 'bg-red-50 text-red-600 border-red-200'
    }
    return colors[color] || colors.blue
  }

  const getImpactBadge = (impact) => {
    const styles = {
      'Revolutionary': 'bg-purple-100 text-purple-800',
      'High': 'bg-blue-100 text-blue-800',
      'Medium': 'bg-green-100 text-green-800',
      'Critical': 'bg-red-100 text-red-800'
    }
    return styles[impact] || styles.Medium
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full">
                <TrendingUp className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Future of Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-purple-100">
              Explore emerging trends, predictions, and the transformative potential of AI in the coming decades.
            </p>
          </div>
        </div>
      </section>

      {/* Emerging Trends */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Emerging AI Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key developments that will shape the future of artificial intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trends.map((trend, index) => {
              const Icon = trend.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`p-6 ${getColorClasses(trend.color)} border-b`}>
                    <Icon className="h-10 w-10 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {trend.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {trend.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{trend.timeline}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactBadge(trend.impact)}`}>
                        {trend.impact}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Predictions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Timeline: What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Predictions for how AI will evolve over the next decade.
            </p>
          </div>
          
          <div className="space-y-12">
            {predictions.map((period, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-8">
                  <div className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-xl">
                    {period.year}
                  </div>
                  <div className="flex-1 h-0.5 bg-purple-200 ml-4"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {period.predictions.map((prediction, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{prediction}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transformative Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How AI will create positive impact across different sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {opportunity.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {opportunity.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-medium text-green-700">
                          {opportunity.potential}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Challenges to Address
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key challenges we must overcome to realize AI's full potential responsibly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <Icon className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {challenge.description}
                      </p>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium text-green-700">Solution</span>
                        </div>
                        <p className="text-sm text-green-600">
                          {challenge.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Investment & Growth</h2>
            <p className="text-purple-100">The numbers behind AI's rapid advancement</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$200B</div>
              <div className="text-purple-100">Global AI investment by 2025</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50%</div>
              <div className="text-purple-100">Annual AI market growth</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">97M</div>
              <div className="text-purple-100">New AI jobs by 2025</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2030</div>
              <div className="text-purple-100">Expected AGI breakthrough</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prepare for the AI Future
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore resources and tools to stay ahead in the age of artificial intelligence.
          </p>
          <a
            href="/resources"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Explore Resources
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Future