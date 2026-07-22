import React from 'react'
import { Hero } from '@/components/home/Hero'
import { Bestsellers } from '@/components/home/Bestsellers'
import { CategoryTiles } from '@/components/home/CategoryTiles'
import { UGCGrid } from '@/components/home/UGCGrid'
import { BrandStory } from '@/components/home/BrandStory'
import { Testimonials } from '@/components/home/Testimonials'
import { Newsletter } from '@/components/home/Newsletter'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Bestsellers />
      <CategoryTiles />
      <UGCGrid />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
