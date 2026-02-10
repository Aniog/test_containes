import React from 'react'
import { BookOpen, Users, Award, Heart, Globe, Clock } from 'lucide-react'

const EducationalSection = () => {
  const topics = [
    {
      icon: BookOpen,
      title: 'Horse Anatomy & Physiology',
      description: 'Learn about the fascinating anatomy and physiology that makes horses such remarkable athletes.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Breeding & Genetics',
      description: 'Understand how selective breeding has created the diverse horse breeds we see today.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Horse Sports & Disciplines',
      description: 'Explore the various equestrian sports and how different breeds excel in different disciplines.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Horse Care & Welfare',
      description: 'Learn about proper horse care, nutrition, and welfare practices for healthy, happy horses.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Globe,
      title: 'Cultural Significance',
      description: 'Discover how horses have shaped human civilization and culture throughout history.',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Clock,
      title: 'Evolution & History',
      description: 'Trace the evolutionary journey of horses from ancient times to modern breeds.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const facts = [
    {
      number: '350',
      label: 'Horse Breeds Worldwide',
      description: 'From tiny Falabellas to massive Shires'
    },
    {
      number: '60M',
      label: 'Years of Evolution',
      description: 'From Eohippus to modern horses'
    },
    {
      number: '55 mph',
      label: 'Top Speed',
      description: 'Achieved by Thoroughbreds'
    },
    {
      number: '25-30',
      label: 'Average Lifespan',
      description: 'Years with proper care'
    }
  ]

  return (
    <section id="learn" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn About Horses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the world of horses with our comprehensive educational resources. 
            From anatomy to history, discover what makes these magnificent creatures so special.
          </p>
        </div>

        {/* Educational Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {topics.map((topic, index) => {
            const Icon = topic.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${topic.color} p-6 text-white`}>
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold">{topic.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                  <div className="mt-4">
                    <span className="text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-200">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fascinating Horse Facts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">
                  {fact.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {fact.label}
                </div>
                <div className="text-sm text-gray-600">
                  {fact.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Did You Know Section */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">Did You Know?</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 rounded-full p-2 flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Horses can sleep both lying down and standing up</h4>
                  <p className="text-gray-300 text-sm">They have a special locking mechanism in their legs that allows them to doze while standing.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 rounded-full p-2 flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">A horse's teeth never stop growing</h4>
                  <p className="text-gray-300 text-sm">That's why you can tell a horse's age by examining their teeth!</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 rounded-full p-2 flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Horses have excellent memories</h4>
                  <p className="text-gray-300 text-sm">They can remember human friends and complex routes even after years of separation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 rounded-full p-2 flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Horses can see almost 360 degrees</h4>
                  <p className="text-gray-300 text-sm">Their eyes are positioned on the sides of their heads, giving them an almost complete field of vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationalSection