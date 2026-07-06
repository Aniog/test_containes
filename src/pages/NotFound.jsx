import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-4 pt-16 text-center">
      <h1 className="font-serif text-6xl font-normal text-espresso md:text-8xl">404</h1>
      <p className="mt-4 font-sans text-lg text-taupe">This page could not be found.</p>
      <Button asChild className="mt-8">
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  )
}
