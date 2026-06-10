import React from 'react'

/**
 * Reusable component for content images using the Strikingly stock image system.
 * Uses data-strk-img attributes for dynamic image loading based on nearby text.
 */
const SectionImage = ({ 
  id, 
  query, 
  ratio = "4x3", 
  width = "600", 
  alt = "", 
  className = "" 
}) => {
  return (
    <img
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      className={`w-full h-full object-cover rounded-lg ${className}`}
    />
  )
}

export default SectionImage
