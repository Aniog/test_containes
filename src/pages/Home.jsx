import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

import { HomeHero } from '../components/home/HomeHero'
import { TrustBar } from '../components/home/TrustBar'
import { Bestsellers } from '../components/home/Bestsellers'
import { UGCRow } from '../components/home/UGCRow'
import { Categories } from '../components/home/Categories'
import { StorySplit } from '../components/home/StorySplit'
import { Testimonials } from '../components/home/Testimonials'

export const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
        try {
            ImageHelper.loadImages(strkImgConfig, containerRef.current)
        } catch (e) {
            console.log('ImageHelper not initialized yet in dev mode')
        }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full">
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <Categories />
      <UGCRow />
      <StorySplit />
      <Testimonials />
    </div>
  )
}