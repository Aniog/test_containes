import Hero from '../components/home/Hero.jsx'
import Services from '../components/home/Services.jsx'
import Process from '../components/home/Process.jsx'
import Products from '../components/home/Products.jsx'
import Problems from '../components/home/Problems.jsx'
import Trust from '../components/home/Trust.jsx'
import CaseStudiesSection from '../components/home/CaseStudiesSection.jsx'
import FAQ from '../components/home/FAQ.jsx'
import InquiryForm from '../components/InquiryForm.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudiesSection limit={3} />
      <FAQ />
      <InquiryForm />
    </>
  )
}
