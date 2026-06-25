import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32 text-center">
      <p className="font-serif text-7xl text-gold md:text-9xl">404</p>
      <h1 className="mt-4 font-serif text-3xl text-ink md:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-sm text-sm text-taupe">
        The page you are looking for has moved or no longer exists.
      </p>
      <Button as={Link} to="/" variant="solid" className="mt-8">
        Return Home
      </Button>
    </div>
  )
}
