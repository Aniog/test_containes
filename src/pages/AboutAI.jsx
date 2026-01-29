import React from 'react'
import { Brain, Cpu, Network, BookOpen, Lightbulb, Target } from 'lucide-react'

const AboutAI = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Brain className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Artificial Intelligence</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Understanding the fundamentals, history, and core concepts that make AI one of the most 
            transformative technologies of our time.
          </p>
        </div>
      </section>

      {/* What is AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What is Artificial Intelligence?</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Artificial Intelligence (AI) refers to the simulation of human intelligence in machines 
                that are programmed to think and learn like humans. It encompasses various technologies 
                that enable computers to perform tasks that typically require human intelligence.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                AI systems can analyze data, recognize patterns, make decisions, and even learn from 
                experience to improve their performance over time. This capability makes AI incredibly 
                powerful for solving complex problems across numerous domains.
              </p>
              <div className="flex items-center gap-3 text-indigo-600">
                <Lightbulb className="w-5 h-5" />
                <span className="font-semibold">Key insight: AI learns and adapts, just like humans do</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Learning</h3>
                  <p className="text-sm text-gray-600 mt-2">Adapts from data</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Reasoning</h3>
                  <p className="text-sm text-gray-600 mt-2">Makes decisions</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Processing</h3>
                  <p className="text-sm text-gray-600 mt-2">Analyzes patterns</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Computing</h3>
                  <p className="text-sm text-gray-600 mt-2">Processes data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of AI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Types of AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Narrow AI (ANI)</h3>
              <p className="text-gray-600 mb-4">
                AI systems designed to perform specific tasks, like image recognition, 
                language translation, or playing chess. Most current AI falls into this category.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Examples: Siri, Google Translate, Netflix recommendations</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">General AI (AGI)</h3>
              <p className="text-gray-600 mb-4">
                AI that can understand, learn, and apply intelligence across a wide range of tasks, 
                similar to human cognitive abilities. This is still theoretical.
              </p>
              <div className="text-sm text-green-600 font-semibold">Status: Research and development phase</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Super AI (ASI)</h3>
              <p className="text-gray-600 mb-4">
                Hypothetical AI that surpasses human intelligence in all aspects, including creativity, 
                problem-solving, and emotional intelligence.
              </p>
              <div className="text-sm text-purple-600 font-semibold">Status: Theoretical concept</div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">AI Through the Years</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                1950
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">The Turing Test</h3>
                <p className="text-gray-600">Alan Turing proposes a test to determine if a machine can exhibit intelligent behavior equivalent to a human.</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                1956
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Birth of AI</h3>
                <p className="text-gray-600">The term "Artificial Intelligence" is coined at the Dartmouth Conference, marking the official birth of AI as a field.</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                1997
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Deep Blue Wins</h3>
                <p className="text-gray-600">IBM's Deep Blue defeats world chess champion Garry Kasparov, demonstrating AI's potential in strategic thinking.</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-orange-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                2012
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Deep Learning Revolution</h3>
                <p className="text-gray-600">AlexNet wins ImageNet competition, sparking the deep learning revolution and modern AI renaissance.</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg">
                {new Date().getFullYear()}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">AI Everywhere</h3>
                <p className="text-gray-600">AI is integrated into daily life through smartphones, smart homes, autonomous vehicles, and advanced language models.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutAI