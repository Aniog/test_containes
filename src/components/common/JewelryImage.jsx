import strkImgConfig from '@/strk-img-config.json'

const getConfiguredImageUrl = (imgId) => {
  const entry = strkImgConfig[imgId]
  if (!entry?.results?.length) return undefined

  if (entry.picked) {
    return entry.results.find((result) => result.id === entry.picked)?.url || entry.results[0].url
  }

  return entry.results[0].url
}

const JewelryImage = ({
  imgId,
  query,
  ratio = '4x3',
  width = '800',
  alt,
  className = '',
}) => (
  <img
    alt={alt}
    className={className}
    data-strk-img-id={imgId}
    data-strk-img={query}
    data-strk-img-ratio={ratio}
    data-strk-img-width={width}
    src={getConfiguredImageUrl(imgId)}
  />
)

export default JewelryImage
