import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Settings, Wrench, Cog } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Precision Engineering',
      description:
        'Our machines are built with micron-level precision for accurate and consistent folding results.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Durability Guaranteed',
      description:
        'Heavy-duty construction ensures years of reliable service in demanding industrial environments.',
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'Advanced Technology',
      description:
        'State-of-the-art control systems and automation features for enhanced productivity and ease of use.',
    },
  ]

  const products = [
    {
      id: 'double-folding-machine',
      name: 'Double Folding Machine',
      description:
        'High-precision double folding machine for complex sheet metal work.',
      image: 'double folding machine precision sheet metal',
    },
    {
      id: 'double-folder',
      name: 'Double Folder',
      description:
        'Versatile double folder for various thicknesses and materials.',
      image: 'double folder sheet metal bending',
    },
    {
      id: 'sheet-metal-folder',
      name: 'Sheet Metal Folder',
      description:
        'Professional sheet metal folder for all your folding needs.',
      image: 'sheet metal folder bending machine',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1
              id="hero-title"
              className="text-4xl md:text-6xl font-bold mb-6 font-display"
            >
              Precision Sheet Metal Folding Solutions
            </h1>
            <p
              id="hero-subtitle"
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              ARTITECT MACHINERY delivers industry-leading double folding
              machines and sheet metal folders built for accuracy, durability, and
              performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
              >
                View Our Products
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div
            className="w-full h-full"
            data-strk-bg-id="hero-bg-6d34fa"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="features-title"
              className="text-3xl md:text-4xl font-bold text-primary mb-4 font-display"
            >
              Why Choose ARTITECT MACHINERY
            </h2>
            <p
              id="features-subtitle"
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              We combine traditional craftsmanship with modern technology to
              deliver the best sheet metal folding solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-accent mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="products-title"
              className="text-3xl md:text-4xl font-bold text-primary mb-4 font-display"
            >
              Our Featured Products
            </h2>
            <p
              id="products-subtitle"
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover our range of precision sheet metal folding machines
              designed for professional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <img
                    alt={product.name}
                    data-strk-img-id={`product-${product.id}`}
                    data-strk-img={`[product-desc-${product.id}] [product-title-${product.id}] [products-subtitle] [products-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={`product-title-${product.id}`}
                    className="text-xl font-semibold text-primary mb-2"
                  >
                    {product.name}
                  </h3>
                  <p
                    id={`product-desc-${product.id}`}
                    className="text-gray-600 mb-4"
                  >
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="text-accent font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Ready to Upgrade Your Sheet Metal Folding?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact our team today to discuss your requirements and get a
            customized solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-accent text-white px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all"
            >
              Contact Us Today
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-primary transition-all"
            >
              Download Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
