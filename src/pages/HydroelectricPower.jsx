import React from 'react'
import { Droplets, MapPin, Zap, Mountain, Ship, Factory, TrendingUp, Award } from 'lucide-react'

const HydroelectricPower = () => {
  const majorDams = [
    {
      name: 'Three Gorges Dam',
      location: 'Hubei Province',
      capacity: '22,500 MW',
      river: 'Yangtze River',
      completed: '2012',
      description: 'The world\'s largest hydroelectric power station by installed capacity.',
      status: 'Operational',
      features: ['Flood control', 'Navigation', 'Power generation'],
    },
    {
      name: 'Baihetan Dam',
      location: 'Sichuan/Yunnan',
      capacity: '16,000 MW',
      river: 'Jinsha River',
      completed: '2022',
      description: 'Second-largest hydroelectric project in the world with advanced technology.',
      status: 'Operational',
      features: ['Ultra-high arch dam', 'Advanced turbines', 'Environmental protection'],
    },
    {
      name: 'Xiluodu Dam',
      location: 'Sichuan/Yunnan',
      capacity: '13,860 MW',
      river: 'Jinsha River',
      completed: '2014',
      description: 'One of the tallest arch dams in the world at 285.5 meters.',
      status: 'Operational',
      features: ['Arch dam design', 'Sediment management', 'Fish protection'],
    },
    {
      name: 'Wudongde Dam',
      location: 'Sichuan/Yunnan',
      capacity: '10,200 MW',
      river: 'Jinsha River',
      completed: '2021',
      description: 'Features the world\'s thinnest 300-meter-class arch dam.',
      status: 'Operational',
      features: ['Thin arch design', 'Smart construction', 'Ecological protection'],
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: 'World Leader',
      description: 'China has the world\'s largest hydroelectric capacity, accounting for 27% of global hydro power.',
      stat: '370 GW capacity',
    },
    {
      icon: Mountain,
      title: 'Engineering Excellence',
      description: 'Home to multiple world-record-breaking dams in terms of height, capacity, and technology.',
      stat: '98,000+ dams',
    },
    {
      icon: Factory,
      title: 'Manufacturing Hub',
      description: 'Leading manufacturer of hydroelectric equipment, supplying projects worldwide.',
      stat: '70% global share',
    },
    {
      icon: Ship,
      title: 'Multi-Purpose Benefits',
      description: 'Hydroelectric projects provide flood control, navigation, and water supply benefits.',
      stat: 'Multiple benefits',
    },
  ]

  const stats = [
    { label: 'Total Hydro Capacity', value: '370 GW', change: 'World\'s largest' },
    { label: 'Annual Generation', value: '1,355 TWh', change: '2022 hydro power' },
    { label: 'Global Share', value: '27%', change: 'Of world capacity' },
    { label: 'Large Dams', value: '23,000+', change: 'Over 15m height' },
  ]

  const technologies = [
    {
      title: 'Pumped Storage',
      description: 'Advanced pumped storage hydropower for grid stability and energy storage.',
      capacity: '44 GW',
      growth: 'Rapidly expanding',
    },
    {
      title: 'Small Hydro',
      description: 'Extensive network of small hydroelectric plants for rural electrification.',
      capacity: '80 GW',
      growth: 'Mature technology',
    },
    {
      title: 'Ultra-High Dams',
      description: 'World-leading expertise in constructing ultra-high concrete and arch dams.',
      capacity: '300m+ height',
      growth: 'Engineering innovation',
    },
    {
      title: 'Smart Turbines',
      description: 'Advanced turbine technology with improved efficiency and environmental features.',
      capacity: '1,000 MW units',
      growth: 'Technology leader',
    },
  ]

  const rivers = [
    {
      name: 'Yangtze River',
      capacity: '79 GW',
      projects: 'Three Gorges, Gezhouba, Xiangjiaba',
      description: 'China\'s longest river with massive hydroelectric development.',
    },
    {
      name: 'Yellow River',
      capacity: '16 GW',
      projects: 'Longyangxia, Liujiaxia, Qingtongxia',
      description: 'Important river system with significant hydroelectric potential.',
    },
    {
      name: 'Jinsha River',
      capacity: '58 GW',
      projects: 'Baihetan, Xiluodu, Wudongde',
      description: 'Upper reaches of Yangtze with world-class hydroelectric projects.',
    },
    {
      name: 'Lancang River',
      capacity: '21 GW',
      projects: 'Xiaowan, Nuozhadu, Jinghong',
      description: 'International river (Mekong) with cascade development.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-500 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <Droplets className="h-16 w-16 text-cyan-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hydroelectric Power in China
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-cyan-100">
              Harnessing the power of China's mighty rivers through world-class 
              hydroelectric infrastructure and engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hydroelectric Statistics</h2>
            <p className="text-lg text-gray-600">China's dominance in global hydroelectric power</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-cyan-50 rounded-lg border border-cyan-200">
                <div className="text-3xl font-bold text-cyan-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Dams Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major Hydroelectric Projects</h2>
            <p className="text-lg text-gray-600">China's most significant hydroelectric installations</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {majorDams.map((dam, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{dam.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {dam.status}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{dam.location}</span>
                  </div>
                  <div className="flex items-center text-cyan-600">
                    <Zap className="h-4 w-4 mr-2" />
                    <span className="font-semibold">{dam.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Droplets className="h-4 w-4 mr-2" />
                    <span>{dam.river}</span>
                  </div>
                  <div className="text-sm text-gray-500">Completed: {dam.completed}</div>
                </div>
                <p className="text-gray-600 mb-4">{dam.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dam.features.map((feature, idx) => (
                    <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-800">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* River Systems */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Major River Systems</h2>
            <p className="text-lg text-gray-600">Hydroelectric development across China's rivers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rivers.map((river, index) => (
              <div key={index} className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border border-cyan-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{river.name}</h3>
                  <span className="text-2xl font-bold text-cyan-600">{river.capacity}</span>
                </div>
                <div className="text-sm text-cyan-600 font-medium mb-2">Key Projects: {river.projects}</div>
                <p className="text-gray-600">{river.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-lg text-gray-600">China's leadership in hydroelectric power</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100">
                        <Icon className="h-6 w-6 text-cyan-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                        <span className="text-sm font-bold text-cyan-600 bg-cyan-100 px-2 py-1 rounded">
                          {achievement.stat}
                        </span>
                      </div>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Innovation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hydroelectric Technologies</h2>
            <p className="text-lg text-gray-600">Advanced technologies in hydroelectric power</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.title}</h3>
                <div className="text-2xl font-bold text-cyan-600 mb-2">{tech.capacity}</div>
                <div className="text-sm text-cyan-600 font-medium mb-3">{tech.growth}</div>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TrendingUp className="h-16 w-16 text-cyan-200 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Future of Hydroelectric Power</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            China continues to expand hydroelectric capacity with focus on pumped storage, 
            small hydro development, and advanced turbine technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-200 mb-2">120 GW</div>
              <div className="text-cyan-100">Pumped storage target</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-200 mb-2">400 GW</div>
              <div className="text-cyan-100">Total hydro by 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-200 mb-2">Smart</div>
              <div className="text-cyan-100">Digital dam management</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HydroelectricPower