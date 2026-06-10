import React from 'react'

/**
 * Reusable component for background images using the Strikingly stock image system.
 */
const BackgroundImage = ({ 
  id, 
  query, 
  ratio = "16x9", 
  width = "1600", 
  className = "" 
}) => {
  return (
    <div
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${className}`}
      aria-hidden="true"
    />
  )
}

export default BackgroundImage
