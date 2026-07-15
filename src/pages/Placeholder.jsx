import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

export default function Placeholder({ eyebrow = "Coming Soon", title = "This page is being written." }) {
  return (
    <div className="bg-canvas pt-32 md:pt-40">
      <div className="container-content flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1
          className="display-lg mt-3 max-w-xl text-ink text-balance"
          style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
        >
          {title}
        </h1>
        <p className="mt-5 max-w-md text-sm font-light text-inkSoft md:text-base">
          We're polishing this page. In the meantime, the collection is open.
        </p>
        <Link to="/shop" className="btn-primary mt-10">
          <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
