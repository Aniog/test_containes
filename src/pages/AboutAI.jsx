import React from 'react'
import { Brain, Cpu, Database, Network, History, Lightbulb } from 'lucide-react'

const AboutAI = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-12 h-12 text-indigo-200" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About Artificial Intelligence
          </h1>
          <p className="text-xl text-center text-indigo-100 max-w-3xl mx-auto">
            Understanding the science, history, and principles behind the technology 
            that's reshaping our future.
          </p>
        </div>
      </section>

      {/* What is AI Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">What is AI?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Artificial Intelligence (AI) refers to the simulation of human intelligence 
                in machines that are programmed to think and learn like humans. It encompasses 
                various technologies that enable computers to perform tasks that typically 
                require human intelligence.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                AI systems can analyze data, recognize patterns, make decisions, and even 
                create content. From simple rule-based systems to complex neural networks, 
                AI has evolved to become one of the most transformative technologies of our time.
              </p>
              <div className="flex items-center gap-3 text-indigo-600">
                <Lightbulb className="w-5 h-5" />
                <span className="font-semibold">Key insight: AI learns from data to make predictions and decisions</span>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Core AI Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Cpu className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Machine Learning</div>
                    <div className="text-sm text-gray-600">Learning from data patterns</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Database className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Data Processing</div>
                    <div className="text-sm text-gray-600">Analyzing vast amounts of information</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Network className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Neural Networks</div>
                    <div className="text-sm text-gray-600">Mimicking brain-like processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <History className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">AI Through History</h2>
            <p className="text-lg text-gray-600">Key milestones in artificial intelligence development</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                1950s
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex-1">
                <h3 className="font-bold text-lg mb-2">The Birth of AI</h3>
                <p className="text-gray-600">Alan Turing proposes the Turing Test. The term "Artificial Intelligence" is coined at Dartmouth Conference.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                1980s
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex-1">
                <h3 className="font-bold text-lg mb-2">Expert Systems</h3>
                <p className="text-gray-600">AI systems that mimic human expertise in specific domains become commercially viable.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                1997
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex-1">
                <h3 className="font-bold text-lg mb-2">Deep Blue Victory</h3>
                <p className="text-gray-600">IBM's Deep Blue defeats world chess champion Garry Kasparov, marking a milestone in AI capabilities.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                2010s
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex-1">
                <h3 className="font-bold text-lg mb-2">Deep Learning Revolution</h3>
                <p className="text-gray-600">Neural networks achieve breakthrough performance in image recognition, natural language processing, and game playing.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                2020s
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg flex-1">
                <h3 className="font-bold text-lg mb-2">Generative AI Era</h3>
                <p className="text-gray-600">Large language models like GPT and image generators transform how we interact with AI technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of AI */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Types of AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Narrow AI</h3>
              <p className="text-gray-600 mb-4">
                AI designed for specific tasks like image recognition, language translation, 
                or game playing. Most current AI systems fall into this category.
              </p>
              <div className="text-sm text-blue-600 font-semibold">Examples: Siri, Netflix recommendations, spam filters</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">General AI</h3>
              <p className="text-gray-600 mb-4">
                Hypothetical AI with human-level intelligence across all domains. 
                Can understand, learn, and apply knowledge like humans.
              </p>
              <div className="text-sm text-green-600 font-semibold">Status: Still in research phase</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border border-purple-100">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Super AI</h3>
              <p className="text-gray-600 mb-4">
                Theoretical AI that surpasses human intelligence in all aspects. 
                Could potentially solve complex global challenges.
              </p>
              <div className="text-sm text-purple-600 font-semibold">Status: Speculative future concept</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutAI