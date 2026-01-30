import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts'
import { TrendingUp, Zap, Globe, DollarSign, Calendar, Target } from 'lucide-react'

const Statistics = () => {
  // Renewable energy capacity data by year
  const capacityData = [
    { year: '2018', Solar: 175, Wind: 184, Hydro: 352, Total: 711 },
    { year: '2019', Solar: 205, Wind: 210, Hydro: 356, Total: 771 },
    { year: '2020', Solar: 261, Wind: 282, Hydro: 370, Total: 913 },
    { year: '2021', Solar: 306, Wind: 329, Hydro: 391, Total: 1026 },
    { year: '2022', Solar: 393, Wind: 366, Hydro: 414, Total: 1173 },
    { year: '2023', Solar: 499, Wind: 441, Hydro: 422, Total: 1362 },
  ]

  // Global renewable energy share
  const globalShareData = [
    { name: 'China', value: 38, color: '#10B981' },
    { name: 'United States', value: 12, color: '#3B82F6' },
    { name: 'Brazil', value: 8, color: '#F59E0B' },
    { name: 'India', value: 7, color: '#EF4444' },
    { name: 'Germany', value: 6, color: '#8B5CF6' },
    { name: 'Others', value: 29, color: '#6B7280' },
  ]

  // Investment data
  const investmentData = [
    { year: '2018', investment: 91 },
    { year: '2019', investment: 84 },
    { year: '2020', investment: 134 },
    { year: '2021', investment: 266 },
    { year: '2022', investment: 546 },
    { year: '2023', investment: 676 },
  ]

  // Energy generation data
  const generationData = [
    { year: '2018', Solar: 177, Wind: 366, Hydro: 1355, Total: 1898 },
    { year: '2019', Solar: 223, Wind: 406, Hydro: 1355, Total: 1984 },
    { year: '2020', Solar: 261, Wind: 466, Hydro: 1355, Total: 2082 },
    { year: '2021', Solar: 327, Wind: 466, Hydro: 1355, Total: 2148 },
    { year: '2022', Solar: 423, Wind: 524, Hydro: 1434, Total: 2381 },
    { year: '2023', Solar: 584, Wind: 647, Hydro: 1434, Total: 2665 },
  ]

  const keyMetrics = [
    {
      icon: Zap,
      title: 'Total Renewable Capacity',
      value: '1,362 GW',
      change: '+16.1%',
      description: '2023 total renewable energy capacity',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Globe,
      title: 'Global Market Share',
      value: '38%',
      change: 'Leading position',
      description: 'Of world renewable capacity',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: DollarSign,
      title: 'Annual Investment',
      value: '$676B',
      change: '+23.8%',
      description: '2023 renewable energy investment',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Target,
      title: 'Carbon Neutrality Goal',
      value: '2060',
      change: 'Target year',
      description: 'National carbon neutrality commitment',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ]

  const targets2030 = [
    { category: 'Solar Power', current: 499, target: 1200, unit: 'GW' },
    { category: 'Wind Power', current: 441, target: 800, unit: 'GW' },
    { category: 'Total Renewable', current: 1362, target: 3000, unit: 'GW' },
    { category: 'Non-fossil Share', current: 17.5, target: 25, unit: '%' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TrendingUp className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Green Energy Statistics
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Comprehensive data and trends showing China's remarkable progress 
              in renewable energy development and global leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className={`${metric.bgColor} rounded-lg p-6 border border-gray-200`}>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`h-8 w-8 ${metric.color}`} />
                    <span className={`text-sm font-medium ${metric.color}`}>{metric.change}</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{metric.title}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Renewable Energy Capacity Growth */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Renewable Energy Capacity Growth</h2>
            <p className="text-lg text-gray-600">China's renewable energy capacity by technology (GW)</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={capacityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Solar" stackId="1" stroke="#F59E0B" fill="#FEF3C7" />
                <Area type="monotone" dataKey="Wind" stackId="1" stroke="#3B82F6" fill="#DBEAFE" />
                <Area type="monotone" dataKey="Hydro" stackId="1" stroke="#06B6D4" fill="#CFFAFE" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Global Market Share */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Global Renewable Energy Share</h2>
              <p className="text-lg text-gray-600 mb-8">China's dominance in global renewable energy capacity</p>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={globalShareData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {globalShareData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Growth</h2>
              <p className="text-lg text-gray-600 mb-8">Annual renewable energy investment (Billion USD)</p>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={investmentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="investment" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Generation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Renewable Energy Generation</h2>
            <p className="text-lg text-gray-600">Annual electricity generation by renewable sources (TWh)</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={generationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Solar" fill="#F59E0B" />
                <Bar dataKey="Wind" fill="#3B82F6" />
                <Bar dataKey="Hydro" fill="#06B6D4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* 2030 Targets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2030 Renewable Energy Targets</h2>
            <p className="text-lg text-gray-600">Progress towards China's 2030 renewable energy goals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targets2030.map((target, index) => {
              const progress = (target.current / target.target) * 100
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{target.category}</h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Current: {target.current} {target.unit}</span>
                      <span>Target: {target.target} {target.unit}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-green-600">{progress.toFixed(1)}%</span>
                    <div className="text-sm text-gray-600">Progress</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="h-16 w-16 text-green-200 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Looking Ahead: 2030 & Beyond</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            China's ambitious renewable energy targets and carbon neutrality goals 
            will continue to drive unprecedented growth in clean energy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-200 mb-2">3,000 GW</div>
              <div className="text-green-100">Renewable capacity by 2030</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-200 mb-2">25%</div>
              <div className="text-green-100">Non-fossil energy share</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-200 mb-2">2060</div>
              <div className="text-green-100">Carbon neutrality target</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Statistics