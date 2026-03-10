import React, { useState } from 'react'
import { 
  Brain, 
  Code, 
  Lightbulb, 
  BarChart3, 
  Palette, 
  Zap, 
  BookOpen, 
  Eye,
  ChevronRight,
  Sparkles,
  Cpu,
  MessageSquare,
  Target,
  Layers
} from 'lucide-react'

function App() {
  const [activeSkill, setActiveSkill] = useState(null)

  const skills = [
    {
      id: 'nlp',
      title: 'Natural Language Processing',
      icon: MessageSquare,
      description: 'Understanding and generating human language with context, nuance, and intent.',
      capabilities: [
        'Text analysis and sentiment detection',
        'Language translation and localization',
        'Conversational AI and dialogue management',
        'Content summarization and extraction'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 'code',
      title: 'Code Generation & Analysis',
      icon: Code,
      description: 'Writing, reviewing, and optimizing code across multiple programming languages.',
      capabilities: [
        'Full-stack application development',
        'Code review and debugging',
        'Architecture design and optimization',
        'Testing and documentation generation'
      ],
      color: 'bg-green-500'
    },
    {
      id: 'reasoning',
      title: 'Problem Solving & Reasoning',
      icon: Lightbulb,
      description: 'Logical thinking, pattern recognition, and systematic problem decomposition.',
      capabilities: [
        'Complex problem breakdown',
        'Logical reasoning and inference',
        'Pattern recognition and analysis',
        'Strategic planning and optimization'
      ],
      color: 'bg-yellow-500'
    },
    {
      id: 'data',
      title: 'Data Analysis & Visualization',
      icon: BarChart3,
      description: 'Processing, analyzing, and visualizing data to extract meaningful insights.',
      capabilities: [
        'Statistical analysis and modeling',
        'Data visualization and dashboards',
        'Trend analysis and forecasting',
        'Report generation and insights'
      ],
      color: 'bg-purple-500'
    },
    {
      id: 'creative',
      title: 'Creative Content Generation',
      icon: Palette,
      description: 'Creating original content across various formats and creative domains.',
      capabilities: [
        'Creative writing and storytelling',
        'Marketing content and copywriting',
        'Design concepts and ideation',
        'Multi-format content adaptation'
      ],
      color: 'bg-pink-500'
    },
    {
      id: 'automation',
      title: 'Task Automation',
      icon: Zap,
      description: 'Streamlining workflows and automating repetitive tasks efficiently.',
      capabilities: [
        'Workflow optimization and automation',
        'Process documentation and improvement',
        'Integration with external systems',
        'Batch processing and scheduling'
      ],
      color: 'bg-orange-500'
    },
    {
      id: 'learning',
      title: 'Learning & Adaptation',
      icon: BookOpen,
      description: 'Continuously learning from interactions and adapting to new contexts.',
      capabilities: [
        'Context-aware responses',
        'Domain-specific knowledge application',
        'Feedback integration and improvement',
        'Adaptive communication styles'
      ],
      color: 'bg-indigo-500'
    },
    {
      id: 'multimodal',
      title: 'Multi-modal Understanding',
      icon: Eye,
      description: 'Processing and understanding various types of input beyond just text.',
      capabilities: [
        'Document and image analysis',
        'Cross-format content understanding',
        'Structured data interpretation',
        'Multi-source information synthesis'
      ],
      color: 'bg-teal-500'
    }
  ]

  const coreCapabilities = [
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Delivering reliable, accurate results with attention to detail'
    },
    {
      icon: Layers,
      title: 'Scalable Solutions',
      description: 'Building solutions that grow and adapt with your needs'
    },
    {
      icon: Cpu,
      title: 'Efficient Processing',
      description: 'Optimizing performance and resource utilization'
    },
    {
      icon: Sparkles,
      title: 'Innovation Focus',
      description: 'Applying cutting-edge approaches to solve complex challenges'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Agent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the comprehensive capabilities that make AI agents powerful partners in solving complex problems, 
              automating workflows, and enhancing human productivity across diverse domains.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium">
                8 Core Skill Areas
              </div>
              <div className="px-6 py-3 bg-purple-100 text-purple-800 rounded-full font-medium">
                32+ Capabilities
              </div>
              <div className="px-6 py-3 bg-green-100 text-green-800 rounded-full font-medium">
                Continuously Evolving
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Capabilities Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fundamental strengths that underpin all AI agent interactions and deliverables
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreCapabilities.map((capability, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="inline-flex p-3 bg-gray-100 rounded-lg mb-4">
                <capability.icon className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
              <p className="text-gray-600 text-sm">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized Skill Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any skill area to explore specific capabilities and applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon
            const isActive = activeSkill === skill.id
            
            return (
              <div
                key={skill.id}
                className={`relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isActive ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveSkill(isActive ? null : skill.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 ${skill.color} rounded-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                
                {isActive && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {skill.capabilities.map((capability, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Applications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These skills combine to enable powerful applications across industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Software Development</h3>
              <p className="text-gray-700 text-sm mb-4">
                Full-stack development, code review, testing, and deployment automation
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Code Generation</span>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Problem Solving</span>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Automation</span>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Creation</h3>
              <p className="text-gray-700 text-sm mb-4">
                Writing, editing, marketing content, and multi-format content adaptation
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-200 text-green-800 text-xs rounded-full">Creative Content</span>
                <span className="px-3 py-1 bg-green-200 text-green-800 text-xs rounded-full">NLP</span>
                <span className="px-3 py-1 bg-green-200 text-green-800 text-xs rounded-full">Multi-modal</span>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Analytics</h3>
              <p className="text-gray-700 text-sm mb-4">
                Business intelligence, reporting, visualization, and predictive modeling
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Data Analysis</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Reasoning</span>
                <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Brain className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI Agent Skills</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Empowering human potential through intelligent automation, creative problem-solving, 
              and seamless collaboration across diverse domains and applications.
            </p>
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} AI Agent Skills. Continuously evolving and improving.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
