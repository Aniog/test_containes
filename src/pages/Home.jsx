import React from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config'
import HomeHero from '@/components/home/HomeHero'
import ProductCard from '@/components/products/ProductCard'
import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data: response } = await client
          .from('Products')
          .select('*')
          .limit(3)
        
        if (response?.data?.list) {
          setFeaturedProducts(response.data.list)
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    if (featuredProducts.length > 0) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [featuredProducts])

  return (
    <div ref={containerRef}>
      <HomeHero />
      
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Machinery</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Discover our most popular folding solutions, engineered for precision and durability.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 id="about-title" className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose ARTITECT?</h2>
              <div className="mt-8 space-y-6">
                {[
                  { title: "Precision Engineering", desc: "Every component is crafted with micron-level accuracy." },
                  { title: "User-Friendly Design", desc: "Intuitive controls that reduce training time and operator fatigue." },
                  { title: "Global Support", desc: "Dedicated maintenance and parts support available worldwide." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <span className="font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                data-strk-bg-id="about-bg-123"
                data-strk-bg="[about-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1000"
                className="aspect-4/3 rounded-xl bg-muted object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
