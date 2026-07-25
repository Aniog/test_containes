export function resolveConfiguredImage(config, imageId, exclusions = []) {
  const entry = config?.[imageId]
  const results = Array.isArray(entry?.results) ? entry.results : []
  const pickedUrl = typeof entry?.picked === 'string'
    ? results.find((result) => result?.id === entry.picked)?.url
    : entry?.picked?.url
  const resultUrls = results.map((result) => result?.url).filter(Boolean)
  const candidates = [pickedUrl, ...resultUrls].filter(Boolean)
  return candidates.find((url) => !exclusions.includes(url)) || candidates[0] || ''
}
