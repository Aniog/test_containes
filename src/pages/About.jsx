import React from 'react'
import { Clock, Users, Lightbulb, Cpu } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is Artificial Intelligence?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artificial Intelligence (AI) refers to the simulation of human intelligence in machines 
            that are programmed to think and learn like humans.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding AI</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Core Concepts</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span><strong>Machine Learning:</strong> Algorithms that improve through experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span><strong>Neural Networks:</strong> Computing systems inspired by biological neural networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span><strong>Deep Learning:</strong> Machine learning using artificial neural networks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <span><strong>Natural Language Processing:</strong> Understanding and generating human language</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Types of AI</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-600 pl-4">
                    <h4 className="font-semibold">Narrow AI</h4>
                    <p className="text-gray-600 text-sm">AI designed for specific tasks (current state)</p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold">General AI</h4>
                    <p className="text-gray-600 text-sm">AI with human-level cognitive abilities (future goal)</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold">Super AI</h4>
                    <p className="text-gray-600 text-sm">AI surpassing human intelligence (theoretical)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Brief History of AI
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1950s</h3>
              <p className="text-gray-600 text-sm">
                Alan Turing proposes the Turing Test. The term "Artificial Intelligence" is coined.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1980s</h3>
              <p className="text-gray-600 text-sm">
                Expert systems emerge. Machine learning algorithms begin to develop.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1990s-2000s</h3>
              <p className="text-gray-600 text-sm">
                Internet boom enables big data. Deep Blue defeats chess champion Garry Kasparov.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2010s-Present</h3>
              <p className="text-gray-600 text-sm">
                Deep learning revolution. AI assistants, autonomous vehicles, and GPT models emerge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Key AI Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Learning</h3>
                <p className="text-indigo-100">
                  AI systems improve performance through experience and data analysis.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Reasoning</h3>
                <p className="text-indigo-100">
                  Making logical inferences and decisions based on available information.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Adaptation</h3>
                <p className="text-indigo-100">
                  Adjusting behavior and responses to new situations and environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About