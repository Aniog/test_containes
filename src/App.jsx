import React, { useState, useEffect } from 'react'
import { Brain, Cpu, Zap, Globe, Shield, Lightbulb, ArrowRight, ChevronDown, Star, Users, TrendingUp } from 'lucide-react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      const sections = ['hero', 'what-is-ai', 'applications', 'benefits', 'future', 'conclusion']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const applications = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Algorithms that learn and improve from experience without being explicitly programmed."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Natural Language Processing",
      description: "Enabling computers to understand, interpret, and generate human language."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Teaching machines to interpret and understand visual information from the world."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "AI-powered threat detection and automated security response systems."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Healthcare",
      description: "Diagnostic assistance, drug discovery, and personalized treatment plans."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Data analysis, predictive analytics, and automated decision-making."
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize processes"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Enhanced Innovation",
      description: "Discover new patterns and solutions in complex data"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Improved Accuracy",
      description: "Reduce human error in critical decision-making"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">AI Guide</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'what-is-ai', label: 'About AI' },
                { id: 'applications', label: 'Applications' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'future', label: 'Future' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" />
              <span>The Future is Here</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Artificial
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the revolutionary technology that's transforming industries, enhancing human capabilities, 
              and shaping the future of our digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('what-is-ai')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('applications')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Applications
              </button>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* What is AI Section */}
      <section id="what-is-ai" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Artificial Intelligence?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI is the simulation of human intelligence in machines that are programmed to think and learn like humans.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <Brain className="w-16 h-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligence Redefined</h3>
                <p className="text-gray-600 leading-relaxed">
                  Artificial Intelligence encompasses machine learning, deep learning, neural networks, and cognitive computing. 
                  It enables machines to perform tasks that typically require human intelligence, such as visual perception, 
                  speech recognition, decision-making, and language translation.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h4>
                  <p className="text-gray-600">Algorithms that improve automatically through experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Deep Learning</h4>
                  <p className="text-gray-600">Neural networks with multiple layers for complex pattern recognition</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Natural Language Processing</h4>
                  <p className="text-gray-600">Understanding and generating human language</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From healthcare to finance, AI is revolutionizing every industry with innovative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-blue-600 mb-4">
                  {app.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{app.title}</h3>
                <p className="text-gray-600 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI brings transformative advantages that enhance productivity, innovation, and decision-making.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section id="future" className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">The Future of AI</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            As we advance into the future, AI will continue to evolve, bringing unprecedented opportunities 
            for innovation, creativity, and human advancement.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { year: "2025", milestone: "Advanced AI Assistants" },
              { year: "2027", milestone: "Autonomous Vehicles" },
              { year: "2030", milestone: "AI in Education" },
              { year: "2035", milestone: "General AI Systems" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-2xl font-bold text-blue-200 mb-2">{item.year}</div>
                <div className="text-white">{item.milestone}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Embrace the AI Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Artificial Intelligence is not just a technology—it's a catalyst for human progress. 
            By understanding and embracing AI, we can build a smarter, more efficient, and more innovative future.
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl">
            <Brain className="w-16 h-16 text-white mx-auto mb-4" />
            <p className="text-lg font-medium">
              "The development of full artificial intelligence could spell the end of the human race... 
              but it also could be the greatest event in human history."
            </p>
            <p className="text-blue-200 mt-4">- Stephen Hawking</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-semibold">AI Guide</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} AI Guide. Exploring the frontiers of artificial intelligence.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
