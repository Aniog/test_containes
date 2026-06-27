import { Outlet } from "react-router-dom"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { CartDrawer } from "@/components/ui/CartDrawer"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const PRODUCT_IMAGE_SEED = [
  { id: "vivid-aura-jewels", name: "Vivid Aura Jewels" },
  { id: "majestic-flora-nectar", name: "Majestic Flora Nectar" },
  { id: "golden-sphere-huggies", name: "Golden Sphere Huggies" },
  { id: "amber-lace-earrings", name: "Amber Lace Earrings" },
  { id: "royal-heirloom-set", name: "Royal Heirloom Set" },
]

function ImageConfigSeed() {
  return (
    <div aria-hidden="true" className="sr-only">
      {PRODUCT_IMAGE_SEED.map((product) => (
        <div key={product.id}>
          <span id={`${product.id}-title`}>{product.name}</span>
          <img
            data-strk-img-id={`velmora-${product.id}-card`}
            data-strk-img={`[${product.id}-title]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={PLACEHOLDER}
            alt=""
          />
          <img
            data-strk-img-id={`velmora-${product.id}-gallery`}
            data-strk-img={`[${product.id}-title]`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src={PLACEHOLDER}
            alt=""
          />
          <img
            data-strk-img-id={`velmora-${product.id}-cart`}
            data-strk-img={`[${product.id}-title]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="200"
            src={PLACEHOLDER}
            alt=""
          />
        </div>
      ))}
    </div>
  )
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <ImageConfigSeed />
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
