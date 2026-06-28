import React from 'react'
import Layout from '../components/layout/Layout'
import HomeHero from '../components/home/HomeHero'
import FeaturesSection from '../components/home/FeaturesSection'
import ProductsSection from '../components/home/ProductsSection'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <Layout>
      <HomeHero />
      <FeaturesSection />
      <ProductsSection />
      <ContactSection />
    </Layout>
  )
}
