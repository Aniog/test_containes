import { Building2, Target, Lightbulb, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Crafting Precision Since Day One
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ARTITECT MACHINERY has been at the forefront of metal folding technology, delivering innovative solutions to manufacturers worldwide.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with a vision to revolutionize metal fabrication, ARTITECT MACHINERY has grown from a small workshop into a global leader in sheet metal folding solutions. Our journey is driven by an unwavering commitment to precision, innovation, and customer success.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every machine we build reflects decades of engineering expertise, combining traditional craftsmanship with cutting-edge technology. From double folding machines to advanced CNC-controlled systems, our products are trusted by manufacturers across industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Building2 className="text-yellow-500" size={20} />
                <span className="font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Target className="text-yellow-500" size={20} />
                <span className="font-medium">50+ Countries</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden">
              <img
                data-strk-img-id="about-factory-9u0v1w"
                data-strk-img="[about-title] [about-subtitle]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY Factory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-5">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3">Innovation</h4>
            <p className="text-gray-600">
              We continuously invest in research and development to bring the latest technology and features to our machines, ensuring our customers stay ahead of the competition.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-5">
              <Target className="text-white" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3">Precision</h4>
            <p className="text-gray-600">
              Every component is manufactured to exacting standards, ensuring consistent performance and accuracy that meets the most demanding industry requirements.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-5">
              <Heart className="text-white" size={24} />
            </div>
            <h4 className="text-xl font-bold mb-3">Partnership</h4>
            <p className="text-gray-600">
              We build lasting relationships with our customers, providing comprehensive support from initial consultation through installation and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}