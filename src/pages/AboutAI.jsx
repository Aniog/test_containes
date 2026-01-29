import React from 'react'
import { Brain, Cpu, Network, Lightbulb, History, Users, Zap, Target } from 'lucide-react'

const AboutAI = () => {
  const aiTypes = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Algorithms that learn and improve from experience without being explicitly programmed.',
      examples: ['Recommendation systems', 'Image recognition', 'Predictive analytics']
    },
    {
      icon: Network,
      title: 'Deep Learning',
      description: 'Neural networks with multiple layers that can learn complex patterns in data.',
      examples: ['Natural language processing', 'Computer vision', 'Speech recognition']
    },
    {
      icon: Cpu,
      title: 'Natural Language Processing',
      description: 'AI that understands, interprets, and generates human language.',
      examples: ['Chatbots', 'Translation services', 'Text analysis']
    },
    {
      icon: Target,
      title: 'Computer Vision',
      description: 'AI that can identify and analyze visual content in images and videos.',
      examples: ['Facial recognition', 'Medical imaging', 'Autonomous vehicles']
    }
  ]

  const timeline = [
    {
      year: '1950',
      title: 'The Turing Test',
      description: 'Alan Turing proposes a test for machine intelligence.'
    },
    {
      year: '1956',
      title: 'Birth of AI',
      description: 'The term "Artificial Intelligence" is coined at Dartmouth Conference.'
    },
    {
      year: '1997',
      title: 'Deep Blue Victory',
      description: 'IBM\'s Deep Blue defeats world chess champion Garry Kasparov.'
    },
    {
      year: '2011',
      title: 'Watson Wins Jeopardy!',
      description: 'IBM Watson defeats human champions in the quiz show Jeopardy!'
    },
    {
      year: '2016',
      title: 'AlphaGo Triumph',
      description: 'Google\'s AlphaGo beats world Go champion Lee Sedol.'
    },
    {
      year: '2022',
      title: 'ChatGPT Launch',
      description: 'OpenAI releases ChatGPT, bringing AI to mainstream users.'
    }
  ]

  const principles = [
    {
      icon: Lightbulb,
      title: 'Learning',
      description: 'AI systems can acquire knowledge and skills through experience and data.'
    },
    {
      icon: Zap,
      title: 'Reasoning',
      description: 'AI can make logical inferences and solve problems using available information.'
    },
    {
      icon: Users,
      title: 'Perception',
      description: 'AI can interpret and understand sensory input like images, sounds, and text.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Brain className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Understanding Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-indigo-100">
              Explore the fundamentals, history, and core concepts that make AI one of the most transformative technologies of our time.
            </p>
          </div>
        </div>
      </section>

      {/* What is AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Artificial Intelligence?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and make decisions like humans. It encompasses a wide range of technologies and approaches designed to enable computers to perform tasks that typically require human intelligence.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                AI systems can process vast amounts of data, recognize patterns, make predictions, and adapt to new situations, making them incredibly powerful tools for solving complex problems across various domains.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {principles.map((principle, index) => {
                  const Icon = principle.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="p-3 bg-indigo-50 rounded-full w-fit mx-auto mb-3">
                        <Icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{principle.title}</h3>
                      <p className="text-sm text-gray-600">{principle.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-indigo-600">1950s</div>
                    <div className="text-sm text-gray-600">AI Concept Born</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">2020s</div>
                    <div className="text-sm text-gray-600">AI Mainstream</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  70+ Years of Innovation
                </h3>
                <p className="text-gray-600">
                  From theoretical concepts to practical applications that touch billions of lives daily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of AI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Artificial Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI encompasses various specialized fields, each with unique approaches and applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aiTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-indigo-50 rounded-lg">
                      <Icon className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {type.description}
                      </p>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <History className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Through the Years
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped the development of artificial intelligence.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-indigo-200"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <div className="text-2xl font-bold text-indigo-600 mb-2">{event.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore AI Applications?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Now that you understand the basics, discover how AI is being used in real-world scenarios.
          </p>
          <a
            href="/applications"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Applications
            <Zap className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default AboutAI