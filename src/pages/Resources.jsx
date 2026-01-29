import React from 'react'
import { 
  BookOpen, 
  Video, 
  Code, 
  Users, 
  ExternalLink, 
  Star, 
  Clock,
  Award,
  Download,
  Play,
  FileText,
  Globe
} from 'lucide-react'

const Resources = () => {
  const courses = [
    {
      title: "Machine Learning Course",
      provider: "Stanford University",
      instructor: "Andrew Ng",
      level: "Beginner",
      duration: "11 weeks",
      rating: 4.9,
      description: "Comprehensive introduction to machine learning, data mining, and statistical pattern recognition.",
      link: "#",
      free: true
    },
    {
      title: "Deep Learning Specialization",
      provider: "Coursera",
      instructor: "Andrew Ng",
      level: "Intermediate",
      duration: "4 months",
      rating: 4.8,
      description: "Master deep learning and break into AI with this comprehensive specialization.",
      link: "#",
      free: false
    },
    {
      title: "CS50's Introduction to AI",
      provider: "Harvard University",
      instructor: "David Malan",
      level: "Beginner",
      duration: "7 weeks",
      rating: 4.7,
      description: "Explore the concepts and algorithms at the foundation of modern artificial intelligence.",
      link: "#",
      free: true
    },
    {
      title: "AI for Everyone",
      provider: "Coursera",
      instructor: "Andrew Ng",
      level: "Beginner",
      duration: "4 weeks",
      rating: 4.6,
      description: "Non-technical course designed to help you understand AI technologies and their impact.",
      link: "#",
      free: false
    }
  ]

  const books = [
    {
      title: "Artificial Intelligence: A Modern Approach",
      authors: "Stuart Russell, Peter Norvig",
      level: "Advanced",
      description: "The leading textbook in Artificial Intelligence, comprehensive and up-to-date.",
      rating: 4.5,
      pages: 1152
    },
    {
      title: "The Hundred-Page Machine Learning Book",
      authors: "Andriy Burkov",
      level: "Intermediate",
      description: "Concise overview of machine learning concepts and techniques.",
      rating: 4.4,
      pages: 100
    },
    {
      title: "Life 3.0: Being Human in the Age of AI",
      authors: "Max Tegmark",
      level: "Beginner",
      description: "Explores how AI will affect crime, war, justice, jobs, society and our sense of being human.",
      rating: 4.3,
      pages: 384
    },
    {
      title: "Superintelligence",
      authors: "Nick Bostrom",
      level: "Intermediate",
      description: "Examines the potential consequences of machine superintelligence.",
      rating: 4.2,
      pages: 352
    }
  ]

  const tools = [
    {
      name: "TensorFlow",
      category: "Machine Learning Framework",
      description: "Open-source platform for machine learning and deep learning applications.",
      icon: <Code className="h-6 w-6 text-orange-600" />,
      free: true,
      link: "#"
    },
    {
      name: "PyTorch",
      category: "Deep Learning Framework",
      description: "Dynamic neural network framework with strong GPU acceleration support.",
      icon: <Code className="h-6 w-6 text-red-600" />,
      free: true,
      link: "#"
    },
    {
      name: "Jupyter Notebooks",
      category: "Development Environment",
      description: "Interactive computing environment for data science and machine learning.",
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      free: true,
      link: "#"
    },
    {
      name: "Hugging Face",
      category: "NLP Platform",
      description: "Platform for natural language processing models and datasets.",
      icon: <Globe className="h-6 w-6 text-yellow-600" />,
      free: true,
      link: "#"
    },
    {
      name: "OpenAI API",
      category: "AI Service",
      description: "Access to GPT models and other AI capabilities through API.",
      icon: <Code className="h-6 w-6 text-green-600" />,
      free: false,
      link: "#"
    },
    {
      name: "Google Colab",
      category: "Cloud Platform",
      description: "Free cloud-based Jupyter notebook environment with GPU support.",
      icon: <Play className="h-6 w-6 text-purple-600" />,
      free: true,
      link: "#"
    }
  ]

  const communities = [
    {
      name: "r/MachineLearning",
      platform: "Reddit",
      members: "2.1M",
      description: "Active community discussing ML research, papers, and applications.",
      icon: <Users className="h-6 w-6 text-orange-600" />
    },
    {
      name: "AI/ML Twitter",
      platform: "Twitter",
      members: "Active",
      description: "Follow researchers and practitioners sharing latest developments.",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      name: "Kaggle Community",
      platform: "Kaggle",
      members: "8M+",
      description: "Data science competitions and collaborative learning platform.",
      icon: <Users className="h-6 w-6 text-teal-600" />
    },
    {
      name: "AI Stack Overflow",
      platform: "Stack Overflow",
      members: "Active",
      description: "Q&A community for AI and machine learning programming questions.",
      icon: <Users className="h-6 w-6 text-gray-600" />
    }
  ]

  const datasets = [
    {
      name: "ImageNet",
      type: "Computer Vision",
      size: "14M images",
      description: "Large visual database designed for visual object recognition research."
    },
    {
      name: "Common Crawl",
      type: "Natural Language",
      size: "Petabytes",
      description: "Web crawl data used for training large language models."
    },
    {
      name: "UCI ML Repository",
      type: "General ML",
      size: "500+ datasets",
      description: "Collection of databases, domain theories, and data generators."
    },
    {
      name: "OpenAI Gym",
      type: "Reinforcement Learning",
      size: "Various",
      description: "Toolkit for developing and comparing reinforcement learning algorithms."
    }
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Learning <span className="text-blue-600">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive collection of courses, books, tools, and communities to help you 
            learn about artificial intelligence and machine learning.
          </p>
        </div>
      </section>

      {/* Online Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your AI journey with these highly-rated courses from top universities and platforms
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{course.title}</h3>
                  <p className="text-blue-600 font-medium">{course.provider}</p>
                  <p className="text-gray-600 text-sm">by {course.instructor}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {course.free && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      Free
                    </span>
                  )}
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    {course.level}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                </div>
                <a
                  href={course.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Books Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Books</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deepen your understanding with these foundational and cutting-edge AI books
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-blue-600 text-sm mb-2">{book.authors}</p>
                <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    {book.rating}
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    {book.pages} pages
                  </div>
                </div>
                <div className="mt-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    book.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    book.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {book.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools & Platforms</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential tools and platforms for AI development and experimentation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-50 rounded-lg mr-3">
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
                    <p className="text-sm text-gray-500">{tool.category}</p>
                  </div>
                  {tool.free && (
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      Free
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Explore Tool
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Communities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with fellow AI enthusiasts and learn from the community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community, index) => (
              <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-lg mx-auto mb-4">
                  {community.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{community.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{community.platform}</p>
                <p className="text-gray-600 text-sm mb-3">{community.description}</p>
                <div className="text-xs text-gray-500">{community.members} members</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datasets Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Datasets</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key datasets for training and testing AI models
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {datasets.map((dataset, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{dataset.name}</h3>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">{dataset.size}</span>
                  </div>
                </div>
                <div className="mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {dataset.type}
                  </span>
                </div>
                <p className="text-gray-600">{dataset.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Begin your AI journey today with these recommended first steps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Learn the Basics</h3>
              <p className="text-blue-100 text-sm">
                Start with "AI for Everyone" to understand fundamental concepts
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Get Hands-On</h3>
              <p className="text-blue-100 text-sm">
                Try Google Colab and experiment with simple ML models
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Join the Community</h3>
              <p className="text-blue-100 text-sm">
                Connect with others and participate in discussions and competitions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources