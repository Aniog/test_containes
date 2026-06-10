import { Hero } from '@/components/home/Hero'
import { Services } from '@/components/home/Services'
import { Process } from '@/components/home/Process'
import { Products } from '@/components/home/Products'
import { Problems } from '@/components/home/Problems'
import { Trust } from '@/components/home/Trust'
import { CaseStudies } from '@/components/home/CaseStudies'
import { FAQ } from '@/components/home/FAQ'
import { CTA } from '@/components/home/CTA'

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudies />
      <FAQ />
      <CTA />
    </>
  )
}