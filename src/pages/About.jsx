import React from 'react'
import { Brain, Cpu, Database, Network, Timeline, Lightbulb } from 'lucide-react'

const About = () => {
  const timeline = [
    {
      year: "1950",
      title: "The Turing Test",
      description: "Alan Turing proposes a test for machine intelligence, laying the foundation for AI evaluation."
    },
    {
      year: "1956",
      title: "Birth of AI",
      description: "The term 'Artificial Intelligence' is coined at the Dartmouth Conference."
    },
    {
      year: "1997",
      title: "Deep Blue Victory",
      description: "IBM's Deep Blue defeats world chess champion Garry Kasparov."
    },
    {
      year: "2012",
      title: "Deep Learning Revolution",
      description: "AlexNet wins ImageNet competition, sparking the deep learning boom."
    },
    {
      year: "2016",
      title: "AlphaGo Triumph",
      description: "Google's AlphaGo defeats Go world champion Lee Sedol."
    },
    {
      year: "2022",
      title: "ChatGPT Launch",
      description: "OpenAI releases ChatGPT, bringing AI to mainstream consciousness."
    }
  ]

  const aiTypes = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Machine Learning",
      description: "Algorithms that learn from data to make predictions or decisions without being explicitly programmed for every scenario."
    },
    {
      icon: <Network className="h-8 w-8 text-green-600" />,
      title: "Deep Learning",
      description: "Neural networks with multiple layers that can learn complex patterns and representations from large amounts of data."
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-600" />,
      title: "Natural Language Processing",
      description: "AI systems that understand, interpret, and generate human language in a meaningful way."
    },
    {
      icon: <Database className="h-8 w-8 text-orange-600" />,
      title: "Computer Vision",
      description: "Technology that enables machines to interpret and understand visual information from the world."
    }
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is <span className="text-blue-600">Artificial Intelligence?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Artificial Intelligence (AI) refers to the simulation of human intelligence in machines 
            that are programmed to think, learn, and problem-solve like humans. It encompasses a wide 
            range of technologies and approaches that enable computers to perform tasks that typically 
            require human intelligence.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding AI</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  At its core, AI is about creating systems that can perform cognitive functions 
                  associated with human minds, such as perceiving, reasoning, learning, and 
                  decision-making. These systems can analyze vast amounts of data, recognize 
                  patterns, and make predictions or recommendations.
                </p>
                <p>
                  AI is not a single technology but rather a collection of technologies working 
                  together. It includes machine learning, deep learning, natural language processing, 
                  computer vision, and robotics, among others.
                </p>
                <p>
                  The goal of AI is not to replace human intelligence but to augment and enhance 
                  human capabilities, helping us solve complex problems and make better decisions.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                  <Brain className="h-32 w-32 text-blue-600" />
                </div>
                <div className="absolute -top-4 -right-4">
                  <Lightbulb className="h-12 w-12 text-yellow-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of AI Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of AI Technologies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the different branches of AI that are transforming industries and our daily lives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mr-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Timeline</h2>
            <p className="text-lg text-gray-600">Key milestones in the development of artificial intelligence</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border">
                      <div className="flex items-center mb-2">
                        <Timeline className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-sm font-semibold text-blue-600">{event.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How AI Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How AI Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the fundamental process behind artificial intelligence systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Collection</h3>
              <p className="text-gray-600">
                AI systems start by collecting and processing large amounts of data from various sources 
                to learn patterns and relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning & Training</h3>
              <p className="text-gray-600">
                Machine learning algorithms analyze the data to identify patterns, make connections, 
                and build predictive models.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Decision Making</h3>
              <p className="text-gray-600">
                The trained AI system can then make predictions, recommendations, or decisions 
                based on new input data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About