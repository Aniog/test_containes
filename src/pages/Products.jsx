import { ProductsHero } from "@/components/products/ProductsHero"
import { ProductsCatalog } from "@/components/products/ProductsCatalog"
import { ContactCta } from "@/components/home/ContactCta"

export default function Products() {
  return (
    <>
      <ProductsHero />
      <ProductsCatalog />
      <ContactCta />
    </>
  )
}
