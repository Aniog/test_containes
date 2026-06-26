import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Wrench, Cog, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const heroRef = useRef(null)
  const featuresRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) {
      ImageHelper.loadImages(strkImgConfig, heroRef.current)
    }
    if (featuresRef.current) {
      ImageHelper.loadImages(strkImgConfig, featuresRef.current)
    }
  }, [])

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Precision Engineering',
      description: 'Our machines deliver unmatched accuracy for all your sheet metal folding needs.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Durable Construction',
      description: 'Built to last with high-quality materials and expert craftsmanship.',
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Advanced Technology',
      description: 'State-of-the-art features for enhanced productivity and ease of use.',
    },
  ]

  const products = [
    {
      id: 'double-folding-machine',
      name: 'Double Folding Machine',
      description: 'High-precision double folding capability for complex sheet metal work',
      image: 'double folding machine sheet metal',
    },
    {
      id: 'sheet-metal-folder',
      name: 'Sheet Metal Folder',
      description: 'Versatile folding solution for various thicknesses and materials',
      image: 'sheet metal folder machine',
    },
    {
      id: 'metal-folding-machine',
      name: 'Metal Folding Machine',
      description: 'Industrial-grade folding machine for heavy-duty applications',
      image: 'metal folding machine industrial',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            data-strk-bg-id="hero-bg-home"
            data-strk-bg="sheet metal machinery industrial manufacturing"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Precision in Every
              <span className="block text-blue-400">Fold</span>
            </h1>
            <p id="hero-subtitle" className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
              ARTITECT MACHINERY delivers industry-leading sheet metal folding solutions.
              Engineered for precision, built for durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition inline-flex items-center justify-center gap-2"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition inline-flex items-center justify-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose ARTITECT?
            </h2>
            <p id="features-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine decades of engineering expertise with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
              <p className="text-lg text-slate-600">Discover our range of precision folding machines</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              View All Products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={`product-${product.id}`}
                    data-strk-img={product.image}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 text-sm">{product.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 font-medium text-sm">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
            >
              View All Products
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Production?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact our team of experts today to discuss your specific requirements
            and find the perfect folding solution for your business.
          </p>
          <Link
            to="/contact"
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition inline-flex items-center gap-2"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}