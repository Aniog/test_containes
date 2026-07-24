import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-background">
      <p className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
        404
      </p>
      <h1 className="font-serif text-4xl md:text-6xl font-light text-primary mb-6">
        Page Not Found
      </h1>
      <p className="text-muted-foreground max-w-md mb-10">
        The page you're looking for may have moved or no longer exists. Explore
        our collection instead.
      </p>
      <Button asChild>
        <Link to="/shop">Continue Shopping</Link>
      </Button>
    </div>
  )
}
