import React, { useRef, useState } from 'react'
import { ImagePlus, X, AlertCircle } from 'lucide-react'
import { cn } from '../../lib/utils'

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
const ALLOWED_EXT_LABEL = 'JPG, PNG, GIF, WEBP'

function validateFile(file) {
  if (!ALLOWED_TYPES.includes(file.type)) return `"${file.name}" is not a supported image type.`
  if (file.size > MAX_FILE_SIZE) return `"${file.name}" exceeds the 5 MB size limit.`
  return null
}

export default function ImageUploader({ images, onChange }) {
  const inputRef = useRef(null)
  const [dragOver, setDragOver] = useState(false)
  const [fileError, setFileError] = useState('')

  const addFiles = (files) => {
    setFileError('')
    const incoming = Array.from(files)
    const errors = []
    const valid = []

    incoming.forEach(file => {
      const err = validateFile(file)
      if (err) { errors.push(err); return }
      valid.push({
        id: `${Date.now()}-${Math.random()}`,
        file,
        previewUrl: URL.createObjectURL(file),
        filename: file.name,
        size: file.size,
        mimeType: file.type,
      })
    })

    if (errors.length) setFileError(errors[0])
    if (valid.length) onChange([...images, ...valid])
  }

  const removeImage = (id) => {
    const img = images.find(i => i.id === id)
    if (img?.previewUrl) URL.revokeObjectURL(img.previewUrl)
    onChange(images.filter(i => i.id !== id))
  }

  const onInputChange = (e) => {
    if (e.target.files?.length) addFiles(e.target.files)
    e.target.value = ''
  }

  const onDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files)
  }

  return (
    <div className="space-y-3">
      <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider">
        Game Screenshots / Images
        <span className="ml-1.5 text-gray-600 font-normal normal-case">
          (optional · up to 5 MB each · {ALLOWED_EXT_LABEL})
        </span>
      </label>

      {/* Drop zone */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={e => e.key === 'Enter' && inputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={cn(
          'flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-xl py-6 px-4 cursor-pointer transition-all duration-200 select-none',
          dragOver
            ? 'border-indigo-400 bg-indigo-500/10'
            : 'border-gray-700 hover:border-indigo-500/60 hover:bg-indigo-500/5'
        )}
      >
        <ImagePlus className={cn('w-7 h-7 transition-colors', dragOver ? 'text-indigo-400' : 'text-gray-500')} />
        <p className="text-sm text-gray-400">
          <span className="text-indigo-400 font-medium">Click to upload</span> or drag &amp; drop images
        </p>
        <p className="text-xs text-gray-600">Multiple files allowed</p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ALLOWED_TYPES.join(',')}
        multiple
        className="hidden"
        onChange={onInputChange}
      />

      {/* Error */}
      {fileError && (
        <p className="flex items-center gap-1.5 text-red-400 text-xs">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          {fileError}
        </p>
      )}

      {/* Preview grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {images.map(img => (
            <div key={img.id} className="relative group aspect-square rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
              <img
                src={img.previewUrl}
                alt={img.filename}
                className="w-full h-full object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  type="button"
                  onClick={e => { e.stopPropagation(); removeImage(img.id) }}
                  className="w-7 h-7 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                  title="Remove image"
                >
                  <X className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
              {/* Filename tooltip */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-[10px] truncate">{img.filename}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <p className="text-gray-600 text-xs">{images.length} image{images.length !== 1 ? 's' : ''} selected</p>
      )}
    </div>
  )
}
