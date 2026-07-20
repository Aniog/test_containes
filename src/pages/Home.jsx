import React from 'react'
import { Hero } from '@/components/home/Hero'
import { TrustBar } from '@/components/home/TrustBar'
import { Bestsellers } from '@/components/home/Bestsellers'
import { UgcReel } from '@/components/home/UgcReel'
import { Categories } from '@/components/home/Categories'
import { BrandStory } from '@/components/home/BrandStory'
import { Testimonials } from '@/components/home/Testimonials'
import { Newsletter } from '@/components/home/Newsletter'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <Categories />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
