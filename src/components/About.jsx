import React from 'react'
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  Rocket, 
  Heart,
  CheckCircle,
  TrendingUp
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every AI model is fine-tuned for accuracy and reliability in real-world applications."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with artificial intelligence."
    },
    {
      icon: Heart,
      title: "Human-Centric",
      description: "AI designed to augment human capabilities, not replace human creativity and judgment."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering world-class AI solutions that exceed expectations."
    }
  ]

  const milestones = [
    { year: "2020", event: "Founded with a vision to democratize AI" },
    { year: "2021", event: "Launched first AI model with 1M+ users" },
    { year: "2022", event: "Achieved 99.9% uptime and enterprise partnerships" },
    { year: "2023", event: "Expanded globally with multilingual support" },
    { year: "2024", event: "Breakthrough in multimodal AI capabilities" },
    { year: "2025", event: "Leading the next generation of AI innovation" }
  ]

  const achievements = [
    { icon: Users, number: "10M+", label: "Active Users" },
    { icon: Rocket, number: "500+", label: "Enterprise Clients" },
    { icon: Award, number: "15+", label: "Industry Awards" },
    { icon: TrendingUp, number: "99.8%", label: "Customer Satisfaction" }
  ]

  return (
    <section className="py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-blue-300 mb-6">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">About AI Site</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pioneering the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Future of AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make artificial intelligence accessible, ethical, and beneficial 
            for everyone. Our cutting-edge technology empowers individuals and organizations to 
            achieve more than they ever thought possible.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To democratize artificial intelligence and make it a force for positive change in the world. 
                We believe AI should enhance human potential, solve complex problems, and create opportunities 
                for innovation across all industries.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Ethical AI development and deployment</span>
                </div>
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Transparent and explainable AI systems</span>
                </div>
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Continuous learning and improvement</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <div key={index} className="text-center bg-white/5 rounded-2xl p-6">
                    <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {achievement.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-shadow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Journey
          </h3>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white/5 rounded-xl p-6 group-hover:bg-white/10 transition-colors">
                  <p className="text-gray-300 text-lg">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Shape the Future?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join us in our mission to create AI that benefits humanity. 
            Whether you're a developer, researcher, or innovator, there's a place for you in our community.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  )
}

export default About