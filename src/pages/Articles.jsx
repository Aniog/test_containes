import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { Calendar, User, Clock, Tag, Search, ArrowRight, Heart, Share2 } from 'lucide-react'

function Articles() {
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'safety', name: 'Safety' },
    { id: 'training', name: 'Training' },
    { id: 'gear', name: 'Gear Reviews' },
    { id: 'trails', name: 'Trail Guides' },
    { id: 'news', name: 'Cycling News' }
  ]

  const articles = [
    {
      id: 1,
      title: "Essential Bike Maintenance: 10 Things Every Cyclist Should Know",
      excerpt: "Keep your bike running smoothly with these essential maintenance tips that will extend your bike's life and improve your riding experience.",
      content: `Regular bike maintenance is crucial for safety, performance, and longevity. Here are the 10 most important maintenance tasks every cyclist should master:

**1. Check Tire Pressure Weekly**
Proper tire pressure improves efficiency and prevents flats. Check your tire sidewall for recommended PSI and use a quality gauge.

**2. Clean and Lubricate Your Chain**
A clean, well-lubricated chain shifts better and lasts longer. Clean every 100-150 miles and lubricate after cleaning.

**3. Inspect Brake Pads Regularly**
Worn brake pads are dangerous. Check for wear indicators and replace when the grooves disappear.

**4. Keep Your Bike Clean**
Regular washing prevents corrosion and helps you spot potential issues early. Use bike-specific cleaners.

**5. Check Bolt Tightness**
Vibration can loosen bolts over time. Check stem, seat post, and wheel quick-releases regularly.

**6. Monitor Cable Condition**
Frayed or stretched cables affect shifting and braking. Replace cables annually or when performance degrades.

**7. Inspect Tires for Wear**
Look for cuts, embedded debris, and tread wear. Replace tires before they become unsafe.

**8. Adjust Derailleurs**
Proper derailleur adjustment ensures smooth shifting. Learn basic adjustments or visit a professional.

**9. Check Wheel Trueness**
Wobbly wheels affect handling and can damage brake pads. Have wheels trued when necessary.

**10. Professional Tune-ups**
Even with regular maintenance, annual professional tune-ups catch issues you might miss.`,
      author: "Mike Thompson",
      date: "2024-05-15",
      readTime: "8 min read",
      category: "maintenance",
      tags: ["maintenance", "beginner", "safety"],
      featured: true,
      imgId: "article-maintenance-a1b2c3"
    },
    {
      id: 2,
      title: "Cycling Safety: How to Stay Visible and Protected on the Road",
      excerpt: "Learn essential safety strategies to protect yourself while cycling, from proper gear to road positioning and defensive riding techniques.",
      content: `Road cycling safety requires preparation, awareness, and the right equipment. Here's your complete guide to staying safe:

**Visibility is Everything**
- Wear bright, reflective clothing during the day
- Use front and rear lights even in daylight
- Consider reflective tape on your bike and helmet
- Make eye contact with drivers when possible

**Proper Road Positioning**
- Ride predictably in a straight line
- Take the lane when necessary for safety
- Stay out of the door zone near parked cars
- Use bike lanes when available and safe

**Essential Safety Gear**
- Always wear a properly fitted helmet
- Use gloves for better grip and protection
- Wear appropriate eyewear
- Consider knee and elbow pads for mountain biking

**Defensive Riding Techniques**
- Assume drivers don't see you
- Signal your intentions clearly
- Scan constantly for hazards
- Maintain escape routes
- Follow traffic laws

**Weather Considerations**
- Reduce speed in wet conditions
- Increase following distance
- Use appropriate tires for conditions
- Dress for visibility in low light

Remember: The best safety equipment is your brain. Stay alert, ride predictably, and always be prepared to react to unexpected situations.`,
      author: "Sarah Kim",
      date: "2024-05-10",
      readTime: "6 min read",
      category: "safety",
      tags: ["safety", "road cycling", "gear"],
      featured: false,
      imgId: "article-safety-d4e5f6"
    },
    {
      id: 3,
      title: "Building Endurance: A Beginner's Guide to Long-Distance Cycling",
      excerpt: "Transform from casual rider to endurance cyclist with this comprehensive training plan designed for beginners looking to tackle longer distances.",
      content: `Building cycling endurance takes time, patience, and a structured approach. Here's how to safely increase your distance:

**Start with a Base**
Begin with comfortable distances you can complete without strain. This might be 10-15 miles for beginners.

**The 10% Rule**
Increase your weekly mileage by no more than 10% each week to avoid overuse injuries.

**Mix Your Training**
- **Base Miles**: 70% of training at comfortable pace
- **Tempo Rides**: 20% at moderate intensity
- **Intervals**: 10% at high intensity

**Nutrition and Hydration**
- Eat before you're hungry
- Drink before you're thirsty
- Practice nutrition strategies during training
- Learn what foods work for your body

**Recovery is Key**
- Include rest days in your schedule
- Get adequate sleep (7-9 hours)
- Listen to your body
- Consider massage or stretching

**Sample 12-Week Progression**
- Weeks 1-4: Build base fitness
- Weeks 5-8: Add tempo work
- Weeks 9-12: Include longer rides

**Mental Strategies**
- Set small, achievable goals
- Find riding partners or groups
- Vary your routes to stay motivated
- Celebrate progress milestones

Remember: Consistency beats intensity. Regular, moderate training will build endurance more effectively than sporadic hard efforts.`,
      author: "Alex Rodriguez",
      date: "2024-05-05",
      readTime: "10 min read",
      category: "training",
      tags: ["training", "endurance", "beginner"],
      featured: true,
      imgId: "article-training-g7h8i9"
    },
    {
      id: 4,
      title: "2024 Electric Bike Buyer's Guide: Finding Your Perfect E-Bike",
      excerpt: "Navigate the growing e-bike market with our comprehensive guide covering everything from motor types to battery life and legal considerations.",
      content: `Electric bikes have revolutionized cycling, making it accessible to more people than ever. Here's everything you need to know:

**Types of E-Bikes**
- **Class 1**: Pedal-assist only, up to 20 mph
- **Class 2**: Throttle-assisted, up to 20 mph  
- **Class 3**: Pedal-assist up to 28 mph
- **Off-road**: Higher power for trails

**Motor Placement**
- **Hub Motors**: Quiet, low maintenance, good for commuting
- **Mid-Drive**: Better balance, more natural feel, better for hills

**Battery Considerations**
- Range varies from 20-100+ miles
- Removable batteries offer charging flexibility
- Consider your typical ride distance
- Battery replacement costs

**Key Features to Consider**
- Display quality and information provided
- Integrated lights and fenders
- Cargo capacity and racks
- Suspension for comfort
- Security features

**Legal Considerations**
- Check local e-bike laws
- Some areas require registration
- Age restrictions may apply
- Helmet requirements vary

**Top Recommendations by Use**
- **Commuting**: Look for fenders, lights, cargo capacity
- **Recreation**: Comfort features, good range
- **Off-road**: Robust construction, powerful motor
- **Cargo**: High weight capacity, stable handling

**Maintenance Differences**
E-bikes require similar maintenance to regular bikes, plus:
- Battery care and storage
- Electrical system checks
- Software updates
- Motor servicing

Budget $1,500-$5,000+ depending on features and quality. Test ride multiple models to find your perfect match!`,
      author: "Lisa Chen",
      date: "2024-04-28",
      readTime: "12 min read",
      category: "gear",
      tags: ["e-bikes", "buying guide", "technology"],
      featured: false,
      imgId: "article-ebike-j1k2l3"
    },
    {
      id: 5,
      title: "Top 5 Mountain Bike Trails Near Cycling City",
      excerpt: "Discover the best mountain biking trails in our area, from beginner-friendly paths to challenging single-track adventures for experienced riders.",
      content: `Cycling City offers incredible mountain biking opportunities. Here are our top 5 trail recommendations:

**1. Riverside Loop Trail**
- **Difficulty**: Beginner
- **Distance**: 8 miles
- **Features**: Scenic river views, minimal elevation
- **Best for**: Families, new mountain bikers
- **Trailhead**: Riverside Park, free parking

**2. Pine Ridge Single Track**
- **Difficulty**: Intermediate
- **Distance**: 12 miles
- **Features**: Technical sections, moderate climbs
- **Best for**: Skill building, weekend warriors
- **Trailhead**: Pine Ridge Visitor Center

**3. Devil's Backbone**
- **Difficulty**: Advanced
- **Distance**: 15 miles
- **Features**: Steep climbs, rocky descents, exposure
- **Best for**: Experienced riders seeking challenge
- **Trailhead**: Mountain View parking area

**4. Forest Loop Network**
- **Difficulty**: Beginner to Intermediate
- **Distance**: 5-20 miles (multiple loops)
- **Features**: Varied terrain, customizable distance
- **Best for**: All skill levels, group rides
- **Trailhead**: Forest Service Road 42

**5. Summit Challenge**
- **Difficulty**: Expert
- **Distance**: 18 miles
- **Features**: 3,000 ft elevation gain, technical descents
- **Best for**: Serious mountain bikers, training
- **Trailhead**: Summit Trailhead (permit required)

**Trail Etiquette Reminders**
- Yield to hikers and horses
- Stay on designated trails
- Pack out all trash
- Respect wildlife and vegetation
- Check trail conditions before riding

**What to Bring**
- Plenty of water (more than you think you need)
- Basic repair kit and pump
- First aid supplies
- Trail map or GPS device
- Emergency contact information

**Best Times to Ride**
- Spring: Wildflowers, mild temperatures
- Summer: Early morning to avoid heat
- Fall: Beautiful colors, perfect weather
- Winter: Check for closures, dress warmly

Always check current trail conditions and weather before heading out. Consider joining local mountain bike groups for guided rides and trail maintenance opportunities!`,
      author: "Mike Thompson",
      date: "2024-04-20",
      readTime: "7 min read",
      category: "trails",
      tags: ["mountain biking", "local trails", "guide"],
      featured: false,
      imgId: "article-trails-m4n5o6"
    },
    {
      id: 6,
      title: "Bike Commuting 101: Making the Switch from Car to Bike",
      excerpt: "Everything you need to know about bike commuting, from route planning and gear selection to staying motivated through all seasons.",
      content: `Making the switch to bike commuting can transform your daily routine and improve your health. Here's how to get started:

**Planning Your Route**
- Use bike-specific mapping apps
- Scout your route on weekends first
- Look for bike lanes and quieter streets
- Identify safe places to stop if needed
- Plan alternative routes for variety

**Essential Commuting Gear**
- **Bike**: Hybrid or commuter bike works best
- **Helmet**: Non-negotiable for safety
- **Lights**: Front white, rear red, always
- **Lock**: Invest in quality security
- **Panniers or backpack**: Carry work items
- **Fenders**: Keep you clean and dry
- **Repair kit**: Basic tools and spare tube

**Clothing Strategies**
- Dress for the destination, not the ride
- Layer for temperature changes
- Keep spare clothes at work
- Consider moisture-wicking fabrics
- Waterproof jacket for rain

**Seasonal Considerations**
- **Spring**: Watch for road debris, potholes
- **Summer**: Start early, stay hydrated
- **Fall**: Be visible in shorter daylight
- **Winter**: Dress warmly, consider studded tires

**Building the Habit**
- Start with 1-2 days per week
- Track your progress and savings
- Find a bike commuting buddy
- Join local cycling groups
- Celebrate milestones

**Overcoming Common Concerns**
- **Safety**: Choose safe routes, be visible
- **Weather**: Proper gear makes most days rideable
- **Sweat**: Pace yourself, shower at work if possible
- **Time**: Often faster than driving in traffic
- **Storage**: Secure bike parking is essential

**Benefits You'll Experience**
- Improved fitness and energy
- Money saved on gas and parking
- Reduced stress from traffic
- Environmental impact
- Better sleep and mood

**Making It Work**
- Keep backup transportation options
- Maintain your bike regularly
- Build relationships with local bike shops
- Stay flexible with your schedule
- Focus on the positive aspects

Start small, be consistent, and soon bike commuting will become your favorite part of the day!`,
      author: "Sarah Kim",
      date: "2024-04-15",
      readTime: "9 min read",
      category: "training",
      tags: ["commuting", "lifestyle", "beginner"],
      featured: false,
      imgId: "article-commuting-p7q8r9"
    },
    {
      id: 7,
      title: "Breaking News: New Bike Lane Network Approved for Downtown",
      excerpt: "City council unanimously approves $2.3M investment in protected bike lanes, connecting major destinations and improving cyclist safety.",
      content: `In a landmark decision for cycling infrastructure, the Cycling City Council unanimously approved a comprehensive bike lane network for downtown, marking the largest investment in cycling infrastructure in the city's history.

**Project Overview**
The $2.3 million project will create 15 miles of protected bike lanes connecting:
- Downtown business district
- University campus
- Riverside Park
- Transit stations
- Major residential areas

**Key Features**
- **Protected lanes**: Physical barriers separate cyclists from traffic
- **Smart signals**: Bike-specific traffic lights at major intersections
- **Secure parking**: 200 new bike parking spaces
- **Maintenance**: Dedicated snow removal and cleaning
- **Wayfinding**: Clear signage and route markers

**Timeline**
- **Phase 1**: Main Street corridor (Summer 2024)
- **Phase 2**: University connection (Fall 2024)
- **Phase 3**: Riverside extension (Spring 2025)
- **Completion**: All phases finished by June 2025

**Community Impact**
Mayor Johnson stated: "This investment demonstrates our commitment to sustainable transportation and improving quality of life for all residents."

**Expected Benefits**
- 40% reduction in cycling accidents
- 25% increase in bike commuting
- Improved air quality downtown
- Economic boost for local businesses
- Enhanced connectivity for residents

**Public Input**
The project incorporated feedback from:
- 500+ community survey responses
- 12 public meetings
- Local cycling advocacy groups
- Business owner consultations
- Traffic safety experts

**Funding Sources**
- Federal transportation grants: $1.4M
- State infrastructure funds: $600K
- City budget allocation: $300K

**What This Means for Cyclists**
- Safer commuting routes
- Better connectivity across the city
- Increased legitimacy of cycling as transportation
- More people likely to try bike commuting

**Next Steps**
- Final design review (May 2024)
- Contractor selection (June 2024)
- Construction begins (July 2024)
- Community updates throughout process

This represents a major victory for cycling advocates who have pushed for better infrastructure for over a decade. The project is expected to serve as a model for other cities considering similar investments.

Stay tuned for construction updates and ways to get involved in the implementation process!`,
      author: "Alex Rodriguez",
      date: "2024-04-10",
      readTime: "5 min read",
      category: "news",
      tags: ["infrastructure", "local news", "advocacy"],
      featured: true,
      imgId: "article-news-s1t2u3"
    }
  ]

  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory
    const searchMatch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return categoryMatch && searchMatch
  })

  const featuredArticles = articles.filter(article => article.featured)

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Cycling Articles & Tips
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover expert advice, maintenance tips, trail guides, and the latest cycling news 
              to enhance your riding experience and keep you informed about the cycling world.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex items-center">
              <Search className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold text-gray-900">Find Articles:</span>
            </div>
            
            <div className="flex flex-wrap gap-4 flex-1">
              <div className="flex-1 min-w-64">
                <input
                  type="text"
                  placeholder="Search articles, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-gray-600">
              Showing {filteredArticles.length} of {articles.length} articles
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'all' && searchTerm === '' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
              <p className="text-lg text-gray-700">Our most popular and essential cycling content</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    data-strk-img-id={article.imgId}
                    data-strk-img={`${article.excerpt} ${article.title}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                        Featured
                      </span>
                      <span className="text-sm text-gray-600 capitalize">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  data-strk-img-id={article.imgId}
                  data-strk-img={`${article.excerpt} ${article.title}`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 capitalize">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    {article.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Read More
                    </button>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Cycling Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles, maintenance tips, and cycling news delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Articles