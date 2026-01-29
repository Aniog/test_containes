import React from 'react'
import { 
  BookOpen, 
  Video, 
  Code, 
  Users, 
  Award, 
  ExternalLink, 
  Play,
  Download,
  Star,
  Clock,
  Globe,
  Zap,
  Brain,
  Laptop,
  GraduationCap,
  FileText,
  Headphones,
  Monitor
} from 'lucide-react'

const Resources = () => {
  const learningPaths = [
    {
      icon: GraduationCap,
      title: 'Beginner Path',
      description: 'Start your AI journey with fundamental concepts',
      duration: '4-6 weeks',
      level: 'Beginner',
      color: 'green',
      topics: ['AI Basics', 'Machine Learning Intro', 'Python Fundamentals', 'Data Analysis']
    },
    {
      icon: Brain,
      title: 'Intermediate Path',
      description: 'Dive deeper into machine learning and neural networks',
      duration: '8-12 weeks',
      level: 'Intermediate',
      color: 'blue',
      topics: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP Basics']
    },
    {
      icon: Zap,
      title: 'Advanced Path',
      description: 'Master cutting-edge AI techniques and research',
      duration: '12-16 weeks',
      level: 'Advanced',
      color: 'purple',
      topics: ['Reinforcement Learning', 'GANs', 'Transformers', 'AI Research']
    }
  ]

  const courses = [
    {
      title: 'Machine Learning Course',
      provider: 'Stanford University',
      instructor: 'Andrew Ng',
      rating: 4.9,
      students: '4.8M',
      duration: '11 weeks',
      price: 'Free',
      type: 'course',
      link: '#'
    },
    {
      title: 'Deep Learning Specialization',
      provider: 'deeplearning.ai',
      instructor: 'Andrew Ng',
      rating: 4.8,
      students: '850K',
      duration: '4 months',
      price: '$49/month',
      type: 'specialization',
      link: '#'
    },
    {
      title: 'CS50\'s Introduction to AI',
      provider: 'Harvard University',
      instructor: 'David Malan',
      rating: 4.7,
      students: '320K',
      duration: '7 weeks',
      price: 'Free',
      type: 'course',
      link: '#'
    },
    {
      title: 'AI for Everyone',
      provider: 'deeplearning.ai',
      instructor: 'Andrew Ng',
      rating: 4.8,
      students: '650K',
      duration: '4 weeks',
      price: 'Free',
      type: 'course',
      link: '#'
    }
  ]

  const tools = [
    {
      icon: Code,
      name: 'TensorFlow',
      description: 'Open-source machine learning framework by Google',
      category: 'Framework',
      difficulty: 'Intermediate',
      link: 'https://tensorflow.org'
    },
    {
      icon: Brain,
      name: 'PyTorch',
      description: 'Dynamic neural network framework preferred by researchers',
      category: 'Framework',
      difficulty: 'Intermediate',
      link: 'https://pytorch.org'
    },
    {
      icon: Laptop,
      name: 'Jupyter Notebooks',
      description: 'Interactive computing environment for data science',
      category: 'IDE',
      difficulty: 'Beginner',
      link: 'https://jupyter.org'
    },
    {
      icon: Monitor,
      name: 'Google Colab',
      description: 'Free cloud-based Jupyter notebook environment',
      category: 'Platform',
      difficulty: 'Beginner',
      link: 'https://colab.research.google.com'
    },
    {
      icon: Zap,
      name: 'Hugging Face',
      description: 'Pre-trained models and datasets for NLP',
      category: 'Platform',
      difficulty: 'Intermediate',
      link: 'https://huggingface.co'
    },
    {
      icon: Globe,
      name: 'Kaggle',
      description: 'Data science competitions and datasets',
      category: 'Platform',
      difficulty: 'All Levels',
      link: 'https://kaggle.com'
    }
  ]

  const books = [
    {
      title: 'Hands-On Machine Learning',
      author: 'Aurélien Géron',
      rating: 4.6,
      pages: 851,
      level: 'Intermediate',
      description: 'Practical guide to machine learning with Python'
    },
    {
      title: 'Pattern Recognition and Machine Learning',
      author: 'Christopher Bishop',
      rating: 4.5,
      pages: 738,
      level: 'Advanced',
      description: 'Comprehensive mathematical treatment of ML'
    },
    {
      title: 'The Hundred-Page Machine Learning Book',
      author: 'Andriy Burkov',
      rating: 4.4,
      pages: 160,
      level: 'Beginner',
      description: 'Concise introduction to machine learning'
    },
    {
      title: 'Deep Learning',
      author: 'Ian Goodfellow',
      rating: 4.3,
      pages: 800,
      level: 'Advanced',
      description: 'Comprehensive guide to deep learning theory'
    }
  ]

  const podcasts = [
    {
      name: 'AI Podcast',
      host: 'Lex Fridman',
      episodes: '400+',
      rating: 4.8,
      description: 'Conversations with leading AI researchers and practitioners'
    },
    {
      name: 'Machine Learning Street Talk',
      host: 'Various',
      episodes: '200+',
      rating: 4.7,
      description: 'Technical discussions on latest ML research'
    },
    {
      name: 'The AI Alignment Podcast',
      host: 'Lucas Perry',
      episodes: '100+',
      rating: 4.6,
      description: 'Focus on AI safety and alignment research'
    }
  ]

  const communities = [
    {
      name: 'r/MachineLearning',
      platform: 'Reddit',
      members: '2.1M',
      description: 'Latest research papers and discussions'
    },
    {
      name: 'AI/ML Twitter',
      platform: 'Twitter',
      members: 'Millions',
      description: 'Follow researchers and get real-time updates'
    },
    {
      name: 'Towards Data Science',
      platform: 'Medium',
      members: '600K+',
      description: 'Articles and tutorials on data science and AI'
    },
    {
      name: 'Papers With Code',
      platform: 'Website',
      members: '1M+',
      description: 'Latest ML papers with code implementations'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-50 text-green-600 border-green-200',
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200'
    }
    return colors[color] || colors.blue
  }

  const getLevelBadge = (level) => {
    const styles = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-blue-100 text-blue-800',
      'Advanced': 'bg-purple-100 text-purple-800',
      'All Levels': 'bg-gray-100 text-gray-800'
    }
    return styles[level] || styles.Beginner
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white bg-opacity-20 rounded-full">
                <BookOpen className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Learning Resources
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100">
              Everything you need to start, advance, and master your artificial intelligence journey.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured learning paths tailored to your experience level and goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => {
              const Icon = path.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`p-6 ${getColorClasses(path.color)} border-b`}>
                    <Icon className="h-12 w-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      {path.title}
                    </h3>
                    <p className="opacity-80">
                      {path.description}
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{path.duration}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelBadge(path.level)}`}>
                        {path.level}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Key Topics:</h4>
                      <div className="space-y-2">
                        {path.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Online Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Video className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Online Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality courses from leading universities and institutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{course.provider}</p>
                    <p className="text-sm text-gray-500">by {course.instructor}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                    <div className="text-sm text-gray-500">{course.students} students</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">{course.duration}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      course.type === 'specialization' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {course.type}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-orange-600">
                    {course.price}
                  </div>
                </div>
                
                <button className="w-full flex items-center justify-center space-x-2 bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                  <Play className="h-4 w-4" />
                  <span>Start Learning</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Code className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Tools & Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Popular tools and platforms used by AI practitioners worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {tool.name}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-gray-400" />
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {tool.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {tool.category}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${getLevelBadge(tool.difficulty)}`}>
                          {tool.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Books & Reading */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Books */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <FileText className="h-8 w-8 text-orange-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Essential Books
                </h2>
              </div>
              
              <div className="space-y-6">
                {books.map((book, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {book.title}
                        </h3>
                        <p className="text-gray-600">by {book.author}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{book.rating}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${getLevelBadge(book.level)}`}>
                          {book.level}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {book.description}
                    </p>
                    <div className="text-sm text-gray-500">
                      {book.pages} pages
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Podcasts */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Headphones className="h-8 w-8 text-orange-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  AI Podcasts
                </h2>
              </div>
              
              <div className="space-y-6">
                {podcasts.map((podcast, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {podcast.name}
                        </h3>
                        <p className="text-gray-600">by {podcast.host}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{podcast.rating}</span>
                        </div>
                        <div className="text-sm text-gray-500">{podcast.episodes}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {podcast.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join AI Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with fellow AI enthusiasts, researchers, and practitioners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {communities.map((community, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {community.name}
                    </h3>
                    <p className="text-orange-600 font-medium">{community.platform}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{community.members}</div>
                    <div className="text-sm text-gray-500">members</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  {community.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your AI Journey Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            With these resources at your fingertips, you're ready to dive into the exciting world of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Download className="mr-2 h-5 w-5" />
              Download Learning Guide
            </button>
            <a
              href="/"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources