import { useState, useRef } from 'react'
import { API } from '@strikingly/sdk'
import { SITE_ID, REQUEST_DOMAIN, S3_DOMAIN } from '../../../config.jsx'
import { Upload, X, FileText, Image, CheckCircle, Loader2, Plus } from 'lucide-react'

function buildPublicAssetUrl(s3Domain, storageKey) {
  const base = (s3Domain || '').trim().replace(/\/+$/, '')
  const path = (storageKey || '').trim().replace(/^\/+/, '')
  if (!base || !path) return ''
  return `${base}/${path}`
}

export default function MultiUploadField({ label, description, fieldType, allowedExtensions, mimeTypes, value = [], onChange, required }) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const inputRef = useRef(null)

  const accept = mimeTypes ? mimeTypes.join(',') : '*/*'
  const isImage = fieldType === 'image'

  const handleFilesChange = async (e) => {
    const files = Array.from(e.target.files || [])
    if (!files.length) return
    setError(null)
    setUploading(true)
    console.log(`[MultiUploadField] Uploading ${files.length} ${fieldType}(s)`)
    try {
      const results = await Promise.all(
        files.map(async (file) => {
          let result
          if (isImage) {
            result = await API.uploadImage(SITE_ID, REQUEST_DOMAIN, file)
          } else {
            result = await API.uploadFile(SITE_ID, REQUEST_DOMAIN, file)
          }
          console.log(`[MultiUploadField] Uploaded:`, result)
          return {
            filename: result?.filename || file.name,
            storageKey: result?.storageKey || '',
            storage: result?.storage || '',
            mimeType: result?.mimeType || file.type,
            ...(result?.size !== undefined && { size: result.size }),
            ...(result?.width !== undefined && { width: result.width }),
            ...(result?.height !== undefined && { height: result.height }),
          }
        })
      )
      onChange([...value, ...results])
    } catch (err) {
      console.error(`[MultiUploadField] Upload error:`, err)
      setError(err.message || '上传失败，请重试')
    } finally {
      setUploading(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  const handleRemove = (index) => {
    onChange(value.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {description && <p className="text-xs text-gray-500">{description}</p>}

      {value.length > 0 && (
        <div className={`grid gap-2 ${isImage ? 'grid-cols-3 sm:grid-cols-4' : 'grid-cols-1'}`}>
          {value.map((item, index) => {
            const previewUrl = item.storageKey ? buildPublicAssetUrl(S3_DOMAIN, item.storageKey) : null
            return (
              <div key={index} className={`relative group ${isImage ? '' : 'flex items-center gap-3 p-2.5 bg-gray-50 border border-gray-200 rounded-lg'}`}>
                {isImage ? (
                  <>
                    <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                      {previewUrl ? (
                        <img src={previewUrl} alt={item.filename} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Image className="w-6 h-6 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(index)}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <p className="text-xs text-gray-500 mt-1 truncate">{item.filename}</p>
                  </>
                ) : (
                  <>
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-md flex-shrink-0">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-700 truncate font-medium">{item.filename}</p>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-green-600">已上传</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemove(index)}
                      className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors flex-shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            )
          })}
        </div>
      )}

      <div
        onClick={() => !uploading && inputRef.current?.click()}
        className={`flex items-center justify-center gap-2 p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors
          ${uploading ? 'border-blue-300 bg-blue-50 cursor-not-allowed' : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50'}`}
      >
        {uploading ? (
          <>
            <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
            <span className="text-sm text-blue-600 font-medium">上传中...</span>
          </>
        ) : (
          <>
            <Plus className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-600">
              {value.length > 0 ? `继续添加${isImage ? '图片' : '文件'}` : `上传${isImage ? '图片' : '文件'}（可多选）`}
            </span>
          </>
        )}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          onChange={handleFilesChange}
          className="hidden"
          disabled={uploading}
        />
      </div>

      {allowedExtensions && (
        <p className="text-xs text-gray-400">支持格式：{allowedExtensions.join(', ')}</p>
      )}
      {error && <p className="text-xs text-red-500 flex items-center gap-1"><X className="w-3 h-3" />{error}</p>}
    </div>
  )
}
