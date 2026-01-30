import React from 'react'
import { Wind, MapPin, Anchor, Mountain, TrendingUp, Zap, Globe } from 'lucide-react'

const WindEnergy = () => {
  const windProjects = [
    {
      name: 'Gansu Wind Farm',
      location: 'Gansu Province',
      capacity: '20,000 MW',
      type: 'Onshore',
      description: 'The world\'s largest wind farm complex, spanning multiple sites across Gansu Province.',
      status: 'Operational',
    },
    {
      name: 'Jiangsu Rudong Offshore Wind Farm',
      location: 'Jiangsu Province',
      capacity: '802 MW',
      type: 'Offshore',
      description: 'One of China\'s largest offshore wind installations in the Yellow Sea.',
      status: 'Operational',
    },
    {
      name: 'Inner Mongolia Wind Base',
      location: 'Inner Mongolia',
      capacity: '13,000 MW',
      type: 'Onshore',
      description: 'Massive wind energy base taking advantage of the region\'s excellent wind resources.',
      status: 'Operational',
    },
    {
      name: 'Guangdong Yangjiang Offshore',
      location: 'Guangdong Province',
      capacity: '1,800 MW',
      type: 'Offshore',
      description: 'Large-scale offshore wind project in the South China Sea.',
      status: 'Under Construction',
    },
  ]

  const technologies = [
    {
      icon: Wind,
      title: 'Advanced Turbines',
      description: 'Development of larger, more efficient wind turbines with capacities exceeding 15 MW.',
      highlight: '15+ MW turbines',
    },
    {
      icon: Anchor,
      title: 'Offshore Innovation',
      description: 'Leading offshore wind technology with floating platforms for deeper waters.',
      highlight: 'Floating platforms',
    },
    {
      icon: Mountain,
      title: 'High-Altitude Systems',
      description: 'Specialized turbines designed for high-altitude and extreme weather conditions.',
      highlight: 'Extreme conditions',
    },
    {
      icon: Globe,
      title: 'Smart Grid Integration',
      description: 'Advanced grid integration systems for better wind power management and distribution.',
      highlight: 'Smart integration',
    },
  ]

  const stats = [
    { label: 'Total Wind Capacity', value: '329 GW', change: '+37 GW in 2022' },
    { label: 'Offshore Capacity', value: '27 GW', change: 'World\'s largest' },
    { label: 'Annual Generation', value: '466 TWh', change: '2022 wind power' },
    { label: 'Global Share', value: '38%', change: 'Of world capacity' },
  ]

  const regions = [
    {
      name: 'Inner Mongolia',
      capacity: '42 GW',
      description: 'Excellent wind resources and vast open spaces make this the top wind region.',
      windSpeed: '7.5 m/s average',
    },
    {
      name: 'Xinjiang',
      capacity: '24 GW',
      description: 'High-quality wind resources in the western desert regions.',
      windSpeed: '8.2 m/s average',
    },
    {
      name: 'Gansu',
      capacity: '15 GW',
      description: 'Home to the world\'s largest wind farm complex.',
      windSpeed: '7.8 m/s average',
    },
    {
      name: 'Hebei',
      capacity: '21 GW',
      description: 'Strategic location near major population centers.',
      windSpeed: '6.8 m/s average',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Wind className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wind Energy in China
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Harnessing the power of wind across vast landscapes and offshore waters, 
              China leads the world in wind energy capacity and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wind Power Statistics</h2>
            <p className="text-lg text-gray-600">China's leadership in global wind energy</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Wind Projects</h2>
            <p className="text-lg text-gray-600">China's largest wind installations</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {windProjects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    project.status === 'Operational' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-blue-600 mb-2">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{project.capacity}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  {project.type === 'Offshore' ? (
                    <Anchor className="h-4 w-4 mr-2" />
                  ) : (
                    <Mountain className="h-4 w-4 mr-2" />
                  )}
                  <span className="text-sm font-medium">{project.type}</span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Distribution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Wind Resources</h2>
            <p className="text-lg text-gray-600">Top wind energy regions in China</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{region.name}</h3>
                  <span className="text-2xl font-bold text-blue-600">{region.capacity}</span>
                </div>
                <div className="text-sm text-blue-600 font-medium mb-2">{region.windSpeed}</div>
                <p className="text-gray-600">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Innovation Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wind Technology Innovation</h2>
            <p className="text-lg text-gray-600">Advancing wind energy technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{tech.title}</h3>
                        <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          {tech.highlight}
                        </span>
                      </div>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="h-16 w-16 text-blue-200 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Future of Wind Energy</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            China aims to reach 400 GW of wind capacity by 2025, with significant expansion 
            in offshore wind and advanced turbine technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200 mb-2">400 GW</div>
              <div className="text-blue-100">Target by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200 mb-2">100 GW</div>
              <div className="text-blue-100">Offshore target</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200 mb-2">20 MW</div>
              <div className="text-blue-100">Next-gen turbines</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WindEnergy