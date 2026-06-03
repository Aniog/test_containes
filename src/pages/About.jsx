import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { Users, Award, Heart, Target, Clock, MapPin } from 'lucide-react'

function About() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "Professional cyclist turned entrepreneur with 15+ years in the industry.",
      imgId: "team-alex-g1h2i3"
    },
    {
      id: 2,
      name: "Sarah Kim",
      role: "Head of Sales",
      bio: "Bike enthusiast who helps customers find their perfect ride every day.",
      imgId: "team-sarah-j4k5l6"
    },
    {
      id: 3,
      name: "Mike Thompson",
      role: "Master Mechanic",
      bio: "20 years of experience keeping bikes running smoothly and safely.",
      imgId: "team-mike-m7n8o9"
    },
    {
      id: 4,
      name: "Lisa Chen",
      role: "Customer Experience",
      bio: "Dedicated to ensuring every customer has an amazing CycleLife experience.",
      imgId: "team-lisa-p1q2r3"
    }
  ]

  const milestones = [
    {
      year: "2004",
      title: "CycleLife Founded",
      description: "Started as a small bike repair shop with a passion for cycling."
    },
    {
      year: "2008",
      title: "First Retail Location",
      description: "Opened our flagship store and began selling premium bikes."
    },
    {
      year: "2012",
      title: "Online Expansion",
      description: "Launched our e-commerce platform to serve customers nationwide."
    },
    {
      year: "2016",
      title: "Service Center",
      description: "Opened our state-of-the-art service and repair facility."
    },
    {
      year: "2020",
      title: "Community Programs",
      description: "Launched bike safety education and community cycling programs."
    },
    {
      year: "2024",
      title: "Sustainability Initiative",
      description: "Committed to carbon-neutral operations and eco-friendly practices."
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About CycleLife
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              For over 20 years, we've been passionate about connecting people with the perfect bike for their journey. 
              From weekend warriors to daily commuters, we're here to fuel your cycling adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="story-title" className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p id="story-content" className="text-lg text-gray-700 mb-6">
                CycleLife began in 2004 when founder Alex Rodriguez, a professional cyclist, noticed a gap in the market 
                for personalized bike fitting and expert advice. What started as a small repair shop has grown into a 
                trusted destination for cyclists of all levels.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that the right bike can transform not just your commute or weekend ride, but your entire 
                relationship with movement, adventure, and the world around you. That's why we take the time to understand 
                each customer's unique needs and goals.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to serve thousands of cyclists with premium bikes, expert service, and a commitment 
                to building a stronger cycling community.
              </p>
            </div>
            <div>
              <img
                data-strk-img-id="about-story-s4t5u6"
                data-strk-img="[story-content] [story-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="CycleLife store history"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These core values guide everything we do, from the bikes we select to the service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-700">
                We live and breathe cycling. Our genuine passion for bikes drives us to provide the best possible experience.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-700">
                We carefully curate our selection to include only the highest quality bikes and components.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-700">
                We're committed to building and supporting the local cycling community through events and education.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-700">
                Our team brings decades of combined experience to help you make the best decisions for your cycling needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-700">
              Two decades of growth, innovation, and serving the cycling community.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8"></div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our passionate team of cycling experts is here to help you find the perfect bike and keep it running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  data-strk-img-id={member.imgId}
                  data-strk-img={`${member.bio} ${member.role} ${member.name}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="location-title" className="text-4xl font-bold text-gray-900 mb-6">
                Visit Our Store
              </h2>
              <p id="location-desc" className="text-lg text-gray-700 mb-6">
                Located in the heart of Cycling City, our flagship store features the latest bikes, accessories, 
                and a full-service repair shop. Come test ride your next bike and meet our expert team.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700">123 Bike Street, Cycling City, CC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Store Hours</h3>
                    <div className="text-gray-700">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                data-strk-img-id="store-location-v7w8x9"
                data-strk-img="[location-desc] [location-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="CycleLife store exterior"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About