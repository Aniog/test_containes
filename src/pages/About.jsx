import React from 'react'
import { 
  Brain, 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'
import Footer from '../components/Footer'

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to achieve extraordinary results."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in everything we do, delivering solutions that exceed expectations."
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We're committed to creating AI solutions that make a positive difference in the world."
    }
  ]

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Machine Learning from Stanford. 15+ years in AI research and development."
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google AI engineer with expertise in scalable AI infrastructure and deployment."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Research Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Leading researcher in neural networks and deep learning with 50+ published papers."
    },
    {
      name: "James Kim",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Product strategist with a track record of bringing innovative AI products to market."
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: "AI Innovation Award 2024",
      description: "Recognized for breakthrough advances in natural language processing"
    },
    {
      icon: Star,
      title: "Top 10 AI Companies",
      description: "Featured in TechCrunch's list of most promising AI startups"
    },
    {
      icon: Users,
      title: "500+ Enterprise Clients",
      description: "Trusted by Fortune 500 companies worldwide"
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Operating in 25+ countries with local support teams"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Our Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize artificial intelligence and make cutting-edge AI technology 
              accessible to businesses of all sizes around the world.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
            </div>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Founded in 2020 by a team of AI researchers and industry veterans, our company emerged from a simple 
              observation: while AI technology was advancing rapidly, most businesses struggled to implement and 
              benefit from these innovations.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Today, we've helped over 500 companies transform their operations with AI, from small startups to 
              Fortune 500 enterprises. Our platform processes over 10 million AI requests daily, powering everything 
              from customer service chatbots to complex predictive analytics systems.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Values</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to AI development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl inline-block">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Team</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              The brilliant minds behind our AI innovations, bringing together decades of experience 
              in artificial intelligence, machine learning, and product development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Profile Image */}
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-3 border-blue-400/30 group-hover:border-blue-400/60 transition-colors"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Achievements</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence in AI innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-white/70 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Join hundreds of companies that have already revolutionized their operations with our AI platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About