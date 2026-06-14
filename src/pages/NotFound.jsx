import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <main className="bg-ink min-h-[80vh] flex items-center">
      <div className="container-x py-24 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold text-text">
          Off the line.
        </h1>
        <p className="mt-4 text-text-muted max-w-md mx-auto">
          The page you were looking for has been re-routed. Let's get you back
          to the machines.
        </p>
        <div className="mt-8">
          <Button asChild={false} size="lg" className="group">
            <Link to="/" className="flex items-center gap-2">
              Back to home
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
