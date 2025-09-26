import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Artificial Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Exploring the revolutionary technology that's transforming our world, 
              one algorithm at a time.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-sm font-semibold">Machine Learning</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-sm font-semibold">Deep Learning</span>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-sm font-semibold">Neural Networks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Artificial Intelligence?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Artificial Intelligence (AI) refers to the simulation of human intelligence in machines 
                that are programmed to think and learn like humans. It encompasses various technologies 
                including machine learning, natural language processing, computer vision, and robotics.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                AI systems can perform tasks that typically require human intelligence, such as 
                visual perception, speech recognition, decision-making, and language translation.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Characteristics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Learning from data and experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Adapting to new situations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Making predictions and decisions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Processing natural language
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI in Action</h3>
                <p className="text-gray-700">
                  From voice assistants to recommendation systems, AI is already integrated 
                  into our daily lives in countless ways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI is revolutionizing industries and transforming the way we work and live
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare",
                description: "AI assists in medical diagnosis, drug discovery, and personalized treatment plans.",
                icon: "🏥",
                color: "from-red-400 to-pink-500"
              },
              {
                title: "Transportation",
                description: "Self-driving cars, traffic optimization, and predictive maintenance systems.",
                icon: "🚗",
                color: "from-blue-400 to-cyan-500"
              },
              {
                title: "Finance",
                description: "Fraud detection, algorithmic trading, and automated customer service.",
                icon: "💰",
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Education",
                description: "Personalized learning, intelligent tutoring systems, and automated grading.",
                icon: "📚",
                color: "from-purple-400 to-indigo-500"
              },
              {
                title: "Entertainment",
                description: "Content recommendation, game AI, and creative content generation.",
                icon: "🎮",
                color: "from-yellow-400 to-orange-500"
              },
              {
                title: "Manufacturing",
                description: "Quality control, predictive maintenance, and supply chain optimization.",
                icon: "🏭",
                color: "from-gray-400 to-slate-500"
              }
            ].map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${app.color}`}></div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Through the Years</h2>
            <p className="text-xl text-gray-600">A journey through the major milestones in AI development</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            <div className="space-y-12">
              {[
                { year: "1950", event: "Alan Turing proposes the Turing Test", side: "left" },
                { year: "1956", event: "The term 'Artificial Intelligence' is coined at Dartmouth Conference", side: "right" },
                { year: "1997", event: "IBM's Deep Blue defeats world chess champion Garry Kasparov", side: "left" },
                { year: "2011", event: "IBM Watson wins Jeopardy! against human champions", side: "right" },
                { year: "2016", event: "AlphaGo defeats world Go champion Lee Sedol", side: "left" },
                { year: "2020", event: "GPT-3 demonstrates advanced language understanding", side: "right" },
                { year: "2023", event: "ChatGPT reaches 100 million users in just 2 months", side: "left" }
              ].map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${milestone.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${milestone.side === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Challenges Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Challenges</h2>
            <p className="text-xl text-gray-600">Understanding both the opportunities and concerns of AI</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Increased efficiency and productivity",
                  "Enhanced decision-making capabilities",
                  "24/7 availability and consistency",
                  "Ability to process vast amounts of data",
                  "Automation of repetitive tasks",
                  "Improved accuracy in complex calculations",
                  "Personalized user experiences"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Challenges</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Job displacement and economic disruption",
                  "Privacy and data security concerns",
                  "Algorithmic bias and fairness issues",
                  "Lack of transparency in decision-making",
                  "Ethical considerations and moral dilemmas",
                  "Dependence on technology",
                  "Need for regulatory frameworks"
                ].map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future of AI Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">The Future of AI</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            As we stand on the brink of an AI revolution, the possibilities are endless. 
            From artificial general intelligence to quantum computing integration, 
            the future promises even more transformative changes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Artificial General Intelligence",
                description: "AI systems that match human cognitive abilities across all domains"
              },
              {
                title: "Quantum AI",
                description: "Combining quantum computing with AI for unprecedented processing power"
              },
              {
                title: "Human-AI Collaboration",
                description: "Seamless integration of human creativity with AI capabilities"
              }
            ].map((future, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{future.title}</h3>
                <p className="text-blue-100">{future.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Artificial Intelligence</h3>
          <p className="text-gray-400 mb-6">
            Shaping the future, one algorithm at a time.
          </p>
          <div className="text-sm text-gray-500">
            © 2024 AI Information Page. Built with React and Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
