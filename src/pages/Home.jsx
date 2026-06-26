import React from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Process from '../components/home/Process'
import Products from '../components/home/Products'
import Problems from '../components/home/Problems'
import Trust from '../components/home/Trust'
import CaseStudies from '../components/home/CaseStudies'
import FAQ from '../components/home/FAQ'
import InquirySection from '../components/home/InquirySection'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudies limit={3} />
      <FAQ />
      <InquirySection />
    </>
  )
}
