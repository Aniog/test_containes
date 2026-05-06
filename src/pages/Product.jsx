import Layout from '@/components/shared/Layout'
import ProductHero from '@/components/product/ProductHero'
import AICapabilities from '@/components/product/AICapabilities'
import ContactSection from '@/components/product/ContactSection'

export default function Product() {
  return (
    <Layout>
      <ProductHero />
      <AICapabilities />
      <ContactSection />
    </Layout>
  )
}
