import React, { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

const StrkImage = ({
  imgId,
  query,
  ratio = "3x2",
  width = 800,
  alt = "",
  className,
  imgClassName,
  containerClassName,
  ratioClass = "aspect-[3/2]",
  ...rest
}) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [imgId, query])

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-warm-200",
        ratioClass,
        containerClassName
      )}
      {...rest}
    >
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={cn("w-full h-full object-cover", imgClassName)}
      />
    </div>
  )
}

export default StrkImage
