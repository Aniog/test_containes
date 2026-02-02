import React, { useState } from 'react'
import { Clock, Users, Star, DollarSign, Calendar, Award } from 'lucide-react'

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      service_name: "Beginner Riding Lessons",
      description: "Perfect introduction to horseback riding. Learn basic horsemanship, safety, and fundamental riding skills in a supportive environment.",
      price: 75,
      duration: "1 hour",
      skill_level: "Beginner",
      age_group: "All Ages",
      is_available: true,
      instructor: "Sarah Mitchell",
      max_participants: 4,
      category: "lessons"
    },
    {
      id: 2,
      service_name: "Intermediate Riding Lessons",
      description: "Build on your foundation with more advanced techniques including trotting, cantering, and basic jumping skills.",
      price: 95,
      duration: "1 hour",
      skill_level: "Intermediate",
      age_group: "Ages 12+",
      is_available: true,
      instructor: "Michael Rodriguez",
      max_participants: 3,
      category: "lessons"
    },
    {
      id: 3,
      service_name: "Advanced Competition Training",
      description: "Intensive training for competitive riders. Focus on dressage, show jumping, and cross-country preparation.",
      price: 120,
      duration: "1.5 hours",
      skill_level: "Advanced",
      age_group: "Ages 16+",
      is_available: true,
      instructor: "Emma Thompson",
      max_participants: 2,
      category: "training"
    },
    {
      id: 4,
      service_name: "Children's Pony Rides",
      description: "Gentle introduction to horses for young children. Safe, supervised pony rides with basic horse interaction.",
      price: 45,
      duration: "30 minutes",
      skill_level: "Beginner",
      age_group: "Ages 3-8",
      is_available: true,
      instructor: "Lisa Chen",
      max_participants: 6,
      category: "kids"
    },
    {
      id: 5,
      service_name: "Summer Horse Camp",
      description: "Week-long immersive program combining riding lessons, horse care, stable management, and fun activities.",
      price: 450,
      duration: "5 days",
      skill_level: "All Levels",
      age_group: "Ages 8-16",
      is_available: true,
      instructor: "Multiple Instructors",
      max_participants: 12,
      category: "camps"
    },
    {
      id: 6,
      service_name: "Adult Beginner Program",
      description: "Specially designed for adult beginners who want to learn riding in a comfortable, age-appropriate environment.",
      price: 85,
      duration: "1 hour",
      skill_level: "Beginner",
      age_group: "Adults 18+",
      is_available: true,
      instructor: "David Wilson",
      max_participants: 4,
      category: "lessons"
    },
    {
      id: 7,
      service_name: "Trail Riding Experience",
      description: "Scenic trail rides through beautiful countryside. Perfect for intermediate riders looking for adventure.",
      price: 110,
      duration: "2 hours",
      skill_level: "Intermediate",
      age_group: "Ages 14+",
      is_available: true,
      instructor: "Jessica Parker",
      max_participants: 8,
      category: "experiences"
    },
    {
      id: 8,
      service_name: "Horse Care Workshop",
      description: "Learn essential horse care skills including grooming, feeding, basic health checks, and stable management.",
      price: 65,
      duration: "2 hours",
      skill_level: "All Levels",
      age_group: "Ages 10+",
      is_available: true,
      instructor: "Robert Johnson",
      max_participants: 10,
      category: "workshops"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'lessons', name: 'Riding Lessons' },
    { id: 'training', name: 'Competition Training' },
    { id: 'kids', name: 'Children\'s Programs' },
    { id: 'camps', name: 'Camps' },
    { id: 'experiences', name: 'Trail Experiences' },
    { id: 'workshops', name: 'Workshops' }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const getSkillLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-blue-100 text-blue-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services & Programs</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Discover our comprehensive range of equestrian programs designed for riders of all ages and skill levels. 
            From your first lesson to competitive training, we have the perfect program for you.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                      {service.service_name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSkillLevelColor(service.skill_level)}`}>
                      {service.skill_level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-700">
                      <DollarSign className="w-4 h-4 text-amber-600 mr-2" />
                      <span className="font-semibold">${service.price}</span>
                      {service.duration.includes('day') ? ' per week' : ' per session'}
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-700">
                      <Clock className="w-4 h-4 text-amber-600 mr-2" />
                      <span>{service.duration}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-700">
                      <Users className="w-4 h-4 text-amber-600 mr-2" />
                      <span>Max {service.max_participants} participants</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-700">
                      <Calendar className="w-4 h-4 text-amber-600 mr-2" />
                      <span>{service.age_group}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-700">
                      <Award className="w-4 h-4 text-amber-600 mr-2" />
                      <span>Instructor: {service.instructor}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                      Book Now
                    </button>
                    <button className="px-4 py-2 border border-amber-600 text-amber-600 rounded-lg font-medium hover:bg-amber-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Equestrian Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to schedule your first lesson or learn more about our programs. 
            Our experienced instructors are here to help you achieve your riding goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services