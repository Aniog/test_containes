import { IMAGE_PLACEHOLDER } from '@/data/siteContent'

const ImageCard = ({ image, title, description, aspect = '4x3', width = '800' }) => {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <img
        src={IMAGE_PLACEHOLDER}
        alt={title}
        className="h-60 w-full object-cover"
        data-strk-img-id={image.imgId}
        data-strk-img={`[${image.descId || image.summaryId}] [${image.titleId}]`}
        data-strk-img-ratio={aspect}
        data-strk-img-width={width}
      />
      <div className="p-6 text-slate-950">
        <h3 id={image.titleId} className="text-xl font-semibold tracking-tight text-slate-950">
          {title}
        </h3>
        <p
          id={image.descId || image.summaryId}
          className="mt-3 text-sm leading-7 text-slate-600"
        >
          {description}
        </p>
      </div>
    </article>
  )
}

export default ImageCard
