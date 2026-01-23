import React from 'react'
import { Target, Award, Rocket, ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About AI Site
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're pioneering the future of artificial intelligence, making advanced AI 
              technology accessible to everyone. Our mission is to democratize AI and 
              empower individuals and businesses to achieve more than they ever thought possible.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Founded by a team of AI researchers and engineers from leading tech companies, 
              we combine cutting-edge research with practical applications to deliver 
              solutions that make a real difference.
            </p>
            
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
                  <p className="text-gray-400 text-sm">Democratize AI for everyone</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Vision</h3>
                  <p className="text-gray-400 text-sm">AI-powered future for all</p>
                </div>
                
                <div className="text-center col-span-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Our Values</h3>
                  <p className="text-gray-400 text-sm">Innovation, Ethics, and Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl p-12 text-center border border-purple-500/20 backdrop-blur-sm">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already transforming their work with AI. 
            Start your journey today and discover what's possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About