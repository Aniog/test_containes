import React, { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

// /collections is a curated entry — it simply forwards to the shop
// with the matching category pre-selected.
export default function Collections() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const category = searchParams.get("category")

  useEffect(() => {
    const target = category ? `/shop?category=${category}` : "/shop"
    navigate(target, { replace: true })
  }, [navigate, category])

  return null
}
