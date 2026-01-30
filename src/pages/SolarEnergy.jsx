import React from 'react'
import { Sun, MapPin, TrendingUp, Zap, Factory, Users } from 'lucide-react'

const SolarEnergy = () => {
  const solarProjects = [
    {
      name: 'Tengger Desert Solar Park',
      location: 'Ningxia',
      capacity: '1,547 MW',
      description: 'One of the world\'s largest solar installations, covering 43 square kilometers.',
      status: 'Operational',
    },
    {
      name: 'Yanchi Ningxia Solar Park',
      location: 'Ningxia',
      capacity: '1,000 MW',
      description: 'Massive solar farm contributing significantly to China\'s renewable energy goals.',
      status: 'Operational',
    },
    {
      name: 'Datong Solar Power Top Runner Base',
      location: 'Shanxi',
      capacity: '1,000 MW',
      description: 'Advanced solar technology demonstration project with high-efficiency panels.',
      status: 'Operational',
    },
    {
      name: 'Huanghe Hydropower Hainan Solar Park',
      location: 'Qinghai',
      capacity: '850 MW',
      description: 'High-altitude solar installation taking advantage of excellent solar conditions.',
      status: 'Operational',
    },
  ]

  const achievements = [
    {
      icon: Factory,
      title: 'Manufacturing Leadership',
      description: 'China produces over 70% of the world\'s solar panels and dominates the global supply chain.',
    },
    {
      icon: Zap,
      title: 'Capacity Growth',
      description: 'Added 87 GW of solar capacity in 2022 alone, more than the rest of the world combined.',
    },
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Helped reduce global solar costs by 90% over the past decade through scale and innovation.',
    },
    {
      icon: Users,
      title: 'Employment',
      description: 'Solar industry employs over 2.6 million people across manufacturing and installation.',
    },
  ]

  const stats = [
    { label: 'Total Solar Capacity', value: '261 GW', change: '+87 GW in 2022' },
    { label: 'Global Market Share', value: '35%', change: 'Manufacturing dominance' },
    { label: 'Annual Production', value: '130 GW', change: 'Panel manufacturing' },
    { label: 'Investment', value: '$139B', change: '2022 solar investments' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-600 via-orange-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Sun className="h-16 w-16 text-yellow-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solar Energy in China
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-yellow-100">
              Leading the world in solar technology, manufacturing, and deployment with 
              unprecedented scale and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solar Power Statistics</h2>
            <p className="text-lg text-gray-600">China's dominance in global solar energy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-lg text-gray-600">How China transformed the global solar industry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-100">
                        <Icon className="h-6 w-6 text-yellow-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Major Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Solar Projects</h2>
            <p className="text-lg text-gray-600">China's largest solar installations</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solarProjects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-yellow-600 mb-4">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{project.capacity}</span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Innovation Section */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovation & Technology</h2>
            <p className="text-lg text-gray-600">Advancing solar technology for the future</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-200 mb-4">
                <Sun className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Perovskite Cells</h3>
              <p className="text-gray-600">
                Research into next-generation perovskite solar cells with higher efficiency rates.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-200 mb-4">
                <Factory className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Scale</h3>
              <p className="text-gray-600">
                Massive production facilities enabling cost reductions and global supply.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-200 mb-4">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficiency Gains</h3>
              <p className="text-gray-600">
                Continuous improvements in panel efficiency, now exceeding 26% in laboratory settings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolarEnergy