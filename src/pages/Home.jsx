import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import HomeHero from '@/components/home/HomeHero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HomeHero />

      {/* Trust Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-lg font-medium">Years of Innovation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1,200+</div>
              <div className="text-lg font-medium">Machines Installed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-lg font-medium">Global Partners</div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Why Us Section */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 id="why-us-title" className="text-3xl font-extrabold text-primary sm:text-4xl">
                Engineering Excellence in Every Fold
              </h2>
              <p id="why-us-desc" className="mt-4 text-lg text-muted-foreground">
                Artitect Machinery is dedicated to pushing the boundaries of what's possible in sheet metal fabrication. Our machines are built with precision components and user-friendly software.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Advanced CNC Control Systems',
                  'Heavy-duty Rigid Construction',
                  'Low Maintenance Modular Design',
                  'User-friendly Touch Interface'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent shrink-0 mr-3" />
                    <span className="text-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button className="bg-primary text-primary-foreground">
                  Our Engineering Process
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              <div className="rounded-lg shadow-xl overflow-hidden aspect-video">
                <img
                  data-strk-img-id="industrial-metal-factory"
                  data-strk-img="[why-us-desc] [why-us-title] modern clean industrial factory machinery"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  className="w-full h-full object-cover"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  alt="Industrial Metal Factory"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 items-center">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block italic text-accent">Ready to upgrade?</span>
                  <span className="block">Contact our experts today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-primary-foreground/80">
                  Join the elite group of manufacturers who rely on Artitect for their most challenging projects.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-secondary transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="relative -mt-6 aspect-video lg:aspect-auto h-full min-h-[300px]">
              <div
                data-strk-bg-id="cta-background-metal"
                data-strk-bg="abstract architectural metal texture detail"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1000"
                className="absolute inset-0 w-full h-full bg-cover bg-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
