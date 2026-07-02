import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <h1 className="font-serif text-6xl font-medium text-ink md:text-8xl">404</h1>
      <p className="mt-4 font-serif text-2xl text-ink">Page not found</p>
      <p className="mt-2 max-w-md text-muted">
        The page you’re looking for may have moved or no longer exists.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Return Home</Link>
      </Button>
    </main>
  )
}
