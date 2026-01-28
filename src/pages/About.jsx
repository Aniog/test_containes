import React from 'react'
import { Brain, Clock, Lightbulb, Cpu, Database, Network } from 'lucide-react'

const About = () => {
  const timeline = [
    {
      year: "1950s",
      title: "The Birth of AI",
      description: "Alan Turing proposes the Turing Test, and the term 'Artificial Intelligence' is coined at the Dartmouth Conference."
    },
    {
      year: "1960s-70s",
      title: "Early Development",
      description: "First AI programs developed, including ELIZA and expert systems. The first AI winter begins due to limited computing power."
    },
    {
      year: "1980s-90s",
      title: "Machine Learning Emerges",
      description: "Neural networks gain popularity, and machine learning algorithms begin to show practical applications."
    },
    {
      year: "2000s",
      title: "Big Data Revolution",
      description: "Internet growth provides massive datasets, enabling more sophisticated AI training and applications."
    },
    {
      year: "2010s",
      title: "Deep Learning Breakthrough",
      description: "Deep neural networks achieve breakthrough results in image recognition, natural language processing, and game playing."
    },
    {
      year: "2020s",
      title: "AI Everywhere",
      description: "Large language models, generative AI, and AI integration into everyday applications become mainstream."
    }
  ]

  const concepts = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Machine Learning",
      description: "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed for every task."
    },
    {
      icon: <Network className="h-8 w-8 text-green-600" />,
      title: "Neural Networks",
      description: "Computing systems inspired by biological neural networks, consisting of interconnected nodes that process information."
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Deep Learning",
      description: "A subset of machine learning using neural networks with multiple layers to model and understand complex patterns."
    },
    {
      icon: <Cpu className="h-8 w-8 text-red-600" />,
      title: "Natural Language Processing",
      description: "The ability of computers to understand, interpret, and generate human language in a meaningful way."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Computer Vision",
      description: "AI technology that enables computers to interpret and understand visual information from the world around them."
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "Reinforcement Learning",
      description: "A type of machine learning where agents learn to make decisions by taking actions and receiving rewards or penalties."
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Brain className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Understanding Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Explore the fascinating world of AI, from its humble beginnings to the revolutionary technology that's transforming our world today.
            </p>
          </div>
        </div>
      </section>

      {/* What is AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is Artificial Intelligence?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. These systems can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                AI encompasses various subfields including machine learning, deep learning, natural language processing, computer vision, and robotics. The goal is to create systems that can function intelligently and independently.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Characteristics of AI:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Learning from data and experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Adapting to new situations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Making decisions based on analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Performing tasks autonomously
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="h-24 w-24 text-blue-600 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-700 font-medium">
                    AI systems process information, learn patterns, and make intelligent decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Concepts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core AI Concepts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding the fundamental building blocks that make artificial intelligence possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {concepts.map((concept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {concept.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {concept.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Evolution of AI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey through the major milestones in artificial intelligence development.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="text-2xl font-bold text-blue-600 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Future of AI
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            As we look ahead, AI continues to evolve rapidly. From artificial general intelligence to quantum computing integration, the possibilities are endless. The key is ensuring AI development remains ethical, beneficial, and aligned with human values.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">AGI</div>
              <p className="text-blue-100">Artificial General Intelligence on the horizon</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Quantum AI</div>
              <p className="text-blue-100">Quantum computing accelerating AI capabilities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Ethical AI</div>
              <p className="text-blue-100">Responsible development and deployment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About