import React from 'react'
import { Brain, Network, Lightbulb, Cog, Database, Target } from 'lucide-react'

const About = () => {
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
      icon: Lightbulb,
      title: 'Natural Language Processing',
      description: 'AI that understands, interprets, and generates human language.',
      examples: ['Chatbots', 'Language translation', 'Text analysis']
    },
    {
      icon: Cog,
      title: 'Computer Vision',
      description: 'AI that can identify and analyze visual content in images and videos.',
      examples: ['Facial recognition', 'Medical imaging', 'Autonomous vehicles']
    }
  ]

  const keyComponents = [
    {
      icon: Database,
      title: 'Data',
      description: 'The fuel that powers AI systems. Quality and quantity of data directly impact AI performance.'
    },
    {
      icon: Cog,
      title: 'Algorithms',
      description: 'Mathematical models and procedures that process data to make predictions or decisions.'
    },
    {
      icon: Target,
      title: 'Computing Power',
      description: 'The hardware infrastructure needed to process large amounts of data and run complex algorithms.'
    }
  ]

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="text-center py-12">
        <div className="max-w-4xl mx-auto">
          <Brain className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is Artificial Intelligence?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Artificial Intelligence (AI) is the simulation of human intelligence in machines 
            that are programmed to think, learn, and make decisions like humans.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding AI</h2>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            At its core, AI is about creating computer systems that can perform tasks that typically 
            require human intelligence. These tasks include visual perception, speech recognition, 
            decision-making, and language translation.
          </p>
          <p className="mb-6">
            AI systems work by analyzing large amounts of data, identifying patterns, and using 
            those patterns to make predictions or decisions about new data. The more data an AI 
            system processes, the better it becomes at its designated tasks.
          </p>
          <p>
            Modern AI is powered by machine learning algorithms that can automatically improve 
            their performance through experience, making them incredibly powerful tools for 
            solving complex problems across various industries.
          </p>
        </div>
      </section>

      {/* Types of AI Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of AI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            AI encompasses various technologies and approaches, each with unique capabilities and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiTypes.map(({ icon: Icon, title, description, examples }, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mr-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
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

      {/* Key Components Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Components of AI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three essential elements that make AI systems possible and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {keyComponents.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mx-auto mb-6">
                <Icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Brief History of AI</h2>
        
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">1950</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">The Turing Test</h3>
              <p className="text-gray-600">Alan Turing proposes a test to determine if a machine can exhibit intelligent behavior.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">1956</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Birth of AI</h3>
              <p className="text-gray-600">The term "Artificial Intelligence" is coined at the Dartmouth Conference.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">2010s</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Deep Learning Revolution</h3>
              <p className="text-gray-600">Breakthrough advances in neural networks lead to major improvements in AI capabilities.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">2020s</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Goes Mainstream</h3>
              <p className="text-gray-600">Large language models and generative AI become widely accessible to the public.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About