import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

const ImageCard = ({
  item,
  sectionTitleId,
  eyebrow,
  linkTo,
  linkLabel,
  children,
  imageRatio = '4x3',
}) => {
  const cardRef = useRef(null)
  const description = item.description || item.summary || item.excerpt

  useEffect(() => {
    if (!cardRef.current) {
      return undefined
    }

    return ImageHelper.loadImages(strkImgConfig, cardRef.current)
  }, [])

  return (
    <article ref={cardRef} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <img
        alt={item.title}
        className="h-56 w-full object-cover"
        data-strk-img-id={item.imageId}
        data-strk-img={`[${item.descId}] [${item.titleId}] [${sectionTitleId}]`}
        data-strk-img-ratio={imageRatio}
        data-strk-img-width="900"
        src={item.imageUrl}
      />
      <div className="p-6 md:p-8">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            {eyebrow}
          </p>
        ) : null}
        <h3 id={item.titleId} className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          {item.title}
        </h3>
        <p id={item.descId} className="mt-4 text-base leading-7 text-slate-600">
          {description}
        </p>
        {children ? <div className="mt-5">{children}</div> : null}
        {linkTo ? (
          <div className="mt-6">
            <Link to={linkTo} className="text-sm font-semibold text-sky-700 transition hover:text-sky-800">
              {linkLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default ImageCard
