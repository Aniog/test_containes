import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sun, Wind, Droplets, TrendingUp, Globe, Zap } from 'lucide-react'

const Home = () => {
  const energyTypes = [
    {
      icon: Sun,
      title: 'Solar Energy',
      description: 'China leads the world in solar panel production and installation, with massive solar farms across the country.',
      link: '/solar',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Wind,
      title: 'Wind Energy',
      description: 'From offshore wind farms to onshore installations, China harnesses wind power at an unprecedented scale.',
      link: '/wind',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Droplets,
      title: 'Hydroelectric Power',
      description: 'Home to the world\'s largest hydroelectric projects, including the Three Gorges Dam.',
      link: '/hydro',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-50',
    },
  ]

  const stats = [
    { label: 'Solar Capacity', value: '261 GW', description: 'World\'s largest solar capacity' },
    { label: 'Wind Capacity', value: '329 GW', description: 'Leading wind energy producer' },
    { label: 'Hydro Capacity', value: '370 GW', description: 'Massive hydroelectric infrastructure' },
    { label: 'Green Investment', value: '$546B', description: 'Annual renewable energy investment' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              China's Green Energy
              <span className="block text-green-300">Revolution</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-green-100">
              Discover how China is transforming the global energy landscape with 
              unprecedented investments in renewable energy technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/statistics"
                className="inline-flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
              >
                View Statistics
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/solar"
                className="inline-flex items-center px-8 py-3 border-2 border-green-300 hover:bg-green-300 hover:text-green-900 rounded-lg font-semibold transition-colors"
              >
                Explore Technologies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leading the World in Green Energy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              China's commitment to renewable energy is reflected in these impressive statistics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Renewable Energy Sources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore China's diverse portfolio of renewable energy technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {energyTypes.map((energy, index) => {
              const Icon = energy.icon
              return (
                <Link
                  key={index}
                  to={energy.link}
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${energy.bgColor} mb-4`}>
                    <Icon className={`h-6 w-6 ${energy.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {energy.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{energy.description}</p>
                  <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="h-16 w-16 text-green-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Shaping a Sustainable Future</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            China's green energy initiatives are not just transforming the nation, 
            but setting the pace for global renewable energy adoption.
          </p>
          <Link
            to="/statistics"
            className="inline-flex items-center px-8 py-3 bg-white text-green-800 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
          >
            <TrendingUp className="mr-2 h-5 w-5" />
            View Detailed Statistics
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home