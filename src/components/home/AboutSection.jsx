import React from 'react'
import { Award, Star, Users, Heart } from 'lucide-react'

const AboutSection = () => {
  const instructors = [
    {
      name: 'Sarah Mitchell',
      title: 'Head Instructor & Founder',
      experience: '15+ years',
      specialties: ['Dressage', 'Show Jumping', 'Beginner Training'],
      certifications: ['ARIA Level 3', 'Pony Club Instructor', 'First Aid Certified'],
      bio: 'Sarah founded Meadowbrook Equestrian Center with a passion for creating confident, skilled riders. Her patient teaching style and deep knowledge make her beloved by students of all ages.',
      image: 'sarah-mitchell'
    },
    {
      name: 'Marcus Thompson',
      title: 'Senior Instructor',
      experience: '12+ years',
      specialties: ['Trail Riding', 'Western Style', 'Youth Programs'],
      certifications: ['CHA Certified', 'Trail Guide Certified', 'Youth Safety Specialist'],
      bio: 'Marcus brings enthusiasm and expertise to every lesson. His background in competitive riding and natural horsemanship creates well-rounded, confident riders.',
      image: 'marcus-thompson'
    },
    {
      name: 'Emma Rodriguez',
      title: 'Jumping Specialist',
      experience: '10+ years',
      specialties: ['Show Jumping', 'Cross Country', 'Competition Prep'],
      certifications: ['USEA Instructor', 'Show Jumping Coach', 'Competition Judge'],
      bio: 'Emma competed nationally before transitioning to teaching. She helps riders achieve their competitive goals while maintaining the joy and partnership with their horses.',
      image: 'emma-rodriguez'
    }
  ]

  const stats = [
    { number: '500+', label: 'Students Trained', icon: Users },
    { number: '15', label: 'Years Experience', icon: Award },
    { number: '25', label: 'Trained Horses', icon: Heart },
    { number: '98%', label: 'Student Satisfaction', icon: Star }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Meadowbrook Equestrian Center
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For over 15 years, we've been dedicated to providing exceptional equestrian education 
            in a safe, supportive environment. Our experienced instructors and well-trained horses 
            create the perfect setting for riders to develop their skills and build lasting 
            relationships with these magnificent animals.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Meadowbrook Equestrian Center was born from a simple belief: that the bond between 
                  horse and rider is one of life's most rewarding experiences. Founded in 2009 by 
                  Sarah Mitchell, our center has grown from a small riding school to a premier 
                  equestrian facility.
                </p>
                <p>
                  We pride ourselves on our holistic approach to riding instruction, emphasizing 
                  not just technical skills but also horsemanship, safety, and the deep respect 
                  for these incredible animals. Our students don't just learn to ride – they 
                  become true horsemen and horsewomen.
                </p>
                <p>
                  Today, we continue to uphold our founding principles while embracing modern 
                  training techniques and safety standards. Every lesson is an opportunity to 
                  build confidence, develop skills, and create lasting memories.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 mx-auto mb-4 bg-green-200 rounded-full flex items-center justify-center">
                    <Heart className="w-12 h-12 text-green-600" />
                  </div>
                  <p className="text-lg font-medium">Our Beautiful Facility</p>
                  <p className="text-sm">Where passion meets excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructors Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Instructors
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certified instructors bring decades of combined experience and a passion 
              for teaching that makes every lesson engaging and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                {/* Instructor Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-20 h-20 mx-auto mb-3 bg-green-200 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-green-600" />
                    </div>
                    <p className="text-sm font-medium">{instructor.name}</p>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h4>
                  <p className="text-green-600 font-semibold mb-2">{instructor.title}</p>
                  <p className="text-sm text-gray-600">{instructor.experience} experience</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {instructor.bio}
                </p>

                {/* Specialties */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2 text-sm">Specialties:</h5>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2 text-sm">Certifications:</h5>
                  <ul className="space-y-1">
                    {instructor.certifications.map((cert, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20 bg-green-50 rounded-2xl p-8 md:p-12 border border-green-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Meadowbrook Equestrian Center.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Safety First',
                description: 'Every lesson prioritizes the safety of both rider and horse through proper equipment and techniques.',
                icon: '🛡️'
              },
              {
                title: 'Patient Teaching',
                description: 'We believe every student learns at their own pace and deserves individualized attention.',
                icon: '🤝'
              },
              {
                title: 'Horse Welfare',
                description: 'Our horses are partners, not tools. Their health and happiness come first.',
                icon: '❤️'
              },
              {
                title: 'Lifelong Learning',
                description: 'Riding is a journey of continuous improvement for both students and instructors.',
                icon: '📚'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection