import React from 'react'
import { Clock, Users, Award, Heart } from 'lucide-react'

const ServicesSection = ({ onBookLesson }) => {
  const services = [
    {
      id: 'beginner',
      title: 'Beginner Lessons',
      description: 'Perfect for first-time riders. Learn basic horsemanship, safety, and fundamental riding skills in a supportive environment.',
      duration: '60 minutes',
      groupSize: '1-4 riders',
      price: '$75',
      features: ['Safety fundamentals', 'Basic riding position', 'Horse care basics', 'Confidence building'],
      icon: Heart,
      color: 'green'
    },
    {
      id: 'intermediate',
      title: 'Intermediate Training',
      description: 'Build on your foundation with advanced techniques, jumping preparation, and improved riding skills.',
      duration: '75 minutes',
      groupSize: '1-3 riders',
      price: '$95',
      features: ['Advanced techniques', 'Jumping basics', 'Trail preparation', 'Riding refinement'],
      icon: Users,
      color: 'blue'
    },
    {
      id: 'advanced',
      title: 'Advanced Coaching',
      description: 'Specialized training for experienced riders focusing on competition preparation and advanced disciplines.',
      duration: '90 minutes',
      groupSize: '1-2 riders',
      price: '$125',
      features: ['Competition prep', 'Advanced jumping', 'Dressage training', 'Show techniques'],
      icon: Award,
      color: 'purple'
    },
    {
      id: 'specialized',
      title: 'Specialized Programs',
      description: 'Tailored programs including dressage, jumping, trail riding, and therapeutic riding sessions.',
      duration: 'Varies',
      groupSize: 'Custom',
      price: 'From $100',
      features: ['Dressage training', 'Show jumping', 'Trail adventures', 'Therapeutic riding'],
      icon: Clock,
      color: 'orange'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'bg-green-100 text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        accent: 'text-green-600'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'bg-blue-100 text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        accent: 'text-blue-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'bg-purple-100 text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        accent: 'text-purple-600'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'bg-orange-100 text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        accent: 'text-orange-600'
      }
    }
    return colors[color] || colors.green
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Riding Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're taking your first steps in the saddle or preparing for competition, 
            we have the perfect program to match your goals and experience level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => {
            const colors = getColorClasses(service.color)
            const IconComponent = service.icon
            
            return (
              <div
                key={service.id}
                className={`${colors.bg} ${colors.border} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`${colors.icon} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{service.groupSize}</span>
                  </div>
                  <div className={`text-2xl font-bold ${colors.accent}`}>
                    {service.price}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onBookLesson(service.id)}
                  className={`w-full ${colors.button} text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200`}
                >
                  Book Now
                </button>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which program is right for you?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our experienced instructors will help you choose the perfect program based on your 
            experience level, goals, and comfort. We offer free consultations to ensure you 
            get the most out of your riding experience.
          </p>
          <button
            onClick={() => onBookLesson('consultation')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection